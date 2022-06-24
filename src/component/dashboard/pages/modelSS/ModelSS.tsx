import React, { useState,useEffect } from 'react'
import "./modelss.css"
import car_2 from "../../../images/car-2.jpg"
import "../../../dashboard/layout/teslacar.css"
import intirior from "../../../images/intirior.jpg"
import modelS_1 from "../../../images/modelS-int.jpg"
import modelS_2 from "../../../images/modelS-1.jpg"
import engine from "../../../images/engine.jpg"
import modelS_3 from "../../../images/modelS-2.jpg"
import qlty_1 from "../../../images/Qlty-1.jpg"
import qlty_2 from "../../../images/Qlty-2.jpg"
import qlty_3 from "../../../images/Qlty-3.jpg"
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Layout from "./Layout.json"


const ModelSS = () => {
  const navigate = useNavigate();
  const [record, setRecord]:any = useState({})

  const { id } = useParams();

  const order = () => {
    navigate("/modelS-order")
  }
  useEffect(() => {
    const data:any = Layout.find((e) => {
      return e.id === id
    })
    console.log('data', data)
    setRecord(data)
  }, [id])


  const modelS = "../../vidoes/modelS-1.mp4"
  return (
    <>
      <div className='modelSS' >
        <div className='CarImage' >
            <img src={record.card} alt="" />
            <h2>{record.name}</h2>
            <p>Order Online for Touchless Delivery</p>
        </div>

        <div className='secondImg' >
          <img src={intirior} alt="" />

          <div className='carDetail' >
            <div className='Detail' >
              <h1>{record.mi}Mil</h1>
              <p>Range (EPA est.)</p>
            </div>
            <div className='Detail' >
              <h1>{record.sec}s</h1>
              <p>0-60 mph*</p>
            </div>
            <div className='Detail' >
              <h1>200mph</h1>
              <p>Top Speed†</p>
            </div>
            <div className='Detail' >
              <h1>1,020hp</h1>
              <p>Peak Power</p>
            </div>
            <div className='Detail' >
              <button onClick={order} >Order now</button>
            </div>
          </div>
          <div className='title' >
            <h1>Interior of the Future</h1>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className='carVidoe' >
          <video 
            style={{width: "750px", height: "500px"}} 
            autoPlay muted
            src={modelS}
            >
          </video>
        </div>

        <div className='inform' >
          <div className='part-1' >
            <img src={modelS_1} alt="" />
            <div>
              <h2>Stay Connected</h2>
              <br />
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
          </div>
          
          <div className='part-1' >
            <div>
              <h2>Stay Connected</h2>
              <br />
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
            <video 
              style={{width: "525px", height: "320px"}} 
              loop autoPlay muted 
              src="https://tesla-cdn.thron.com/static/PIUCZZ_MS-Interior-Grid-2-Audio-Desktop_CLFX4X.mp4?xseo=">
            </video>
          </div>

          <div className='part-1' style={{marginBottom: "5rem"}}>
            <img src={modelS_1} alt="" />
            <div>
              <h2>Stay Connected</h2>
              <br />
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
          </div>
        </div>
        <div className='demo' >
            <img src={modelS_2} alt="" />
        </div>
        <div className='part-2' >
            <div>
              <h2>Beyond Ludicrous</h2>
              <button onClick={order} >Order now</button>
            </div>
            <div>
              <h2>Stay Connected</h2>
              <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
            </div>
        </div>
        <br />
        <div className='engine' >
          <div>
            <br /><br /><br />
            <br /><br /><br />
            <h1>Electric Powertrain</h1>
            <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and <br /> efficiency. New module and pack thermal architecture allows faster charging and gives you more power <br /> and endurance in all conditions.</p>
            <img src={engine} alt="" />
          </div>
        </div>

        <div className='modelSlight' >
          <img src={modelS_3} alt="" />
        </div>

        <div className='part-2' >
            <div>
              <h2>Designed for Efficiency</h2>
              <button onClick={order} >Order now</button>
            </div>

            <div>
              <h2>Stay Connected</h2>
              <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
            </div>
        </div>

        <div className='inform' style={{marginTop: "5rem"}} >
          <div className='part-1' >
            <div>
              <h2>Stay Connected</h2>
              <br />
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
            <img src={qlty_1} alt="" />
          </div>

          <div className='part-1' >
            <img src={qlty_2} alt="" />
            <div>
              <h2>Stay Connected</h2>
              <br />
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>            
          </div>
          
          <div className='part-1' style={{marginBottom: "5rem"}}>
            <div>
              <h2>Stay Connected</h2>
              <br />
              <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
            <img src={qlty_3} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ModelSS