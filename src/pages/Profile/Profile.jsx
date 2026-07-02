import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { getProfile, updateProfile } from "../../services/authService.js";
import { setUser } from "../../store/authSlice.js";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ name: "", githubUsername: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const { data } = await getProfile();
      dispatch(setUser(data.data));
      setFormData({
        name: data.data.name || "",
        githubUsername: data.data.githubUsername || "",
      });
    };
    loadProfile();
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await updateProfile(formData);
    dispatch(setUser(data.data));
    setMessage("Profile updated successfully");
  };

  return (
    <div className="profile-page">
      <h1 className="page-title">Profile</h1>
      <p className="page-subtitle">Manage your account details.</p>

      <form className="profile-card" onSubmit={handleSubmit}>
        {message && <p className="profile-success">{message}</p>}

        <Input label="Email" name="email" value={currentUser?.email || ""} onChange={() => {}} />
        <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <Input
          label="GitHub Username"
          name="githubUsername"
          value={formData.githubUsername}
          onChange={handleChange}
          placeholder="octocat"
        />

        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
};

export default Profile;
