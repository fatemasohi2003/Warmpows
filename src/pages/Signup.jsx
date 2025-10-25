import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", photoURL: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, updateUserProfile, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase) return "Password must contain at least one uppercase letter";
    if (!hasLowerCase) return "Password must contain at least one lowercase letter";
    if (!isLongEnough) return "Password must be at least 6 characters long";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    try {
      await signUp(formData.email, formData.password);
      await updateUserProfile(formData.name, formData.photoURL);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to create account");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      toast.success("Signed up with Google successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to sign up with Google");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-control mt-4">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-control mt-4">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <input type="url" name="photoURL" placeholder="Enter photo URL" className="input input-bordered" value={formData.photoURL} onChange={handleChange} required />
            </div>
            <div className="form-control mt-4">
              <label className="label"><span className="label-text">Password</span></label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered w-full pr-12" value={formData.password} onChange={handleChange} required />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm btn-circle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt text-xs">Must contain uppercase, lowercase, and be at least 6 characters</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignup} className="btn btn-outline gap-2"><FaGoogle />Sign up with Google</button>
          <p className="text-center mt-4">Already have an account? <Link to="/login" className="link link-primary font-semibold">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;