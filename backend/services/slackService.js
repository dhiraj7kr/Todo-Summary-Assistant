const axios = require('axios');
require('dotenv').config();

exports.sendToSlack = async (summary) => {
  await axios.post(process.env.SLACK_WEBHOOK_URL, { text: summary });
};
