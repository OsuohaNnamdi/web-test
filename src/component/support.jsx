import React from 'react'
import { clientLogos } from '../data'

export const Support = () => {
  return (
    <section className="our-clients bg-main elf-section" id="our-clients">
    <div className="container-fluid">
      <div className="sec-heading d-none">
        <h4 className="title">our great clients</h4>
      </div>
      <div className="clients-logos">
        <div className="swiper-container">
          <div
            className="swiper-wrapper clients-logo-wrapper wow fadeIn"
            data-wow-delay=".02s"
          >
            {clientLogos.map((logo, index) => (
              <div className="swiper-slide" key={index}>
                <div className="client-logo">
                  <a href="#0">
                    <img
                      className="img-fluid logo"
                      loading="lazy"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
