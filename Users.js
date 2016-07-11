var request = require("request");
// TODO: The documentation has changed for `mongoose-paginate`
  // as the original author unpublished and then published it (not sure why)
  // but the API has changed, so this example is no longer relevant or accurate
  // see <https://github.com/edwardhotchkiss/mongoose-paginate>
  //
  // This example assumes you've previously defined `Users`
  // as `var Users = db.model('Users')` if you are using `mongoose`
  // and that you've added the Mongoose plugin `mongoose-paginate`
  // to the Users model via `User.plugin(require('mongoose-paginate'))`
  
var options = { method: 'GET',
  url: 'http://swapi.co/api/starships/9/',
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
