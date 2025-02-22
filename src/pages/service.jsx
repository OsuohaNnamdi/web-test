import React from 'react'
import { Testimonial } from '../component/customer-test'
import { GetInTouch } from '../component/getInTouch'
import { servicesData } from '../data'

export const Service = () => {
  return (
    <div>
    <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
        <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
        <div className="overlay-color" data-bg-opacity=".75" />
        <div className="container">
        <div className="hero-text-area centerd">
            <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">Services </h1>
            <div className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb wow fadeInUp text-center" data-wow-delay=".6s">
              <li className="breadcrumb-item">
                <a className="breadcrumb-link" href="/">
                  <i className="bi bi-house icon" /> home &gt;
                </a>
                <span style={{ textDecoration: "none", color: "white", cursor: "default" }}> Services</span>
              </li>
            </ul>
          </nav>
        </div>
        </div>
        </div>
    </section>
    
    <section className="services services-boxed mega-section" id="services">
      <div className="container">
        <div className="row gx-4 gy-4 services-row">
          {servicesData.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-4 mx-auto" key={index}>
              <div
                className="box service-box wow fadeInUp reveal-start"
                data-wow-offset="0"
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >
                <div className="service-icon">
                  <i className={`${service.icon} font-icon`} />
                </div>
                <span className="service-num hollow-text">{index + 1}</span>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Testimonial />
    {/* End  testimonials*/}
    {/* Start  faq Section*/}
    <section className="faq mega-section" id="faq">
    <div className="shape-top-left" />
    <div className="shape-bottom-right" />
    <div className="pattern-top-end-dir" />
    <div className="pattern-bottom-start-dir" />
    <div className="container">
      <div className="sec-heading centered">
        <div className="content-area"><span className=" pre-title wow fadeInUp" data-wow-delay=".2s">FAQs</span>
          <h2 className=" title wow fadeInUp" data-wow-delay=".4s"><span className="hollow-text">frequently </span> asked questions </h2>
        </div>
      </div>
      {/* Start Accordion List For FAQ*/}
      <div className="faq-accordion" id="accordion">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card mb-2">
              <div className="card-header" id="heading-1">
                <h5 className="mb-0 faq-title">
                  <button className="btn btn-link faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Are your services easy to use?</button>
                </h5>
              </div>
              <div className="collapse" id="collapse-1" aria-labelledby="collapse-1" data-bs-parent="#accordion">
                <div className="card-body">
                  <p className="faq-answer">Yes, our services are designed to be user-friendly and easy to navigate. We offer comprehensive support for all our clients to ensure a seamless experience.</p>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="heading-2">
                <h5 className="mb-0 faq-title">
                  <button className="btn btn-link faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">Will I receive future updates?</button>
                </h5>
              </div>
              <div className="collapse" id="collapse-2" aria-labelledby="collapse-2" data-bs-parent="#accordion">
                <div className="card-body">
                  <p className="faq-answer">Yes, we provide regular updates and improvements to our services to enhance your experience. You will be notified of these updates through email.</p>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="heading-3">
                <h5 className="mb-0 faq-title">
                  <button className="btn btn-link faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">Do your services work in my country?</button>
                </h5>
              </div>
              <div className="collapse" id="collapse-3" aria-labelledby="collapse-3" data-bs-parent="#accordion">
                <div className="card-body">
                  <p className="faq-answer">Our services are available globally, but certain features may be restricted based on the country you're located in. Please contact our support team for more information on your region's availability.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card mb-2">
              <div className="card-header" id="heading-4">
                <h5 className="mb-0 faq-title">
                  <button className="btn btn-link faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">How much will I pay?</button>
                </h5>
              </div>
              <div className="collapse" id="collapse-4" aria-labelledby="collapse-4" data-bs-parent="#accordion">
                <div className="card-body">
                  <p className="faq-answer">The cost of our services depends on the package you select. Please visit our pricing page for detailed information on pricing plans and available options.</p>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="heading-5">
                <h5 className="mb-0 faq-title">
                  <button className="btn btn-link faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">Are there any other fees?</button>
                </h5>
              </div>
              <div className="collapse" id="collapse-5" aria-labelledby="collapse-5" data-bs-parent="#accordion">
                <div className="card-body">
                  <p className="faq-answer">No hidden fees. All charges will be clearly stated during the purchase process, and there are no additional fees beyond your selected plan.</p>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header" id="heading-6">
                <h5 className="mb-0 faq-title">
                  <button className="btn btn-link faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">How can I sign the contract?</button>
                </h5>
              </div>
              <div className="collapse" id="collapse-6" aria-labelledby="collapse-6" data-bs-parent="#accordion">
                <div className="card-body">
                  <p className="faq-answer">You can sign the contract electronically via our platform. Once you choose your plan, you'll be guided through the contract signing process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <GetInTouch />
    </div>

  )
}

  