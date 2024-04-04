import React from "react";
import ProfileField from "./ProfileField";

const ProfileCard = () => {
  return (
    <div>
      <h2>Perfil</h2>
      <ProfileField label="Nombre" value="John" />
      <ProfileField label="Apellidos" value="Doe" />
      {/* Otros campos */}
    </div>
  );
};

export default ProfileCard;
