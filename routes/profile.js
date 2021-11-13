import { Router } from 'express'

const router = Router()
//This is not needed with the way this app is currently built. Keeping it handy though in case it is needed.
// function isLoggedIn (req,res,next) {
//     if (req.isAuthenticated()) {
//         return document()
//     } 
//     res.redirect('auth/google')
// }

export {
    router
}