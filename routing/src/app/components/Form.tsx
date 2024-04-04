import React from "react";
import ProfileField from "./ProfileField";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <div>
      <h2>Editar Perfil</h2>
      <ProfileField label="Nombre" value="John" />
      <ProfileField label="Apellidos" value="Doe" />
      <Input
        id="residence"
        type="text"
        placeholder="Lugar de Residencia"
        onChange={() => {}}
      />
      {/* Otros campos */}
      <Button id="save-changes" color="blue">
        Guardar Cambios
      </Button>
    </div>
  );
};

export default Form;
