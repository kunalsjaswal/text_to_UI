import React from 'react'
import { DocsDiv } from './style'

const Docs = () => {
  return (
    <DocsDiv  id='docs-section'>

        <h1>DOCUMENTATION</h1>

        <main>
            <p>Meet To UI is an open source application build on React.js Library. It helps to update you UI with minimal efforts. 
            It is prefered to use React as your project directory but it works with any other Language related to UI.
            Create your own UI from scratch or use existing project to add or update the features

            </p>

            <h2>GETTING STARTED</h2>
            <ul className='getting-start'>
                <li>
                    Node.js should be installed on your system. ( link - <a href='https://nodejs.org/en/download/package-manager' target='_blank'> install node</a> )     
                </li>
                
                <li>
                    Python to be installed on you system. ( version &gt; 3.9.0 )
                </li>
                <li>Install required libraries using npm and pip install</li>
                <li>
                    Select your project folder directory in which you want to do updates. 
                </li>
                
            </ul>

            <h2>DIFFERENT WAYS OF GIVING PROMPTS TO CHATBOT</h2>

            <ul className="ways">
                <li>
                    <b>Using Direct Prompts</b> : 
                    Enter the changes you want in the prompt and click submit button. The changes will be reflected  to the playground screen.
                </li>

                <li>
                    <b>Using Speech to Text : </b> 
                    Click on Mic button which will start recording your voice. Then you can hit Submit button and the changes will be reflected  to the playground screen.
                </li>

                <li>
                    <b>By Uploading File : </b> 
                    You using upload feature you can also add your transcript file or instruction file and hit the Submit button.  Accordingly, the changes will be reflected to the playground screen.
                </li>

                <li>
                    <b>Using Real-time Zoom call : </b>
                    Click on Zoom button which will redirect you to Zoom meeting and the things you will discuss will be reflected parallely to the playground screen.
                </li>
            </ul>

        </main>
    </DocsDiv>
  )
}

export default Docs