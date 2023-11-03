import React, { useState } from 'react'
import tea from './styles.module.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const[user,setUser]=useState({
        email:'',
        password:''
    });
    const[error,setErrors]=useState('')


    const handleChange=(e)=>{
    const {name,value}= e.target;
    setUser((prevUser)=>(
      {
        ...prevUser,
        [name]:value
      }
    ))

  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(localStorage.getItem('users')){
      const users=JSON.parse(localStorage.getItem('users'));
      const matchedUser=users.find(
        (u)=>u.Email === user.email && u.Password===user.password
      );
   
        if(matchedUser){
        //succesfful login
        alert("Successful login")
        navigate('/', {replace: true})
      }
      else{
        //invalid login
        setErrors("Invalid login details")
      }
    }
    else{
      //No registered Users
      setErrors("You have not registered Please do first")
    };
    }
  return (
    <div>
      <section>
        <form action="" className={tea.reg4} onSubmit={handleSubmit}>
            <div style={{margin:'auto', maxWidth:'350px'}} className={tea.reg5}>
                <div className={tea.reg6}>
                    <h1>LOGIN</h1>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  name="email" value={user.email} onChange={handleChange}/>
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com"  name="password" value={user.password} onChange={handleChange}/>
                  <label for="floatingInput">Password</label>
                </div>

                {/* errors to display here  */}
                {error && <div className='alert alert-danger'>{error}</div>}
              <div className={tea.reg3}>
                  <button type='submit'>Login</button>
              </div>

              <div className="text-center mt-3">
                  {/* <p>Don't have an account? <Link to="/Registers" className='text-success'>Register here</Link></p> */}
                </div>
            </div>
        </form>
      </section>
    </div>
  )
}

export default Login

