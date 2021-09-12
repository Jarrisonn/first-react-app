import React, {Component} from 'react';
import MyComponent from './components/MyComponent';
import './App.css';
import Counter from './components/Counter'

class App extends Component{
  constructor(props){
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this)


  }

  onClickBtn(){
    console.log('button has been clicked!');
  }

  render(){
    return(
      <div>s
        <MyComponent title="Reactive Application" onButtonClicked={this.onClickBtn}/>
        <Counter/>
      </div>
    );
  }
}

export default App;
