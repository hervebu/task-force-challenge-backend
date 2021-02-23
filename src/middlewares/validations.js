import Joi from 'joi'

const signupValidSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
})

const signupIsValid = (req, res, next) => {
    const {error} = signupValidSchema.validate(req.body)
    if (error) {
        res.status(422).json({message:error.details[0].message})
    } else {
        next()
    }
}

const loginValidSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
})

const loginIsValid = (req, res, next) => {
    const {error} = loginValidSchema.validate(req.body)
    if (error) {
        res.status(422).json({message: error.details[0].message})
    } else {
        next()
    }
}

const newToDoItemValidSchema = Joi.object({
    title: Joi.string().min(6).required(),
    description: Joi.string(),
    priority: Joi.number()
})

const newtoDoItemIsValid = (req, res, next) => {
    const {error} = newToDoItemValidSchema.validate(req.body)
    if (error) {
        res.status(422).json({message: error.details[0].message})
    } else {
        next()
    }
}

export default {signupIsValid, loginIsValid, newtoDoItemIsValid }