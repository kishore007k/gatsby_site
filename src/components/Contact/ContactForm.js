import React from "react"
import ContactFormWrapper from "./ContactForm.style"

const contact = () => {
  return (
    <ContactFormWrapper>
      <div className="contactPage">
        <article className="contactForm">
          <h3>Get In Touch</h3>
          <form name="contact" method="POST" data-netlify="true">
            <div className="formGroup">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="formControl"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="formControl"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="formControl"
              ></textarea>
            </div>
            <button type="submit" className="submitBtn">
              submit here
            </button>
          </form>
        </article>
      </div>
    </ContactFormWrapper>
  )
}

export default contact
