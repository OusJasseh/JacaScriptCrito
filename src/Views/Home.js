import React from 'react';
import Logo from '../Components/images/logotype.svg';
import '../App.css'
import Navigator from './Navigator'


const Home = () => {
  return (
    <div className='TopNav'>
       <div className='HeaderLogo'>
              <img className='img_LogoType' src={Logo} alt='CompanyLogo' />
       </div>

       <div className="TopMenu">
                    <div className='ContactInfo'>
                                  <i className="fa-light fa-phone-volume"><p className='icon'>+46 (8) 121 470 50</p></i>
                                  <i className="fa-light fa-envelope-dot"><p className='icon'>info@crito.com</p></i>
                                  <i className="fa-regular fa-location-dot"><p className='icon'>Sveavägen 31, 111 34 STOCKHOLM</p></i>
                    </div>
                    <div className='SocialMedia'>
                          <i className="fa-brands fa-facebook"></i>
                          <i className="fa-brands fa-twitter"></i>
                          <i className="fa-brands fa-instagram"></i>
                          <i className="fa-brands fa-linkedin"></i>
                    </div>          
        </div> 
        <div className='NavLinks'>
          <Navigator /> 
        </div> 
        
          
    </div>
    
  )
  }

export default Home