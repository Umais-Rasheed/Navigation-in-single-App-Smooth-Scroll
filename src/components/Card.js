import React from 'react'
import "./card.css";

function Card() {
  return (
    <section id='card'>
            <div className='container'>
        <div className='card-row'>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-icon'>
                        <img src='assits/Frame 10.png' alt='card-img'/>
                    </div>
                    <div className='card-heading'>Our Mission</div>
                    <div className='card-text'>
                        <p>At Lift Support Services, we are driven by a singular mission – to enhance the lives of individuals with disabilities through unwavering support and dedicated care. Through a compassionate and person-centered approach, we aim to break down barriers, champion inclusivity, and pave the way for a more accessible and equitable society.</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-icon'>
                        <img src='assits/Frame 13.png' alt='card-img'/>
                    </div>
                    <div className='card-heading'>Our Vision</div>
                    <div className='card-text'>
                        <p>At Lift Support Services, we are driven by a singular mission – to enhance the lives of individuals with disabilities through unwavering support and dedicated care. Through a compassionate and person-centered approach, we aim to break down barriers, champion inclusivity, and pave the way for a more accessible and equitable society.</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-icon'>
                        <img src='assits/Frame 14.png' alt='card-img'/>
                    </div>
                    <div className='card-heading'>Our Purpose</div>
                    <div className='card-text'>
                        <p>At Lift Support Services, we are driven by a singular mission – to enhance the lives of individuals with disabilities through unwavering support and dedicated care. Through a compassionate and person-centered approach, we aim to break down barriers, champion inclusivity, and pave the way for a more accessible and equitable society.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Card