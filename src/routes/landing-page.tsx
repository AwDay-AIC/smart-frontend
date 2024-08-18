import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="main-wrapper">
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="index.html" className="navbar-brand logo">
                <img
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a href="index.html" className="navbar-brand logo-small">
                <img
                  src="assets/img/logo-small.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="index.html" className="menu-logo">
                  <img
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu">
                  <a href="index-2.html">Beranda</a>
                </li>
                <li className="has-submenu active">
                  <a href="javascript:void(0);">
                    Home <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li className="active">
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 4</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home 5</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home 6</a>
                    </li>
                    <li>
                      <a href="index-7.html">Home 7</a>
                    </li>
                    <li>
                      <a href="index-8.html">Home 8</a>
                    </li>
                    <li>
                      <a href="index-9.html">Home 9</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Services <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="service-grid.html">Service Grid</a>
                    </li>
                    <li>
                      <a href="service-list.html">Service List</a>
                    </li>
                    <li>
                      <a href="search.html">Search</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Providers</a>
                      <ul className="submenu">
                        <li>
                          <a href="providers.html">Providers List</a>
                        </li>
                        <li>
                          <a href="provider-details.html">Providers Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="service-information.html">Create Service</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="">
                    Customers <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="customer-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="customer-booking.html">Booking</a>
                    </li>
                    <li>
                      <a href="customer-favourite.html">Favorites</a>
                    </li>
                    <li>
                      <a href="customer-wallet.html">Wallet</a>
                    </li>
                    <li>
                      <a href="customer-reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="customer-chat.html">Chat</a>
                    </li>
                    <li>
                      <a href="customer-profile.html">Settings</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="">
                    Providers <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="provider-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="provider-services.html">My Services</a>
                    </li>
                    <li>
                      <a href="provider-booking.html">Booking</a>
                    </li>
                    <li>
                      <a href="provider-payout.html">Payout</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Settings</a>
                      <ul className="submenu">
                        <li>
                          <a href="provider-appointment-settings.html">
                            Appointment Settings
                          </a>
                        </li>
                        <li>
                          <a href="provider-profile-settings.html">
                            Account Settings
                          </a>
                        </li>
                        <li>
                          <a href="provider-social-profile.html">
                            Social Profiles
                          </a>
                        </li>
                        <li>
                          <a href="provider-security-settings.html">Security</a>
                        </li>
                        <li>
                          <a href="provider-plan.html">Plan & Billings</a>
                        </li>
                        <li>
                          <a href="provider-notifcations.html">Notifications</a>
                        </li>
                        <li>
                          <a href="provider-connected-apps.html">
                            Connected Apps
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#del-account"
                          >
                            Delete Account
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="provider-availability.html">Availability</a>
                    </li>
                    <li>
                      <a href="provider-holiday.html">Holidays & Leave</a>
                    </li>
                    <li>
                      <a href="provider-coupons.html">Coupons</a>
                    </li>
                    <li>
                      <a href="provider-offers.html">Offers</a>
                    </li>
                    <li>
                      <a href="provider-reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="provider-earnings.html">Earnings</a>
                    </li>
                    <li>
                      <a href="provider-chat.html">Chat</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="">
                    Pages <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="about-us.html">About</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="how-it-works.html">How It Works</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Error Page</a>
                      <ul className="submenu">
                        <li>
                          <a href="error-404.html">404 Error</a>
                        </li>
                        <li>
                          <a href="error-500.html">500 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Authentication</a>
                      <ul className="submenu">
                        <li>
                          <a href="choose-signup.html">Signup Choose </a>
                        </li>
                        <li>
                          <a href="user-signup.html">Customer Signup</a>
                        </li>
                        <li>
                          <a href="provider-signup.html">Provider Signup</a>
                        </li>
                        <li>
                          <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                          <a href="reset-password.html">Reset Password</a>
                        </li>
                        <li>
                          <a href="password-recovery.html">Password Update</a>
                        </li>
                        <li>
                          <a href="phone-otp.html">Phone OTP</a>
                        </li>
                        <li>
                          <a href="email-otp.html">Email OTP</a>
                        </li>
                        <li>
                          <a href="free-trial.html">Free Trial</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Booking</a>
                      <ul className="submenu">
                        <li>
                          <a href="booking.html">Booking</a>
                        </li>
                        <li>
                          <a href="booking-payment.html">Booking Checkout</a>
                        </li>
                        <li>
                          <a href="booking-done.html">Booking Success</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="categories.html">Categories</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms-condition.html">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="session-expired.html">Session Expired</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="blog-grid.html">
                    Blog <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="admin/index.html">Admin</a>
                </li>
                <li className="login-link">
                  <a href="choose-signup.html">Register</a>
                </li>
                <li className="login-link">
                  <a href="login.html">Login</a>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <a className="nav-link header-reg" href="choose-signup.html">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to={"/choose-signup"}>
                  <i className="fa-regular fa-circle-user me-2"></i>Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero-section">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center w-100">
              <div className="col-lg-7 col-md-10 mx-auto">
                <div className="section-search aos" data-aos="fade-up">
                  <h1>Professional Services For Your Home & Commercial</h1>
                  <p>Search From 100 Awesome Verified Ads!</p>
                  <div className="search-box">
                    <form action="search.html">
                      <div className="search-input line">
                        <div className="search-group-icon">
                          <i className="feather-map-pin"></i>
                        </div>
                        <div className="form-group mb-0">
                          <label>Your Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="America"
                          />
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="search-group-icon search-icon">
                          <i className="feather-search"></i>
                        </div>
                        <div className="form-group mb-0">
                          <label>What are you looking for?</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Car Repair Services"
                          />
                        </div>
                      </div>
                      <div className="search-btn">
                        <button className="btn btn-primary" type="submit">
                          <i className="feather-search me-2"></i>Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-imgs">
                  <div className="banner-1 shape-1">
                    <img
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/banner1.png"
                    />
                  </div>
                  <div className="banner-2 shape-3">
                    <img
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/banner2.png"
                    />
                  </div>
                  <div className="banner-3 shape-3">
                    <img
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/banner3.png"
                    />
                  </div>
                  <div className="banner-4 shape-2">
                    <img
                      className="img-responsive"
                      alt="banner"
                      src="assets/img/banner4.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Featured Categories</h2>
                <p>What do you need to find?</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <a href="categories.html" className="btn btn-primary btn-view">
                  View All<i className="feather-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-01.svg" alt="img" />
                  </span>
                </div>
                <h5>Construction</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-02.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-02.svg" alt="img" />
                  </span>
                </div>
                <h5>Car Wash</h5>
                <div className="feature-overlay">
                  <img src="assets/img/feature.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-03.svg" alt="img" />
                  </span>
                </div>
                <h5>Electrical</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-01.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-04.svg" alt="img" />
                  </span>
                </div>
                <h5>Cleaning</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-09.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-05.svg" alt="img" />
                  </span>
                </div>
                <h5>Interior</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-07.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-06.svg" alt="img" />
                  </span>
                </div>
                <h5>Carpentry</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-03.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-07.svg" alt="img" />
                  </span>
                </div>
                <h5>Computer</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-06.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-08.svg" alt="img" />
                  </span>
                </div>
                <h5>Plumbing</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-11.jpg" alt="img" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="providers-section">
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Top Providers</h2>
                <p>Meet Our Experts</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <a href="providers.html" className="btn btn-primary btn-view">
                  View All<i className="feather-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <img src="assets/img/provider/provider-11.jpg" alt="img" />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">John Smith</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Electrician</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $20.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(320)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <img src="assets/img/provider/provider-12.jpg" alt="img" />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">Michael</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Carpenter</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $50.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(228)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <img src="assets/img/provider/provider-13.jpg" alt="img" />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">Antoinette</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Cleaner</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $25.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(130)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <img src="assets/img/provider/provider-14.jpg" alt="img" />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">Thompson</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Mechanic</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $25.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(95)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section pt-0">
        <div className="container">
          <div className="row aos" data-aos="fade-up">
            <div className="col-md-12">
              <div className="offer-paths">
                <div className="offer-pathimg">
                  <img src="assets/img/offer.png" alt="img" />
                </div>
                <div className="offer-path-content">
                  <h3>We Are Offering 14 Days Free Trial</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore minim
                    veniam, quis nostrud exercitation ullamco magna aliqua.
                  </p>
                  <a
                    href="free-trial.html"
                    className="btn btn-primary btn-views"
                  >
                    Try 14 Days Free Trial
                    <i className="feather-arrow-right-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-heading aos" data-aos="fade-up">
                <h2>How It Works</h2>
                <p>Aliquam lorem ante, dapibus in, viverra quis</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <img src="assets/img/icons/work-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Choose What To Do</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>01</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <img src="assets/img/icons/find-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Find What You Want</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>02</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <img src="assets/img/icons/place-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Amazing Places</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>03</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section pricing-sections pt-0">
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div className="col-md-12 text-center aos" data-aos="fade-up">
                <h2>Pricing Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-4 col-sm-12">
              <div className="pricing-popular">
                <span className="btn w-100">Popular</span>
              </div>
              <div className="pricing-plans">
                <div className="pricing-planshead">
                  <h4>Basic</h4>
                  <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                  <h6>
                    $50<span>/month</span>
                  </h6>
                </div>
                <div className="pricing-planscontent">
                  <ul>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis unde omnis natus error</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Duis irure dolor reprehenderit voluptate</span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Nemo enim ipsam voluptatem quia </span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis iste natus error </span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit </span>
                    </li>
                  </ul>
                  <div className="pricing-btn">
                    <a href="search.html" className="btn btn-primary btn-view">
                      Get Started
                      <i className="feather-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="pricing-popular active">
                <span className="btn w-100">Popular</span>
              </div>
              <div className="pricing-plans active">
                <div className="pricing-planshead">
                  <h4>Standard</h4>
                  <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                  <h6>
                    $100<span>/month</span>
                  </h6>
                </div>
                <div className="pricing-planscontent">
                  <ul>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis unde omnis natus error</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Duis irure dolor reprehenderit voluptate</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Nemo enim ipsam voluptatem quia </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis iste natus error </span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit </span>
                    </li>
                  </ul>
                  <div className="pricing-btn">
                    <a href="search.html" className="btn btn-primary btn-view">
                      Get Started
                      <i className="feather-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="pricing-popular">
                <span className="btn w-100">Popular</span>
              </div>
              <div className="pricing-plans">
                <div className="pricing-planshead">
                  <h4>Premium</h4>
                  <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                  <h6>
                    $150<span>/month</span>
                  </h6>
                </div>
                <div className="pricing-planscontent">
                  <ul>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis unde omnis natus error</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Duis irure dolor reprehenderit voluptate</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Nemo enim ipsam voluptatem quia </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis iste natus error </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit </span>
                    </li>
                  </ul>
                  <div className="pricing-btn">
                    <a href="search.html" className="btn btn-primary btn-view">
                      Get Started
                      <i className="feather-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center aos" data-aos="fade-up">
              <div className="section-heading">
                <h2>Latest Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="blog flex-fill aos" data-aos="fade-up">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/blog-01.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="blog-item">
                    <li>
                      <i className="feather-calendar"></i>09 Aug 2022
                    </li>
                    <li>
                      <div className="post-author">
                        <a href="#">
                          <i className="feather-user"></i>
                          <span>Hal Lewis</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      How to Choose a Electrical ServiceProvider?
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="blog flex-fill aos" data-aos="fade-up">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/blog-02.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="blog-item">
                    <li>
                      <i className="feather-calendar"></i>09 Aug 2022
                    </li>
                    <li>
                      <div className="post-author">
                        <a href="#">
                          <i className="feather-user"></i>
                          <span>JohnDoe</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="blog flex-fill aos" data-aos="fade-up">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/blog-03.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="blog-item">
                    <li>
                      <i className="feather-calendar"></i>09 Aug 2022
                    </li>
                    <li>
                      <div className="post-author">
                        <a href="#">
                          <i className="feather-user"></i>
                          <span>Greg Avery</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Construction Service Scams: How to Avoid Them
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-section">
        <div className="container">
          <div className="app-sec">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="col-md-12">
                  <div className="heading aos" data-aos="fade-up">
                    <h2>Download Our App</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <h6>Scan the QR code to get the app now</h6>
                    <div className="scan-img">
                      <img
                        src="assets/img/scan-img.png"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="downlaod-btn aos" data-aos="fade-up">
                  <a href="#" target="_blank">
                    <img src="assets/img/googleplay.svg" alt="img" />
                  </a>
                  <a href="#" target="_blank">
                    <img src="assets/img/appstore.svg" alt="img" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="appimg-set aos" data-aos="fade-up">
                  <img
                    src="assets/img/app-img.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/img/logo.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p>
                      Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                      eiusmod tempor commodo consequat.
                    </p>
                  </div>
                  <div className="footer-selects">
                    <h2 className="footer-title">Language & Currency</h2>
                    <div className="row">
                      <div className="col-lg-12 d-flex">
                        <div className="footer-select">
                          <img src="assets/img/icons/global.svg" alt="img" />
                          <select className="select">
                            <option>English</option>
                            <option>France</option>
                            <option>Spanish</option>
                          </select>
                        </div>
                        <div className="footer-select">
                          <img
                            src="assets/img/icons/dropdown.svg"
                            className="footer-dropdown"
                            alt="img"
                          />
                          <select className="select">
                            <option>US Dollars</option>
                            <option>INR</option>
                            <option>Kuwait</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Quick Links</h2>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blogs</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="provider-signup.html">Become a Professional</a>
                    </li>
                    <li>
                      <a href="user-signup.html">Become a User</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <p>
                        <span>
                          <i className="feather-map-pin"></i>
                        </span>{" "}
                        367 Hillcrest Lane, Irvine, California, United States
                      </p>
                    </div>
                    <p>
                      <span>
                        <i className="feather-phone"></i>
                      </span>{" "}
                      321 546 8764
                    </p>
                    <p className="mb-0">
                      <span>
                        <i className="feather-mail"></i>
                      </span>
                      truelysell@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h2 className="footer-title">Follow Us</h2>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="footer-subtitle">Newsletter Signup</h2>
                  <div className="subscribe-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <button type="submit" className="btn footer-btn">
                      <i className="feather-send"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright &copy; 2023. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="payment-image">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/payment/visa.png" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/payment/mastercard.png"
                            alt="img"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/payment/stripe.png" alt="img" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/payment/discover.png"
                            alt="img"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms-condition.html">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div className="modal fade custom-modal" id="del-account">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 justify-content-between">
              <h5 className="modal-title">Delete Account</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x"></i>
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="write-review">
                <form action="login.html">
                  <p>
                    Are you sureyou want to delete This Account? To delete your
                    account, Type your password.
                  </p>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        placeholder="*************"
                      />
                      <span className="toggle-password feather-eye"></span>
                    </div>
                  </div>
                  <div className="modal-submit text-end">
                    <a
                      href="#"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <button type="submit" className="btn btn-danger">
                      Delete Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
