import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, FlatList } from 'react-native';

import AddCategory from './components/AddCategory';
import CategoryItem from './components/CategoryItem';


export default function App() {
  const[modalVisible, setModalVisible]=useState(false);
  const[categories, setCategories]=useState([]);

  function startAddCategoryHandler(){
    setModalVisible(true);
  }

  function endAddCategoryHandler(){
    setModalVisible(false);
  }

  function addCategoryHandler(enteredCategoryText) {
    setCategories(currentCategories => [...currentCategories, {text: enteredCategoryText, id:Math.random().toString()}]);
    endAddCategoryHandler();
  };

  function deleteCategoryHandler(id){
    setCategories(currentCategories => {
      return currentCategories.filter((category)=>category.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <View style={styles.listContainer}>
        <FlatList data={categories} renderItem={(itemData)=>{
        return <CategoryItem text={itemData.item.text} onDeleteItem={deleteCategoryHandler} id={itemData.item.id}/>
        }}
         keyExtractor={(item, index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}/>
      </View>
      <Pressable onPress={startAddCategoryHandler}>
        <Image source={require('./assets/images/add-icon.png')} style={styles.image} />
      </Pressable>
      <AddCategory onAddCategory={addCategoryHandler} visible={modalVisible} onCancel={endAddCategoryHandler}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#534D52',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image:{
    height: 80,
    width:80,
    margin:20,
  },
  listContainer:{
    flex:4, 
    justifyContent:'center',
    paddingTop:80,
    width: '100%'
  },

});
