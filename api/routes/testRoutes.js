'use strict';
module.exports = function(app) {
  var test = require('../controllers/testController');

  app.route('/')
    .get(test.home);

  app.route('/tests')
    .get(test.list_all_tests)
    .post(test.create_a_test);
}