import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ThankYou from './ThankYou'
function Contact() {
  return (
    <>
     <div className='container-fluid'>
        <div className='bg' data-aos="fade-in" data-aos-duration="2000">
        <h1 className='con stl' >Contact Us</h1>
        </div>
        </div>
    <div className='container'>
      <form className="row g-3 mt-5">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="inputPhone4" className="form-label">Phone</label>
    <input type="phone" className="form-control" id="inputPhone4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option >Province 1</option>
      <option>Province 2</option>
      <option >Province 3</option>
      <option>Province 4</option>
      <option >Province 5</option>
      <option>Province 6</option>
      <option>Province 7</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <Link to='/thankyou'><button className="btn btn-danger">Submit</button></Link>
  </div>
</form>
<div className='con mt-5'>
    <h2>Follow Us</h2>
    <p>Connect with us on social media:</p>

    <a href='https://www.facebook.com'>
    <i className="fab fa-facebook fa-2x text-dark"></i>
    </a>
    <a href='https://www.twitter.com'>
      <i className="fab fa-twitter fa-2x ms-3 text-dark"></i>
    </a>
    <a href='https://www.instagram.com'>
      <i className="fab fa-instagram fa-2x ms-3 text-dark"></i>
    </a>
    </div>
    </div>
    </>
  )
}

export default Contact