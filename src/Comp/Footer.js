import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer mt-5'>
      <div className='container mb-5 ' style={{background:'red', padding:'40px'}}  data-aos="fade-right" data-aos-duration="2000">
        <div className='row bb'>
          <div className="col-md-4 col-sm-6 text-light">
            <i className="fas fa-box-open ms-4 mb-4 text-light"></i>
            <h2>Free Shipping Method</h2>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
          <div className="col-md-4 col-sm-6 text-light">
            <i className="fas fa-lock ms-4 mb-4 text-light"></i>
            <h2>Secure Payment System</h2>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
          <div className="col-md-4 col-sm-6 text-light">
            <i className="fas fa-dollar-sign ms-4 mb-4 text-light"></i>
            <h2>Secure Payment Method</h2>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-in" data-aos-duration="2000">
        <div className='container-fluid text-center ' >
          <div className='row bb'>
            <div className="col-md-3 col-sm-6">
            <Link to= '/'><img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/225px-Rolex_logo.svg.png'></img></Link>
              </div>
              <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul>
                <li><Link to= '/contact' style={{ textDecoration: 'none' , color:'black'}}>Address</Link></li>
                <li><Link to= '/contact' style={{ textDecoration: 'none' , color:'black'}}>Phone Number</Link></li>
                <li><Link to= '/contact' style={{ textDecoration: 'none' , color:'black'}}>Street Address</Link></li>
                <li><Link to= '/contact' style={{ textDecoration: 'none' , color:'black'}}>Postal Code</Link></li>
                <li><Link to= '/contact' style={{ textDecoration: 'none' , color:'black'}}>Email</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Popular Brands</h4>
              <ul>
                <a href='https://www.tagheuer.com/int/en/' style={{ textDecoration: 'none' , color:'black'}}><li>Tag Heuer</li></a>
                <a href='https://www.rolex.com/en-us' style={{ textDecoration: 'none' , color:'black'}}><li>Rolex</li></a>
                <a href='https://www.patek.com/en/home' style={{ textDecoration: 'none' , color:'black'}}><li>Patek</li></a>
                <a href='https://www.casio.com/in/' style={{ textDecoration: 'none' , color:'black'}}><li>Casio</li></a>
                <a href='https://www.hublot.com/int/en/' style={{ textDecoration: 'none' , color:'black'}}><li>Hublot</li></a>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 >Company</h4>
              <ul>
                <li><Link to= '/' style={{ textDecoration: 'none' , color:'black'}}>New arrivals</Link></li>
                <li><Link to= '/about' style={{ textDecoration: 'none' , color:'black'}}>About</Link></li>
                <li><Link to= '/shop' style={{ textDecoration: 'none' , color:'black'}}>Shop</Link></li>
                <li><Link to= '/contact' style={{ textDecoration: 'none' , color:'black'}}>Contact</Link></li>
                <li><Link to= '/about' style={{ textDecoration: 'none' , color:'black'}}>Reviews</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bottom text-center'>
        <p>Register Forum Affiliate FAQ</p>
        <a href='https://www.facebook.com'>
          <i className="fab fa-facebook fa-2x ms-3 text-dark"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram fa-2x text-dark ms-3"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter fa-2x text-dark ms-3"></i>
        </a>
        <p>&copy;2023. Rolex. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer;