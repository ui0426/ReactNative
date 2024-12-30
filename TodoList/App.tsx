// 책 110p ~ 

import React, {useState} from 'react';
// KeyboardAvoidingView - 키보드가 화면을 가리지 않게 해줌
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
//사용자 정의 컴포넌트 사용
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//디버그 확인 주소 localhost:8081/debugger—ui


function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id : 1, text : '작업환경 설정', done : true},
    {id : 2, text : '리액트 네이티브 기초 공부', done : false},
    {id : 3, text : '투두리스트 만들어보기', done : false},
  ]);

  //체크리스트 추가
  const onInsert = text => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id : nextId,
      text,
      done : false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };
 

  return (
    // react-native-safe-area-context를 적용할 때 SafeAreaProvider 컴포넌트를 기존 내용 모두 감싸줘야한다.
    // SafeAreaView는 SafeAreaProvider 내부에 위치해야한다.
    <SafeAreaProvider>
      {/* edge Props는 SafeArea를 적용할 모서리를 배열 형태로 전달. edges 배열에는 bottom, top, left, right 값들을 넣을 수 있다. (left, right는 가로모드에서 사용) */}
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/* ios는 behavior 값을 설정해줘야 키보드가 화면을 가리지 않음 */}
        {/* behavior 값 padding - 키보드열렸을 때 뷰의 하단에 패딩 설정 height - 뷰의 높이 자체를 변경 position - 뷰의 위치 설정 */}
        <KeyboardAvoidingView
          behavior={Platform.select({ios : 'padding'})}
          style={styles.avoid}>
        {/* date를 Props으로 설정 */}
        <DateHead date={today}/>
        {todos.length === 0 ? <Empty/> : <TodoList todos={todos} onToggle={onToggle}/>}
        <AddTodo onInsert={onInsert}/>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block : {
    flex : 1,
    backgroundColor : 'white',
  },
  avoid : {
    flex : 1,
  },
});

export default App;