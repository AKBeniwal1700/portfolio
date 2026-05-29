import { IconMail, IconLinkedin, IconPhone } from '../svgs/Icons';

function ContactSection() {
  return (
    <section id="contact" className="section contact-bg">
      <div className="container">
        <div className="contact-card">
          <h2 className="contact-heading">Let's Build Together 🚀</h2>
          <p className="contact-subtitle">
            I'm currently open to new opportunities — full-time, freelance, or
            collaborations. Let's create something amazing!
          </p>
          <div className="contact-links">
            <a
              href="mailto:abhishekbeniwal363@gmail.com"
              className="contact-link email"
            >
              <span className="link-icon"><IconMail /></span>
              abhishekbeniwal363@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-beniwal-b31078237"
              target="_blank"
              rel="noreferrer"
              className="contact-link linkedin"
            >
              <span className="link-icon"><IconLinkedin /></span>
              LinkedIn Profile
            </a>
            <a href="tel:8059501069" className="contact-link phone">
              <span className="link-icon"><IconPhone /></span>
              8059501069
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
