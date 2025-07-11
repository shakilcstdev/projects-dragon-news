import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const {createUser, setUser} =use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const Email = form.Email.value;
    const password = form.password.value;
    console.log(name, photo, Email, password);
    createUser(Email, password)
    .then(result=>{
      const user=result.user;
      // console.log(user);
      setUser(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

  };
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required />
            {/* photo url*/}
          <label className="label">photo URL</label>
          <input name='photo' type="text" className="input" placeholder="photo URL" required />
            {/* email */}
          <label className="label">Email</label>
          <input name='Email' type="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
         
      
          <button type='Submit' className="btn btn-neutral mt-4">Register</button>
              <p className='font-semibold text-center pt-5'>Allready Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;