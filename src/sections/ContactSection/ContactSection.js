import React from "react"
import ContactSectionWrapper from "./ContactSectionWrapper.style"

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <div>
        <h1 className="title">Contact Me!</h1>
      </div>
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
    </ContactSectionWrapper>
  )
}

export default ContactSection
