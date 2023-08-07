import React from 'react'
import { Link } from 'react-router-dom'
import ProductData from '../Data/ProductData'
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
  const handleShowMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <div className='container-fluid'>
        <div className='row aa'  data-aos-duration="2000">
        <div className='banner-left col' data-aos="fade-right" data-aos-duration="2000">
            <h1><span>SELECT YOUR NEW </span>PERFECT STYLE</h1>
            <h3>Discover our Collection of Stylish and Durable Watches to your liking in our Website.</h3>
            <Link to ="/shop"><button type="button" className="btn btn-danger mt-3" onClick={handleShowMoreClick}>Shop Now</button></Link> 
        </div>
        <div className='banner-right col' data-aos="fade-left" data-aos-duration="2000">
            <img src='https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png'></img>
        </div>
        </div>
    
    <div className='con row' data-aos="fade-right" data-aos-duration="2000">
      <h1 className='stl'>Popular Brands</h1>
      <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2018/10/Seiko-Logo-768x432.png' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2018/11/Patek-Philippe-Logo-768x432.png' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2018/10/Tudor-Logo-768x432.png' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2020/10/Rado-Logo-640x384.jpg' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2018/10/Tissot-Logo-768x432.png' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2017/05/Rolex-logo-640x355.png' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2018/10/TAG-Heuer-Logo-768x432.png' className='sliderImg'></img></SwiperSlide>
      <SwiperSlide><img src='https://1000logos.net/wp-content/uploads/2021/11/amazfit-logo-768x432.png' className='sliderImg'></img></SwiperSlide>
    </Swiper>
    </div>
  
    <div className="row mt-5" data-aos="fade-in" data-aos-duration="2000" >
  <div className="col-md-4 mb-3">
    <img src="https://images.unsplash.com/photo-1618215650454-d03cac422c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image1" className="img-fluid img-zoom"/>
  </div>
  <div className="col-md-4 mb-3">
    <img src="https://images.unsplash.com/photo-1618215649872-6e3143a716ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="image2" className="img-fluid img-zoom"/>
  </div>
  <div className='col-sm-4 mb-3'>
    <div className='row' style={{height: '100%'}}>
      <div className='col-sm-12' style={{display: 'flex', flexDirection: 'column'}}>
        <img src='https://images.unsplash.com/flagged/photo-1564826836200-87e3faad54bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHx3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Image 3' className="img-fluid img-zoom"></img>
        <img src='https://images.unsplash.com/photo-1474859740426-f0db7f4f5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHx3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{marginTop:'12px'}} alt='Image 4' className="img-fluid img-zoom"></img>
      </div>
    </div>
  </div>
</div>

    <div className="con row" data-aos="fade-in" data-aos-duration="2000">
      <h1 style={{color:'red', fontSize:'100px', fontFamily:'fantasy'}} className='mt-5'>Popular Items</h1>
      <p style={{color:'black',padding:'40px'}}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      {ProductData.filter((product) => product.id < 7).map((product) => (
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
<Link to ="/shop" ><button type="button" className="btn btn-danger mt-3" onClick={handleShowMoreClick}>Show More</button></Link>
    </div>
<div className='vid' data-aos="fade-in" data-aos-duration="2000">
    <iframe width="100%" height="615" src="https://www.youtube.com/embed/18XnJ2J-NsI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div className="row bdy">
    <div className="col-md-6">
      <div className='con' data-aos="fade-right" data-aos-duration="2000">
        <h1 style={{color:'red', fontSize:'80px', fontFamily:'fantasy',padding:'50px 0 50px 0'}}>Watch of Choice</h1>
        <h5 style={{padding:'0 0 50px 0'}}>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse</h5>
        <Link to ="/shop"><button type="button" className="btn btn-danger mt-3" onClick={handleShowMoreClick}>Shop Now</button></Link>
      </div>  
    </div>
    <div className="col-md-6">
      <img data-aos="fade-left" data-aos-duration="2000" style={{padding:'90px 120px', height:'650px'}} src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png' ></img>
    </div>
  </div>
  <div className="row bdy">
  <div className="col-md-6" >
      <img data-aos="fade-right" data-aos-duration="2000" style={{padding:'90px 120px', height:'650px'}} src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png'></img>
    </div>
    <div className="col-md-6">
      <div className='con' data-aos="fade-left" data-aos-duration="2000">
        <h1 style={{color:'red', fontSize:'80px', fontFamily:'fantasy',padding:'50px 0 50px 0'}}>Watch of Choice</h1>
        <h5 style={{padding:'0 0 50px 0'}}>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse</h5>
        <Link to ="/shop"><button type="button" className="btn btn-danger mt-3" onClick={handleShowMoreClick}>Shop Now</button></Link>
      </div>  
    </div>
  </div>
</div>


  )}

export default Home