import React from 'react'
import './Itenary.css'
import iteann from '../../Img/iteann.png'
import trektwo from '../../Img/trektwo.png'
import trekThree from '../../Img/trekThree.png'
import next from '../../Img/next.png'
import nexttwo from '../../Img/nexttwo.png'
const TrekGallery = () => {
  return (
    <div className='gallery'>
        <h2>Trek Gallery</h2>
        <div className='galleryGrid'>
        <div class="item1">
            <img style={{width:"100%",height:"300px"}} src={iteann}/>
        </div>
        <div class="item2">
            <img style={{width:"100%",height:"300px"}} src={trektwo}/>
        </div>
        <div class="item3">
            <img style={{width:"100%",height:"300px"}} src={trektwo}/>    
        </div>  
        <div class="item4">
            <img style={{width:"100%",height:"421px"}} src={trekThree}/>   
        </div>
        <div class="item5">
            <img style={{width:"100%",height:"421px"}} src={trekThree}/> 
        </div>
        <div class="item6">
        <img style={{width:"100%",height:"221px"}} src={iteann}/>
        </div>
        <div class="item7">
        <img style={{width:"100%",height:"190px"}} src={trektwo}/>
        </div>
        <div class="item8">
            <img style={{width:"100%",height:"190px"}} src={trektwo}/>
        </div>
        </div>
        <div className='next'>
            <div className='nextone'>
                <img src={next}/>
                <span>BACK</span>
            </div>
            <div className='nextone'>
                <span>NEXT</span>
                <img src={nexttwo}/>
            </div>
        </div>
    </div>
  )
}

export default TrekGallery