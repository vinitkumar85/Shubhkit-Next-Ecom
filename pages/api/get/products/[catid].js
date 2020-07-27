const appConfig = require('../../../../appconfig');

const axios = require('axios');

export default (req, res) => {
  var catId = req.query.catid;
  axios.get(`${appConfig.basePath}/rest/V1/products/?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]=${catId}&searchCriteria[pageSize]=60`,
    {
      headers: { 'Authorization': `Bearer ${appConfig.secretToken}` }
    }
  )
    .then(response => {
      res.send(response.data.items);
    })
    .catch(error => {
      res.send(error.response.data);
    });
}
