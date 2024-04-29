import React from 'react'
import "./services.css"

function Services() {
  return (
    <section className='our_services' id='services'>
    <div className='services-container'>
        <div className='service'>Why you’ll love us</div>
        <div className='weoffer'>Tailored Support for Your Unique Journey</div>
        <div className='service_cards'>
            <div className='cards'>
                <div className='card_image'>
                    <img src='assits/cards/sv_love.png' alt='card-img'/>
                </div>
                <div className='card_heading'>
                    Care Coordination
                </div>
            </div>
            <div className='cards'>
                <div className='card_image'>
                    <img src='assits/cards/sv_flexible.png' alt='card-img'/>
                </div>
                <div className='card_heading'>
                    Flexible Services
                </div>
            </div>
            <div className='cards'>
                <div className='card_image'>
                    <img src='assits/cards/sv_friends.png' alt='card-img'/>
                </div>
                <div className='card_heading'>
                    Client Centric
                </div>
            </div>
            <div className='cards'>
                <div className='card_image'>
                    <img src='assits/cards/sv_experienced.png' alt='card-img'/>
                </div>
                <div className='card_heading'>
                    Experienced Staff
                </div>
            </div>
        </div>
    </div>
    {/* Individualized Support */}
    <div className='Individualized_Support' id='support'>
    <div className='col-6'>
        <img src='assits/ind_section.png' alt='Individualized-img'/>
      </div>
      <div className='col-6'>
        <div className='Individualized-button'>Individualized Support</div>
        <div className='Individualized-heading'>
        Tailored Disability <br/>Empowerment
        </div>
        <div className='Individualized-paragraph'>
        At Lift Support Services, we understand that each person’s journey with disabilities is uniquely their own. Our commitment to individualised disability support is rooted in the belief that there is no one-size-fits-all solution. We recognise and celebrate the diversity of needs, preferences, and aspirations within the disability community.<br/>
        Rather than offering predefined plans, we take a personalised approach to understand the specific requirements of each individual. Our dedicated team of support workers collaborates closely with clients and their families to tailor our unique support strategies.<br/>
        This individualised approach allows us to address the distinct challenges and goals of each person, ensuring that our support is not only effective but also aligned with their aspirations for a more independent and fulfilling life.<br/>
        </div>
        <div className='Individualized-btn'>
          <button className='btn'>Get Started</button>
        </div>
      </div>
    </div>
    </section>
    //Individualized Support
    
  )
}

export default Services