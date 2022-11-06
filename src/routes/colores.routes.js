import {Router} from "express";
import { check } from "express-validator";
import {borrarColor, crearColores, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers";


const router = Router();

router
  .route("/colores")
.get(listarColores)

.post(
    [
      check("nombreColor")
        .notEmpty()
        .withMessage("El color es un dato obligatorio")
        .isLength({ min: 2, max: 180 })
        .withMessage(
          "El nombre del color debe tener entre 2 y 180 caracteres"
        )],
    crearColores
  );

router
  .route("/colores/:id")
  .get(obtenerColor)
  .put(editarColor)
  .delete(borrarColor);


export default router;