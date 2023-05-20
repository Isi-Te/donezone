import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function AddTask(props){
    const [enteredTaskText, setEnteredTaskText] = useState('');

    function taskInputHandler(enteredText) {
        setEnteredTaskText(enteredText);
      };

    function addTaskHandler(){
        props.onAddTask(enteredTaskText);
        setEnteredTaskText('');
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/add-task.png')} style={styles.image}/>
            <TextInput placeholder='Add a new Task' style={styles.textInput} onChangeText={taskInputHandler} value={enteredTaskText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Cancel' color='#F3EFEF'onPress={props.onCancel}/>
                </View>
                <View>
                    <Button title='Add Task' color='#E6287D' onPress={addTaskHandler}/>
                </View>
            </View>
        </View>
        </Modal>
    )
}

export default AddTask;

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: '#F3EFEF',
        backgroundColor: '#F3EFEF',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color:'#120438'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#534D52'
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      }, 
    button:{
        width: '30%',
        marginHorizontal:8
    },
    image:{
        width: 100,
        height:100,
        margin: 20
    }
})