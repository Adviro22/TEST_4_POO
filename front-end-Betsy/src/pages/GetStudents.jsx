import { useEffect } from "react";
import { useProducts } from "../context/ProductContext"; // Importar el contexto de productos correcto
import { StudentCard } from "../components/students/StudentCard";
import { ImFileEmpty } from "react-icons/im";

export default function GetStudents() {
  const { products, getProducts } = useProducts(); // Usar la función del contexto de productos

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No existen estudiantes ingresados
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {products.map((product) => (
          <StudentCard student={product} key={product._id} />
        ))}
      </div>
    </>
  );
}
