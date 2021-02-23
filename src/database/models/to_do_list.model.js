import mongoose from 'mongoose'

let toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: 'string',
    priority: 'number',
    userId: 'string'
},{
    timestamps: true
})

export default mongoose.model('to_do_Items', toDoSchema)