import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// 백터 아이콘 사용하기    yarn add react-native-vector-icons p.187
//  android/app/build.gradle에 apply from : file("../../node_modules/react-native-vector-icons/fonts.gradle") 추가
import Icon from 'react-native-vector-icons/Materialicons';

function TodoItem({id, text, done, onToggle}) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                <View style={[styles.circle, done && styles.filled]}>
                    {done && (
                        <Image
                            source={require('../assets/icons/check_white/check_white.png')}
                        />
                    )}
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
            {done ? (
                <Icon name="delete" size={32} color="red"/>
            ) : (
                <View style={styles.removePlaceholder}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        padding : 16,
        alignItems : 'center',
    },
    circle : {
        width : 24,
        height : 24,
        borderRadius : 12,
        borderColor : '#26a69a',
        borderWidth : 1,
        marginRight : 16,
    },
    filled : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#26a69a',
    },
    text : {
        flex : 1,
        fontSize : 16,
        color : '#212121',
    },
    lineThrough : {
        color : '#9e9e9e',
        textDecorationLine : 'line-through',
    },
    removePlaceholder : {
        width : 32,
        height : 32,
    },
});

export default TodoItem;