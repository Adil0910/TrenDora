import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../hooks/useAuth.js";
import { isValidEmail, isEmpty } from "../../utils/validators.js";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!isValidEmail(formData.email)) newErrors.email = "Enter a valid email";
    if (isEmpty(formData.password)) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    try {
      setLoading(true);
      await login(formData);
    } catch (error) {
      setServerError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        <p className="auth-subtitle">Login to continue to your dashboard</p>

        {serverError && <p className="auth-error">{serverError}</p>}

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="your@gmail.com"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="••••••••"
        />

        <Button type="submit" fullWidth disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <p className="auth-footer-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
