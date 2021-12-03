import React from "react";
import Footer from '../Inicio/footer';
import HeaderSimple from '../HeaderSimple';
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    
    isAuthenticated && (
      
      <div>
        <HeaderSimple />
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <Footer />
      </div>
      
    )
  );
};

export default Profile;