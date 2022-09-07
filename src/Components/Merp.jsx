import React from 'react'

const Merp = ({isDarkMode, setIsDarkMode} ) => {
  
  return (
    <div className="mr-merp">
        <div className={`merp-top`}>
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className={` merp-bottom`}>
          <label className="switch">
            <input type="checkbox" />
            <span
              className="slider round"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div className="ball-slider">
                <div className="ball"></div>
              </div>
            </span>
          </label>
        </div>
    </div>
  )
}

export default Merp