import { EmailRounded, LockOpenRounded} from '@mui/icons-material';
import React from 'react';

const Login = () => {
  return <>
      <div className="main_container">
           <div className="container">
            <div className="login loginC">
              <h1>USER SIGN-IN</h1>
              <form action="">
              <div className="inputbox">
                <EmailRounded  className="searchIcon"/>
                <input type="email" placeholder="Enter your Email" />
                
              </div>
              <div className="inputbox">
                <LockOpenRounded  className="searchIcon"/>
                <input type="password" placeholder="Enter your Password" />
                
              </div>

              <button className="submitButton" type="submit">Sign In</button>

              </form>

              <div className="login_text">
                <h3>New User? <a href="http://">Sign Up</a></h3>
                <h3><a href="http://">Forget password</a></h3>
              </div>

            </div>
            <div className="image_container loginIC">

              <img src={process.env.PUBLIC_URL + "/images/3776804 copy 1.png"} alt="" />

            </div>
            </div>  
      </div>    
  </>;
};

export default Login;
