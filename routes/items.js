import { Router } from 'express'
const router = Router()
import * as itemsCtrl from '../controllers/items.js'


// GET /items/new
router.get('/new', itemsCtrl.new)

export {
    router
}