import React from 'react'
import logo from "../../images/logo.png"
import "./topbar.css"
import Layout from "../../dashboard/pages/modelSS/Layout.json"
import { Link, useNavigate } from 'react-router-dom'

const Topbar = () => {
  const navigate = useNavigate();

  const modelS = () => {
    navigate("/modelS")
  }
  return (
    <div className='topbar' >
      <div className='topbarIn' >
        <div className='topbarLogo'>
          <img onClick={()=>navigate("/")} src={logo} alt="" />
        </div>
        <div className='centerBar' >
          {Layout.map((val,key) => {
            return(
                <ul>
                 <Link style={{textDecoration: "none",color: "black"}} to={`/modelS/${val.id}`}><li >{val.name}</li></Link> 
                </ul>      
            )
          })}
        </div>
        <div className='endBar' >
          <ul>
            <li>Shop</li>
            <li>Account</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar