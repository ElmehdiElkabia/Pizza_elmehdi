import React from 'react'
import './Order.css'
const Order = () => {
    return (
        <section class="order" id="order">
            <h3 class="sub-heading">order now</h3>
            <h1 class="heading">free and fast </h1>
            <form method="post">
                <div class="inputBox">
                    <div class="input">
                        <span>your name</span>
                        <input type="text" name="name" id="" placeholder="entre your name" />
                    </div>
                    <div class="input">
                        <span>your numbre</span>
                        <input type="number" name="number" id="" value="" placeholder="entre your number" />
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>your order</span>
                        <input type="text" name="order" id="" placeholder="entre your order" />
                    </div>
                    <div class="input">
                        <span>additional food</span>
                        <input type="text" name="additional" id="" placeholder="extra with food" />
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>how mush</span>
                        <input type="number" name="mush" id="" placeholder="how many orders" />
                    </div>
                    <div class="input">
                        <span>date and time</span>
                        <input type="datetime-local" name="date_time" id="" />
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>your adresse</span>
                        <textarea name="adresse" id="" cols="30" rows="10" placeholder="entre your adresse"></textarea>
                    </div>
                    <div class="input">
                        <span>your message</span>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="entre your message"></textarea>
                    </div>
                </div>
                <input type="submit" value="order now" class="btn" name="submit" />
            </form>
        </section>
    )
}

export default Order