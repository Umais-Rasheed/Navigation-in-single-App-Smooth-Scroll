import React from 'react'
import "./header.css";


export default function Header() {
  return (
    <section id='home'>
      <div className='header-body'>
          <header>
            <div className='header-section'>
              <div className='side-content'>
                  <div className='section-button'>Empowering Lives</div>
                    <div className='content-heading'>
                    <span>Supporting</span> Disabilities <br/> with Meaningful<br/> Assistance
                    </div>
                </div>
                <div className='header_image'>
                  <img src='assits/Groupcp.png' alt='sec-img'/>
                </div>
                <div className='header-text'>
                  <p>Providing meaningful support and assistance to individuals living with disabilities, fostering independence and inclusion</p>
                </div>
                <div className='header-button'>Get Started</div>
            </div>
          </header>
      </div>
    </section>
  )
}
