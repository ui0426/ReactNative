import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Empty() {

    // 외부 이미지 사용하기
    // const source = {uri : 'https://via.placeholder.com/150'};

    return (
        <View style={styles.block}>
            <Image
                source={require('../assets/images/young_and_happy.png')}
                // source={source}
                style={styles.image}
                resizeMode='cover' //cover, contain, stretch, repeat, center
                />
            <Text style={styles.description}>할일이 없습니다.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block : {
        // flex : 1 은 자신이 차지할 수 있는 영역을 모두 차지하도록 함.
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    description : {
        fontSize : 24,
        color : '#9e9e9e',
    },
    image : {
        width : 240,
        height : 179,
        marginBottom : 16,
    },
    description : {
        fontSize : 24,
        color : '#9e9e9e',
    },
});

export default Empty;