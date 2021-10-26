import questions from '../questionsDb'

export default function handler(req, res) {
  res.status(200).json(questions[0]);
  }