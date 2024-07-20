const express = require('express');

const router = express.Router();

const { InfoController } = require('../../controllers/index')

// router.get('/info', (req, res) => {
//     return res.json({ msg: "Hello Kunal You are on track" });
// });

router.get('/info', InfoController.info)

module.exports = router;