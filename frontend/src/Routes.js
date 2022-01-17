import React from 'react';
import {Routes, Route} from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

export default (
  <Routes>
    <Route exact path='/' element={<HomeScreen />} />
    <Route path='/products/:id' element={<ProductScreen />} />
  </Routes>
)