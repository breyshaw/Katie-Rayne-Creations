import { Router } from 'express'
const router = Router()
import * as itemsCtrl from '../controllers/items.js'


// GET /items
router.get('/', itemsCtrl.index)
// GET /items/new
router.get('/new', itemsCtrl.new)
// POST /items
router.post('/', itemsCtrl.create)
// GET /items/:id
router.get('/:id', itemsCtrl.show)

export {
    router
}