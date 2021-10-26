import { shuffle } from '../../../functions/arrays';
import questions from '../questionsDb';

export default function handler(req, res) {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids));
}
