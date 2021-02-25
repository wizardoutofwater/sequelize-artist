const router = require('express').Router(); 

// Respond to a GET request to the /api/index route:
router.get('/', (req, res) => res.send('Got a GET request at /api/index'));

// Respond to a PUT request to the /api/index route:
router.put('/', (req, res) => res.send('Got a PUT request at /api/index'));

// Respond to a DELETE request to the /api/index route:
router.delete('/', (req, res) => res.send('Got a DELETE request at /api/index'));

module.exports = router;