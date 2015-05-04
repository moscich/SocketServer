var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/:id', function(req, res) {
	var server = req.app.settings['websocket']
	 	server.connections.forEach(function (conn) {
	 		conn.sendText(req.params.id)
    	})

  res.render('index', { title: 'Express' });
});

module.exports = router;
