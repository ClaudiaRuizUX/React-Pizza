import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pizzas: [],
      pizzaForm:{
        topping: "",
        size: "",
        vegetarian: true
      }
    }
  }

  getPizzas() {
    return fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => data);
  }

  componentDiMount(){
    this.getPizzas().then(data => this.setState({
      pizzas: data
    }))
  }

  render() {
    const passPizzaDetail = (pizza) => {
      this.setState({
        pizzaForm: pizza
      })
  }
  
  const onUpdateForm = (e) => {
    if(e.target.name === "Vegetarian"){
      if(e.target.value === "Vegetarian") {
        this.setState({
          pizzaForm: {
            ...this.state.pizzaForm,
            [e.target.name]: true
          }
        })
      }else{
        this.setState({
          pizzaForm: {
            ...this.state.pizzaForm,
            [e.target.name]: false            
          }
        })
      }
    }else{
      this.setState({
        pizzaForm: {
          ...this.state.pizzaForm,
          [e.target.name]: e.target.value
       }
    })
  }
}

const onSubmitForm = () => {
  fetch('http://localhost:3000/pizzas/${this.state.pizzaForm.id}', {
    method: 'PUT',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state.pizzaForm)
  }).then(res => {
    this.getPizzas().then(data => this.setState({
      pizzas:data
    }))
  })
}
  
  return (
    <Fragment>
      <Header />
      <PizzaFrom pizzaForm={this.state.pizzaForm} onUpdateForm={onUpdateForm} onSubmitForm={onSubmitForm}/>
      <PizzaList pizzas={this.state.pizzas} passPizzaDetail={passPizzaDetail}/>
    </Fragment>
  );

  }
}

export default App;

