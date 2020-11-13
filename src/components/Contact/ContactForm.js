import React from "react"
import ContactFormWrapper from "./ContactForm.style"

const contact = () => {
  return (
    <ContactFormWrapper>
      <div className="contactPage">
        <article className="contactForm">
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/YOUR_ID" method="POST">
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
            <button type="submit" className="submitBtn btn">
              submit here
            </button>
          </form>
        </article>
      </div>
    </ContactFormWrapper>
  )
}

export default contact
