import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, FlatList } from "react-native";

import AddTask from './AddTask';
import TaskItem from './TaskItem';

function CategoryItem(props){
  const[taskModalVisible, setTaskModalVisible]=useState(false);
  const[tasks, setTasks]=useState([]);

  function startAddTaskHandler(){
    setTaskModalVisible(true);
  }

  function endAddTaskHandler(){
    setTaskModalVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTasks(currentTasks => [...currentTasks, {text: enteredTaskText, id:Math.random().toString()}]);
    endAddTaskHandler();
  };

  function deleteTaskHandler(id){
    setTasks(currentTasks => {
      return currentTasks.filter((task)=>task.id !== id);
    });
  }

    return (
        <View style={styles.categoryItem}>
              <View>
                <View style={styles.categoryHeadline}>
                    <Text style={styles.categoryText}>{props.text}</Text>
                    <View style={styles.iconBox}>
                      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed})=>pressed && styles.pressedItem}>
                        <Image source={require('../assets/images/delete-icon.png')} style={styles.deleteImage}/>
                      </Pressable>
                      <Pressable onPress={startAddTaskHandler}>
                        <Image source={require('../assets/images/add-magenta.png')} style={styles.magentaImage}/>
                      </Pressable>
                    </View>
                    <AddTask onAddTask={addTaskHandler} visible={taskModalVisible} onSubmit={startAddTaskHandler} onCancel={endAddTaskHandler}/>
                </View>
                <View>
                    <FlatList data={tasks} renderItem={(itemData)=>{
                    return <TaskItem text={itemData.item.text} onDeleteItem={deleteTaskHandler} id={itemData.item.id} onAddTask={addTaskHandler}/>
                    }}
                    keyExtractor={(item, index)=>{
                    return item.id;
                    }}
                  alwaysBounceVertical={false}/>
                </View>
                </View>  
        </View>
  
    )
};

export default CategoryItem;

const styles = StyleSheet.create({
    categoryItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#F5F5F5',
      }, 
      pressedItem:{
        opacity:0.5,
      },
      categoryText:{
        color:'#E6287D',
        textTransform:'uppercase',
        fontWeight:'bold'
      },
      deleteImage:{
        height: 25,
        width: 25,
        marginHorizontal: 8
      },
      magentaImage:{
        height: 25,
        width: 25
      },
      categoryHeadline:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      iconBox:{
        flexDirection: 'row'
      }
});