import { Router } from 'express'

const router = Router()

import * as contactCtrl from '../controllers/contact.js'
// GET contact/new
//Structured this way for a future feature (email submit form)
router.get('/new', contactCtrl.new)

export {
  router
}