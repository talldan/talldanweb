
/*
 * GET home page.
 */

var projects = require('../config/projects');

exports.index = function(req, res){
  res.render('index', 
  { 
	  title: 'talldan.com',
	  projects: projects,
	  numOfProjects: projects.length
  });
};