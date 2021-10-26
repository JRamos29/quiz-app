import questions from '../questionsDb'

export default function handler(req, res) {
    const selectedId = +req.query.id;

    const singleQuestionOrNothing = questions.filter(question => question.id === selectedId);

    if (singleQuestionOrNothing.length === 1) {
      const selectedQuestion = singleQuestionOrNothing[0];
      res.status(200).json(selectedQuestion.toObject());
    } else {
      res.status(204).send();
    }
}