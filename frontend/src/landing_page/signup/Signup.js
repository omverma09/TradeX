import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/signup', { name, email, password });

      // Token store karo
      localStorage.setItem('auth-token', res.data.token);

      alert(res.data.message || 'Signup successful');
      window.location.href = 'http://localhost:3001/'; // Redirect to dashboard
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '2rem', borderRadius: '1rem', border: '1px solid black' }}>
        <h3 className="text-center mb-4">
          Sign Up
          <span style={{ marginLeft: "1rem", color: "#0D6EFD", fontWeight: "800" }}>Tradex</span>
        </h3>

        <form className="w-100" onSubmit={handleSignup} style={{ maxWidth: '400px', margin: 'auto' }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          Already have an account? <a href="/login">Log In</a>
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
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
