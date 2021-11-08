import { Router } from 'express'
const router = Router()
import * as itemsCtrl from '../controllers/items.js'


// GET /items
router.get('/', itemsCtrl.index)
// GET /items/clothes
router.get('/clothes', itemsCtrl.clothes)
// // GET /items/tumblers
// router.get('/tumblers', itemsCtrl.tumblers)
// // GET /items/misc
// router.get('/misc', itemsCtrl.misc)
// GET /items/new
router.get('/new', itemsCtrl.new)
// POST /items
router.post('/', itemsCtrl.create)
// GET /items/:id
router.get('/:id', itemsCtrl.show)
// POST /items/:id/reviews
router.post('/:id/reviews', itemsCtrl.createReview)
// DELETE /items/:id
router.delete("/:id", itemsCtrl.delete)
// GET /items/id:/edit
router.get("/:id/edit", itemsCtrl.edit)
// PUT /items/:id
router.put("/:id", itemsCtrl.update)


export {
    router
}