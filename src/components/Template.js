import React from 'react'
import frame from '../assets/frame.png'
import SignForm from './SignForm'
import LoginForm from './LoginForm'
function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {formType === 'signup' ? (<SignForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
                <div>
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                <button><p>Sign Up With Google</p></button>
            </div>
            <div>
                <img src={frame} alt='pattern' width={558} height={504} loading='lazy'/>
                <img src={image} alt='student' width={558} height={490} loading='lazy'/>
            </div>
        </div>
    )
}

export default Template