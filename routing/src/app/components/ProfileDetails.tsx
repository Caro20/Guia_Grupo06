import React from "react";
import ProfileField from "./ProfileField";

const ProfileDetails = () => {
  return (
    <div>
      <h2>Detalles del Perfil</h2>
      <ProfileField label="Nombre" value="John" />
      <ProfileField label="Apellidos" value="Doe" />
      {/* Otros campos */}
    </div>
  );
};

export default ProfileDetails;
