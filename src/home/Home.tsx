import React from 'react'
import {Routes,Route} from "react-router-dom"
import ModelSS from '../component/dashboard/pages/modelSS/ModelSS'
import TeslaCar from '../component/dashboard/layout/TeslaCar'
import SSOrder from '../component/dashboard/pages/modelSS/SSOrder'
import Payment from '../component/dashboard/pages/modelSS/Payment'
import Invetory from '../component/dashboard/pages/invetory/Invetory'

const Home = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<TeslaCar/>} />
          <Route path='/modelS/:id' element={<ModelSS/>}/>
          <Route path='/modelS-order' element={<SSOrder/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='invetory' element={<Invetory/>} />
        </Routes>
      </div>
    </>
  )
}

export default Home