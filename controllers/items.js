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

function index(req, res) {
    Item.find({}, function(err, items){
        res.render('items/index', {
            items
        })
    })
}




export {
    newItem as new,
    create,
    index
}