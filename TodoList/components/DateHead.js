import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formatted = `${year}년 ${month}월 ${day}일`;

    //useSafeAreaInsets Hook 함수로 StatusBar 높이를 구할 수 있다. (top, bottom, left, right 반환 값 가짐)
    const {top} = useSafeAreaInsets();

    // 1. ios는 StatusBar 컴포넌트를 통해 배경색을 지정못함. 대신 SafeAreaView의 상단 여백을 없애고 그 영역을 다른 View로 채워야 한다.
    // 2. react-native-safe-area-context 서드 파티 라이브러리 사용 (서프 파티 라이브러리 => 공식이 아닌 커뮤니티에 오픈소스로 공개된 라이브러리)
    // 3. 명령어 yarn add react-native-safe-area-context       yarn ios    cd ios  pod install

    return (
        <>
        <View style={[styles.statusBarPlaceholder, {height: top}]}/>
        {/* 상태바에 backgroundColor Props를 설정하여 색깔 지정 / barStyle : 상태바 정보 색상 변경 */}
        <StatusBar backgroundColor="#25a69a" barStyle="light-content"/>
            <View style={styles.block}>
                <Text style={styles.dateText}>{formatted}</Text>
            </View>
        </>
    );
}
// Material Color (https://material.io/resources/color) 색깔 참조할 때 유용
const styles = StyleSheet.create({
    statusBarPlaceholder : {
        backgroundColor : '#26a69a',
    },
    block : {
        padding : 16,
        backgroundColor : '#26a69a',
    },
    dateText : {
        fontSize : 24,
        color : 'white',
    },
});

export default DateHead;