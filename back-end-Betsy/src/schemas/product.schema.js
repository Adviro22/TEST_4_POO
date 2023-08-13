import { z } from "zod";
 
export const createProductSchema = z.object({
  nombre: z.string({required_error: "Nombre is required",}),
  precio: z.number({required_error: "Precio es requerido",})
    .min(1,{message:"El precio debe ser como minimo 1 y maximo 50",})
    .max(50,{message:"El precio debe ser como minimo 1 y maximo 50"},),
  stock: z.number({required_error: "Stock es requerido"},)
    .min(1,{message:"El Stock debe ser como minimo 1"},)
});