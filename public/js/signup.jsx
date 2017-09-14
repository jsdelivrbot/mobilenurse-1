var Signup = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <form className="form-signin" method='post' action='/register'>
          <h1 className="form-signin-heading"><strong>mobilenurse.io</strong></h1>
          <h3 className="form-signin-heading"> mobile medical exams</h3>
          <h3 className="form-signin-heading">NEW USER REGISTRATION</h3>

          <input type="text" className="form-control" name="username" placeholder="Email" required="" autofocus="" />
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <button id="bootstrap-btn-overrides" type="submit">REGISTER</button>
          <br />
        </form>
      </div>
    )
  }
});

ReactDOM.render(<Signup />,document.getElementById('wrapper'));
