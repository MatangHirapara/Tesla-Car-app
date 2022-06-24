import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import carPaint from "./carPaint.json"
import image_1 from "../../../images/compositor-1.jpg"
import init_1 from "../../../images/init-1.jpg"
import initPaint from "./carInit.json"
import "./ssOrder.css"
import { Button } from '@mui/material';


const SSOrder = () => {

  const navigate = useNavigate();
  const [cards,setCards]:any = useState([])
  const choosePaint = (s:string) =>{
    const card_1 = carPaint.find((e)=>{
      return e.card === s
    });
    let im: HTMLImageElement = document.getElementById("demoimg") as HTMLImageElement;
    im.style.display = "none";
    setCards(card_1)
  }
  const [paint,setPaints]:any = useState([])
  const chooseColor = (t:string) =>{
    const card_2 = initPaint.find((e)=>{
      return e.init === t
    });
    setPaints(card_2)
  }

  return (
    <>
      <div className='ssOrder' >
        <div className='Order' >
          <div className='InnerOrder' >
            <div className='OrderCar' >
              <img id='demoimg' src={image_1} alt="" />
              <img src={cards.card} alt="" />
              <br /><br />
              <img style={{width: "125%",height: "120vh"}} src={paint.init} alt="" />
              <video loop autoPlay muted src="https://www.tesla.com/ns_videos/model3/autopilot/navigate-on-autopilot.mp4"></video>
            </div>
            <div className='OrderMenu' >
              <div className='menu' >
                <div className='teslaTag' >
                  <InfoIcon style={{color: "blue",paddingLeft: "0.6rem"}} />
                  <p>$750 Clean Fuel Reward is now <br /> available for California residents.</p>
                </div>
                <br />
                <div className='menuTitle' >
                  <p className='Title' >Model S</p>
                  <p className='delivery' >Est. Delivery: Oct 2022 - Jan 2023</p>
                </div>
                <div className='toggleBtn' >
                  <Button className='btn' >Purches Price</Button>
                  <Button className='btn' >Potetial saving</Button>
                </div>
                <div className='digital'>
                  <div className='digi-1' >
                    <div>
                      <p className='speed' >375</p>
                      <p className='mi' >mi</p>
                    </div>
                    <p>Range (est.)</p>
                  </div>
                  <div className='digi-1' >
                    <div>
                      <p className='speed' >155</p>
                      <p className='mi' >mph</p>
                    </div>
                    <p>Top Speed</p>
                  </div>
                  <div className='digi-1' >
                    <div>
                      <p className='speed' >3.1</p>
                      <p className='mi' >sec</p>
                    </div>
                    <p>0-60 mph</p>
                  </div>
                </div>
                <div className='M-S-price' >
                  <div className='price' >
                    <p>Dual Motor All-Wheel Drive</p>
                    <div>
                      <p>Model-s</p>
                      <p>$90,800*</p>
                    </div>
                  </div>
                </div>
                <div className='M-S-price' >
                  <div className='price' >
                    <p>Tri Motor All-Wheel Drive</p>
                    <div>
                      <p>Model S Plaid</p>
                      <p>$126,840*</p>
                    </div>
                  </div>
                </div>
                <div className='M-S-detail' >
                  <p>* Prices shown include the $750 California Clean <br />Fuel Reward and potential incentives and gas <br />savings for a total of $9,150. Customize</p>
                </div>
                <div className='paint' >
                  <div className="carPaint" >
                      <p>Paint</p>
                      <div className='mainPaint' >
                        {carPaint.map((val,key)=>{
                          return(
                            <>
                              <div key={key} >
                                <button onClick={()=>choosePaint(val.card)} ><img src={val.color} alt="" /></button>    
                              </div>
                            </>
                          )
                        })}
                      </div>
                  </div>
                </div>
                <div className='init' >
                  <div className="carInit" >
                      <p>Interior</p>
                      <div className='mainInit' >
                        {initPaint.map((sad,key)=>{
                          return(
                            <>
                              <div key={key} >
                                <button onClick={()=>chooseColor(sad.init)} ><img src={sad.paint} alt="" /></button>    
                              </div>
                            </>
                          )
                        })}
                      </div>
                  </div>
                </div>
                <div className='capability' >
                  <div className='carCapbal' >
                    <p className='title' >Full Self-Driving <br />Capability</p>
                    <p className='price' >$12,000</p>
                    <div>
                      <ul>
                        <li>Navigate on Autopilot</li>
                        <li>Auto Lane Change</li>
                        <li>Autopark</li>
                        <li>Summon</li>
                        <li>Full Self-Driving Computer</li>
                      </ul>
                      <br />
                      <p>Coming soon</p>
                      <li>Autosteer on city streets</li>
                      <p>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
                    </div>
                    <div>
                      <button>Add</button>
                      <button>Feature Details</button>
                    </div>
                  </div>
                </div>
                <div className='payment' >
                  <div className='finel'>
                    <p className='finelTitle' >Order Your Model S</p>
                    <p className='delivery' >Est. Delivery: Oct 2022 - jan 2023</p>
                    <div>
                      <button onClick={()=>navigate("/payment")} >CONTINUE TO PAYMENT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SSOrder