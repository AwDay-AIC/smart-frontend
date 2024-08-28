import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function JobDetails() {
  return (
    <div className="main-wrapper">
      <Navbar></Navbar>

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="breadcrumb-title mb-0">Backend Developer</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="provider-info">
                <h2>Backend Developer</h2>
                <h5>Traveloka</h5>
                <p>
                  Traveloka adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo dolor in reprehenderit
                  in voluptate consequat.{" "}
                </p>
                <div className="row">
                  <h4>Persyaratan</h4>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-mail"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Tech Stack</h6>
                        <p>Laravel, Codeigniter</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-phone"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Pengalaman</h6>
                        <p>1 - 3 tahun pengalaman (Junior)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-book-open"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Language</h6>
                        <p>English, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="provider-details">
                <h5>Deskripsi Pekerjaan</h5>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </li>
                      <li>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </li>
                      <li>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="mb-0">
                      <li>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </li>
                      <li>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </li>
                      <li>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="contact-queries">
                <h2>Lamar dengan mudah</h2>
                <form action="contact-us.html">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="col-form-label">Name</label>
                        <div className="form-icon">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your Full Name"
                          />
                          <span className="cus-icon">
                            <i className="feather-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="col-form-label">Email</label>
                        <div className="form-icon">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Enter Email Address"
                          />
                          <span className="cus-icon">
                            <i className="feather-mail"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="col-form-label">Phone Number</label>
                        <div className="form-icon">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Phone Number"
                          />
                          <span className="cus-icon">
                            <i className="feather-phone"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="col-form-label">Message</label>
                        <div className="form-icon form-msg">
                          <textarea
                            className="form-control"
                            placeholder="Enter your Comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button className="btn btn-primary" type="submit">
                        Lamar
                        <i className="feather-arrow-right-circle ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
