import { Item } from '../models/item.js'



function newItem(req,res) {
    res.render('items/new', {
    title: 'Add item'
})
}





export {
    newItem as new
}