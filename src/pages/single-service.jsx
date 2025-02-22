import React from 'react'

export const SingleService = () => {
  return (
        <div>
        <section className="d-flex align-items-center page-hero  inner-page-hero " id="page-hero">
            <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
            <div className="overlay-color" data-bg-opacity=".75" />
            <div className="container">
            <div className="hero-text-area centerd">
                <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">service details</h1>
                <nav aria-label="breadcrumb ">
                <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="#0"><i className="bi bi-house icon " />home</a></li>
                    <li className="breadcrumb-item active">service details</li>
                </ul>
                </nav>
            </div>
            </div>
        </section>
        {/* End inner Page hero*/}
        {/* Start inner Page hero*/}
        <div className="service-single "> 
            <div className="container">
            <div className="row">
                {/*Start service content*/}
                <div className="col-12 col-xl-8  ">
                <div className="service-content-area">
                    <div className="featured-img-area part"><img className="feat-img img-fluid" src="assets/images/services/service-single-featured-img.jpg" alt="featured image" /></div>
                    <div className="service-content">
                    <div className="part">
                        <h2 className="service-title">Information Security services we offer</h2>
                        <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae velit nostrum! Voluptas velit accusamus alias odio?</p>
                        <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae </p>
                    </div>
                    <div className="part">
                        <div className="two-cols-img ">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                            <div className="img-col"><img className="img-fluid" src="assets/images/services/service-single-img-col-1.jpg" loading="lazy" alt="service single image " /></div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="img-col"><img className="img-fluid" src="assets/images/services/service-single-img-col-2.jpg" loading="lazy" alt="service single image " /></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="part">
                        <h2 className="service-title">Information Security services we offer</h2>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet magni earum ad suscipit doloremque perferendis debitis perspiciatis iste reiciendis odio ducimus quis, dolor minima. Deserunt ea aliquam, ad expedita neque voluptas sequi saepe error nesciunt? Culpa dolore voluptatibus sed impedit blanditiis excepturi harum dolor. </p>
                        <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae </p>
                    </div>
                    <div className="part">
                        <div className="info-items-list">
                        <div className="row">
                            <div className="col-12 col-md-6 ">
                            <div className="info-item"><span className="info-number ">01.</span>
                                <div className="info-content">
                                <h5 className="info-title">latest technologies </h5>
                                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-12 col-md-6 ">
                            <div className="info-item"><span className="info-number ">02.</span>
                                <div className="info-content">
                                <h5 className="info-title">uniqe solutions </h5>
                                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-12 col-md-6 ">
                            <div className="info-item"><span className="info-number ">03.</span>
                                <div className="info-content">
                                <h5 className="info-title">powerful strategies </h5>
                                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-12 col-md-6 ">
                            <div className="info-item"><span className="info-number ">04.</span>
                                <div className="info-content">
                                <h5 className="info-title">delever just on time </h5>
                                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="part">
                        <h2 className="service-title"> most asked questions</h2>
                        <div className="faq">           
                        {/*Start Accordion List For FAQ*/}
                        <div className="faq-accordion " id="accordion">
                            <div className="card mb-2">
                            <div className="card-header " id="heading-1">
                                <h5 className="mb-0 faq-title">
                                <button className="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">are your service easy to use?</button>
                                </h5>
                            </div>
                            <div className="collapse " id="collapse-1" aria-labelledby="collapse-1" data-bs-parent="#accordion">
                                <div className="card-body">
                                <p className="faq-answer">mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                    aute,
                                    non cupidatat skateboard dolor brunch. Food truck quinoa
                                    nesciunt
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                    a
                                    bird on it squid single-origin coffee nulla assumenda
                                    shoreditch
                                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                    anderson
                                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher
                                    vice lomo. Leggings occaecat craft beer farm-to-table. </p>
                                </div>
                            </div>
                            </div>
                            <div className="card mb-2">
                            <div className="card-header " id="heading-2">
                                <h5 className="mb-0 faq-title">
                                <button className="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">will i receive future updates?</button>
                                </h5>
                            </div>
                            <div className="collapse " id="collapse-2" aria-labelledby="collapse-2" data-bs-parent="#accordion">
                                <div className="card-body">
                                <p className="faq-answer">mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                    aute,
                                    non cupidatat skateboard dolor brunch. Food truck quinoa
                                    nesciunt
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                    a
                                    bird on it squid single-origin coffee nulla assumenda
                                    shoreditch
                                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                    anderson
                                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher
                                    vice lomo. Leggings occaecat craft beer farm-to-table. </p>
                                </div>
                            </div>
                            </div>
                            <div className="card mb-2">
                            <div className="card-header " id="heading-3">
                                <h5 className="mb-0 faq-title">
                                <button className="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">is this services work in my country?</button>
                                </h5>
                            </div>
                            <div className="collapse " id="collapse-3" aria-labelledby="collapse-3" data-bs-parent="#accordion">
                                <div className="card-body">
                                <p className="faq-answer">mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                    aute,
                                    non cupidatat skateboard dolor brunch. Food truck quinoa
                                    nesciunt
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                    a
                                    bird on it squid single-origin coffee nulla assumenda
                                    shoreditch
                                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                    anderson
                                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher
                                    vice lomo. Leggings occaecat craft beer farm-to-table. </p>
                                </div>
                            </div>
                            </div>
                            <div className="card mb-2">
                            <div className="card-header " id="heading-4">
                                <h5 className="mb-0 faq-title">
                                <button className="btn btn-link  faq-btn  collapsed " data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">How much I will pay?</button>
                                </h5>
                            </div>
                            <div className="collapse " id="collapse-4" aria-labelledby="collapse-4" data-bs-parent="#accordion">
                                <div className="card-body">
                                <p className="faq-answer">mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                    aute,
                                    non cupidatat skateboard dolor brunch. Food truck quinoa
                                    nesciunt
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                    a
                                    bird on it squid single-origin coffee nulla assumenda
                                    shoreditch
                                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                    anderson
                                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher
                                    vice lomo. Leggings occaecat craft beer farm-to-table. </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Start service content*/}
                {/* Start service sidebar*/}
                <div className="col-12 col-xl-4">
                <div className="service-sidebar ">
                    <div className="sidebar-pane">
                    <h2 className="sidebar-title">list of services</h2>
                    <ul className="list">
                        <li className="list-item active"><i className="flaticon-web-development font-icon" /><a href="#0"> web development<i className="bi bi-arrow-right icon " /></a></li>
                        <li className="list-item"><i className="flaticon-nanotechnology font-icon" /><a href="#0"> Digital Marketing<i className="bi bi-arrow-right icon " /></a></li>
                        <li className="list-item"><i className="flaticon-web-domain font-icon" /><a href="#0"> SaaS products <i className="bi bi-arrow-right icon " /></a></li>
                        <li className="list-item"><i className="flaticon-profile font-icon" /><a href="#0"> Apps development<i className="bi bi-arrow-right icon " /></a></li>
                        <li className="list-item"><i className="flaticon-search font-icon" /><a href="#0"> SEO services<i className="bi bi-arrow-right icon " /></a></li>
                        <li className="list-item"><i className="flaticon-strategy font-icon" /><a href="#0"> data analysis<i className="bi bi-arrow-right icon " /></a></li>
                    </ul>
                    </div>
                    <div className="sidebar-pane">
                    <div className="download-area">
                        <h2 className="sidebar-title">download assets</h2>
                        <p className="sidebar-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima distinctio dolores quidem ducimus! Illum.</p>
                        <ul className="list">
                        <li className="list-item"><i className="flaticon-downloading font-icon" /><a href="#0">
                            service-report<i className="bi bi-arrow-right icon " /></a></li>
                        <li className="list-item"><i className="flaticon-downloading font-icon" /><a href="#0">
                            all services<i className="bi bi-arrow-right icon " /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="sidebar-pane">
                    <div className="social-area">
                        <h2 className="sidebar-title">follow us</h2>
                        <div className="sc-wrapper dir-row sc-size-40">
                        <ul className="sc-list">
                            <li className="sc-item " title="Facebook"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-facebook-f sc-icon" /></a></li>
                            <li className="sc-item " title="youtube"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-youtube sc-icon" /></a></li>
                            <li className="sc-item " title="instagram"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-instagram sc-icon" /></a></li>
                            <li className="sc-item " title="X"><a className="sc-link" href="#0" title="social media icon"><i className="fab fa-x-twitter sc-icon" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* End service sidebar*/}
            </div>
            </div>
        </div>
       
        </div>

  )
}
