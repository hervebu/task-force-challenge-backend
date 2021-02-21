import User from '../services/user'
import tokenUtil from '../jwt.util'
import bcrypt from 'bcrypt'

const { createUser, userAuth } = User
const { generateToken } = tokenUtil

const addUser = async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    } 
    const newUser = await createUser(user)
    if (newUser == false) {
        return res.status(400).json({
            'message': `User with email ${req.body.email} already exists`
        }) 
    } else {
        const userToken = generateToken(newUser)
        return res.status(201).json({
            'message': `User with email ${newUser.email} was successfully signedup`,
            'token': userToken
        })
    }
}

const loginUser = async (req, res) => {
    const loginResponse = await userAuth(req.body.email, req.body.password)
    if (loginResponse == false) {
        return res.status(401).json({
            'message': `User with email ${req.body.email} not found`
        })
    } else if (loginResponse === 'none') {
        return res.status(401).json({
            'message': 'Wrong password'
        })
    } else {
        const userToken = generateToken(loginResponse)
        return res.status(200).json({
            'message': 'User logged in successfully',
            'token': userToken
        })
    }
}

export default { addUser, loginUser }