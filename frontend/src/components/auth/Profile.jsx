import React from "react";
import { User, Mail, Calendar } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  // Mock user data (replace with real auth data later)
  const user1 = {
    name: "Anshuman Singh",
    email: "ansingh@example.com",
    joinedAt: "2025-12-18T11:43:03.281Z",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    stats: {
      thumbnails: 42,
      downloads: 118,
      creditsLeft: 24,
    },
  };

  const {user}=useAuth();

  // console.log(user);
  

  return (
    <div className="mt-10 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-zinc-200">Profile</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Manage your account and activity
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        {/* Left card */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col items-center text-center">
          <img
            src={user1.avatar}
            alt={user.name}
            className="h-24 w-24 rounded-full object-cover border border-white/20"
          />

          <h2 className="mt-4 text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-white/60 flex items-center gap-1 justify-center">
            <Mail className="h-4 w-4" />
            {user.email}
          </p>

          <p className="text-xs text-white/40 mt-2 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Joined{" "}
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <button className="mt-6 w-full rounded-xl bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>

        {/* Right section */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard
              label="Thumbnails Generated"
              value={user1.stats.thumbnails}
            />
            <StatCard
              label="Total Downloads"
              value={user1.stats.downloads}
            />
            <StatCard
              label="Credits Left"
              value={user1.stats.creditsLeft}
            />
          </div>

          {/* Account actions */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-sm font-semibold mb-4">Account</h3>

            <div className="flex flex-col gap-3">
              <button className="text-left text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                Change Password
              </button>
              <button className="text-left text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                Billing & Credits
              </button>
              <button className="text-left text-sm px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Helper ---------- */

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
    <p className="text-2xl font-semibold">{value}</p>
    <p className="text-sm text-white/60 mt-1">{label}</p>
  </div>
);

export default Profile;
