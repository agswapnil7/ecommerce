import React from 'react'
import { Link } from 'react-router-dom'
function ThankYou() {
  return (
    
    <div className='container-fluid'>
        <div className='bg' data-aos="fade-in" data-aos-duration="2000">
        <h1 className='con stl'>Thank you</h1>
        </div>
        <div className='con' data-aos="zoom-in" data-aos-duration="2000">
        <h1>WE WILL NOTIFY YOU ON YOUR EMAIL ADDRESS ABOUT THE CONFIRMATION SO PLEASE CHECK YOUR EMAIL.</h1>
        <Link to ="/"><button type="button" className="btn btn-danger mt-3">Go to Home page</button></Link>
        </div>
    </div>
  )
}

export default ThankYou