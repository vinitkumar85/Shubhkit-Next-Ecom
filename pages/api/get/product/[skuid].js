const appConfig = require('../../../../appconfig');
const axios = require('axios');

export default (req, res) => {
    var skuid = req.query.skuid;
    axios.get(`${appConfig.basePath}/rest/V1/products/${skuid}`,
      {
        headers: { 'Authorization': `Bearer ${appConfig.secretToken}` }
      }
    )
      .then(response => {
        let resultArray = {};
        if(response){
          response.data.custom_attributes.map((item) => {
            item.attribute_code.description;
            if (item.attribute_code === 'description') {
              resultArray.desc = item.value;
            }
            if (item.attribute_code === 'meta_keyword') {
              resultArray.meta_keyword = item.value;
            }
            if (item.attribute_code === 'meta_title') {
              resultArray.meta_title = item.value;
            }
          });
          resultArray.name = response.data.name;
          resultArray.price = response.data.price;
        }
        res.send(resultArray);
      })
      .catch(error => {
        res.send(error.response.data);
      });
  
  }