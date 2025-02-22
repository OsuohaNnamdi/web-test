import React from 'react'

export const Error = () => {
  return (
<div>
  <section className=" err-404 d-flex align-items-center">
    <div className="overlay-photo-image-bg " data-bg-img="assets/images/sections-bg-images/404.jpg" data-bg-opacity=".35" />
    <div className="container">
      <div className="row">
        <div className="col-12   mx-auto">
          {/*Start of .hero-text-area*/}
          <div className="err-text-area text-center  ">
            <h1 className="err-title hollow-text wow   fadeInUp" data-wow-delay="0s">404 </h1>
            <h2 className="err-subtitle wow  fadeInUp " data-wow-delay="0.2s">page Not found</h2>
            <p className="err-text narrow-centerd-text wow  fadeInUp  " data-wow-delay="0.4s">
              oops! the page you were asking for dosen't exist. try search our site for what you are looking for.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
          <div className="cta-links-area wow  fadeInUp " data-wow-delay=".8s"><a className=" btn-solid cta-link " href="/">back to home page</a></div>
        </div>
      </div>
      {/*End of .hero-text-area */}
    </div>
  </section>
</div>

  )
}
