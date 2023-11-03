import React from 'react'
import './About.css'
import pizza1 from '../image/pizza1.png'
const About = () => {
  return (
    <section class="about" id="about">
    <h3 class="sub-heading">about us</h3>
    <h1 class="heading">why choose us?</h1>
    <div class="row">
        <div class="image">
            <img src={pizza1}/>
        </div>
        <div class="content">
            <h3>best food in the country</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam explicabo veniam neque repellat totam ipsam minus ipsa distinctio dignissimos culpa commodi velit molestiae aspernatur, eos iure, illum dolor fugiat fugit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quos veniam aspernatur similique ipsa, fugiat atque, qui rerum cumque perferendis quod explicabo adipisci et at expedita repellendus possimus, exercitationem odio.</p>
            <div class="icons-container">
                <div class="icons">
                    <i class="fas fa-shipping-fast"></i>
                    <span>free delivery</span>
                </div>
                <div class="icons">
                    <i class="fas fa-dollar-sign"></i>
                    <span>easy payements</span>
                </div>
                <div class="icons">
                    <i class="fas fa-headset"></i>
                    <span>24/7 service</span>
                </div>
            </div>
            <a href="#" class="btn">learn more</a>
        </div>
    </div>
</section>
  )
}

export default About