function newContact(req, res) {
      res.render('contact/new', {
        title: 'Contact me!',
      })
    }
  

export {
    newContact as new,
}