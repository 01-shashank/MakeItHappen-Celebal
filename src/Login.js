import React from 'react'
import { Button } from '@mui/material';
import "./Login.css";
import { auth,provider } from './firebase';
function Login() {

    const signIn=e=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
  return (
    <>
    <div className="main__left">
      <section>
      <div className="content">
        <div className="info">
          <h2>Make It Happen<br/><span>Master you time!</span></h2>
          <p>Set deadlines as per your needs!</p>
               
          <div class='pixels-photo'>
      <div className="image">
        <a href='https://500px.com/photo/1051509032/Makeithappenlogo-by-Shashank-Singh' alt='Makeithappen_logo by Shashank Singh on 500px.com'>
        <img src='https://drscdn.500px.org/photo/1051509032/m%3D900/v2?sig=7c90e3e376d40b31451abed2995d9685405bd0fa0d3afd0276579a56ac13fe5c' width={400} height={400} alt='Makeithappen_logo by Shashank Singh on 500px.com' />
        </a>
        </div>
        </div>
        <script type='text/javascript' src='https://500px.com/embed.js'></script>
        </div>
      </div>
      </section>
    </div>
<div className="main__right">
  <div class="wrapper">
    <ul class="dynamic-txts">
      <li><span>Simple</span></li>
      <li><span>Multiple Functionalities</span></li>
      <li><span>Manage task on your terms!</span></li>
      <li><span>Easy coordination!</span></li>
    </ul>
  </div>
  <div className="login">
    <Button onClick={signIn}>Sign In</Button>
  </div>
</div>
    </>
  )
}

export default Login