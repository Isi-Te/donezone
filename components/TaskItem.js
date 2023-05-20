import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function TaskItem(props){

    return (
        <View style={styles.taskItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed})=>pressed && styles.pressedItem}>
                <View style={styles.taskHeadline}>
                    <Image source={require('../assets/images/checkmark-black.png')} style={styles.checkmarkImage}/>
                    <Text style={styles.taskText}>{props.text}</Text>
                </View>
            </Pressable>    
        </View>
  
    )
};

export default TaskItem;

const styles = StyleSheet.create({
    taskItem: {
        marginVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        backgroundColor: '#F5F5F5',
      }, 
      pressedItem:{
        opacity:0.5,
      },
      taskText:{
        color:'#000',
        fontWeight:'500',
        marginLeft:16
      },
      checkmarkImage:{
        height: 20,
        width: 20,
      },
      taskHeadline:{
        flexDirection: 'row',
      }
});