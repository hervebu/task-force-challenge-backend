import User from '../database/models/user.model.js';
import bcrypt from 'bcrypt'

const createUser = async (user) => {
    const existing = await User.findOne({email: user.email})
    if (existing) {
        return false
    } else {
        const savedInfo = await User.create(user)
        return savedInfo
    }
}

const userAuth = async (email, password) => {
    const existingUser = await User.findOne({email: email})
    if (!existingUser) {
        return false
    } else {
        const passwordCheck = await bcrypt.compare(
            password,
            existingUser.password
        )
        if (!passwordCheck) {
            return 'none'
        } else {
            return existingUser._id
        }
    }
}

export default { createUser, userAuth }
