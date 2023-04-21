import React from 'react';
import './footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="container-box">
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <p>dailyquotes30@gmail.com</p>
          </div>
          <div className="contact-details">
            <p>9778852460</p>
          </div>
          <div className="contact-details">
            <p>123 Main Street, Edmonton,Canada</p>
            <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

          </div>
        </div>
        <div className="details">
          <h3>About Us</h3>
          <p>The Daily Quote is a random quote generator website designed to inspire and motivate people. Our mission is to spread positivity and encourage personal growth.</p>
          <p>Overall, quotes offer a simple yet powerful way to connect with others and gain insight into the world around us. Whether you're looking for a quick pick-me-up or a thought-provoking perspective, there's likely a quote out there that can provide the inspiration you need.</p>
          <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        </div>
      </div>
      <div className="social-media">
                    <a href="https:/www.instagram.com" target="_blank" id="twet-quote">
                        <span><img  className="img" src="https://tse4.mm.bing.net/th?id=OIP.vVBHvUTzXuPNovUTHD0D8QHaHa&pid=Api&P=0" alt=""/></span>
                    </a>
                    <a href="https:/www.facebook.com" target="_blank" id="tumlr-quote">
                        <span><img className="img" src="https://tse4.mm.bing.net/th?id=OIP.Hj8atp08zsZaOWABBv2JzAHaHa&pid=Api&P=0" alt=""/></span>
                    </a>
                    <a href="https:/www.twitter.com" target="_blank" id="tuml-quote">
                        <span><img className="img" src="https://tse1.mm.bing.net/th?id=OIP.K8FvGK6xjo9BYViRMINIcQHaHa&pid=Api&P=0" alt=""/></span>
                    </a>
                    <a href="https:/www.github.com" target="_blank" id="tuml-quote">
                        <span><img className="img" src="https://tse1.mm.bing.net/th?id=OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg&pid=Api&rs=1&c=1&qlt=95&w=108&h=109" alt=""/></span>
                    </a>
                    <a href="https:/www.google.com" target="_blank" id="tuml-quote">
                        <span><img className="img" src="https://tse4.mm.bing.net/th?id=OIP.D6P-BO32wCApcPIIjt6p5wHaHa&pid=Api&P=0" alt=""/></span>
                    </a>
                </div>
                <div className="subscribe">
        <h3>Subscribe to our Newsletter</h3>
        <p>Stay up-to-date with the latest quotes and inspiration from The Daily Quote. Enter your email address below to subscribe:</p>
        <form>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div >
     
      <p className='rights'>&copy; 2023 The Daily Quote. All rights reserved.</p>
    </div>
  );
}
