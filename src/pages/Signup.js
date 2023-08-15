import React from 'react'
import Template from '../components/Template'
import signImg from '../assets/signup.png'
function Signup({setIsLoggedIn}) {
  return (
    <div>
        <Template 
      title="Join the millions learning to code with studynotion to free"
      desc1="Build Skills For Today,Tomorrow, and beyond."
      desc2="Education to future-proof your carrer."
      image={signImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup