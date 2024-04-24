//Import express and express router as shown in lecture code and worked in previous labs
//You can make your axios calls to the API directly in the routes
import {Router} from 'express';
const router = Router();
import axios from 'axios';
import { APIKEY } from '../api.js';

const getRecs = async (long, lat) => {
  const url = new URL('https://test.api.amadeus.com/v1/reference-data/locations/pois');
  url.searchParams.append('latitude', lat);
  url.searchParams.append('longitude', long );
  const options = {
    method: 'GET',
    url: url,
    headers: {
      accept: 'application/vnd.amadeus+json',
      Authorization: `Bearer ${APIKEY}`
    }
  };

    let recs = await axios.request(options)
    .then(function (response) {
      return response.data.data;
    });
    console.log("Recommendations: ", recs);
    return recs;
}


router.route('/').get(async (req, res) => {
  //code here for GET
  return res.render('travelQuiz', {title: 'Travel Recommendation'})
});

router.route('/searchLocation').post(async (req, res) => {
  //code here for POST
  try {
    let locations = await getRecs(req.body.latitude, req.body.longitude);
      console.log("Locations: ", locations);
      return res.render('../views/results', {
        locationName: req.body.origin,
        searchLocation: req.body.originCode,
        locations: locations
      });
  } catch (e) {
    console.error("An error occurred:", e);
    return res.status(500).render('../views/error', {
      error: "An error occurred. Please try again!"
    });
  }})
export default router;