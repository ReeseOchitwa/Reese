import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Reese's Personal Profile Page
            </p>
            <p className='footer-subscription-text'>
                Thank you for checking it out!
            </p>
            <div className='input areas'>
                <form>
                    <input className='footer-input' type="email" name='email' placeholder='Your Email' />
                    <Button buttonStyles='btn--outline'>Contact Me</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Add</h2>
                    <Link to='/school' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>More</h2>
                    <Link to='/hobbies' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/ onClick="window.scrollTo(0,0)"'>Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Links</h2>
                    <Link to='/travel' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Later</h2>
                    <Link to='/school' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)"> Example</Link>
                    <Link to='/' onClick="window.scrollTo(0,0)">Example</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/" onClick="window.scrollTo(0,0)" className='social-logo'>
                        <i className='fa-solid fa-code' />
                    </Link>
                </div>
                <small className="website-rights">copyright</small>
                <div className='social-icons'>
                    <Link 
                        class='social-icon-link facebook'  
                        to="#top" target="_blank" 
                        aria-label='Facebook'>
                        <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link 
                        class='social-icon-link instagram'  
                        to="https://www.instagram.com/reese._.o/" target="_blank" 
                        aria-label='Instagram'>
                        <i class="fab fa-instagram"></i>
                    </Link>
                    <Link 
                        class='social-icon-link Linkedin'  
                        to="#top" target="_blank" 
                        aria-label='LinkedIn'>
                        <i class="fab fa-linkedin"></i>
                    </Link>
                    <Link 
                        class='social-icon-link twitter'  
                        to="https://twitter.com/HologramPhoenix" target="_blank" 
                        aria-label='Twitter'>
                        <i class="fab fa-twitter"></i>
                    </Link>
                    <Link 
                        class='social-icon-link github'  
                        to="https://github.com/ReeseOchitwa" target="_blank" 
                        aria-label='Github'>
                        
                        <i class="fab fa-github"/>
                    </Link>
                    <Link 
                        className='social-icon-link snapchat'  
                        to="#top" target="_blank" 
                        aria-label='Snapchat'>
                        <i className="fab fa-snapchat"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer