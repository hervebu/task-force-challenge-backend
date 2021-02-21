import Joi from 'joi'

const signupValidSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
})

const loginValidSchema = Joi.object({
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

const loginIsValid = (req, res, next) => {
    const {error} = loginValidSchema.validate(req.body)
    if (error) {
        res.status(422).json({message: error.details[0].message})
    } else {
        next()
    }
}

export default {signupIsValid, loginIsValid}