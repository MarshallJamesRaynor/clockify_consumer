import axios from 'axios';


axios.get('https://dog.ceo/api/breeds/list/all')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () { 
    // always executed
  });

