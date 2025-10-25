import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEdit, FaEnvelope, FaUser } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="avatar mb-6">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt={user?.displayName || "User"} />
              </div>
            </div>
            <h2 className="card-title text-3xl mb-6">My Profile</h2>
            <div className="w-full space-y-4">
              <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                <FaUser className="text-2xl text-primary" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-lg">{user?.displayName || "Not provided"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                <FaEnvelope className="text-2xl text-primary" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-lg">{user?.email || "Not provided"}</p>
                </div>
              </div>
            </div>
            <div className="card-actions mt-8">
              <Link to="/update-profile" className="btn btn-primary gap-2"><FaEdit />Update Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;