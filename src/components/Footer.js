import React from 'react'
import "./footer.css";

export default function footer() {
  return (
    <div className='footer_background'>
      <div className='ft_container'>
        <div className='footer_body'>
          <div className='col_3'>
            <div className='footer_logo'>
                <img src='./assits/footer_logo.png' alt='footer-img'/>
            </div>
            <div className='ft_text'>
              <p>Lift Support Services acknowledges the traditional owners of country throughout Australia and 
                their continuing connection to the land and waterways.</p>
            </div>
          </div>
          <div className='col_2'>
            <div className='footer_heading'>About</div>
                <li>Mission</li>
                <li>Vision</li>
                <li>Purpose</li>
                <li>Experience</li>
                <li>Location</li>
          </div>
          <div className='col_2'>
            <div className='footer_heading'>Services</div>
                <li>Request Support</li>
                <li>Social Support</li>
                <li>Recreational Outgoings</li>
                <li>Respite Care</li>
                <li>Personal Care</li>
                <li>Camps</li>
          </div>
          <div className='col_2'>
            <div className='footer_heading'>Resources</div>
                <li>NDIS Guide</li>
                <li>COVID-19</li>
                <li>Complaints</li>
                <li>Feedbacks </li>
          </div>
          <div className='col_4'>
            <div className='footer_heading'>Get in touch</div>
                <li>Endeavour Hills Victoria 3802, Australia </li>
                <li>ABN 18 743 597 256</li>
           <div className='footer_links'>
           <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>

           </div>
          </div>
        </div>
      </div>
      <div className='horizental_line'><hr /></div>
      <div className='copy_right'>
          <p>© 2024 Lift Support Services – All rights reserved.</p>
      </div>
    </div>
  )
}
 