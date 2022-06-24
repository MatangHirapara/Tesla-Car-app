import React from 'react'
import "./teslacar.css"
import car_1 from "../../images/car-1.jpg"
import car_2 from "../../images/car-2.jpg"
import car_3 from "../../images/car-3.jpg"
import car_4 from "../../images/car-4.jpg"
import home_1 from "../../images/home-1.jpg"
import home_2 from "../../images/home-2.jpg"
import charger from "../../images/charger.jpg"
import { useNavigate } from 'react-router-dom'

const TeslaCar = () => {
  const navigate = useNavigate();
  return (
    <div className='teslaCar' >
      <div className='CarImage' >
        <img src={car_1} alt="" />
        <h2>Model Y</h2>
        <p>Order Online for Touchless Delivery</p>
        <div>
          <button>CUSTOMER ORDER</button>
          <button onClick={()=>navigate("/invetory")} >EXISTING INVENTORY</button>
        </div>
      </div>
      <div className='CarImage' >
        <img src={car_2} alt="" />
        <h2>Model S</h2>
        <p>Order Online for Touchless Delivery</p>
        <div>
          <button onClick={()=>navigate("/modelS-order")} >CUSTOMER ORDER</button>
          <button>EXISTING INVENTORY</button>
        </div>
      </div>
      <div className='CarImage' >
        <img src={car_3} alt="" />
        <h2>Model X</h2>
        <p>Order Online for Touchless Delivery</p>
        <div>
          <button>CUSTOMER ORDER</button>
          <button>EXISTING INVENTORY</button>
        </div>
      </div>
      <div className='CarImage' >
        <img src={car_4} alt="" />
        <h2>Model 3</h2>
        <p>Order Online for Touchless Delivery</p>
        <div>
          <button>CUSTOMER ORDER</button>
          <button>EXISTING INVENTORY</button>
        </div>
      </div>
      <div className='CarImage' >
        <img src={home_1} alt="" />
        <h2>Solar Panel</h2>
        <p>Order Online for Touchless Delivery</p>
        <div>
          <button>CUSTOMER ORDER</button>
          <button>EXISTING INVENTORY</button>
        </div>
      </div>
      <div className='CarImage' >
        <img src={home_2} alt="" />
        <h2>Solar Roof</h2>
        <p>Order Online for Touchless Delivery</p>
        <div>
          <button>CUSTOMER ORDER</button>
          <button>EXISTING INVENTORY</button>
        </div>
      </div>
      <div className='CarImage' >
        <img src={charger} alt="" />
        <h2 style={{marginTop: "-88rem"}} >Asse</h2>
        <p>Order Online for Touchless Delivery</p>
        <div style={{marginTop: "1rem"}} >
          <button style={{marginTop: "1rem", marginLeft: "3rem"}} >Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default TeslaCar