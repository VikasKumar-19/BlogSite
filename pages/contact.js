import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Fill your details</p>
      <form>
        <div>
          <label htmlFor="nameInp">Name</label>
          <input id='nameInp' type="text" placeholder='Enter your name'/>
        </div>
        <div>
          <label htmlFor="emailInp">Email</label>
          <input id='emailInp' type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="mobileNoInp">Mobile No</label>
          <input id='mobileNoInp' placeholder='Enter your phone no'/>
        </div>
        <div>
          <label htmlFor="descInp">Description</label><br />
          <textarea id="descInp" placeholder='Enter your query.' />
        </div>
      </form> 
    </div>
  )
}

export default ContactPage;