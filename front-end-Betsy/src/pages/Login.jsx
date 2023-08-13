import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, isAuthenticated, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/students");
  }, [isAuthenticated]);

  const submitLogin = handleSubmit((formData) => {
    login(formData);
  });

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <div className="bg-white max-w-md w-full p-10 rounded-md">
        <ul className="bg-red-700 text-white rounded-md text-center">
          {loginErrors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold text-violet-800 uppercase text-center">Login de Autenticación</h2>
        <form onSubmit={submitLogin} className="bg-violet-300">
          <label htmlFor="username" className="text-md block my-1 text-black">Nombre de Usuario:</label>
          <input
            className="w-full bg-white px-4 py-2 rounded-md text-black"
            type="text"
            name="username"
            placeholder="Escriba su nombre de usuario..."
            {...register("username", { required: { value: true, message: "Nombre de usuario es requerido" } })}
          />
          {errors.username && <p className="text-red-500 font-semibold">{errors.username.message}</p>}
          <label htmlFor="password" className="text-md block my-1 text-black">Contraseña:</label>
          <input
            className="w-full bg-white px-4 py-2 rounded-md text-black"
            type="password"
            name="password"
            placeholder="Escriba su contraseña..."
            {...register("password", { required: { value: true, message: "Contraseña es requerida" } })}
          />
          {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
          <button type="submit" className="bg-indigo-500 px-4 py-1 rounded-md my-2">Iniciar Sesión</button>
        </form>
        <p className="flex gap-x-2 justify-between text-violet-700">
          No tienes una cuenta...? <Link to="/register" className="text-sky-500 font-bold">Registrarse</Link>
        </p>
      </div>
    </div>
  );
}
