import React from 'react'
import "./testimonials.css"

function Testimonials() {
  return (
    <section className='testimonial' id='testimonials'>
    <div className='tsm_container'>
        <div className='tsm_head'>Testimonials</div>
        <div className='tsm_heading'>Our Happy Clients</div>
           <div className='tsm_body'> 
                <div className='tsm_left_img'>
                  <img src='./assits/tsm/tsm-left.png' alt='tsm-img'/>
                </div>
                <div className='tsm_text'>
                    I wanted to express my gratitude and satisfaction with the support you provided for my son. 
                    You have been very helpful and professional in addressing his unique needs and your personalized 
                    approach and attention to detail have made a significant positive impact on his life.
                </div>
                <div className='tsm_client_name'>
                  Jacob Miller
                </div>
                <div class="rating">
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                </div>
                <div className='tsm_right_img'>
                    <img src='./assits/tsm/tsm-right.png' alt='tsm-img'/>
                </div>
                <div className='slidecurs'> 
                  <div class="cursor"></div>
                  <div class="cursor"></div>
                  <div class="cursor"></div>
                </div>
          </div>
    </div>
    <div className='contect_us'>
      <div className='contect_container'>
        <div className='contect_text'>
          <p>
            Contact Lift Support Services for personalized disability support that goes beyond the ordinary. 
            Our team is ready to collaborate closely with you, ensuring tailored strategies that align with 
            your unique needs and aspirations. Reach out today to embark on a journey towards independence and 
            fulfillment.
          </p>
        </div>
        <div className='contect_button'>
            <button>Contect us</button>
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default Testimonials