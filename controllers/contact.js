
import { Contact } from '../models/contact.js'



function newInquiry(req, res) {
    Contact.find({}, function (err, contacts) {
      res.render('contact/new', {
        title: 'Contact me!',
        contacts: contacts,
      })
    })
  }

export {
    newInquiry as new,
}