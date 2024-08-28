import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className="login-body">
        <div className="main-wrapper">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 mx-auto">
                  <div className="login-wrap">
                    <div className="login-header">
                      <h3>Masuk</h3>
                    </div>

                    <form action="customer-dashboard.html">
                      <div className="log-form">
                        <div className="form-group">
                          <label className="col-form-label">E-mail</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="example@email.com"
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
                      </div>
                      <button
                        className="btn btn-primary w-100 login-btn"
                        type="submit"
                      >
                        Masuk
                      </button>
                      <p className="no-acc">
                        Belum memiliki akun ?{" "}
                        <Link to="/choose-signup">Daftar</Link>
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
    </>
  );
}
