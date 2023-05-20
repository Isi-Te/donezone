import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function AddCategory(props){
    const [enteredCategoryText, setEnteredCategoryText] = useState('');

    function categoryInputHandler(enteredText) {
        setEnteredCategoryText(enteredText);
      };

    function addCategoryHandler(){
        props.onAddCategory(enteredCategoryText);
        setEnteredCategoryText('');
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/create-category.png')} style={styles.image}/>
            <TextInput placeholder='Add a new category' style={styles.textInput} onChangeText={categoryInputHandler} value={enteredCategoryText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Cancel' color='#F3EFEF'onPress={props.onCancel}/>
                </View>
                <View>
                    <Button title='Add Category' color='#E6287D' onPress={addCategoryHandler}/>
                </View>
            </View>
        </View>
        </Modal>
    )
}

export default AddCategory;

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