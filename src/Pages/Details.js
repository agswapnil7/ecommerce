import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'

function Details() {
  const cartString = localStorage.getItem('cart')
  let cartArray=[]
  if (cartString){
    cartArray=JSON.parse(cartString)
  }
  let {id} = useParams()
  let displayProduct=ProductData.find((q)=>q.id==id)
  function savetocart(cart){
    let isContent = cartArray.find(item=>item.id==cart.id)

    // console.log(isContent,'hi')
    if (!isContent){
      cartArray.push(cart)
    }
    // cartArray.push(cart)
    // console.log(cartArray)
    localStorage.setItem('cart',JSON.stringify(cartArray))
  }
  return (
    <div className='con'>
      <div className='row' style={{paddingTop:'200px'}}>
        <div className='col-sm-12 col-md-6'>
          <img src={displayProduct.cover} className='img-fluid' alt={displayProduct.name} style={{height:'450px'}}/>
        </div>
        <div className='col-sm-12 col-md-6'>
          <h2>{displayProduct.name}</h2>
          <h3>{displayProduct.price}$</h3>
          <h4>{displayProduct.description}</h4>
          <Link to ='/cart'><button type="button" className="btn btn-danger" onClick={() => savetocart(displayProduct)} >ADD TO CART</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Details