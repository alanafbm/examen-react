import './App.css';
import React from 'react';
import Xkcd from '../Xkcd/Xkcd';
import Entete from '../Entete/Entete';


export default class App extends React.Component{
  
  render(){
    return(
      <section>
        <Entete></Entete>
        <Xkcd></Xkcd>
      </section>
    );
  }

}
