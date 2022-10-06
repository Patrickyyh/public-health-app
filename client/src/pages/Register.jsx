import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Registerpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const initialState = {
  FirstName :"",
  LastName: "",
  Email:"",
  Birth: new Date(),
  password:"",
  ConfirmPassword:""
};
const passwordError={
  islength : false,
  upper: false,
  lower: false,
  hasnumber: false,
  matchPassword: false,
  hasnumber: false
};


function Register() {
  const [newUser, setNewUser] = useState(initialState);

  const [newPassWordWrong, setnewPassWordWrong] = useState(passwordError);

  useEffect(() => {}, [newUser]);

 const handleonSubmit = (e) =>{
    e.preventDefault();
    console.log(newUser);
        /*api.register(
      {
      firstName: newUser.FirstName,
      lastName: newUser.LastName,
      email:newUser.Email,
      birth: newUser.Birth,
      password: newUser.password
      }
    ).then(res =>{
      {console.log(res.data)}
    }).catch(error =>{
      console.log(error)
    }
    )*/

  }

  const handleOnChange = (e) =>{
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
    if (name === "password") {
     const islength = value.length> 6;
     const upper = /[A-Z]/.test(value);
     const lower = /[a-z]/.test(value);
     const hasnumber = /[0-9]/.test(value);

     setnewPassWordWrong({
      ...newPassWordWrong,
      islength,
      upper,
      lower,
      hasnumber,
    });
    };

    if (name === "ConfirmPassword"){
      setnewPassWordWrong({
        ...newPassWordWrong,
        matchPassword: newUser.ConfirmPassword = value,
      });

    }

  }
  return (
    <Container id = "main-container" className="d-grid h-100">
      <Form id="register-form"  className="mt-4" onSubmit={handleonSubmit}>
        <h1 className="mb-3  fw-normal text-center">Please Sign Up</h1>
        <hr />
        <Form.Group className="mb-3">
              <Form.Label>Your First Name</Form.Label>
              <Form.Control
                type="FirstName"
                name="FirstName"
                value={newUser.FirstName}
                onChange={handleOnChange}
                placeholder="First Name"
                required
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Your Last Name</Form.Label>
              <Form.Control
                type="LastName"
                name="LastName"
                value={newUser.LastName}
                onChange={handleOnChange}
                placeholder="Last Name"
                required
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="Email"
                name="Email"
                value={newUser.Email}
                onChange={handleOnChange}
                placeholder="Email"
                required
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Your Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="Birth"
                value={newUser.Birth}
                onChange={handleOnChange}
                placeholder="Date of Birth"
                required
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Your Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="ConfirmPassword"
                value={newUser.ConfirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                required
              />
          <Form.Text>

              { !newPassWordWrong.matchPassword &&
                (<div className="text-danger mb-3">Password doesn't match!</div>)
              }
          </Form.Text>

          <Form.Text>
            <ul className="mb-3" >

              {
                <div className="text-danger mb-3">Password doesn't match!</div>
              }
              </ul>
          </Form.Text>

            <ul className="mb-4">

              <li className= {newPassWordWrong.islength ? "text-success" : "text-danger"}>
                At least 6 characters
              </li>
              <li className= {newPassWordWrong.upper ? "text-success" : "text-danger"}>
                At least one upper case
              </li>
              <li className= {newPassWordWrong.lower ? "text-success" : "text-danger"}>
                At least one lower case
              </li>
              <li className= {newPassWordWrong.hasnumber ? "text-success" : "text-danger"}>
                At least one number
              </li>
            </ul>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100" disabled={Object.values(newPassWordWrong).includes(false)}>
            Sign up
          </Button>
      </Form>
      <div className="d-flex justify-content-center align-items-center ">
                  <span className="fw-normal">
                    Already have an account? <Link>Login</Link>
                  </span>
        </div>

    </Container>
  )
}

export default Register