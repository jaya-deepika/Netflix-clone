import React from 'react'
import Navbar from '../Navbar/Navbar'
import LandingHome from '../LandingHome/LandingHome'
import './LandingPageStyle.css'
import Footer from '../Footer/Footer'
import LandingBanner1 from '../LandingBanners/LandingBanner1'
import LandingBanner2 from '../LandingBanners/LandingBanner2'
import LandingBanner3 from '../LandingBanners/LandingBanner3'
import LandingBanner4 from '../LandingBanners/LandingBanner4'
import FAQComponent from '../FAQs/FAQComponent'


function LandingPage() {
  return (
    <section id='landingPageContainer'>

                <div className='backgroundImageContainer'>

                    <div className='navbarContainer'>
                        <Navbar/>
                    </div>

                    <div className='introductionContainer'>
                       <LandingHome/>
                    </div>
                </div>

                <div className='middleSection'>
                    <div className='adsec'><LandingBanner1/></div>
                    <div className='adsec'><LandingBanner2/></div>
                    <div className='adsec'><LandingBanner3/></div>
                    <div className='adsec'><LandingBanner4/></div>
                    <div className='adsec'><FAQComponent/></div>
                    <div className='adsec'><Footer/></div>
                    
                </div>




        </section>
  )
}

export default LandingPage
