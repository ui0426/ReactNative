import React, {useState} from 'react';
import {
    View, 
    StyleSheet, 
    TextInput, 
    Image,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
    Keyboard
} from 'react-native';

//버튼에 효과 주기
//  TouchableHighlight : 터치했을 때 배경색 변경
//  TouchableNativeFeedback : 터치했을 때 안드로이드에서 물결 효과 (ios에서는 오류)
//  TouchableOpacity : 터치했을 때 투명도 조정
//  TouchableWithoutFeedback : 터치했을 때 아무 효과도 적용하지 않는다.


// 객체의 불변성
// 리액트에서 객체와 배열 타입의 상태를 다룰 때는 불변성을 지켜야 한다. (객체 또는 배열을 직접 수정하기않음)
//  이유 : 랜더링 성능 최적화 방식 때문. 리액트는 부모컴포넌트가 리랜더링되면 자식컴포넌트도 리랜더링됨.
//          컴포넌트의 변화가 필요한지 필요하지 않은지 Props의 변화를 통해 알 수 있는데 그걸 비교하는 과정에서 불변성이 중요해진다.
// 새로운 항목추가하기
// 방법1 - spread 연산자를 이용하여 새로운 객체를 할당하여 사용한다. 방법2 - concat 사용
// 항목 제거하기 - filter 사용
// 항목 수정하기 - map 사용

function AddTodo({onInsert}) {
    //text를 관리하기 위한 useState 객체 생성
    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss(); //현재 나타난 키보드를 닫는다.
    };

    const button = (
        <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/add_white/add_white.png')}/>
        </View>
    );

    return (
        <View style={styles.block}>
            {/* TextInput 사용자 키보드 입력 받기 */}
            <TextInput
                placeholder='할일을 입력하세요.'
                style={styles.input}
                value={text}
                onChangeText={setText} // 사용자가 내용을 수정할 때마다 호출되는 콜백 함수
                onSubmitEditing={onPress} // enter를 쳤을 때 호출되는 함수 설정
                returnKeyType='done'
            />
            {Platform.select({
                ios : (
                    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                        {button}
                    </TouchableOpacity>
                ),
                android : (
                //원같은 모양일 때 물결 효과가 영역을 벗어나서까지 나타나기 때문에 View로 감싸주고 스타일 값을 지정해주면 해당 영역에만 효과가 적용됨
                <View style={styles.circleWrapper}>
                    <TouchableNativeFeedback onPress={onPress}>
                        {button}
                    </TouchableNativeFeedback>
                </View>
                ),
            })}
        </View>
    );
}


const styles = StyleSheet.create({
    block : {
        backgroundColor : 'white',
        height : 64,
        paddingHorizontal : 16, // 좌우측 패딩값 설정
        borderColor : '#bdbdbd',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        alignItems : 'center',
        flexDirection : 'row',
    },
    input : {
        flex : 1,
        fontSize : 16,
        paddingVertical : 8, // 위아래 패딩값 설정, input의 패딩 값은 터치 영역을 늘리기 위해 줬다.
    },
    buttonStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 48,
        height : 48,
        backgroundColor : '#26a69a',
        borderRadius : 24,
    },
    circleWrapper : {
        overflow : 'hidden',
        borderRadius : 24,
    },
});

export default AddTodo;