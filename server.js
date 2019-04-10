
const axios = require('axios');

async function getGithubData() {
  let res = await axios.get('https://api.github.com/users/KrunalLathiya');
  console.log(res.data.login);
}

getGithubData();