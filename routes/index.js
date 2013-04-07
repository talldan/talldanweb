
/*
 * GET home page.
 */

var projectsConfig = require('../config/projects');
//console.log(JSON.stringify(projectsConfig));

exports.index = function(req, res){
  res.render('index', 
  { 
	  title: 'talldan.com',
	  projects: projectsConfig
  });
};