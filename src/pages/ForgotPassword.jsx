import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
      setTimeout(() => {
        window.open("https://mail.google.com", "_blank");
      }, 1000);
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Failed to send reset email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
          <p className="text-center text-gray-600 mb-6">Enter your email address and we will send you a link to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="Enter your email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Reset Password</button>
            </div>
            <div className="form-control mt-2">
              <button type="button" onClick={() => navigate("/login")} className="btn btn-outline">Back to Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;