import React from 'react'
import { About2Div } from './style'
import landing_page_image from '../../../images/langingPage1.png'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PreviewIcon from '@mui/icons-material/Preview';
import Animation3D from '../../threeDAnimation/Animation3D'

const About2 = () => {

  return (
    <About2Div>

        <section className="top">
            
            <article className="intro">

                    <h1>
                        DESIGN WHAT YOU LOVE
                    </h1>
                    <p>
                        MEET - TO - UI
                    Is an innovative initiative aimed at transforming the way user requirements are captured and implemented in a user interface . 
                    The main objective is to expedite the process of transitioning from initial client discussions to a functional UI by leveraging the power of artificial intelligence (AI).
                    </p>
                    <NavLink to="/templates" style={{color:"#EFAF64", textDecoration:"none"}}>
                        <Animation3D/>
                    </NavLink>
            </article>
            <div className="image">
                <div className="shape" ></div>
                <img src={landing_page_image} alt="bot" />
            </div>

            <article className='steps'>

                <div className='step1 card'>
                    <h3>
                        <TextSnippetIcon />
                        Enter Prompt
                    </h3>
                    <p>
                        Ask BOT to make your design directly through chats, transcript or a zoom meet.
                    </p>
                </div>
                <div className='step2 card'>
                    <h3>
                        <DashboardIcon />
                        Get your UI
                    </h3>
                    <p>
                        Get your UI reflected upon the playground for the prompt you entered.
                    </p>
                </div>
                <div className='step3 card'>
                    <h3>
                        <PreviewIcon />
                        Review your UI
                    </h3>
                    <p>
                        Review your UI and update it by asking the BOT again to make the changes.
                    </p>
                </div>
            </article>
        </section>
        <section className="bottom">

        </section>

    </About2Div>
  )
}

export default About2