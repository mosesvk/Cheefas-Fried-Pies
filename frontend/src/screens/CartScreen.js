import React, {useEffect} from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'

import { addToCart } from '../store/actions/cartActions'

const CartScreen = () => {
  const dispatch = useDispatch();
  const {id} = useParams(); 
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  return (
    <div>
      <h1>Cart Screen</h1>
    </div>
  )
}

export default CartScreen
