const router = require('express').Router(); 
// Respond to a GET request to the /api/index route:
router.get('/', (req, res) => res.send('Got a GET request at /api/song'));

// Respond to a PUT request to the /api/index route:
router.put('/', (req, res) => res.send('Got a PUT request at /api/song'));

// Respond to a DELETE request to the /api/index route:
router.delete('/', (req, res) => res.send('Got a DELETE request at /api/song'));
module.exports = router;