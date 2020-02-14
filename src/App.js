import React,{Component} from 'react';
import './App.css';
import GuessWords from './component/GuessWord/GuessWord'
import Congrats from './component/Congrats/Congrats'

class App extends Component{
  render(){

    const prop = {
      guessedWords:[{
        guessedWord:'train',
        letterMatchCount:3
    }],
      success:true,
      secretWord:"tttt"}
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessWords {...prop}/>
      </div>
    )
  }
}

export default App;
