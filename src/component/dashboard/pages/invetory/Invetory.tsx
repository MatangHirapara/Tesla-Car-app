import React from 'react'
import "./invetory.css"
import invetory from "./invetory.json"

const Invetory = () => {
  const car = () => {
    let im: HTMLImageElement = document.getElementById("demo") as HTMLImageElement;
    im.style.display = "none";
  }
  return (
    <>
      <div className='mainInvetory' >
        <div className='invetory' >
          <div className='invetorySize' >
            <div className='invetoryTop' >
              <p>Inventory</p>
              <select name="" id="">
                <option value="">Relevance</option>
                <option value="">Price: low to high</option>
                <option value="">Price: high to low</option>
                <option value="">Milage: high to low</option>
                <option value="">Milage: low to high</option>
              </select>
            </div>
          </div>
        </div>
        <div className='bottom' >
          <div className='bottomSize' >
            <div className='invetoryBottom' >
              <div className='invetoryLeft' >
                <label htmlFor="">Delivery Zip-code</label>
                <br />
                <input type="text" value="960231" />
                <br /><br />
                <label htmlFor="">Search within</label>
                <br />
                <select name="" id="">
                  <option value="">25 miles</option>
                  <option value="">50 miles</option>
                  <option value="">100 miles</option>
                  <option value="">200 miles</option>
                </select>
                <br /><br />
                <div className='radio' >
                  <div>
                    <p style={{fontSize: "18px"}} >Models</p>
                    <label className="container">Model S
                      <input type="radio"  name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Model 3
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Model X
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Model Y
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <p style={{fontSize: "18px"}} >Invetory type</p>
                    <label className="container">New
                      <input type="radio"  name="radios" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Used
                      <input type="radio" name="radios" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='invetoryRight' >
                <div className="browse" id='demo'>
                  <p>Don't see the Tesla you're looking for?</p>
                  <div>
                    <button onClick={car} >BROWSE USED INVETORY</button>
                    <button>BUILD YOUR CUSTOM MODEL 3</button>
                  </div>
                </div>
                <div className="list">
                  <div className="listCar">
                      {invetory.map((val,key) => {
                        return(
                          <>
                            <div className='' >

                            </div>
                          </>
                        )
                      })}
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

export default Invetory