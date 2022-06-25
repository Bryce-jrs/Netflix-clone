import Signin from "./Sign-in"
import Headerin from "./Header-signin"
import "./Login.css"

export default function Login(){
  return(
    <div className="logpage">
      <div className="sign-back-img">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/7d4da27f-d875-45de-aa93-1b5d59e388ec/FR-fr-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=""/>
      </div>
      <div>
        <Headerin/>
        <Signin/>
      </div>
    </div>
  )
}