import './App.scss';

function App() {
  return (
   <section>
    <div className='login'>
      <div className='login__container'>
        <h2 className='login__title'>Login</h2>
        <form className='login__form'>
            <div className='login__inputBx'>
              <input type='text' required/>
              <label className='login__text'>Username</label>
            </div>
            <div className='login__inputBx'>
              <input type='password' required/>
              <label className='login__text'>Password</label>
            </div>
            <div className='login__links'>
              <a href='#'>Forgot Password</a>
              <a href='#'>Sign Up</a>
            </div>
            <div className='login__inputBx'>
              <input type='submit' value='Login'/>
            </div>
        </form>

      </div>
    </div>
   </section>
  );
}

export default App;
