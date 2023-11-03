import React from 'react'
import './Dishes.css'
import Liste from "../listePizza";
const Dishes = () => {
  return (
    <section class="dishes" id="dishes">
    <h3 class="sub-heading">our dishes</h3>
    <h1 class="heading">pop dishes</h1>
    <div class="box-container">
    {Liste.map((Dishes) => (
        <div class="box">
        <button class="fas fa-heart" type="submit" name="heart"></button>
            <a href="#" class="fas fa-eye"></a>
            <img src={Dishes.image01}   alt=""/>
            <h3 >{Dishes.title}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span >{Dishes.price}</span>
            <button type="submit" name="cart" class="btn">add to cart</button>
        </div>
        ))}
    </div>
</section>
  )
}

export default Dishes