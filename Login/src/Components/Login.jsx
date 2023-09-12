import { useState } from 'react';
import tea from './styles.module.css'
// import { useNavigate } from 'react-router-dom';

function Login() {
    // const navigate=useNavigate();
    const[user, setUser]=useState({
        // Name:'',
        Email:'',
        Password:'',
        // RepeatPassword:''
    })
    const[errors,setErrors]=useState({});
    const submitData =(e)=>{
        e.preventDefault();

        const newErrors={};

        if(user.Email.trim()===''){
            newErrors.EmailErr='Your Email Is Required'
        }
        if(user.Password.trim()===''){
            newErrors.PasswordErr='Your Password Is Required'
        }
   
        setErrors(newErrors)
        if(Object.keys(newErrors).length===0){
            const users=JSON.parse(localStorage.getItem('users')) ||[]
            users.push(user)
            localStorage.setItem('users',JSON.stringify(users))
            navigate('/login')
        }
        // console.log(user)
    }
  return (
    <div>
      <section>
        <form action="" className={tea.reg4} onSubmit={submitData}>
            <div style={{margin:'auto', maxWidth:'350px'}} className={tea.reg5}>
                <div className={tea.reg6}>
                    <h1>LOGIN</h1>
                </div>

<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
    onChange={(e)=>{
        setUser({...user,Email:e.target.value})
      }}
  />
  <label for="floatingInput">Email</label>
  {errors.EmailErr && <span style={{color:'red'}}>{errors.EmailErr}</span>}

</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"
   onChange={(e)=>{
    setUser({...user,Password:e.target.value})
  }}
  />
  <label for="floatingInput">Password</label>
  {errors.PasswordErr && <span style={{color:'red'}}>{errors.PasswordErr}</span>}

</div>

<div className={tea.reg3}>
    <button type='submit'>Login</button>
</div>
            </div>
        </form>
      </section>
    </div>
  )
}

export default Login

