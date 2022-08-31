import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './SettingsPage.css'
const SettingsPage = () => {
  const settingIcon = [
    {
      name: "Language",
      imageUrl: "http://nice1010.fun/images/home_material/world.svg",
    }, {
      name: "Other",
      imageUrl: "http://nice1010.fun/images/home_material/settings.svg",
    }, {
      name: "Other Setting",
      imageUrl: "http://nice1010.fun/images/home_material/speed-meter.svg",
    }
  ]
  return (

    <div className='container setting_content'>
      <Navbar activeButton={"SETTINGS"} newButton={"SETTINGS"} />
      <div className='vertical_mid'>
        {settingIcon.map((item) => (
          <div className='set-box'>
            <img className='image' src={item.imageUrl} alt={item.name} />
            <p className='set-name'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SettingsPage