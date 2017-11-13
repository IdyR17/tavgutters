const { Router } = require('express')

const router = Router()

router.get('/', (req,res) => {
  res.render('index', {
    title : 'Tav Gutters Employee Portal'
  })
})

router.get('/user', (req, res) => {
  res.render('user', {
    title : 'Tav Gutters'
  })
})

module.exports = router