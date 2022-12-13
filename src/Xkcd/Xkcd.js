import React from 'react';


export default class Xkcd extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bd: {}
    }
  }
  componentDidMount(){
    fetch('https://cors.jonathanmartel.info/?url=https://xkcd.com/info.0.json')
    .then((response) => {
      // console.log(response);
      if(response.ok) return response.json();
      else throw Error();
    })
    .then((data) => {
      // console.log(data);
      this.setState({ bd: data })
    })
    .catch((err) => {
      console.log(err.message);
    })


    fetch('https://cors.jonathanmartel.info/?url=https://xkcd.com/6/info.0.json')
    .then((response) => {
      // console.log(response);
      if(response.ok) return response.json();
      else throw Error();
    })
    .then((data) => {
      // console.log(data);
      this.setState({ bdAvecID: data })
    })
    .catch((err) => {
      console.log(err.message);
    })


  }

  changeID= (e) =>{
    this.setState({ id: e.target.value  });
    // console.log(this.state.id);
  }

  afficheBD = (e) =>{
    e.preventDefault();
    //place pour faire la validation
    if(this.state.id !== ''){
      console.log(this.state.bd.num);
      this.state.bd.num = this.state.id;
      // this.props.handleLogin(this.state.courriel);
    }else{
      console.log(this.state.bd.num);
      this.state.bd.num = this.state.bd.num;
    }
  }
  
  render(){

    let bd = this.state.bd;
    // console.log(bd);
    return(
      <section>
         <form>
            <input onBlur={this.changeID} type="text"></input>
            <button onClick={this.afficheBD}>Afficher BD</button>
          </form>
          <div>
            <h2>{bd.title}</h2>
            <h3>{bd.year}/{bd.month}/{bd.day}</h3>
            <img src={bd.img} alt="Bande dessiné"></img>
            <p>{bd.alt}</p>
          </div>
      </section>
    );
  }

}
