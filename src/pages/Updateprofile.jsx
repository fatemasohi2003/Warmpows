import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: user?.displayName || "", photoURL: user?.photoURL || "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData.name, formData.photoURL);
      toast.success("Profile updated successfully!");
      navigate("/my-profile");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-6 text-center">Update Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-control mt-4">
                <label className="label"><span className="label-text">Photo URL</span></label>
                <input type="url" name="photoURL" placeholder="Enter photo URL" className="input input-bordered" value={formData.photoURL} onChange={handleChange} required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </div>
              <div className="form-control mt-2">
                <button type="button" onClick={() => navigate("/my-profile")} className="btn btn-outline">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;