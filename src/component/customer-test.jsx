import React from 'react'

export const Testimonial = () => {
  return (
    <div>
        <section className="testimonials testimonials-1-col   has-dark-bg  mega-section " id="testimonials-img-bg">
            <div className="overlay-photo-image-bg parallax " data-bg-img="assets/images/sections-bg-images/1.jpg" data-bg-opacity=".25"> </div>
            <div className="container">
            <div className="sec-heading  centered ">
                <div className="content-area"><span className=" pre-title       wow fadeInUp " data-wow-delay=".2s">testimonials</span>
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">customers <span className="hollow-text">testmonials</span></h2>
                </div>
            </div>
            <div className="row d-flex align-items-center">
            <div className="col-12 col-md-10 mx-auto">
                <div
                className="swiper-container wow fadeInUp"
                data-wow-delay="0.2s"
                >
                <div className="swiper-wrapper">
                    {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="swiper-slide">
                        <div className="testmonial-card d-flex align-items-center justify-content-center">
                        <div className="testimonial-content">
                            <div className="customer-img">
                            <img
                                className="img-fluid"
                                loading="lazy"
                                src={testimonial.image}
                                alt={testimonial.alt}
                            />
                            </div>
                            <div className="customer-testimonial">
                            <div className="content">
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                            </div>
                            <div className="customer-info">
                            <div className="customer-details">
                                <p className="customer-name">{testimonial.name}</p>
                                <p className="customer-role">{testimonial.role}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                {/* Navigation buttons */}
                <div className="swiper-button-prev">
                    <div className="left-arrow">
                    <i className="bi bi-chevron-left icon" />
                    </div>
                </div>
                <div className="swiper-button-next">
                    <div className="right-arrow">
                    <i className="bi bi-chevron-right icon" />
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    </div>
  )
}

const testimonials = [
    {
      id: 1,
      image: "assets/images/our-team/1.jpg",
      alt: "First Slide",
      text: "This company exceeded my expectations in every way. Their team is professional, efficient, and truly cares about their customers. I highly recommend their services!",
      name: "Emily Johnson",
      role: "CEO, Tech Solutions",
    },
    {
      id: 2,
      image: "assets/images/our-team/2.jpg",
      alt: "Second Slide",
      text: "We have been working with this team for over a year, and their commitment to excellence is unmatched. They deliver on time and with outstanding quality.",
      name: "Sarah Williams",
      role: "Java Senior Software Engineer",
    },
    {
      id: 3,
      image: "assets/images/our-team/8.jpg",
      alt: "Third Slide",
      text: "Their innovative solutions have helped our business grow significantly. The customer support is fantastic, and they always go the extra mile for us.",
      name: "Michael Brown",
      role: "Hotel Opration Manager",
    },
    {
      id: 4,
      image: "assets/images/our-team/3.jpg",
      alt: "Fourth Slide",
      text: "From start to finish, the experience was smooth and hassle-free. Their attention to detail and dedication to customer satisfaction are truly commendable.",
      name: "James Carter",
      role: "Founder, Fabs Beauty",
    },
    {
        id: 5,
        image: "assets/images/our-team/5.jpg",
        alt: "Fifth Slide",
        text: "Their Online IT Support helped my business in the networking of my Cafe.",
        name: "Tony Adams",
        role: "Founder, Taotech Solutions",
      },
  ];
  
  