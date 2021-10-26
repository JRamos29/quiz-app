import QuestionModel from "../../model/question";
import AnswerModel from '../../model/answer';

//The right answer is set at always at last line.
const questions: QuestionModel[] = [

    new QuestionModel(1, 'In 1768, Captain James Cook set out to explore which ocean ?', [
        AnswerModel.setWrongAnswer('Atlantic Ocean'),
        AnswerModel.setWrongAnswer('Indian Ocean'),
        AnswerModel.setWrongAnswer('Arctic Ocean'),
        AnswerModel.setRightAnswer('Pacific Ocean'),
    ]),

    new QuestionModel(2, 'What is actually electricity ?', [
        AnswerModel.setWrongAnswer('A flow of water'),
        AnswerModel.setWrongAnswer('A flow of air'),
        AnswerModel.setWrongAnswer('A flow of atoms'),
        AnswerModel.setRightAnswer('A flow of electrons'),
    ]),

    new QuestionModel(3, 'Which of the following is not an international organisation ?', [
        AnswerModel.setWrongAnswer('FIFA'),
        AnswerModel.setWrongAnswer('NATO'),
        AnswerModel.setWrongAnswer('ASEAN'),
        AnswerModel.setRightAnswer('FBI'),
    ]),

    new QuestionModel(4, 'Which of the following disorders is the fear of being alone ?', [
        AnswerModel.setWrongAnswer('Aerophobia'),
        AnswerModel.setWrongAnswer('Acrophobia'),
        AnswerModel.setWrongAnswer('Arachnophobia'),
        AnswerModel.setRightAnswer('Agoraphobia'),
    ]),

    new QuestionModel(5, 'Which of the following is a song by the German heavy metal band “Scorpions” ?', [
        AnswerModel.setWrongAnswer('Stairway to Heaven'),
        AnswerModel.setWrongAnswer('Don’t Stop Me Now'),
        AnswerModel.setWrongAnswer('Hey Jude'),
        AnswerModel.setRightAnswer('Wind of Change'),
    ]),

    new QuestionModel(6, 'What is the speed of sound ?', [
        AnswerModel.setWrongAnswer('120 km/h'),
        AnswerModel.setWrongAnswer('400 km/h'),
        AnswerModel.setWrongAnswer('700 km/h'),
        AnswerModel.setRightAnswer('1,200 km/h'),
    ]),

    new QuestionModel(7, 'Which is the easiest way to tell the age of many trees ?', [
        AnswerModel.setWrongAnswer('To measure the width of the tree'),
        AnswerModel.setWrongAnswer('To count the number of leaves'),
        AnswerModel.setWrongAnswer('To measure the height of the tree'),
        AnswerModel.setRightAnswer('To count the rings on the trunk'),
    ]),

    new QuestionModel(8, 'What do we call a newly hatched butterfly ?', [
        AnswerModel.setWrongAnswer('A moth'),
        AnswerModel.setWrongAnswer('A butter'),
        AnswerModel.setWrongAnswer('A chrysalis'),
        AnswerModel.setRightAnswer('A caterpillar'),
    ]),

    new QuestionModel(9, 'In total, how many novels were written by the Bronte sisters ?', [
        AnswerModel.setWrongAnswer('4'),
        AnswerModel.setWrongAnswer('5'),
        AnswerModel.setWrongAnswer('6'),
        AnswerModel.setRightAnswer('7'),
    ]),

    new QuestionModel(10, 'Which did Viking people use as money ?', [
        AnswerModel.setWrongAnswer('Rune stones'),
        AnswerModel.setWrongAnswer('Seal skins'),
        AnswerModel.setWrongAnswer('Wool'),
        AnswerModel.setRightAnswer('Jewellery'),
    ]),

    new QuestionModel(11, 'What was the first country to use tanks in combat during World War I ?', [
        AnswerModel.setWrongAnswer('France'),
        AnswerModel.setWrongAnswer('Japan'),
        AnswerModel.setWrongAnswer('Germany'),
        AnswerModel.setRightAnswer('Britain'),
    ]),

    new QuestionModel(12, 'What is the main component of the sun ?', [
        AnswerModel.setWrongAnswer('Liquid lava'),
        AnswerModel.setWrongAnswer('Molten iron'),
        AnswerModel.setWrongAnswer('Rock'),
        AnswerModel.setRightAnswer('Gas'),
    ]),

    new QuestionModel(13, 'Goulash is a type of beef soup in which country ?', [
        AnswerModel.setWrongAnswer('Czech Republic'),
        AnswerModel.setWrongAnswer('Slovakia'),
        AnswerModel.setWrongAnswer('Ireland'),
        AnswerModel.setRightAnswer('Hungary'),
    ]),

    new QuestionModel(14, 'Which two months are named after Emperors of the Roman Empire ?', [
        AnswerModel.setWrongAnswer('January and February'),
        AnswerModel.setWrongAnswer('March and April'),
        AnswerModel.setWrongAnswer('May and June'),
        AnswerModel.setRightAnswer('July and August'),
    ]),

    new QuestionModel(15, 'Which of the following animals can run the fastest ?', [
        AnswerModel.setWrongAnswer('Leopard'),
        AnswerModel.setWrongAnswer('Tiger'),
        AnswerModel.setWrongAnswer('Lion'),
        AnswerModel.setRightAnswer('Cheetah'),
    ]),

    new QuestionModel(16, 'Where did the powers of Spiderman come from ?', [
        AnswerModel.setWrongAnswer('He was born with them'),
        AnswerModel.setWrongAnswer('He went through a scientific experiment'),
        AnswerModel.setWrongAnswer('He woke up with them after a dream'),
        AnswerModel.setRightAnswer('He was bitten by a radioactive spider'),
    ]),

    new QuestionModel(17, 'What is the most points that a player can score with a single throw in darts ?', [
        AnswerModel.setWrongAnswer('20'),
        AnswerModel.setWrongAnswer('40'),
        AnswerModel.setWrongAnswer('80'),
        AnswerModel.setRightAnswer('60'),
    ]),

    new QuestionModel(18, 'In the United States, football is called soccer.So what is American football called in the United Kingdom ?', [
        AnswerModel.setWrongAnswer('Rugby'),
        AnswerModel.setWrongAnswer('Handball'),
        AnswerModel.setWrongAnswer('Combball'),
        AnswerModel.setRightAnswer('American football'),
    ]),

    new QuestionModel(19, 'Which of the following actors was the first one to play James Bond ?', [
        AnswerModel.setWrongAnswer('Timothy Dalton'),
        AnswerModel.setWrongAnswer('Roger Moore'),
        AnswerModel.setWrongAnswer('George Lazenby'),
        AnswerModel.setRightAnswer('Sean Connery'),
    ]),

    new QuestionModel(20, 'Which of the following songs was the top - selling hit in 2019 ?', [
        AnswerModel.setWrongAnswer('Old Town Road'),
        AnswerModel.setWrongAnswer('I Don’t Care'),
        AnswerModel.setWrongAnswer('Bad Guy'),
        AnswerModel.setRightAnswer('Someone You Loved'),
    ]),

    new QuestionModel(21, 'In which country is Transylvania ?', [
        AnswerModel.setWrongAnswer('Bulgaria'),
        AnswerModel.setWrongAnswer('Croatia'),
        AnswerModel.setWrongAnswer('Serbia'),
        AnswerModel.setRightAnswer('Romania'),
    ]),

    new QuestionModel(22, 'Which football club does Jordan Henderson play for?', [
        AnswerModel.setWrongAnswer('Manchester City'),
        AnswerModel.setWrongAnswer('Tottenham Hotspur'),
        AnswerModel.setWrongAnswer('Chelsea'),
        AnswerModel.setRightAnswer('Liverpool'),
    ]),

    new QuestionModel(23, 'The two biggest exporters of beers in Europe are Germany and ...', [
        AnswerModel.setWrongAnswer('Spain'),
        AnswerModel.setWrongAnswer('France'),
        AnswerModel.setWrongAnswer('Italy'),
        AnswerModel.setRightAnswer('Belgium'),
    ]),

    new QuestionModel(24, 'The phrase: ”I think, therefore I am” was coined by which philosopher ?', [
        AnswerModel.setWrongAnswer('Socrates'),
        AnswerModel.setWrongAnswer('Plato'),
        AnswerModel.setWrongAnswer('Aristotle'),
        AnswerModel.setRightAnswer('Descartes'),
    ]),

    new QuestionModel(25, 'In the series “Game of Thrones”, Winterfell is the ancestral home of which family ?', [
        AnswerModel.setWrongAnswer('The Lannisters'),
        AnswerModel.setWrongAnswer('The Tully’s'),
        AnswerModel.setWrongAnswer('The Targaryens'),
        AnswerModel.setRightAnswer('The Starks'),
    ]),

    new QuestionModel(26, 'Who is known as the Patron Saint of Spain ?', [
        AnswerModel.setWrongAnswer('St Patrick'),
        AnswerModel.setWrongAnswer('St Benedict'),
        AnswerModel.setWrongAnswer('St John'),
        AnswerModel.setRightAnswer('St James'),
    ]),

    new QuestionModel(27, 'What does the term “SOS” commonly stand for ?', [
        AnswerModel.setWrongAnswer('Save Our Sheep'),
        AnswerModel.setWrongAnswer('Save Our Ship'),
        AnswerModel.setWrongAnswer('Save Our Seal'),
        AnswerModel.setRightAnswer('Save Our Souls'),
    ]),

    new QuestionModel(28, 'Which company is known for publishing the Mario video game ?', [
        AnswerModel.setWrongAnswer('Xbox'),
        AnswerModel.setWrongAnswer('SEGA'),
        AnswerModel.setWrongAnswer('Electronic Arts'),
        AnswerModel.setRightAnswer('Nintendo'),
    ]),

    new QuestionModel(29, 'We often use sodium bicarbonate in the kitchen. What is its other name ?', [
        AnswerModel.setWrongAnswer('Vinegar'),
        AnswerModel.setWrongAnswer('Sugar'),
        AnswerModel.setWrongAnswer('Salt'),
        AnswerModel.setRightAnswer('Baking soda'),
    ]),

    new QuestionModel(30, 'Which was the first film by Disney to be produced in colour ?', [
        AnswerModel.setWrongAnswer('Toy Story'),
        AnswerModel.setWrongAnswer('Sleeping Beauty'),
        AnswerModel.setWrongAnswer('Cinderella'),
        AnswerModel.setRightAnswer('Snow White and the Seven Dwarfs'),
    ]),

    new QuestionModel(31, 'What is the name of the first book of the Old Testament in the Bible ?', [
        AnswerModel.setWrongAnswer('Exodus'),
        AnswerModel.setWrongAnswer('Proverbs'),
        AnswerModel.setWrongAnswer('Matthew'),
        AnswerModel.setRightAnswer('Genesis'),
    ]),

    new QuestionModel(32, 'Neil Armstrong was the first astronaut in the world to step foot on the moon. Who was the second ?', [
        AnswerModel.setWrongAnswer('Yuri Gagarin'),
        AnswerModel.setWrongAnswer('James Irwin'),
        AnswerModel.setWrongAnswer('Alan Bean'),
        AnswerModel.setRightAnswer('Buzz Aldrin'),
    ]),

    new QuestionModel(33, 'How many time zones are there in total in the world ?', [
        AnswerModel.setWrongAnswer('8'),
        AnswerModel.setWrongAnswer('16'),
        AnswerModel.setWrongAnswer('32'),
        AnswerModel.setRightAnswer('24'),
    ]),

    new QuestionModel(34, 'What is the rarest type of blood in the human body ?', [
        AnswerModel.setWrongAnswer('O positive'),
        AnswerModel.setWrongAnswer('B negative'),
        AnswerModel.setWrongAnswer('A positive'),
        AnswerModel.setRightAnswer('AB negative'),
    ]),

    new QuestionModel(35, 'Cu is the chemical symbol for which element ?', [
        AnswerModel.setWrongAnswer('Oxygen'),
        AnswerModel.setWrongAnswer('Zinc'),
        AnswerModel.setWrongAnswer('Helium'),
        AnswerModel.setRightAnswer('Copper'),
    ]),

];

export default questions;
