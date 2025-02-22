import React from 'react'
import { Testimonial } from '../component/customer-test'
import { teamMembers } from '../data'

export const About = () => {
  return (
        <div>
        <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
            <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
            <div className="overlay-color" data-bg-opacity=".75" />
            <div className="container">
            <div className="hero-text-area centerd">
                <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">About Us</h1>
                <div className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb wow fadeInUp text-center" data-wow-delay=".6s">
              <li className="breadcrumb-item">
                <a className="breadcrumb-link" href="/">
                  <i className="bi bi-house icon" /> home &gt;
                </a>
                <span style={{ textDecoration: "none", color: "white", cursor: "default" }}> About Us</span>
              </li>
            </ul>
          </nav>
        </div>
            </div>
            </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start  about Section*/}
        <section className="about mega-section" id="about">
            <div className="container">
            {/* Start first about div*/}
            <div className="content-block  ">
                <div className="row">
                <div className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp " data-wow-delay="0.6s">
                    <div className="text-area ">
                    <div className="sec-heading  light-title ">
                        <div className="content-area"><span className=" pre-title       wow fadeInUp " data-wow-delay=".2s">about Us</span>
                        <h2 className=" title    wow fadeInUp" data-wow-delay=".4s"><span className="hollow-text">trusted</span> by worldwide clients  since<span className="featured-text">  2024. <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" /></svg></span></h2>
                        </div>
                    </div>
                    <p className=" about-text">We are a dynamic software development company founded by skilled engineers and developers. We specialize in delivering innovative solutions, IT training, and dependable support while ensuring timely results. Our mission is to empower individuals and businesses to excel in the ever-evolving tech landscape.</p>
                    <div className="info-items-list ">
                        <div className="row ">
                        <div className="col-9 col-xl-6">
                            <div className="info-item"><i className="flaticon-medal  info-icon" />
                            <div className="info-content">
                                <h5 className="info-title">first on field </h5>
                                <p className="info-text">Leading the way in creative solutions with unparalleled knowledge.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-9 col-xl-6">
                            <div className="info-item"><i className="flaticon-game-console info-icon" />
                            <div className="info-content">
                                <h5 className="info-title">easy to reach </h5>
                                <p className="info-text">Always accessible and ready to respond promptly to your queries.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-9 col-xl-6">
                            <div className="info-item"><i className="flaticon-map info-icon" />
                            <div className="info-content">
                                <h5 className="info-title">worldwide services</h5>
                                <p className="info-text">Offering exceptional services to clients across the globe.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-9 col-xl-6">
                            <div className="info-item"><i className="flaticon-technical-support-1  info-icon" />
                            <div className="info-content">
                                <h5 className="info-title">24/7 support</h5>
                                <p className="info-text">Providing reliable, around-the-clock assistance for all your needs.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="cta-area"><a className=" btn-solid reveal-start" href="/contact-us">Get in touch</a>
                        <div className="signature ">
                        <div className="signature-img"></div>
                        <div className="signature-name">CEO &amp; Co Founder </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp" data-wow-delay="0.2s">
                    <div className="img-area  " data-tilt>
                    <div className="image   "><img className="about-img img-fluid " loading="lazy" src="assets/images/about/1.png" alt="Our vision" /></div>
                    </div>
                </div>
                </div>
            </div>
            {/*End first about div*/}
            </div>
        </section>
        {/* End  about Section*/}
        {/* Start  our-team Section*/}
        <section className="our-team mega-section" id="our-team">
            <div className="container">
                <div className="sec-heading">
                    <div className="content-area">
                        <span className="pre-title wow fadeInUp" data-wow-delay=".2s">Team</span>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                            our <span className="hollow-text">Experts</span> team members
                        </h2>
                    </div>
                    <div className="cta-area wow fadeInUp" data-wow-delay=".8s">
                        <a className="cta-btn btn-solid" href="/team">
                            see more<i className="bi bi-arrow-right icon" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-12 col-md-8 col-lg-4 mx-md-auto" key={index}>
                                <div className={`tm-member-card wow fadeInUp`} data-wow-delay={`${0.1 + index * 0.2}s`}>
                                    <div className="tm-image js-tilt">
                                        <a className="tm-link" >
                                            <div className="overlay overlay-color" />
                                            <img
                                                className="img-fluid parallax-img"
                                                loading="lazy"
                                                src={member.image}
                                                alt={`${member.name}`}
                                                style={{
                                                    width: '100%',
                                                    height: '600px',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <div className="tm-details">
                                        <a className="tm-link" href="team-member.html">
                                            <h6 className="tm-name">{member.name}</h6>
                                        </a>
                                        <span className="tm-role">{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <Testimonial />
 
        </div>

  )
}


  