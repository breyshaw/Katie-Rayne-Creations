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

function createReview(req, res) {
    Item.findById(req.params.id, function(err, item) {
        item.reviews.push(req.body)
        item.save(function(err) {
            res.redirect(`/items/${item._id}`)
        })
    })
}

function deleteItem(req,res) {
    Item.findByIdAndDelete(req.params.id, function(err, item) {
        res.redirect('/items')
    })
}

function edit(req, res) {
    Item.findById(req.params.id, function(err, item) {
        res.render('items/edit', {
            title: "Edit item",
            item,
            err,
        })
    })
}
function update(req, res) {
        Item.findByIdAndUpdate(req.params.id, req.body, function(err, item) {
            res.redirect(`/items/${item._id}`)
        })
    }

export {
    newItem as new,
    create,
    index,
    show,
    createReview,
    deleteItem as delete,
    edit,
    update
}