import React from 'react'
import './index.less'

export default class Form extends React.Component {

    render() {
        return (
           <div className="form">
                <div className="form_head">
        <form action="">
            <div className="row">
                <h2>登录表单</h2>
                <div className="vl">
                    <span className="vl-innertext">or</span>
                </div>
                <div className="col">
                    <a  className="fb btn">
                        <i className="fa fa-facebook fa-fw"></i>Login with Facebook
                    </a>
                    <a  className="twitter btn">
                        <i className="fa fa-twitter fa-fw"></i>Login with Twitter
                    </a>
                    <a  className="google btn">
                        <i className="fa fa-google fa-fw"></i>Login with Google+
                    </a>
                </div>
                <div className="col">
                    <div className="hide-md-lg">
                        <p>Or sign in manually:</p>
                    </div>
                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="submit" value="Login"/>
                </div>
            </div>
        </form>
    </div>
    <div className="bottom-container">
        <div className="row">
            <div className="col">
                <a  style={{color: 'white'}} className="btn">Sign up</a>
            </div>
            <div className="col">
                <a  style={{color: 'white'}} className="btn">Forgot password?</a>
              </div>
        </div>
    </div>
           </div>
        )
    }
}