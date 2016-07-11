// # app.js

var express = require('express');
var paginate = require('express-paginate');
var request = require("request");
var url = require('url');
var app = express();
 var rootURL = 'http://swapi.co/api/';

// keep this before all routes that will use pagination
app.use(paginate.middleware(10, 50));

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/character/:id',function(req, res, next){
  var id = req.params.id;
  if (id === parseInt(id, 10)){
        request(rootURL + 'people' +  '/'+id+'/', function (error, response, body){
        if (error) throw new Error(error);
  res.send(body);
        console.log(body);
    });
  }else{
        request(rootURL + 'people' +  '/?name='+id+'/', function (error, response, body){
        if (error) throw new Error(error);
  res.send(body);
        console.log(body);
    });
  }
  

  });
  app.get('/characters',function(req, res, next){
    console.log('characters');
    if(req.params.page==null){
      var defaULTpage='/?page=1';
      if(req.query.sort!=null)
      defaULTpage=defaULTpage+'/?sort='+req.query.sort;
       request(rootURL + 'people' + defaULTpage ,function(error,response,body) {
      console.log(rootURL + 'people' + '/?page=1');
         if (error) throw new Error(error);
         res.send(body);
       });
  
    }else{
     var defaULTpage='/?page='+req.params.page;
      if(req.query.sort!=null)
      defaULTpage=defaULTpage+'/?sort='+req.query.sort;
     request(rootURL + 'people' +  defaULTpage,function(error,response,body) {
      console.log(rootURL + 'people' + '/?page=1');
         if (error) throw new Error(error);
         res.send(body);
       });
   
    }
   
     //res.send('characters');
  });    
    app.get('/characters/:page',function(req, res, next){
     console.log('characters'); 
    var page= req.params.page;
     if(req.query.page){
       if(req.query.sort!=null){
      
    }
       request(rootURL + 'people' + '/?page=' + req.params.page,'/?sort='+ req.params.sort,function(error,response,body) {
         if (error) throw new Error(error);
         res.send(body);
       });
      }
      else {
        if(req.query.sort==null){
      
    }
        request(rootURL + 'people' + '/?page=' + req.query[0], req.query[1]);
      }
    

  });
app.get('/planetresidents/?name', function(req, res, next) {

  //
  
  //people/1/`
/*
 Users.paginate({}, { page: req.query.page, limit: req.query.limit }, function(err, users, pageCount, itemCount) {

    if (err) return next(err);

    res.format({
      html: function() {
        res.render('users', {
          users: users,
          pageCount: pageCount,
          itemCount: itemCount,
          pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
        });
      },
      json: function() {
        // inspired by Stripe's API response for list objects
        res.json({
          object: 'list',
          has_more: paginate.hasNextPages(req)(pageCount),
          data: users
        });
      }
    });

  });
*/

//planets/?name="Yavin IV"
request(rootURL + 'planets/?name='+req.params.name + req.params.page,'/?sort='+ req.params.sort,function(error,response,body) {
         if (error) throw new Error(error);
         res.send(body);
       });
});

app.listen(3000);