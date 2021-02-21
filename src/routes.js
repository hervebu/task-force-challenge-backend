import express from 'express'
import userControllers from '../src/controllers/user'
import validations from '../src/middlewares/validations'

const router = express.Router()
const { addUser, loginUser } = userControllers
const { signupIsValid, loginIsValid } = validations

router.post('/user/signup',signupIsValid, addUser)
router.post('/user/auth',loginIsValid, loginUser)

export default router