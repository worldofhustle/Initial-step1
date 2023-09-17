import React from 'react'
import {AiOutlineGoogle} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import Image from '../Images/imagesbrown.webp'

function Register() {
  return (
    <div className='register' id='loginpage' 
    style={{height:"100vh"}}>
    
      <img src={Image} alt="" style={{width:"50%",objectFit:"initial", height:"105vh",}} />
      
      
      <form action="" className='formregister' id='loginform' >
      <h3 style={{textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>Login</h3>
     
      <input type="email" name="" placeholder='Enter your email'  />
      
<input type="password" name="" id=""  placeholder='Enter your password'/>

<button  style={{color:"white"}}>Submit</button>
< h5 style={{textAlign:"center",margin:"8px",color:"white"}}>OR</h5>
<button  className='googlebtn'>
<AiOutlineGoogle size={26} />
<span style={{ marginLeft: '10px' }}>Log in with Google</span></button>

<button  className='facebookbtn'> <BiLogoFacebook size={26}/>
<span style={{ marginLeft: '10px' }}>Continue with Facebook</span></button>
</form>


    </div>
  )
}

export default Register