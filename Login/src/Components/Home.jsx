import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import tea from './styles.module.css' 
import {HiMiniBars3} from 'react-icons/hi2';
import {MdStars} from "react-icons/md";
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav style={{padding:'3px'}} class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#" className={tea.sell}>
      <MdStars className={tea.Md}/>
    <span>  Online_Sell</span>
    
    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <NavLink className={tea.nav}
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Home
        
      </NavLink>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
                <NavLink className={tea.nav}
              to="/About"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Product
            </NavLink>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
                <NavLink className={tea.nav}
              to="/Contact"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Contact
            </NavLink>
            </a>
        </li>

      </ul>
    </div>
  </div>
</nav>
      <nav style={{padding:'17px'}} class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
  <button class="btn btn-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <HiMiniBars3/>
</button>
    <a class="navbar-brand ms-5" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav> 

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"  style={{width:'15%',height:'50%',marginLeft:'50px',marginTop:'110px'}}>
  <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
    {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{float:'right'}}></button> */}
  </div>
  <div class="offcanvas-body">
    <div className={tea.li}>
    <li class="nav-item" style={{listStyleType:'none'}}>
          <a class="nav-link active" aria-current="page" href="#">
          <NavLink className={tea.nav}
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Home
        
      </NavLink>
            </a>
        </li>
        <li class="nav-item" style={{listStyleType:'none'}}>
          <a class="nav-link" href="#">
                <NavLink className={tea.nav}
              to="/About"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Product
            </NavLink>
            </a>
        </li>
        <li class="nav-item" style={{listStyleType:'none'}}>
          <a class="nav-link" href="#">
                <NavLink className={tea.nav}
              to="/Contact"
              style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
              end
            >
              Contact
            </NavLink>
            </a>
        </li>
    </div>
  </div>
</div>  


    {/* <header className={tea.hom} style={{ display: "flex", gap: 80, justifyContent:"center", backgroundColor:'wheat',padding:"30px" }}>

      <NavLink className={tea.ho} 
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        My Home
      </NavLink>
      <NavLink className={tea.ho} 
        to="/product/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        My Product
      </NavLink>
      <NavLink className={tea.ho} 
        to="/productDetail/1"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Enter Product Details
      </NavLink>
      <NavLink className={tea.ho} 
        to="about"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        About Us
      </NavLink>
      <NavLink className={tea.ho} 
        to="about"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Register
      </NavLink>
      <NavLink className={tea.ho} 
        to="about"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        end
      >
        Login
      </NavLink>
      <button className={tea.hoo}  onClick={handleClick}>Go Home</button>
    </header> */}
    </div>
  );

}

export default Home;
