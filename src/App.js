import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//Importing component files that I created for this sprint, also axios and yup
import Home from './components/Home';
import Pizza from './components/Pizza'

import axios from 'axios';
import * as yup from 'yup';

const url ="https://reqres.in/api/";

// State that will drive the form values 

const initialformvalues = {
  name: '',
  size: '',

  toppings:{
    onions: 'false',
    chicken: 'false',
   cheese: 'false',
   hawaiian: 'false',
  },
  Instructions: '',
  quantity: '',
};

//
const initialFormErrors = {
  name: '',
  sizes: '',
  Instructions: '',
  quantity: '',
 
};

// Defining my Schema, using yup library

const formGood = yup.object().shape({
  name: yup
  .string()
  .min(3, 'Name must have at least 3 characters')
  .required('name is required to start order'),
 
  // Toppings
 onions: yup.string(),
 chicken: yup.string(),
 cheese: yup.string(),
 hawaiian: yup.string(),
 
 //Instructions
 Instructions: yup
   .string()
   .required('50 characters or more if needed'),

});

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formvalues, setformvalues] = useState(initialformvalues);
  
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  
  
  //Dealing with axios get and calling for post request:
  const changeValues = (evt) => {
  
    setformvalues({
      ...formvalues,
      [evt.target.name]: evt.target.value,
    });
  };
  
  
  const postOrders = () => {
    //crafting post request
    axios.post(url, formvalues)
      .then((res) => {
        setOrders([res.data, ...orders]);
        console.log(orders, 'Order UPPPPPPP!!!!')
      })
  
      .catch((err) => {
        console.log(err);
      });
  };
 
// Submit button 
const submitHandler = (evt) => {
  evt.preventDefault();

  const newOrder = {
    name: formvalues.name,
    size: formvalues.size,
    Instructions: formvalues.instructions,
    toppings: Object.keys(formvalues.toppings).filter(
      topping => formvalues.toppings[topping] === true
      //Post new order to API
    ),
  };
  postOrders(newOrder);
  setformvalues(initialformvalues)
};

const onInputChange = (evt) => {
  const orders = evt.target.name;
  const value = evt.target.value;

  yup
    .reach(formGood, orders)
    .validate(value)
    // if the validation is successful, I can clear the error message
    .then((valid) => {
      setFormErrors({
        ...formErrors,
        [orders]: '',
      });
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [orders]: err.errors[0]
      });
    });
  setformvalues({
    ...formvalues,
    [orders]: value,
  });
};

//Dealing with checkbox
const Checked = (evt) => {
  const { name } = evt.target
  const isChecked = evt.target.checked;
  setformvalues({
    ...formvalues,
    toppings: {
      ...formvalues.toppings,
      [name]: isChecked,
    }
  });
};

//Router Information/
return (
  // Wrapping in Router & adding links
  // placing "exact" on Route to make it go to the specific path
  <Router>
    <nav className='navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/Pizza'>Pizza</Link>
      </li>
    </nav>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pizza'>
          <Pizza
            formvalues={formvalues}
            onInputChange={onInputChange}
            formData={FormData}
            submitHandler={submitHandler}
            changeValues={changeValues}
            Checked={Checked}
          />
        </Route>
      </Switch>
    </div>
  </Router>
);
};
export default App;


