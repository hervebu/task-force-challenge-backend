import mongoose from 'mongoose'

let toDoSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    description:' string',
    priority: 'number'
},{
    timestamps: true
})

export default mongoose.Schema('todoItems', toDoSchema)