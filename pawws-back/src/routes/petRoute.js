export default (app) => {
  const pet = require("../controllers/petController");

  app.route('/getPets')
           .get(pet.getPets);

  app.route('/getThings')
           .get(pet.getThings);
};