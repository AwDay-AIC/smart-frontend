import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

export default function Jobs() {
  return (
    <div className="main-wrapper">
      <Navbar />

      <div className="bg-img">
        <img src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
        <img src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
        <img
          src="assets/img/bg/feature-bg-03.png"
          alt="img"
          className="bgimg3"
        />
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Cari Lowongan Pekerjaan</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cari loker
                  </li>
                </ol>
              </nav>
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
                  <h5>Filter</h5>
                  <a href="#" className="reset-link">
                    Reset
                  </a>
                </div>
                <div className="filter-content">
                  <h2>Kata kunci</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apa yang ingin Anda cari?"
                  />
                </div>
                <div className="filter-content">
                  <h2>
                    Kategori{" "}
                    <span>
                      <i className="feather-chevron-down"></i>
                    </span>
                  </h2>
                  <div className="filter-checkbox" id="fill-more">
                    <ul>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i></i>
                          </span>
                          <b className="check-content">Semua Kategori</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i></i>
                          </span>
                          <b className="check-content">Konstruksi</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i></i>
                          </span>
                          <b className="check-content">Admin & Perbankan</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i></i>
                          </span>
                          <b className="check-content">Multimedia</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i></i>
                          </span>
                          <b className="check-content">Engineering</b>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <a href="javascript:void(0);" id="more" className="more-view">
                    Lihat selengkapnya{" "}
                    <i className="feather-arrow-down-circle ms-1"></i>
                  </a>
                </div>
                <div className="filter-content">
                  <h2>Sub Kategori</h2>
                  <select className="form-control select">
                    <option>Semua Sub Kategori</option>
                    <option>Computer</option>
                    <option>Construction</option>
                  </select>
                </div>
                <div className="filter-content">
                  <h2>Lokasi</h2>
                  <div className="group-img">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pilih lokasi"
                    />
                    <i className="feather-map-pin"></i>
                  </div>
                </div>
                <div className="filter-content">
                  <h2 className="mb-4">Rentang Gaji</h2>
                  <div className="filter-range">
                    <input type="text" id="range_03" />
                  </div>
                  <div className="filter-range-amount">
                    <h5>
                      Gaji: <span>IDR 1,500,000 - IDR 4,000,000</span>
                    </h5>
                  </div>
                </div>
                <button className="btn btn-primary">Cari</button>
              </div>
            </div>
            <div className="col-lg-9 col-sm-12">
              <div className="row sorting-div">
                <div className="col-lg-4 col-sm-12 ">
                  <div className="count-search">
                    <h6>Ditemukan 11 Loker dari Pencarian</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
                  <div className="sortbyset">
                    <div className="sorting-select">
                      <select className="form-control select">
                        {" "}
                        n<option>Terbaru</option>
                        <option>Terlama</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid-listview">
                    <ul>
                      <li>
                        <a href="search.html" className="active">
                          <i className="feather-grid"></i>
                        </a>
                      </li>
                      <li>
                        <a href="search-list.html">
                          <i className="feather-list"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="service-widget servicecontent">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-04.jpg"
                        />
                      </a>
                      <div className="fav-item">
                        <a href="categories.html">
                          <span className="item-cat">Car Wash</span>
                        </a>
                        <a href="javascript:void(0)" className="fav-icon">
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                      <div className="item-info">
                        <a href="providers.html">
                          <span className="item-img">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              className="avatar"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link to={"/job-details"}>Car Repair Services</Link>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>Maryland City, MD,
                        USA
                        <span className="rate">
                          <i className="fas fa-star filled"></i>4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>$50.00</h6>
                        <a href="booking.html" className="btn btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-widget servicecontent">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-02.jpg"
                        />
                      </a>
                      <div className="fav-item">
                        <a href="categories.html">
                          <span className="item-cat">Construction</span>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="fav-icon selected"
                        >
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                      <div className="item-info">
                        <a href="providers.html">
                          <span className="item-img">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              className="avatar"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <a href="service-details.html">
                          Toughened Glass Fitting Services
                        </a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>New Jersey, USA
                        <span className="rate">
                          <i className="fas fa-star filled"></i>4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>$25.00</h6>
                        <a href="booking.html" className="btn btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-widget servicecontent">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-06.jpg"
                        />
                      </a>
                      <div className="fav-item">
                        <a href="categories.html">
                          <span className="item-cat">Computer</span>
                        </a>
                        <a href="javascript:void(0)" className="fav-icon">
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                      <div className="item-info">
                        <a href="providers.html">
                          <span className="item-img">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              className="avatar"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <a href="service-details.html">
                          Computer & Server AMC Service
                        </a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>California, USA
                        <span className="rate">
                          <i className="fas fa-star filled"></i>4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>
                          $20.00<span className="old-price">$35.00</span>
                        </h6>
                        <a href="booking.html" className="btn btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-widget servicecontent">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-07.jpg"
                        />
                      </a>
                      <div className="fav-item">
                        <a href="categories.html">
                          <span className="item-cat">Interior</span>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="fav-icon selected"
                        >
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                      <div className="item-info">
                        <a href="providers.html">
                          <span className="item-img">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              className="avatar"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <a href="service-details.html">Interior Designing</a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>Maryland, USA
                        <span className="rate">
                          <i className="fas fa-star filled"></i>4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>
                          $5.00<span className="old-price">$25.00</span>
                        </h6>
                        <a href="booking.html" className="btn btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-widget servicecontent">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-08.jpg"
                        />
                      </a>
                      <div className="fav-item">
                        <a href="categories.html">
                          <span className="item-cat">Car Wash</span>
                        </a>
                        <a href="javascript:void(0)" className="fav-icon">
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                      <div className="item-info">
                        <a href="providers.html">
                          <span className="item-img">
                            <img
                              src="assets/img/profiles/avatar-04.jpg"
                              className="avatar"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <a href="service-details.html">Steam Car Wash</a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>Montana, USA
                        <span className="rate">
                          <i className="fas fa-star filled"></i>4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>$14.00</h6>
                        <a href="booking.html" className="btn btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="service-widget servicecontent">
                    <div className="service-img">
                      <a href="service-details.html">
                        <img
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-01.jpg"
                        />
                      </a>
                      <div className="fav-item">
                        <a href="categories.html">
                          <span className="item-cat">Electrical</span>
                        </a>
                        <a href="javascript:void(0)" className="fav-icon">
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                      <div className="item-info">
                        <a href="providers.html">
                          <span className="item-img">
                            <img
                              src="assets/img/profiles/avatar-05.jpg"
                              className="avatar"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <a href="service-details.html">
                          Electric Panel Repairing Service
                        </a>
                      </h3>
                      <p>
                        <i className="feather-map-pin"></i>Texas, USA
                        <span className="rate">
                          <i className="fas fa-star filled"></i>4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>$45</h6>
                        <a href="booking.html" className="btn btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="blog-pagination rev-page">
                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link page-prev" href="#">
                            <i className="fa-solid fa-arrow-left me-1"></i> PREV
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link page-next" href="#">
                            NEXT{" "}
                            <i className="fa-solid fa-arrow-right ms-1"></i>
                          </a>
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

      <Footer />

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
