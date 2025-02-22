import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Send email using EmailJS
    emailjs
      .sendForm('service_f2mxak6', 'template_1yctf98', e.target, 'uethuR0YHHWDdrTmi')
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('There was an error sending your message. Please try again.');
          setIsLoading(false);
        }
      );
  };
  return (
<div>
  <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
    <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
    <div className="overlay-color" data-bg-opacity=".75" />
    <div className="container">
      <div className="hero-text-area centerd">
        <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">Contact Us</h1>
        <div className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb wow fadeInUp text-center" data-wow-delay=".6s">
              <li className="breadcrumb-item">
                <a className="breadcrumb-link" href="/">
                  <i className="bi bi-house icon" /> home &gt;
                </a>
                <span style={{ textDecoration: "none", color: "white", cursor: "default" }}> Contact Us</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* End inner Page hero*/}
  {/* Start contact-us */}
  <section className="contact-us  mega-section  pb-0" id="contact-us">
    <div className="container">
      <section className="locations-section  mega-section ">
        <div className="sec-heading centered  ">
          <div className="content-area">
            <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">our office </h2>
          </div>
        </div>
        <div className="contact-info-panel">
          <div className="info-section">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-lg-4">
                <div className="info-panel wow fadeInUp" data-wow-delay=".4s">
                  <h4 className="location-title text-center">Lagos</h4>
                  <div className="line-on-side"></div>
                  <p className="location-address text-center">Lasu Main Rd, Ojo, Lagos 102101.</p>
                  <div className="location-card">
                    <i className="flaticon-email icon"></i>
                    <div className="card-content">
                      <h6 className="content-title">Email:</h6>
                      <a className="email link" href="mailto:syntechticsolutions@gmail.com">syntechticsolutions@gmail.com</a>
                    </div>
                  </div>
                  <div className="location-card">
                    <i className="flaticon-phone-call icon"></i>
                    <div className="card-content">
                      <h6 className="content-title">Phone:</h6>
                      <a className="tel link" href="tel:+2348107251941">+234 810 725 1941</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="map-section elf-section">
        <div className="sec-heading centered">
          <div className="content-area">
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">Find us on Google Maps</h2>
          </div>
        </div>
        <div className="map-box wow fadeInUp" data-wow-delay=".6s">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="map-iframe"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.325353022174!2d3.2166007147743984!3d6.467685524506313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bbd3da109d9%3A0x7fa9a60e61ccdb55!2sLasu%20Main%20Rd%2C%20Ojo%2C%20Lagos%20102101!5e0!3m2!1sen!2sng!4v1613762954590!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: '0' }} // Changed from string to object
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-us-form-section mega-section">
      <div className="row">
        <div className="col-12">
          <div className="contact-form-panel">
            <div className="sec-heading centered">
              <div className="content-area">
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                  Have any questions? Let's answer them
                </h2>
              </div>
            </div>
            <div className="contact-form-inputs wow fadeInUp" data-wow-delay=".6s">
              <div className="custom-form-area input-boxed">
                <form
                  className="main-form"
                  id="contact-us-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="input-wrapper">
                        <input
                          className="text-input"
                          id="user-name"
                          name="userName"
                          type="text"
                          value={formData.userName}
                          onChange={handleChange}
                          required
                        />
                        <label className="input-label" htmlFor="user-name">
                          Name <span className="req">*</span>
                        </label>
                        <span className="b-border" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="input-wrapper">
                        <input
                          className="text-input"
                          id="user-email"
                          name="userEmail"
                          type="email"
                          value={formData.userEmail}
                          onChange={handleChange}
                          required
                        />
                        <label className="input-label" htmlFor="user-email">
                          E-mail <span className="req">*</span>
                        </label>
                        <span className="b-border" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-wrapper">
                        <input
                          className="text-input"
                          id="msg-subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label className="input-label" htmlFor="msg-subject">
                          Subject <span className="req">*</span>
                        </label>
                        <span className="b-border" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-wrapper">
                        <textarea
                          className="text-input"
                          id="msg-text"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                        <label className="input-label" htmlFor="msg-text">
                          Your message <span className="req">*</span>
                        </label>
                        <span className="b-border" />
                      </div>
                    </div>
                    <div className="col-12 submit-wrapper">
                      <button
                        className="btn-solid"
                        id="submit-btn"
                        type="submit"
                        name="UserSubmit"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Send your message'}
                      </button>
                    </div>
                  </div>
                </form>
                {isSuccess && <p>Your message was sent successfully!</p>}
                {errorMessage && <p>{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </section>
</div>

  )
}
