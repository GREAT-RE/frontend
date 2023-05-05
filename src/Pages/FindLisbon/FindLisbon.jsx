import React from 'react'
import "./FindLisbon.css"
import { useEffect } from 'react'
import aboutLisbon from "../../assets/discoverLX.jpg"
import aboutLisbon1 from "../../assets/aboutlisbon.jpg"
import aboutLisbon2 from "../../assets/aboutlisbon2.jpg"

const FindLisbon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='photo-container-lisbon'>
      <img className="lisbon-img-cover" src={aboutLisbon} alt="LisbonImg" />
        <div className='text-container-lisbon'>
          <h1 className='textL'>DISCOVER LISBON</h1>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  
    <div className='lisbon1'>
      <img className="lisbon-img" src={aboutLisbon1} alt="LisbonImg1" />
      <div className='lisbon-all-text'>
        <h4 className='lisbon-get'>Get to know Lisbon</h4>
        <h1 className='lisbon-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='lisbon-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut delectus aliquid, ratione aspernatur obcaecati impedit excepturi velit molestiae officiis soluta, dignissimos voluptates, qui tenetur facilis error ab saepe vel.</p>
        <h4 className='lisbon-learn'>Learn more</h4>
      </div>
    </div>
    <div className='lisbon2'>
      <img className="lisbon-img" src={aboutLisbon2} alt="LisbonImg2" />
      <div className='lisbon-all-text'>
        <h4 className='lisbon-get'>Get to know Lisbon</h4>
        <h1 className='lisbon-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='lisbon-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut delectus aliquid, ratione aspernatur obcaecati impedit excepturi velit molestiae officiis soluta, dignissimos voluptates, qui tenetur facilis error ab saepe vel.</p>
        <h4 className='lisbon-learn'>Learn more</h4>
      </div>
    </div>
    </>
  )
}

export default FindLisbon