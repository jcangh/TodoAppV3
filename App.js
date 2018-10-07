import React from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';

class App extends React.Component{

  
  state = {
    text: "",
    todo: []
  }

  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr,text:""});
  }

  deleteTodo = (t) =>{
    let arr = this.state.todo;
    let pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo:arr});
  }

  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text 
          style={styles.todo}
          onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="Add Todo."
            color="#0288D1"
            onPress={this.addTodo}
          />
          <View style={{marginTop:100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle:{
    backgroundColor: "#0288D1",
    flex:1
  },
  viewStyle:{
    marginTop: 30,
    alignItems:'center',
    justifyContent:'center',
    margin: 10
  },
  inputStyle:{
    height: 30,
    borderColor: "white",
    borderWidth: 1,
    width: "90%"
  },
  header:{
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  todo:{
    fontSize: 24,
    color: "white"
  }
}

export default App;