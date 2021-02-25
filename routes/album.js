const router = require('express').Router(); 
// Respond to a GET request to the /api/album route:
router.get('/', (req, res) => res.send('Got a GET request at /api/album'));

// Respond to a PUT request to the /api/album route:
router.put('/', (req, res) => res.send('Got a PUT request at /api/album'));

// Respond to a DELETE request to the /api/album route:
router.delete('/', (req, res) => res.send('Got a DELETE request at /api/album'));

module.exports = router;