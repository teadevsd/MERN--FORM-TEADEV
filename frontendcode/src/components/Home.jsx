import React from 'react'
import christmas from "../assets/christmas.jpg"
import "./Home.css"

const Home = () => {
  return (
    <div className='wrapperCont'>

        <div className='containerHome'>
            <img src={christmas} alt="" />
            <div className='welcomeCont'>
              <h2>Welcome to our page</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum placeat impedit, eveniet quia labore ut culpa temporibus eum doloribus, maxime officiis aspernatur adipisci voluptates voluptatibus. Vitae quo eos nam? <br/> <br/> 
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum placeat impedit, eveniet quia labore ut culpa temporibus eum doloribus, maxime officiis aspernatur adipisci voluptates voluptatibus. Vitae quo eos nam? <br/></p>

              <button>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default Home