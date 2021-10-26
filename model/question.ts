import AnswerModel from './answer';

export default class QuestionModel {

    #id: number;
    #statement: string;
    #answers: AnswerModel[];
    #gotRightAnswer: boolean;

    constructor(id: number, statement: string, answers: AnswerModel[], gotRightAnswer = false) {
        this.#id = id;
        this.#statement = statement;
        this.#answers = answers;
        this.#gotRightAnswer = gotRightAnswer;
    }

    get id() {
        return this.#id;
    }
    get statement() {
        return this.#statement;
    }
    get answers() {
        return this.#answers;
    }
    get gotRightAnswer() {
        return this.#gotRightAnswer;
    }

    get answered() {
        for (let answer of this.#answers) {
            if (answer.isRevealed) return true;
        }
        return false;
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(answer => answer.toObject()),
            gotRightAnswer: this.#gotRightAnswer,
        }
    }
}