const axios = require('axios');
require('dotenv').config();

exports.summarizeTodos = async (todos) => {
  const content = todos.map(t => `• ${t.text}`).join('\n');
  const prompt = `Summarize the following pending tasks:\n${content}`;

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].message.content;
};
