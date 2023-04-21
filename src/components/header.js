import React from 'react'
import './header.css'

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="title">
        <h1>THE DAILY QUOTE</h1>
        <p>A Random Quote Generator Website</p>
        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

      </div>
      <div className="home">
        <img href="https://images7.alphacoders.com/671/thumb-1920-671281.jpg" alt=""></img>
        <h2>Welcome to The Daily Quote</h2>
        <p>
          Get inspired and motivated with our handpicked collection of quotes
          from famous personalities and thinkers from around the world.
        </p>
        <p>
          Our quotes are carefully selected to help you achieve your goals and
          stay focused on what's important in life. Whether you're looking for
          inspiration, motivation, or just a little bit of wisdom, we've got
          you covered.
        </p>
        <p>
          So why wait? Start exploring our collection of quotes today and see
          what kind of insights you can gain from the wisdom of the ages.
        </p>
        <h1>WHAT IS  ?</h1>
        <p>Quotes are short, powerful phrases or sentences that convey a message or idea. 
          They are often used to inspire, motivate,
           or provide insight into a particular topic or situation. Many people 
          enjoy reading and sharing quotes, as they can offer a fresh perspective or help 
          to shift one's mindset in a positive way.</p>

        <button className="btn btn-primary"><Link id="guru"to="/blog">Get Started</Link></button>
      </div>
    </div>
  )
}
