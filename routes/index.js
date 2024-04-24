//Here you will import route files and export them as used in previous labs
import tripRoutes from './destinations.js';

const constructorMethod = (app) => {
  app.use('/', tripRoutes);
  
};

export default constructorMethod;