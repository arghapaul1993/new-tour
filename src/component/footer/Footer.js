import React from 'react'
import Styles from "./footer.module.css"
const Footer = () => {
  return (
    <>
    <div className={Styles.container}>
  <div className={Styles.main}>
    <div>
        <h3>Information</h3>
        <p>About</p>
        <p>Press</p>
        <p>Resources and Policies</p>
        <p>Careers</p>
        <p>Trust & Safty</p>
        <p>Contact Us</p>
    </div>
    <div>
        <h3> Expolre</h3>
        <p> Write a review</p>
        <p>Add a Place</p>
        <p>Join</p>
        <p>Travellers' Choice</p>
        <p>GreenLeaders</p>
    </div>
    <div>
        <h3>Do Business With Us</h3>
        <p>Owners & DMO/CVB</p>
        <p>Business Advantage</p>
        <p>Sponsored Placements</p>
        <p>Access our Content API</p>
    </div>
  </div>
  <div className={Styles.down}>
    <div><h3><a href='https://shivila.com/'>Copyright © 2023 SHIVILA TECHNOLOGIES PRIVATE LIMITED<br></br>
    All Rights Reserved<br></br>
                    Designed By Shivila<br></br>
                    Terms and Conditions<br></br>
                    Privacy Polic
    </a></h3></div>
    <div style={{display:"flex", gap:"20px"}}>
    <div><h5>Affilates</h5></div>
    <div><h5>Privacy Policy</h5></div>
        
    </div>
  </div>
    </div>
    </>
  )
}

export default Footer