import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function CreateJob() {
  return (
    <div className="main-wrapper">
      <Navbar></Navbar>
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-10 mx-auto">
                <div className="login-back">
                  <a href="index.html">
                    <i className="feather-arrow-left"></i> Back
                  </a>
                </div>

                <div className="row">
                  <div className="col-lg-12 mx-auto">
                    <fieldset id="first-field">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="sub-title">
                            <h6>Informasi Pekerjaan</h6>
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">Posisi</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Masukkan posisi pekerjaan"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Pengalaman</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="1 - 3 tahun pengalaman"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Skills</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MERN, SDLC"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label d-block">
                              Rentang Gaji
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="IDR 4,000,000 - IDR 6,000,000"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label d-block">
                              Tipe Pekerjaan
                            </label>
                            <div className="form-duration">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full time di Kantor"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">
                              Deskripsi Pekerjaan
                            </label>
                            <textarea className="form-control ck-editor"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="field-btns">
                            <button
                              className="btn btn-primary next_btn"
                              type="button"
                            >
                              Buat{" "}
                              <i className="feather-arrow-right-circle"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
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
