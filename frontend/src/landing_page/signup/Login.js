import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("auth-token", res.data.token);
        alert("Login successful!");
        window.location.href = "http://localhost:3001/"; // Redirect to dashboard
      } else {
        alert("No token received. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center mt-5"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          borderRadius: "1rem",
          border: "1px solid black",
        }}
      >
        <h3 className="text-center mb-4">
          Login
          <span
            style={{
              marginLeft: "1rem",
              color: "#0D6EFD",
              fontWeight: "800",
            }}
          >
            Tradex
          </span>
        </h3>

        <form
          className="w-100"
          onSubmit={handleLogin}
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          Go to signup <a href="/signup">Signup</a>
        </div>

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2">or</span>
          <hr className="flex-grow-1" />
        </div>

        <button className="btn btn-outline-dark w-100 p-2">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
            className="me-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
