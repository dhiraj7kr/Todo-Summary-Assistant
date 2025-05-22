const Todo = require('../models/Todo');
const { summarizeTodos } = require('../services/llmService');
const { sendToSlack } = require('../services/slackService');

exports.summarizeAndSend = async (req, res) => {
  try {
    const todos = await Todo.find({ completed: false });
    const summary = await summarizeTodos(todos);
    await sendToSlack(summary);
    res.json({ message: 'Summary sent to Slack!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to summarize or send to Slack' });
  }
};
