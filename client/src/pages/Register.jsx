import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h1>Create Account</h1>
      <p>Registration form will be added later.</p>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;