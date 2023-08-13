import React from "react";
import { useProducts } from "../../context/ProductContext";
import { Button, ButtonLink, Card } from "../ui";

export function StudentCard({ student }) {
  const { deleteProduct } = useProducts(); // Usa el hook del contexto de productos para acceder a las funciones

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{student.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteProduct(student._id)}>Delete</Button> {/* Usa la función deleteProduct del contexto de productos */}
          <ButtonLink to={`/student/${student._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">Nota1:</span> {student.nota1}</p>
      <p className="text-slate-300"><span className="text-blue-400 font-bold">Nota2:</span>{student.nota2}</p>
    </Card>
  );
}
