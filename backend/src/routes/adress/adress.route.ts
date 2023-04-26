import { Router } from "express"
import { updateAdressController } from "../../controllers/adress/adress.controller"

const adressRoutes: Router = Router()

adressRoutes.patch('/:id', updateAdressController)

export default adressRoutes