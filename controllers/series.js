const Serie = require('../models/serie')


const index = (req, res) => {
  Serie.find({}, (err, docs) => {
  res.render('series/index', { series: docs })
})
}
  const nova = (req, res) => {
   const serie = new Serie ({
     name:'Deixados para trás',
     status: 'Assistido'
   })
   serie.save(() => console.log('saved'))
    res.render('series/nova')
  }
module.exports = {
  index, nova
}