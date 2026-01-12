import React from 'react'
import weather from "./weather.png"
import todo from "./to-do.png";
import signin from "./Sign-in.png";
import sign from "./Sign"
import { NavLink, Outlet } from "react-router-dom"
import "./portfolio.css"
function Portfollio() {
    return (
        <>
            <div className='Portfollio'>
                {/* title of portfolio */}
                <div className="portfolio_pro">
                    <h2>Portfolio</h2>
                    <h3>My Recent Work</h3>
                </div>
                {/* Portfolio list */}
                <div className='portfolio_list'>

                    <div className="f_folio">
                        <div className='img'>
                            <img src={weather} alt="Weather App Screenshot" />
                        </div>

                        <h1>Weather App</h1>
                        <p>A weather application that fetches real-time data using an API</p>
                        <div className='use_lang'>
                            <h4 className='course'>HTML</h4>
                            <h4 className='course'>CSS</h4>
                            <h4 className='course'>JavaScript</h4>
                        </div>
                        <div className="button_section">
                            <NavLink to="/portfolio/weather">
                                <button>Demo</button>
                            </NavLink>
                            <button>Code</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className="f_folio">
                        <div className='img'>
                            <img src={todo} alt="todo App Screenshot" />
                        </div>
                        <h1>To-Do App</h1>
                        <p>A task management app to add, delete, and mark tasks as complete.</p>
                        <div className='use_lang'>
                            <h4 className='course'>React</h4>
                            <h4 className='course'>JavaScript</h4>
                            <h4 className='course'>CSS</h4>
                        </div>
                        <div className="button_section">
                            <NavLink to="/portfolio/list">
                                <button>Demo</button>
                            </NavLink>
                            <button>Code</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className="f_folio">
                        <div className='img'>
                            <img src={signin} alt="Sign-In App Screenshot" />
                        </div>
                        <h1>Sign-In App</h1>
                        <p>A responsive authentication UI with form validation.</p>
                        <div className='use_lang'>
                            <h4 className='course'>React</h4>
                            <h4 className='course'>CSS</h4>
                            <h4 className='course'>JavaScript</h4>
                        </div>
                        <div className="button_section">
                            <NavLink to="/portfolio/sign">
                                <button>Demo</button>
                            </NavLink>
                            <button>Code</button>
                        </div>
                    </div>

                </div>



            </div>
            <Outlet />
        </>
    )
}

export default Portfollio
