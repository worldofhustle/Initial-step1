import React from 'react'
import Book from "../Images/book.png"
import Tick from "../Images/tick.png"

function Sellersform() {
  return (
    <div className="mainsellerdiv" style={{width:"100%",margin:"0px",padding:"0px"}}>
      <h2 style={{textAlign:"center",marginTop:"20px"}}>Welcome To Hustleworld</h2>
      <div className='carddiv'>
        <div className='cardintro'>
          <div className='sellertop' style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%"}}>Shop information</div>
       <img src={Book}  style={{width:"30px",height:"30px",marginLeft:"50px"}} alt="" />
       </div>
          <div className='line'></div>
          <div style={{display:"flex",flexDirection:"row",paddingTop:"10px"}}>
          <img src={Tick} style={{width:"20px",height:"20px",marginTop:"2px",marginRight:"10px"}} alt="" />
          <p>COMPLETED</p>
          </div>
         
        </div>
       

        <div className='cardintro'>
          <div className='sellertop' style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%"}}>Business information</div>
       <img src={Book}  style={{width:"30px",height:"30px",marginLeft:"50px"}} alt="" />
       </div>
          <div className='line'></div>
          <div style={{display:"flex",flexDirection:"row",paddingTop:"10px"}}>
          <img src={Tick} style={{width:"20px",height:"20px",marginTop:"2px",marginRight:"10px"}} alt="" />
          <p>COMPLETED</p>
          </div>
         
        </div>

        <div className='cardintro'>
          <div className='sellertop' style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%"}}>Shipping information</div>
       <img src={Book}  style={{width:"30px",height:"30px",marginLeft:"50px"}} alt="" />
       </div>
          <div className='line'></div>
          <div style={{display:"flex",flexDirection:"row",paddingTop:"10px"}}>
          <img src={Tick} style={{width:"20px",height:"20px",marginTop:"2px",marginRight:"10px"}} alt="" />
          <p>COMPLETED</p>
          </div>
         
        </div>



        <div className='cardintro'>
          <div className='sellertop' style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%"}}>Payment information</div>
       <img src={Book}  style={{width:"30px",height:"30px",marginLeft:"50px"}} alt="" />
       </div>
          <div className='line'></div>
          <div style={{display:"flex",flexDirection:"row",paddingTop:"10px"}}>
          <img src={Tick} style={{width:"20px",height:"20px",marginTop:"2px",marginRight:"10px"}} alt="" />
          <p>COMPLETED</p>
          </div>
         
        </div>


        <div className='cardintro'>
          <div className='sellertop' style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%"}}>Additional information</div>
       <img src={Book}  style={{width:"30px",height:"30px",marginLeft:"50px"}} alt="" />
       </div>
          <div className='line'></div>
          <div style={{display:"flex",flexDirection:"row",paddingTop:"10px"}}>
          <img src={Tick} style={{width:"20px",height:"20px",marginTop:"2px",marginRight:"10px"}} alt="" />
          <p>COMPLETED</p>
          </div>
         
        </div>




       
        
      </div>

      <div className='informationforms'>
      <h4 style={{textAlign:"center",paddingTop:"30px"}}>Information Details</h4>



     <form style={{width:"100%"}} >
      <div class="sellerform">
        <div class="sellerdiv">
            <h5 style={{marginBottom:"40px"}}>Account Details</h5>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required/>
            </div>
            <div>
                <label for="business-type">Type of Business:</label>
                <input type="text" id="business-type" name="business-type" required/>
            </div>
            <div>
                <label for="county">County:</label>
                <input type="text" id="county" name="county" required/>
            </div>
        </div>

        <div class="sellerdiv">
            <h5 style={{marginBottom:"40px"}}>Shop Details</h5>
            <div>
                <label for="shop-name">Shop Name:</label>
                <input type="text" id="shop-name" name="shop-name" required/>
            </div>
            <div>
                <label for="description">Description of the Shop:</label>
                <textarea id="description" name="description" required></textarea>
            </div>
        </div>

        <div class="sellerdiv">
            <h5 style={{marginBottom:"40px"}}>Customer Care Details</h5>
            <div>
                <label for="cc-name">Name:</label>
                <input type="text" id="cc-name" name="cc-name" required/>
            </div>
            <div>
                <label for="cc-phone">Phone Number:</label>
                <input type="tel" id="cc-phone" name="cc-phone" required/>
            </div>
            <div>
                <label for="cc-address-line">Address Line:</label>
                <input type="text" id="cc-address-line" name="cc-address-line" required/>
            </div>
            <div>
                <label for="cc-town">Town:</label>
                <select id="cc-town" name="cc-town" required>
                    <option value="town1">Town 1</option>
                    <option value="town2">Town 2</option>
                    <option value="town3">Town 3</option>
                
                </select>
            </div>
            <div>
                <label for="cc-postalcode">Postal Code:</label>
                <input type="text" id="cc-postalcode" name="cc-postalcode" required/>
            </div>
        </div>
       
        </div>

        <button type="button" className="sellersubmit">Save</button>
    </form>



    {isshippinginfo && <form style={{ width: "100%" }}>
  <div class="sellerform">
    <div class="sellerdiv">
      <h5 style={{ marginBottom: "40px" }}>Shipping Information</h5>
      <div>
        <label for="shipping-zone">Shipping Zone:</label>
        <input type="text" id="shipping-zone" name="shipping-zone" required />
      </div>
    </div>

    <div class="sellerdiv">
      <h5 style={{ marginBottom: "40px" }}>Shipping Location</h5>
      <div>
        <label for="shipping-address1">Address 1:</label>
        <input type="text" id="shipping-address1" name="shipping-address1" required />
      </div>
      <div>
        <label for="shipping-address2">Address 2:</label>
        <input type="text" id="shipping-address2" name="shipping-address2" required />
      </div>
      <div>
        <label for="shipping-city-town">City/Town:</label>
        <input type="text" id="shipping-city-town" name="shipping-city-town" required />
      </div>
      <div>
        <label for="shipping-region-state">Region/State:</label>
        <input type="text" id="shipping-region-state" name="shipping-region-state" required />
      </div>
      <div>
        <label for="shipping-country">Country:</label>
        <input type="text" id="shipping-country" name="shipping-country" required />
      </div>
      <div>
        <label for="shipping-postalcode">Postal Code:</label>
        <input type="text" id="shipping-postalcode" name="shipping-postalcode" required />
      </div>
    </div>

    <div class="sellerdiv">
      <h5 style={{ marginBottom: "40px" }}>Return Address</h5>
      <div>
        <label for="return-address1">Address 1:</label>
        <input type="text" id="return-address1" name="return-address1" required />
      </div>
      <div>
        <label for="return-address2">Address 2:</label>
        <input type="text" id="return-address2" name="return-address2" required />
      </div>
      <div>
        <label for="return-city-town">City/Town:</label>
        <input type="text" id="return-city-town" name="return-city-town" required />
      </div>
      <div>
        <label for="return-region-state">Region/State:</label>
        <input type="text" id="return-region-state" name="return-region-state" required />
      </div>
      <div>
        <label for="return-country">Country:</label>
        <input type="text" id="return-country" name="return-country" required />
      </div>
      <div>
        <label for="return-postalcode">Postal Code:</label>
        <input type="text" id="return-postalcode" name="return-postalcode" required />
      </div>
    </div>
  </div>

  <button type="button" className="sellersubmit">Save</button>
</form>}

{ispaymentinfo && <form style={{ width: "100%" }}>
  <div class="sellerform" style={{justifyContent:"space-evenly"}}>
    <div class="sellerdiv">
      <h5 style={{ marginBottom: "40px" }}>Card Details</h5>
      <div>
        <label for="beneficiary-name">Beneficiary Name:</label>
        <input type="text" id="beneficiary-name" name="beneficiary-name" required />
      </div>
      <div>
        <label for="bank-account-number">Bank Account Number:</label>
        <input type="text" id="bank-account-number" name="bank-account-number" required />
      </div>
      <div>
        <label for="iban">IBAN:</label>
        <input type="text" id="iban" name="iban" required />
      </div>
      <div>
        <label for="swift-code">SWIFT Code:</label>
        <input type="text" id="swift-code" name="swift-code" required />
      </div>
      <div>
        <label for="bank-name">Bank Name:</label>
        <input type="text" id="bank-name" name="bank-name" required />
      </div>
      <div>
        <label for="bank-doc">Bank Information Document:</label>
        <input type="file" id="bank-doc" name="bank-doc" accept=".pdf,.doc,.docx" required />
      </div>
    </div>

    <div class="sellerdiv">
      <h5 style={{ marginBottom: "40px" }}>Mpesa Details</h5>
      <div>
        <label for="mpesa-registered-name">Mpesa Registered Name:</label>
        <input type="text" id="mpesa-registered-name" name="mpesa-registered-name" required />
      </div>
      <div>
        <label for="mpesa-phone-number">Mpesa Phone Number:</label>
        <input type="tel" id="mpesa-phone-number" name="mpesa-phone-number" required />
      </div>
    </div>
  </div>

  <button type="button" className="sellersubmit">Save</button>
</form>}


{isadditionalinfo && <form class="formadddetails">
        <h4 style={{textAlign:"center"}}>Additional Info</h4>

        <div class="form-section">
            <label for="socialMediaLinks">Add your social media links:</label>
            <textarea id="socialMediaLinks" name="socialMediaLinks" rows="4"></textarea>
        </div>

        <div class="form-section">
            <label for="suggestionsQuestions">Suggestions and Questions:</label>
            <textarea id="suggestionsQuestions" name="suggestionsQuestions" rows="4"></textarea>
        </div>

        <div class="form-section">
            <input className='sellersubmit' type="submit" value="Submit"/>
        </div>
    </form>}


    </div>
     </div>
  )
}

export default Sellersform