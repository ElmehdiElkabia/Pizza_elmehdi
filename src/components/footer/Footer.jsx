import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>location</h3>
                <a href="#">Morocco</a>
            </div>
            <div class="box">
                <h3>quick links</h3>
                <a href="#">Home</a>
                <a href="#">dishes</a>
                <a href="#">about</a>
                <a href="#">menu</a>
                <a href="#">review</a>
                <a href="#">order</a>
            </div>
            <div class="box">
                <h3>contact info</h3>
                <a href="#">+212-123-456-78</a>
                <a href="#">pizza@gmail.com</a>
                <a href="#">rests@gmail.com</a>
                <a href="#">Morocco,BenGuerir,0000</a>
            </div>
            <div class="box">
                <h3>follow us</h3>
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">twitter</a>
                <a href="#">linkedin</a>
            </div>
        </div>
        <div class="cerdit">copyright @ 2023 by ELMEHDI</div>
    </section>
  )
}

export default Footer