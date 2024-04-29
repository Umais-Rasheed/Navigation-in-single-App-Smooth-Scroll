import React from 'react'
import "./aboutus.css";

function Aboutus() {
  return (
    <div className='about-container'>
      <div className='col-6' id='aboutus'>
        <div className='about-button'>About us</div>
        <div className='about-heading'>
           Inclusive Care Excellence
        </div>
        <div className='about-paragraph'>
        Here at Lift Support Services, we strive to create a positive impact on the lives of individuals with disabilities. We are dedicated to fostering a culture of respect, compassion, and inclusion, firmly believing that everyone deserves the opportunity to lead independent and fulfilling lives.<br/><br/>
        Our team is comprised of highly trained and compassionate professionals who are devoted to tailoring a range of services to meet the unique needs of each individual.<br/><br/>
        From personal care assistance to transportation and respite, our dedicated staff is here to ensure that our clients receive the highest quality of care and support, empowering them to navigate life with confidence and independence.
        </div>
        <div className='about-btn'>
          <button className='btn'>More about us</button>
        </div>
      </div>
      <div className='col-6'>
        <img src='assits/abtitle.png' alt='about-img'/>
      </div>
    </div>
  )
}

export default Aboutus