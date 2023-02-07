import React from "react";

function Header() {
  // jsx문법에서는 class를 className으로 써야한다 html처럼 보이지만 자바스크립트이기 때문이다
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <a href="/" className="text-white">
            ComplexApp
          </a>
        </h4>
        <form className="mb-0 pt-2 pt-md-0">
          <div className="row align-items-center">
            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
              <input
                name="username"
                className="form-control form-control-sm input-dark"
                type="text"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
              <input
                name="password"
                className="form-control form-control-sm input-dark"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="col-md-auto">
              <button className="btn btn-success btn-sm">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
