import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle}) {
    return (
        <FlatList
            //구분선 추가
            ItemSeparatorComponent={() => <View styles={styles.separator}/>}
            style={styles.list}
            data={todos}
            renderItem={({item}) => ( //data에 설정한 값의 각 원소들 데이터를 가르키는 뷰를 보여줄 수 있다.
                <TodoItem
                    id={item.id}
                    text={item.text}
                    done={item.done}
                    onToggle={onToggle}
                />
            )}
            //각 항목의 고유 값을 추출해주는 함수   리스트 랜더링할 때 고유의 값 필요(없으면 index 사용하지만 비효율적) 고유 값은 문자열
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    list : {
        flex : 1,
    },
    separator : {
        backgroundColor : '#e0e0e0',
        height : 1,
    }
});

export default TodoList;