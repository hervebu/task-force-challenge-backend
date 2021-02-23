import to_do from '../services/to_do.js';

const { createItem, modifyItem, getAllByUserId, getOneItem, deleteItem } = to_do

const addItem = async (req, res) => {
    const itemInfo = {
        ...req.body,
        userId: req.user.id
    }
    const item = await createItem(itemInfo)
    if (item == false) {
        return res.status(400).json({
            'message': `To do item with title "${req.body.title}" already exists`
        })
    } else {
        return res.status(201).json({
            'message': `New item "${item.title}" added.`,
            'newItem': item
        })
    }
}

const updateItem = async (req, res) => {
    const updatedItem = await modifyItem(req.params.id, req.user.id, req.body)

    if (updatedItem == false) {
        return res.status(404).json({
            'message': `To-do item [id:${req.params.id}] not found`
        })
    } else {
        return res.status(200).json({
            'message': `To-do item [id: ${req.params.id}] updated successfully`,
            'updatedItem': updatedItem
        })
    }    
}

const getItemsForUser = async (req, res) => {
    const ToDoItems = await getAllByUserId(req.user.id)
    if (ToDoItems) {
        return res.status(200).json({
            'To-Do Items': ToDoItems
        })
    }else {
        return res.status(404).json({
            'message': 'You have not added to your list.'
        })
    }
}

const getOneToDoItem = async (req, res) => {
    const ToDoItem = await getOneItem(req.params.id)
    if (ToDoItem) {
        return res.status(200).json({
            'item requested': ToDoItem
        })
    } else {
        return res.status(404).json({
            'message': `To do item [id: ${req.params.id}] not found`
        })
    }
}

const removeItem = async (req, res) => {
    const deletedItem = await deleteItem(req.params.id)
    if (deletedItem) {
        return res.status(200).json({
            'message': `To do item [id: ${deletedItem._id}] has been deleted!`
        })
    } else {
        return res.status(404).json({
            'message': `To do item not found!`
        })
    }

}    
export default { addItem, updateItem, getItemsForUser, getOneToDoItem, removeItem }