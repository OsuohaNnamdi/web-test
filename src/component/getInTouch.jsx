import React from 'react'

export const GetInTouch = () => {
  return (
    <div>
   <section className="take-action elf-section has-dark-bg" id="take-action">
    <div className="overlay-photo-image-bg" data-bg-img="assets/images/sections-bg-images/2.jpg" data-bg-opacity=".25"></div>
    <div className="cta-wrapper">
      <div className="container">
        <div className="sec-heading centered mb-0">
          <div className="content-area"><span className=" pre-title wow fadeInUp" data-wow-delay=".2s">contact us</span>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">Get in touch with us</h2>
            <p className="subtitle wow fadeInUp" data-wow-delay=".6s">Whether you have questions, need support, or just want to connect,<br />
             we're always available. <br />
            Feel free to reach out via phone, email, or our contact form. </p>
          </div>
        </div>
        {/*Start .see-more-area*/}
        <div className="see-more-area wow fadeInUp" data-wow-delay="0.8s"><a className="btn-solid cta-link" href="/contact-us">Contact us</a></div>
        {/*End Of .see-more-area*/}
      </div>
    </div>
  </section>
    </div>
  )
}
