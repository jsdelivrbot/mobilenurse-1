var Signin = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <form className="form-signin" action='/login' method="post">
          <h1 className="form-signin-heading"><strong>mobilenurse.io</strong></h1>
          <h3 className="form-signin-heading"> mobile medical exams</h3>

          <input type="text" className="form-control" name="username" placeholder="Email" required="" autofocus="" />
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
          </label>
          <button id="bootstrap-btn-overrides" type="submit">LOGIN</button>
          <br />
          <a className="form-signin" href="/register">create account</a>
        </form>
      </div>
    )
  }
});

ReactDOM.render(<Signin />,document.getElementById('wrapper'));
