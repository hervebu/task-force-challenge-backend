import express from 'express'
import userControllers from '../src/controllers/user.js'
import validations from '../src/middlewares/validations.js'
import tokendecode from '../src/middlewares/token.decode.js'
import toDoControllers from '../src/controllers/to_do.js'

const router = express.Router()
const { addUser, loginUser } = userControllers
const { signupIsValid, loginIsValid, newtoDoItemIsValid } = validations
const { addItem, updateItem, getItemsForUser, getOneToDoItem, removeItem } = toDoControllers

/**
 * @swagger
 * /user/signup:
 *      post:
 *          description: API for signing up a user to
 *              responses: 
 *                    200: 
 *                      description: user signed up
 */

router.post('/user/signup',signupIsValid, addUser)
router.post('/user/auth',loginIsValid, loginUser)
router.post('/toDo/item',tokendecode, newtoDoItemIsValid, addItem)
router.put('/toDo/item/:id', tokendecode, updateItem)
router.get('/toDo/items', tokendecode, getItemsForUser)
router.get('/toDo/items/:id', tokendecode, getOneToDoItem)
router.delete('/toDo/item/:id', tokendecode, removeItem)

export default router