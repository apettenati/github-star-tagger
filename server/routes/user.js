const router = require('express').Router()
const User = require('../models/user')

router.get('/:username', (req, res) => {
  const username = req.params.username
  User.findOne({ username }, (error, user) => {
    if (error) { return res.status(400).json({ error }) }
    res.json(user)
  })
})

router.post('/:username', async (req, res) => {
  const username = req.params.username
  console.log({ username })
  const stars = req.body.tags.stars
  await User.findOne({ username }, async (error, user) => {
    if (error) { return res.status(400).json({ error }) }
    if (user) {
      console.log(user.id)
      User.findByIdAndUpdate(user.id, { stars }, (error, result) => {
        res.status(200).json(result)
      })
    } else {
      const newUser = new User({ username, stars })
      console.log({ newUser })
      await newUser.save()
        .then(() => res.status(200))
        .catch(error => res.status(400).json({ error }))
    }
  })
})

module.exports = router