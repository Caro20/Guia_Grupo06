import React from "react";
import ProfileField from "./ProfileField";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const ConfigProfile = () => {
  const privacyOptions = ["Public", "Private"];

  return (
    <div>
      <h2>Configuración de Perfil</h2>
      <ProfileField label="Nombre" value="John" />
      <ProfileField label="Apellidos" value="Doe" />
      <Input
        id="new-password"
        type="password"
        placeholder="Nueva Contraseña"
        onChange={() => {}}
      />
      <Select id="privacy-settings" options={privacyOptions} />
      <Button id="save-changes" color="blue">
        Guardar Cambios
      </Button>
      <Button id="delete-account" color="red">
        Eliminar Cuenta
      </Button>
    </div>
  );
};

export default ConfigProfile;
