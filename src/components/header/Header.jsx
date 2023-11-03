import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
    <header>
        <a href="#" class="logo"><i class="fas fa-bowl-food"></i>rests.</a>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#dishes">dishes</a>
            <a href="#about">about</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
        </nav>
        <div class="icons">
            <i class="fas fa-bars" id="menu-bars" onClick={Menu}></i>
            <i class="fas fa-search" id="search-icon" onClick={Search}></i>
            <a href="" class="fas fa-heart"></a>
            <a href="" class="fas fa-shopping-cart"></a>
            <a href=""  class="fas fa-sign-out-alt"></a>
        </div>
    </header>
    <form action="" id="search-from">
    <input type="search" placeholder="search here ..." name="" id="search-box"/>
    <label for="search-box" class="fas fa-search"></label>
    <i class="fas fa-times" id="close"></i>
  </form>
  </div>
  )
}



function Menu(){
  let menu=document.querySelector('#menu-bars');
  let navbar=document.querySelector('.navbar');
  menu.onclick=()=>{
    let menu=document.querySelector('#menu-bars');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
  window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
}
function Search(){
  document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-from').classList.toggle('active');
  }
  document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-from').classList.remove('active');
  }
  }
export default Header