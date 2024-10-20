import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Inicializar el hook

  const onSubmit = data => {
    console.log(data);
    navigate('/'); // Redirigir a la ruta deseada si no hay errores
  };

  return (
    <>
      <div className="content-form-pag">
        <div className="form-container">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              <label htmlFor="usuario">Usuario:</label>
              <input
                id="usuario"
                type="text"
                placeholder="Ingresa tu usuario"
                {...register("usuario", {
                  required: "El usuario es obligatorio",
                  minLength: { value: 3, message: "El usuario debe tener al menos 3 caracteres" }
                })}
                className={errors.usuario ? 'input-error' : ''}
              />
              {errors.usuario && <p className="error-message">{errors.usuario.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="contrasenia">Contraseña:</label>
              <input
                id="contrasenia"
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("contrasenia", {
                  required: "La contraseña es obligatoria",
                  minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }
                })}
                className={errors.contrasenia ? 'input-error' : ''}
              />
              {errors.contrasenia && <p className="error-message">{errors.contrasenia.message}</p>}
            </div>

            <button type="submit" className="submit-btn">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
