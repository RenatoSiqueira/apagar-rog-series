const Serie = require('../models/serie')


const index = (req, res) => {
  Serie.find({}, (err, docs) => {
  res.render('series/index', { series: docs })
})
}
  const nova = (req, res) => {
   const serie = new Serie ({
     name:'A Grande Família',
     status: 'Assistindo'
   })
  res.render('series/nova')
  }
module.exports = {
  index, nova
}