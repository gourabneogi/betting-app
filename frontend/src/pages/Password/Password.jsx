import React from 'react'
import './Password.css'
const Password = () => {
  return (
    <div className="containerdiv">
      <div className="wraper">
        <div className="headline">Change Password</div>
        <div className="form">
          <form method="post">
            <input className="input" type="password" placeholder="OLD PASSWORD" />
            <input className="input" type="password" placeholder="NEW PASSWORD" />
            <input className="input" type="password" placeholder="CONFIRM PASSWORD" />
            

            <div className="btn-overview">
              <a href="#">
                <button className="btn-inside">Done</button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password