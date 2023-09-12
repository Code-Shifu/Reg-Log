import { useState } from 'react';
import tea from './styles.module.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate();
    const[user, setUser]=useState({
        Name:'',
        Email:'',
        Password:'',
        RepeatPassword:''
    })
    const[errors,setErrors]=useState({});
    const submitData =(e)=>{
        e.preventDefault();

        const newErrors={};

        if(user.Name.trim()===''){
            newErrors.NameErr='Your Name Is Required'
        }
        if(user.Email.trim()===''){
            newErrors.EmailErr='Your Email Is Required'
        }
        if(user.Password.trim()===''){
            newErrors.PasswordErr='Your Password Is Required'
        }
        if(user.RepeatPassword.trim()===''){
            newErrors.RepeatPasswordErr='Your Password Is Required'
        }
        else if(user.RepeatPassword.trim()!==user.Password.trim()){
            newErrors.RepeatPasswordErr='Your Password Do Not Match'
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
        <form action="" className={tea.reg} onSubmit={submitData}>
            <div style={{margin:'auto', maxWidth:'350px'}} className={tea.reg1}>
                <div className={tea.reg2}>
                    <h1>REGISTRATION</h1>
                </div>
            <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" 
  onChange={(e)=>{
    setUser({...user, Name:e.target.value})
  }}
  />
  <label for="floatingInput">Name</label>
  {errors.NameErr && <span style={{color:'red'}}>{errors.NameErr}</span>}
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
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
   onChange={(e)=>{
    setUser({...user,RepeatPassword:e.target.value})
  }}
  />
  <label for="floatingPassword">RepeatPassword</label>
  {errors.RepeatPasswordErr && <span style={{color:'red'}}>{errors.RepeatPasswordErr}</span>}
</div>
<div className={tea.reg3}>
    <button type='submit'>Register</button>
</div>
            </div>
        </form>
      </section>
    </div>
  )
}

export default Register
