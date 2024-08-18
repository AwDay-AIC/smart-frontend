import { Link } from "react-router-dom";

export default function RegisterCompany() {
  return (
    <div className="login-body">
      <div className="main-wrapper">
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
                    <h3>Daftar Akun Perusahaan</h3>
                  </div>

                  <form action="customer-dashboard.html">
                    <div className="log-form">
                      <div className="form-group">
                        <label className="col-form-label">Nama Lengkap</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John doe"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">E-mail</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@email.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Nomor Whatsapp</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="08123456789"
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label d-block">
                          Kata Sandi
                        </label>
                        <div className="pass-group">
                          <input
                            type="password"
                            className="form-control pass-input"
                            placeholder="*************"
                          />
                          <span className="toggle-password feather-eye"></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="char-length">
                            <p>Minimal 6 karakter</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary w-100 login-btn"
                      type="submit"
                    >
                      Daftar
                    </button>
                    <p className="no-acc">
                      Sudah memiliki akun ? <Link to="/login">Masuk</Link>
                    </p>
                  </form>
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
