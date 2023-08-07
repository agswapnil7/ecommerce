import React from 'react'

function About() {
  return (
    <div className='container-fluid'>
      <div className='bg' data-aos="fade-in" data-aos-duration="2000">
        <h1 className='con stl'>About Us</h1>
      </div>
      <div className='con' data-aos="fade-left" data-aos-duration="2000">
        <h1 className='mt-5' ><i className="fas fa-rocket ms-4"></i>  Our Mission</h1>
        <p className='mt-3' style={{color:'#BEC2C3'}}>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.

Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
      
        <h1 className='mt-5'><i className="fas fa-bolt"></i>  Our Vision</h1>
        <p className='mt-3' style={{color:'#BEC2C3'}}>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.

Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
      </div>
      <div className='vid' data-aos="fade-in" data-aos-duration="2000">
        <iframe width="100%" height="615" src="https://www.youtube.com/embed/18XnJ2J-NsI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default About