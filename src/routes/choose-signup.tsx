import { Link } from "react-router-dom";

export default function ChooseSignup() {
  return (
    <div className="login-body">
      <div className="main-wrapper">
        <header className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
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
                    {" "}
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                <ul className="main-nav">
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Home <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
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
                            <a href="provider-details.html">
                              Providers Details
                            </a>
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
                            <a href="provider-security-settings.html">
                              Security
                            </a>
                          </li>
                          <li>
                            <a href="provider-plan.html">Plan & Billings</a>
                          </li>
                          <li>
                            <a href="provider-notifcations.html">
                              Notifications
                            </a>
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
                  <li className="has-submenu active">
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
                      <li className="has-submenu active">
                        <a href="javascript:void(0);">Authentication</a>
                        <ul className="submenu">
                          <li className="active">
                            <a href="choose-signup.html">Signup Choose </a>
                          </li>
                          <li>
                            <a href="user-signup.html">Customer Signup</a>
                          </li>
                          <li>
                            <a href="provider-signup.html">Provider Signup</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
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
              <ul className="nav header-navbar-rht log-rht">
                <li className="nav-item">
                  <a className="nav-link" href="faq.html">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login.html">
                    Login
                  </a>
                </li>
                <li className="nav-item dropdown flag-nav">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <img src="assets/img/flag.png" alt="" /> En
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/img/flags/us.png" alt="" height="16" />{" "}
                      En
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/img/flags/fr.png" alt="" height="16" />{" "}
                      French
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <img src="assets/img/flags/de.png" alt="" height="16" />{" "}
                      German
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 mx-auto">
                <div className="login-wrap">
                  <div className="login-back">
                    <Link to={"/"}>
                      <img
                        src="assets/img/icons/undo-icon.svg"
                        className="me-2"
                        alt="icon"
                      />
                      Kembali
                    </Link>
                  </div>
                  <div className="login-header">
                    <h3>Daftar Akun</h3>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="choose-signup flex-fill">
                        <h6>Perusahaan</h6>
                        <div className="choose-img">
                          <img src="assets/img/provider.png" alt="" />
                        </div>
                        <Link
                          to={"/register-company"}
                          className="btn btn-secondary w-100"
                        >
                          Daftar
                          <i className="feather-arrow-right-circle ms-1"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="choose-signup flex-fill mb-0">
                        <h6>Pelamar</h6>
                        <div className="choose-img">
                          <img src="assets/img/user.png" alt="" />
                        </div>
                        <Link
                          to={"/register-user"}
                          className="btn btn-secondary w-100"
                        >
                          Daftar
                          <i className="feather-arrow-right-circle ms-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
      </div>
    </div>
  );
}
