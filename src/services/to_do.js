import to_do from '../database/models/to_do_list.model.js';

const createItem = async (data) => {
    const existing = await to_do.findOne({
        title: data.title
    })

    if (existing) {
        return false
    } else {
        const newItem = await to_do.create(data)
        return newItem
    }
}

const modifyItem = async (id, userId, updates) => {
       const modifiedItem = await to_do.findOneAndUpdate({
            _id:id, 
            userId:userId}, 
            updates, 
            {new: true}
            )
        if (modifiedItem) {
            return modifiedItem
        }else {
            return false
        }
}

const getAllByUserId = async (userId) => {
    const list = await to_do.find({userId})
    return list
}

const getOneItem = async (itemId) => {
    return await to_do.findById({_id:itemId})
}

const deleteItem = async (itemId) => {
    return await to_do.findOneAndDelete({_id:itemId})
}

export default { createItem, modifyItem, getAllByUserId, getOneItem, deleteItem }