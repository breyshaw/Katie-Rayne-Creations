import { Router } from 'express'

const router = Router()

import * as contactCtrl from '../controllers/contact.js'

router.get('/new', contactCtrl.new)

export {
  router
}