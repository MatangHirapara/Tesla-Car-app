import React, { useState } from 'react'
import image_1 from "../../../images/compositor-5.jpg"
import payment from "./payment.json"
import "./ssOrder.css"
import "./payment.css"

const Payment = () => {

  const [cars,setCars]:any = useState([])
  const choosePaint = (s:string) =>{
    let im: HTMLImageElement = document.getElementById("demoimg") as HTMLImageElement;
    im.style.display = "none";
    
    const car_1 = payment.find((e)=>{
      return e.car === s
    });
    setCars(car_1);
  }
  return (
    <>
      <div className='paymentCar' >
        <div className='finelCar' >
          <div className='car' >
            <img id='demoimg' src={image_1} alt="" />
            <img src={cars.car} alt="" />
          </div>
        </div>
        <div className='paymentProce'>
          <div className='process' >
            <h1>Your Order Model S</h1>
            <p>Model S Dual Motor All-Wheel Drive</p>
            <p>Solid Black</p>
            <p>19" Tempest Wheels</p>
            <p>Black and White Premium Interior with <br /> Walnut Décor</p>
            <p>Autopilot</p>
            <p>1-Year Premium Connectivity Trial</p>
            <p>+ Show Details</p>
            <p>Financing selection and terms will be <br /> confirmed after order</p>
            <br />
            <h3>Total Price</h3>
            <br />
            <div>
              <p>vechical Price</p>
              <p>$103,235</p>
            </div>
            <div>
              <p>Destination & doc fee</p>
              <p>$1200</p>
            </div>
            <div>
              <p>Order Fee</p>
              <p>$250</p>
            </div>
            <p style={{marginTop: "-1rem", marginLeft: "3rem"}}>____________________________________________</p>
            <div>
              <p>Your Model S</p>
              <p>$104,940</p>
            </div>
            <br /><br />
            <div>
              <p>Wall Connector</p>
              <p>$400</p>
            </div>
            <div>
              <p>Order Fee</p>
              <p>$250</p>
            </div>
            <p style={{marginTop: "-1rem", marginLeft: "3rem"}}>____________________________________________</p>
            <div>
              <p>Due Today</p>
              <p>$650</p>
            </div>
            <button>ORDER WITH CARD</button>
            <div className='fillForm' >
              <div className='form' >
                <div>
                  <label htmlFor="">First Name</label>
                  <br />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className='fillForm' >
              <div className='form' >
                <div>
                  <label htmlFor="">Last Name</label>
                  <br />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className='fillForm' >
              <div className='form' >
                <div>
                  <label htmlFor="">Email Address</label>
                  <br />
                  <input type="email" />
                </div>
              </div>
            </div>
            <div className='fillForm' >
              <div className='form' >
                <div>
                  <label htmlFor="">Confirm Email Address</label>
                  <br />
                  <input type="email" />
                </div>
              </div>
            </div>
            <div className='fillForm' >
              <div className='form' >
                <div>
                  <label htmlFor="">Confirm Email Address</label>
                  <br />
                  <select name="" id="">
                    <option value="">US +1</option>
                    <option value="">AE +971</option>
                    <option value="">AT +43</option>
                    <option value="">AU +61</option>
                    <option value="">BE +32</option>
                    <option value="">CA +1</option>
                    <option value="">CH +41</option>
                    <option value="">CN +86</option>
                    <option value="">CZ +420</option>
                    <option value="">DE +49</option>
                    <option value="">DK +45</option>
                    <option value="">EE +372</option>
                    <option value="">ES +34</option>
                    <option value="">FI +358</option>
                    <option value="">FR +33</option>
                    <option value="">IN +91</option>
                  </select>
                  <input className='numberTab' type="number" placeholder='Enter number'/>
                </div>
              </div>
            </div>
            <div className='fillForm' >
              <div className='form' >
                <div>
                  <label htmlFor="">Address</label>
                  <br />
                  <input type="email" placeholder='Enter your address' />
                </div>
              </div>
            </div>
          </div>
          <div className='carPaint' >
              <div className='carBack' >
                <p>Paint</p>
                <div className='backPaint' >
                  {payment.map((val,key)=>{
                    return(
                      <div key={key} >
                        <button onClick={()=>choosePaint(val.car)}> <img src={val.back} alt="" /> </button>
                      </div>
                    )
                  })}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment