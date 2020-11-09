import React from "react"
import ContactFormWrapper from "./ContactForm.style"

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="name">
          <p>
            <label htmlFor="firstName">
              First Name:
              <input type="text" name="firstName" placeholder="First Name" />
            </label>
          </p>
          <p>
            <label htmlFor="lastName">
              Last Name:
              <input type="text" name="lastName" placeholder="Last Name" />
            </label>
          </p>
        </div>
        <div>
          <p className="email">
            <label htmlFor="email">
              Email:
              <input type="email" name="email" placeholder="Email" />
            </label>
          </p>
          <p>
            <label htmlFor="message">Message: </label>
          </p>
          <textarea
            name="message"
            cols="50"
            rows="5"
            placeholder="Write something...."
          ></textarea>
        </div>
        <button className="sendBtn">Send</button>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm
