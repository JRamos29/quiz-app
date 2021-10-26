export default class AnswerModel {
    #value: string;
    #isRightAnswer: boolean;
    #isRevealed: boolean;


    constructor(value: string, isRightAnswer: boolean, isRevealed = false) {
        this.#value = value;
        this.#isRightAnswer = isRightAnswer;
        this.#isRevealed = isRevealed;

    }

    static setRightAnswer(value: string) {
        return new AnswerModel(value, true);

    }

    static setWrongAnswer(value: string) {
        return new AnswerModel(value, false);
    }

    get value() {
        return this.#value;
    }
    get isRightAnswer() {
        return this.#isRightAnswer;
    }
    get isRevealed() {
        return this.#isRevealed;
    }

  reveal() {
    return new AnswerModel(this.#value, this.#isRightAnswer, true);
  }

    toObject() {
        return {
            value: this.#value,
            isRightAnswer: this.#isRightAnswer,
            isRevealed: this.#isRevealed,
        }
    }
}
