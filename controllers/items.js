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
    res.redirect('/items')
})
}

function index(req, res) {
    Item.find({}, function(err, items){
        res.render('items/index', {
            items
        })
    })
}

function show(req, res) {
    Item.findById(req.params.id, function (err, item) {
        res.render('items/show', {
        item: item
        })
    })
}




export {
    newItem as new,
    create,
    index,
    show
}