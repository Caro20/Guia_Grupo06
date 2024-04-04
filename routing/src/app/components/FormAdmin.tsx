import React from "react";
import ProfileField from "./ProfileField";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Checkbox from "./Checkbox";

const FormAdmin = () => {
  const privacyOptions = ["Public", "Private"];

  return (
    <div>
      <h2>Configuración de Perfil de Administrador</h2>
      <ProfileField label="Nombre" value="John" />
      <ProfileField label="Apellidos" value="Doe" />
      <Input
        id="residence"
        type="text"
        placeholder="Lugar de Residencia"
        onChange={() => {}}
      />
      {/* Otros campos */}
      <Select id="privacy-settings" options={privacyOptions} />
      <Input
        id="password"
        type="password"
        placeholder="Contraseña"
        onChange={() => {}}
      />
      <Checkbox id="admin" label="Administrador" />
      <Button id="save-changes" color="blue">
        Guardar Cambios
      </Button>
      <Button id="delete-account" color="red">
        Eliminar Cuenta
      </Button>
    </div>
  );
};

export default FormAdmin;
