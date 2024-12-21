import { useState } from "react"


function Signup() {

    
return(
    <div className="d-flex flex-column vh-100" style={{ backgroundImage: "url('public/p.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand text-purple" href="#" style={{ fontWeight: 'bold', fontSize: '28px', color: '#8A2BE2' }}>BlissBeats</a>
    </nav>
  
    {/* Main content */}
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-purple p-3 rounded w-25" style={{ backgroundColor: '#800080' }}>
        <h2 className="text-white text-center" style={{ fontWeight: 'bold' }}>Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="text-white">
              <strong>Name</strong>
            </label>
            <input type="text" placeholder="Enter Name" autoComplete="off" name="name" className="form-control rounded-0" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="text-white">
              <strong>Email</strong>
            </label>
            <input type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-white">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" />
          </div>
          <button type="submit" className="btn btn-dark w-100 rounded-0 text-white">
            Register
          </button>
        </form>
        
        
        <button type="button" className="btn btn-dark w-100 mt-3 rounded-0 text-white">
          Login
        </button>
      </div>
    </div>
  </div>
    
 
);
}


export default Signup;
