module.exports = function (app) {

  const user_articles = require('../controllers/userfile.controller.js');

  // Create a new User_Articles
  app.post('/api/user_articles', user_articles.create);

  // Retrieve all User_Articles
  app.get('/api/user_articles', user_articles.findAll);

  // Retrieve a single User_Articles by Id
  app.get('/api/user_articles/:user_articlesId', user_articles.findOne);

  // Update a User_Articles with Id
  app.put('/api/user_articles', user_articles.update);

  // Delete a User_Articles with Id
  app.delete('/api/user_articles/:user_articlesId', user_articles.delete);

  app.post('/fileupload:id', user_articles.uploadArticles);
}

