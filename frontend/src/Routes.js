import React from 'react';
import {Routes, Route} from 'react-router-dom'

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';



export default (
  <Routes>
    <Route path='/login' element={<LoginScreen />} />
    <Route path='/product/:id' element={<ProductScreen />} />
    <Route path='cart' element={<CartScreen />} >
      <Route path=':id' element={<CartScreen />} />
    </Route>
    <Route exact path='/' element={<HomeScreen />} />
  </Routes>
)