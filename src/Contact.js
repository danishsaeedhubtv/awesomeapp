import React, { useState } from 'react';


const Contact = () => {

  const [data, setData] = useState({
    email:"",
    password:"",
  });

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`${data.fullname}`);
  };
  
  const inputEvent = (event) =>{
    const {name, value} = event.target;

    setData((preVal) => {
      return{
        ...preVal,
        [name]: value,
      };
    });
  };

  return(
    <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container-fluid contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit} >
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" name="email" value={data.email} onChange={inputEvent} placeholder="Enter Email Address" aria-describedby="emailHelp" />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" name="password" value={data.password} onChange={inputEvent} placeholder="Enter Password" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
    </div>
    </>
  );
}

export default Contact;


