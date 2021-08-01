import Input from "../reuseable/Input";
import Button from "../reuseable/Button";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const [inputType, setInputType] = useState(true);

  //Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !emailRef.current.value.includes("@") ||
      !emailRef.current.value.includes(".com")
    ) {
      setError({ emailError: "Please Enter Valid Email" });
      setTimeout(() => {
        setError(null);
      }, 4000);
      return;
    }
    if (passwordRef.current.value.trim().length < 8) {
      setError({ passwordError: "Password Should Be More Than 8 Characters" });
      setTimeout(() => {
        setError(null);
      }, 4000);
      return;
    }
    toast.success("You Are Successfully Logged In");

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  //Show Hide Password
  const showHidePasswordHandler = () => {
    setInputType(!inputType);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-light p-2 rounded border border-primary position-relative"
    >
      <ToastContainer />
      <Input
        label="Email"
        input={{
          id: "username",
          type: "text",
          ref: emailRef,
        }}
      />
      {error && error.emailError && (
        <p className="alert alert-warning"> {error.emailError} </p>
      )}
      <Input
        label="Password"
        input={{
          id: "password",
          type: inputType ? "password" : "text",
          ref: passwordRef,
        }}
      />
      <div onClick={showHidePasswordHandler} className="eye-icon-wrraper">
        {inputType ? (
          <i className="fas fa-eye fa-lg"></i>
        ) : (
          <i className="fas fa-eye-slash fa-lg"></i>
        )}
      </div>
      {error && error.passwordError && (
        <p className="alert alert-warning"> {error.passwordError} </p>
      )}
      <Button className="btn btn-primary mt-2">Login</Button>
    </form>
  );
};

export default Login;
