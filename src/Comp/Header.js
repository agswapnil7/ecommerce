import React from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Details from '../Pages/Details'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Shop from '../Pages/Shop'
import ThankYou from '../Pages/ThankYou'
import Cart from '../Comp/Cart'
import ProductData from '../Data/ProductData'

function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    
    setValue(searchTerm);
    let showProduct=ProductData.find((q)=>q.name==searchTerm)
    navigate(`/product/${showProduct.id}`);
  };
  return (
    <div data-aos="zoom-out" data-aos-duration="2000">
        <nav className="navbar navbar-expand-lg fixed-top" style={{background:'rgba(254,249,243,0.8)'}}>
  <div className="container">
  <Link className="navbar-brand" to="/">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/225px-Rolex_logo.svg.png" alt="Logo" width="150" height="80" className="d-inline-block align-text-top mt-3 "/>
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>     
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav d-flex justify-content-between fs-6 fw-semibold p-2">
        <li className="nav-item">
          <Link className="nav-link text-danger" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link text-danger" to="/shop">SHOP</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link text-danger" to="/about">ABOUT US</Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link text-danger" to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </div>
    <div className='headicon'>
    <div className="input-group position-relative">
      <div className="form-outline">
        <input id="search-focus" type="search"  className="form-control" placeholder='Search Products' value={value} onChange={onChange}/>
      </div>
      <button type="button" className="btn btn-danger" onClick={()=>onSearch(value)}>
        <i className="fas fa-search"></i>
      </button>
      <div className="dropdown position-absolute">
          {ProductData
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dropdown-row"
                key={item.id}
              >
                {item.name}
              </div>
            ))}
        </div>
    <Link to ='/contact'>
      <i className="fas fa-sign-in-alt   ms-4 text-dark gg"></i>
    </Link>
    <Link to ='/cart'>
      <i className="fas fa-shopping-cart  ms-4 text-dark gg"></i>
    </Link>
    </div>
    </div>
  </div>
</nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
</Routes>
</div>
  )
}

export default Header