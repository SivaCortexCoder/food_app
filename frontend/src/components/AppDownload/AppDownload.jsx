// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Todays Special<br/>Limited Quantity only!!</p>
        <div className="app-download-platforms">
            <img src={assets.mutton_biryani} alt="" />
            <img src={assets.prawn_biryani} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
