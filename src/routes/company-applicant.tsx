export default function CompanyApplicant() {
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
							<img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
						</a>
						<a href="index.html" className="navbar-brand logo-small">
							<img src="assets/img/logo-small.png" className="img-fluid" alt="Logo" />
						</a>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<a href="index.html" className="menu-logo">
								<img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
							</a>
							<a id="menu_close" className="menu-close" href="javascript:void(0);"> <i className="fas fa-times"></i></a>
						</div>
						
						<ul className="main-nav">
							<li className="has-submenu">
								<a href="javascript:void(0);">Home <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="index.html">Home 1</a></li>
									<li><a href="index-2.html">Home 2</a></li>
									<li><a href="index-3.html">Home 3</a></li>
									<li><a href="index-4.html">Home 4</a></li>
									<li><a href="index-5.html">Home 5</a></li>
									<li><a href="index-6.html">Home 6</a></li>
									<li><a href="index-7.html">Home 7</a></li>
									<li><a href="index-8.html">Home 8</a></li>
									<li><a href="index-9.html">Home 9</a></li>
								</ul>
							</li>
							<li className="has-submenu active">
								<a href="javascript:void(0);">Services <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="service-grid.html">Service Grid</a></li>
									<li className="active"><a href="service-list.html">Service List</a></li>
									<li><a href="search.html">Search</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Providers</a>
										<ul className="submenu">
											<li><a href="providers.html">Providers List</a></li>
											<li><a href="provider-details.html">Providers Details</a></li>
										</ul>
									</li>
									<li><a href="service-information.html">Create Service</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="">Customers <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="customer-dashboard.html">Dashboard</a></li>
									<li><a href="customer-booking.html">Booking</a></li>
									<li><a href="customer-favourite.html">Favorites</a></li>
									<li><a href="customer-wallet.html">Wallet</a></li>
									<li><a href="customer-reviews.html">Reviews</a></li>
									<li><a href="customer-chat.html">Chat</a></li>
									<li><a href="customer-profile.html">Settings</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="">Providers <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="provider-dashboard.html">Dashboard</a></li>
									<li><a href="provider-services.html">My Services</a></li>
									<li><a href="provider-booking.html">Booking</a></li>
									<li><a href="provider-payout.html">Payout</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Settings</a>
										<ul className="submenu">
											<li><a href="provider-appointment-settings.html">Appointment Settings</a></li>
											<li><a href="provider-profile-settings.html">Account Settings</a></li>
											<li><a href="provider-social-profile.html">Social Profiles</a></li>
											<li><a href="provider-security-settings.html">Security</a></li>
											<li><a href="provider-plan.html">Plan & Billings</a></li>
											<li><a href="provider-notifcations.html">Notifications</a></li>
											<li><a href="provider-connected-apps.html">Connected Apps</a></li>
											<li><a href="#" data-bs-toggle="modal" data-bs-target="#del-account">Delete Account</a></li>
										</ul>
									</li>
									<li><a href="provider-availability.html">Availability</a></li>
									<li><a href="provider-holiday.html">Holidays & Leave</a></li>
									<li><a href="provider-coupons.html">Coupons</a></li>
									<li><a href="provider-offers.html">Offers</a></li>
									<li><a href="provider-reviews.html">Reviews</a></li>
									<li><a href="provider-earnings.html">Earnings</a></li>
									<li><a href="provider-chat.html">Chat</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="">Pages <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="about-us.html">About</a></li>
									<li><a href="contact-us.html">Contact Us</a></li>
									<li><a href="how-it-works.html">How It Works</a></li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Error Page</a>
										<ul className="submenu">
											<li><a href="error-404.html">404 Error</a></li>
											<li><a href="error-500.html">500 Error</a></li>
										</ul>
									</li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Authentication</a>
										<ul className="submenu">
											<li><a href="choose-signup.html">Signup Choose </a></li>
											<li><a href="user-signup.html">Customer Signup</a></li>
											<li><a href="provider-signup.html">Provider Signup</a></li>
											<li><a href="login.html">Login</a></li>
											<li><a href="reset-password.html">Reset Password</a></li>
											<li><a href="password-recovery.html">Password Update</a></li>
											<li><a href="phone-otp.html">Phone OTP</a></li>
											<li><a href="email-otp.html">Email OTP</a></li>
											<li><a href="free-trial.html">Free Trial</a></li>
										</ul>
									</li>
									<li className="has-submenu">
										<a href="javascript:void(0);">Booking</a>
										<ul className="submenu">
											<li><a href="booking.html">Booking</a></li>
											<li><a href="booking-payment.html">Booking Checkout</a></li>
											<li><a href="booking-done.html">Booking Success</a></li>
										</ul>
									</li>
									<li><a href="categories.html">Categories</a></li>
									<li><a href="pricing.html">Pricing Plan</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="maintenance.html">Maintenance</a></li>
									<li><a href="coming-soon.html">Coming Soon</a></li>
									<li><a href="privacy-policy.html">Privacy Policy</a></li>
									<li><a href="terms-condition.html">Terms & Conditions</a></li>
									<li><a href="session-expired.html">Session Expired</a></li>
								</ul>
							</li>
							<li className="has-submenu">
								<a href="blog-grid.html">Blog <i className="fas fa-chevron-down"></i></a>
								<ul className="submenu">
									<li><a href="blog-grid.html">Blog Grid</a></li>
									<li><a href="blog-list.html">Blog List</a></li>
									<li><a href="blog-details.html">Blog Details</a></li>
								</ul>
							</li>
							<li><a href="admin/index.html">Admin</a></li>
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
							<a className="nav-link header-reg" href="choose-signup.html">Register</a>
						</li>
						<li className="nav-item">
							<a className="nav-link header-login" href="login.html"><i className="fa-regular fa-circle-user"></i> Login</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		
		
		
		<div className="bg-img">
			<img src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
			<img src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
			<img src="assets/img/bg/feature-bg-03.png" alt="img" className="bgimg3" />
		</div>
		
		
		<div className="breadcrumb-bar">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-12">
						<h2 className="breadcrumb-title">Applicant</h2>
					</div>
				</div>
			</div>
		</div>
			
		
		<div className="content">
			<div className="container">
				
				<div className="row">
				
					
					<div className="col-lg-3 col-sm-12 theiaStickySidebar">
						<div className="filter-div">
							<div className="filter-head">
								<h5>Filter by</h5>
								<a href="#" className="reset-link">Reset Filters</a>
							</div>
							<div className="filter-content">
								<h2>Keyword</h2>
								<input type="text" className="form-control" placeholder="What are you looking for?" />
							</div>
							
							<button className="btn btn-primary">Search</button>
						</div>
					</div>
					
					
					
					<div className="col-lg-9 col-sm-12">
						<div className="row sorting-div mb-2">
							<div className="col-lg-4 col-sm-12 ">
								<div className="count-search">
									<h6>Found 6 Services</h6>
								</div>
							</div>
							<div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
								<button className="btn btn-primary">Smart Filter</button>	
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
						
								
								<div className="service-list">
									<div className="service-cont">
										<div className="service-cont-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-04.jpg" />
											</a>
										</div>
										<div className="service-cont-info">
											<span className="item-cat">67% Match</span>
											<h3 className="title">
												<a href="service-details.html">Muhammad David</a>
											</h3>
											<p><i className="feather-map-pin"></i>Bandung, Indonesia</p>
										</div>
									</div>
									<div className="service-action">
										<a href="booking.html" className="btn btn-secondary">Download CV</a>
									</div>
								</div>
								
							
								
								<div className="service-list">
									<div className="service-cont">
										<div className="service-cont-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-02.jpg" />
											</a>
											<div className="fav-item">
												<a href="javascript:void(0)" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
										</div>
										<div className="service-cont-info">
											<span className="item-cat">Construction</span>
											<h3 className="title">
												<a href="service-details.html">Toughened Glass Fitting Services</a>
											</h3>
											<p><i className="feather-map-pin"></i>New Jersey, USA</p>
											<div className="service-pro-img">
												<img src="assets/img/profiles/avatar-02.jpg" alt="" />
												<span><i className="fas fa-star filled"></i>4.9</span>
											</div>
										</div>
									</div>
									<div className="service-action">
										<h6>$30.00<span className="old-price">$35.00</span></h6>
										<a href="booking.html" className="btn btn-secondary">Book Now</a>
									</div>
								</div>
								
							
								
								<div className="service-list">
									<div className="service-cont">
										<div className="service-cont-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-06.jpg" />
											</a>
											<div className="fav-item">
												<a href="javascript:void(0)" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
										</div>
										<div className="service-cont-info">
											<span className="item-cat">Computer</span>
											<h3 className="title">
												<a href="service-details.html">Computer & Server AMC Service</a>
											</h3>
											<p><i className="feather-map-pin"></i>California, USA</p>
											<div className="service-pro-img">
												<img src="assets/img/profiles/avatar-05.jpg" alt="" />
												<span><i className="fas fa-star filled"></i>4.9</span>
											</div>
										</div>
									</div>
									<div className="service-action">
										<h6>$30.00<span className="old-price">$35.00</span></h6>
										<a href="booking.html" className="btn btn-secondary">Book Now</a>
									</div>
								</div>
								
							
								
								<div className="service-list">
									<div className="service-cont">
										<div className="service-cont-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-07.jpg" />
											</a>
											<div className="fav-item">
												<a href="javascript:void(0)" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
										</div>
										<div className="service-cont-info">
											<span className="item-cat">Interior</span>
											<h3 className="title">
												<a href="service-details.html">Interior Designing</a>
											</h3>
											<p><i className="feather-map-pin"></i>Maryland, USA</p>
											<div className="service-pro-img">
												<img src="assets/img/profiles/avatar-06.jpg" alt="" />
												<span><i className="fas fa-star filled"></i>4.9</span>
											</div>
										</div>
									</div>
									<div className="service-action">
										<h6>$15.00<span className="old-price">$25.00</span></h6>
										<a href="booking.html" className="btn btn-secondary">Book Now</a>
									</div>
								</div>
								
							
								
								<div className="service-list">
									<div className="service-cont">
										<div className="service-cont-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-09.jpg" />
											</a>
											<div className="fav-item">
												<a href="javascript:void(0)" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
										</div>
										<div className="service-cont-info">
											<span className="item-cat">Cleaning</span>
											<h3 className="title">
												<a href="service-details.html">House Cleaning Services</a>
											</h3>
											<p><i className="feather-map-pin"></i>Georgia</p>
											<div className="service-pro-img">
												<img src="assets/img/profiles/avatar-09.jpg" alt="" />
												<span><i className="fas fa-star filled"></i>4.9</span>
											</div>
										</div>
									</div>
									<div className="service-action">
										<h6>$55.00<span className="old-price">$60.00</span></h6>
										<a href="booking.html" className="btn btn-secondary">Book Now</a>
									</div>
								</div>
								
							
								
								<div className="service-list">
									<div className="service-cont">
										<div className="service-cont-img">
											<a href="service-details.html">
												<img className="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-10.jpg" />
											</a>
											<div className="fav-item">
												<a href="javascript:void(0)" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
										</div>
										<div className="service-cont-info">
											<span className="item-cat">Construction</span>
											<h3 className="title">
												<a href="service-details.html">Building Construction Services</a>
											</h3>
											<p><i className="feather-map-pin"></i>Montana, USA</p>
											<div className="service-pro-img">
												<img src="assets/img/profiles/avatar-09.jpg" alt="" />
												<span><i className="fas fa-star filled"></i>4.9</span>
											</div>
										</div>
									</div>
									<div className="service-action">
										<h6>$45.00<span className="old-price">$50.00</span></h6>
										<a href="booking.html" className="btn btn-secondary">Book Now</a>
									</div>
								</div>
								
							
							</div>
						</div>
						
						
						<div className="row">
							<div className="col-sm-12">
								<div className="blog-pagination rev-page">
									<nav>
										<ul className="pagination justify-content-center mt-0">
											<li className="page-item disabled">
												<a className="page-link page-prev" href="#" tabIndex={-1}><i className="fa-solid fa-arrow-left me-1"></i> PREV</a>
											</li>
											<li className="page-item active">
												<a className="page-link" href="#">1</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">2</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">3</a>
											</li>
											<li className="page-item">
												<a className="page-link page-next" href="#">NEXT <i className="fa-solid fa-arrow-right ms-1"></i></a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						
						
					</div>
					
					
				</div>
			</div>			
		</div>
		
		
		<footer className="footer">
		
			
			
			
			<div className="footer-bottom">
				<div className="container">
					
					<div className="copyright">
						<div className="row align-items-center">
							<div className="col-md-4">
								<div className="copyright-text">
									<p className="mb-0">Copyright &copy; 2024. All Rights Reserved.</p>
								</div>
							</div>
							<div className="col-md-4">
								
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
		
		
		
		
	</div>


	);
}
