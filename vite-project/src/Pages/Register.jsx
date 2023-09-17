import React from 'react'
import {AiOutlineGoogle} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"
import Image from '../Images/imagesbrown.webp'

function Register() {
  return (
    <>
    <div className='register' id='registerform'>
   

      {/* <img src={Image} alt="" style={{width:"47%",objectFit:"initial", height:"105vh",}} /> */}
      <form action="" className='formregister'>
      <h2 style={{textAlign:"center",marginBottom:"30px"}}>Sign Up</h2>
     
    
      <input type="text" placeholder='Enter your name' required/>
      <input type="email" name="" placeholder='Enter your email' required  />
      {/* <label for="counties">Select a county:</label> */}
{/* <select id="counties"  name="counties" required>
  <option value="Baringo">Baringo</option>
  <option value="Bomet">Bomet</option>
  <option value="Bungoma">Bungoma</option>
  <option value="Busia">Busia</option>
  <option value="Elgeyo Marakwet">Elgeyo Marakwet</option>
  <option value="Embu">Embu</option>
  <option value="Garissa">Garissa</option>
  <option value="Homa Bay">Homa Bay</option>
  <option value="Isiolo">Isiolo</option>
  <option value="Kajiado">Kajiado</option>
  <option value="Kakamega">Kakamega</option>
  <option value="Kericho">Kericho</option>
  <option value="Kiambu">Kiambu</option>
  <option value="Kilifi">Kilifi</option>
  <option value="Kirinyaga">Kirinyaga</option>
  <option value="Kisii">Kisii</option>
  <option value="Kisumu">Kisumu</option>
  <option value="Kitui">Kitui</option>
  <option value="Kwale">Kwale</option>
  <option value="Laikipia">Laikipia</option>
  <option value="Lamu">Lamu</option>
  <option value="Machakos">Machakos</option>
  <option value="Makueni">Makueni</option>
  <option value="Mandera">Mandera</option>
  <option value="Marsabit">Marsabit</option>
  <option value="Meru">Meru</option>
  <option value="Migori">Migori</option>
  <option value="Mombasa">Mombasa</option>
  <option value="Murang'a">Murang'a</option>
  <option value="Nairobi">Nairobi</option>
  <option value="Nakuru">Nakuru</option>
  <option value="Nandi">Nandi</option>
  <option value="Narok">Narok</option>
  <option value="Nyamira">Nyamira</option>
  <option value="Nyandarua">Nyandarua</option>
  <option value="Nyeri">Nyeri</option>
  <option value="Samburu">Samburu</option>
  <option value="Siaya">Siaya</option>
  <option value="Taita Taveta">Taita Taveta</option>
  <option value="Tana River">Tana River</option>
  <option value="Tharaka Nithi">Tharaka Nithi</option>
  <option value="Trans Nzoia">Trans Nzoia</option>
  <option value="Turkana">Turkana</option>
  <option value="Uasin Gishu">Uasin Gishu</option>
  <option value="Vihiga">Vihiga</option>
  <option value="Wajir">Wajir</option>
  <option value="West Pokot">West Pokot</option>
  <option value="Not Listed">Not Listed</option>
</select> */}

<input type="password" name="" id=""  placeholder='Enter your password' required/>
<input type="password" placeholder='Confirm password' required />


<button style={{color:"white"}} >Sign Up</button>
<label for="agreement" style={{marginTop:"20px"}}>
  <input type="checkbox" id="agreement" name="agreement" required/>
  I agree to the terms and conditions
</label>

<label for="agreement">
  <input type="checkbox" id="agreement" name="agreement" required/>
  I agree to privacy and contract
</label>
< h5 style={{textAlign:"center",margin:"8px"}}>OR</h5>

</form>
<button  className='googlebtn' >
<AiOutlineGoogle size={26} />
<span style={{ marginLeft: '10px' }}>Sign in with Google</span></button>

<button  className='facebookbtn'> <BiLogoFacebook size={26}/>
<span style={{ marginLeft: '10px' }}>Continue with Facebook</span></button>


    </div>
    </>
  )
}

export default Register