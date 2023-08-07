import React from 'react'
import { Link } from 'react-router-dom'
import ProductData from '../Data/ProductData'

function Shop() {
  const handleShowMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='container-fluid'> 
      <div className='bg' data-aos="fade-in" data-aos-duration="2000">
        <h1 className='con stl'>Watch Shop</h1>
      </div>
      <div className="con row" data-aos="fade-in" data-aos-duration="2000">
{ProductData.map((product) => (
  <div className="col-sm-4 mb-3 container" key={product.id}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', textAlign: 'center' }} onClick={handleShowMoreClick}>
          <div >
            <img src={product.cover} className='prodImg mb-3' alt={product.name} style={{width:'100%', height:'400px',borderRadius:'20px'}}/>
            <div>
              <h2 style={{color:'red',fontWeight:'bolder'}} >{product.name}</h2>
              <p style={{color:'black'}}>{product.price}$</p>
            </div>
          </div>
      </Link>
  </div> 
   ))}
</div></div>
  )
}

export default Shop