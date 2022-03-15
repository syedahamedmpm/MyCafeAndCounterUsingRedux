import React from 'react';
import './App.css';
import OrderForm from './components/order-form';
import OrderList from './components/order-list';
import OrderCounter from './components/order-counter';
import Counter from './components/counter';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className='App'>
      <OrderForm/>
      <hr/>
      <OrderCounter/>
      <OrderList/>
      <Counter/>
      </div>
      </Provider>
      )
  }
  
}

export default App;
