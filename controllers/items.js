import { Item } from '../models/item.js'



function newItem(req,res) {
    res.render('items/new', {
    title: 'Add item'
})
}

function create(req, res) {
    const item = new Item(req.body)
    item.save(function(err) {
    if (err) return res.redirect('/items/new')
    res.redirect('items/new')
})
}




export {
    newItem as new,
    create
}