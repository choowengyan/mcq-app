// Name: Choo Weng Yan
// Class: DIT/FT/1A/09
// Admission Number: p1940208
// Subject: FOP Assignment 

var input = require('readline-sync');

//Prompt the user to state down his/her name
do {
    var name = input.question("Welcome to The Wonder Quiz!\nPlease enter your name: ");
    if (name == "") {
        console.log("Please enter your name to continue. \n>>>");
    }
} while (name == "");

class MCQ {
    constructor(question, choice = [], answer, category) {
        this.question = question;
        this.choice = choice;
        this.answer = answer;
        this.category = category;
        this.myAns = "";
    } //end constructor

    //method that shows the question and choices
    getQuestion() {
        console.log(this.question + "\n(1)" + this.choice[0] + "\n(2)" + this.choice[1] + "\n(3)" + this.choice[2] + "\n(4)" + this.choice[3]);
    }
}

class Quiz {
    constructor() {
        this.catPool = [];  //to be stored in this array according to category selected 
        this.questionPool = []; //stores all the questions 
        this.score = 0;

        //Category 1:General Knowledge
        this.questionPool.push(new MCQ("The word 'ketchup' is derived from which language?", ["Chinese", "Malay", "English", "Hindi"], 0, 1));
        this.questionPool.push(new MCQ("What do the initials 'GP' stand for in the medical profession?", ["Good Person", "Giant Pokemon", "General Practitioner", "General Person"], 2, 1));
        this.questionPool.push(new MCQ("Which pair of superheroes are known as the 'Dynamic Duo'?", ["Batwoman and Batman", "The Avengers and Batman", "Ant-Man and Captain America", "Batman and Robin"], 3, 1));
        this.questionPool.push(new MCQ("Freestyle and Greco-Roman are disciplines of which Olympic Sport?", ["Wrestling", "Diving", "Breaking", "Curling"], 0, 1));
        this.questionPool.push(new MCQ("What type of creature live in an apiary?", ["Canines", "Primates", "Bee", "Alicorn"], 2, 1));

        //Category 2:Biology 
        this.questionPool.push(new MCQ("What is the substrate of photo-respiration?", ["Pyruvic acid", "Cytochrome", "Fluorescein", "Potassium Salt"], 0, 2));
        this.questionPool.push(new MCQ("DNA is found in _____ outside the nucleus?", ["Ribosome", "Cytoskeleton", "Mitochondrion", "Lysosome"], 2, 2));
        this.questionPool.push(new MCQ("Vermicomposting is done by ________.", ["Worms", "Fungi", "Protozoa", "Rotifers"], 0, 2));
        this.questionPool.push(new MCQ("Foramen Magnum is an aperture found in which part of body?", ["Pelvic girdle", "Humerus", "Phalanges", "Skull"], 3, 2));
        this.questionPool.push(new MCQ("What is Euphenics?", ["Molecular Interactions", "Regulation of internal environment", "Manipulation of genes", "Treatment of macroscopic"], 2, 2));

        //Category 3: Geography 
        this.questionPool.push(new MCQ("Which ocean lies on the east coast of the United States?", ["Atlantic", "Pacific", "Indian", "Arctic"], 0, 3));
        this.questionPool.push(new MCQ("Which is the world's highest mountain?", ["Makalu", "Lhotse", "Manaslu", "Mount Everest"], 3, 3));
        this.questionPool.push(new MCQ("How many Great Lakes are there?", ["2", "3", "5", "6"], 2, 3));
        this.questionPool.push(new MCQ("Which is the world biggest desert?", ["Gobi", "Sahara", "Kalahari", "Antarctica"], 1, 3));
        this.questionPool.push(new MCQ("Which is the longest river in the world?", ["Yangtze River", "Yellow River", "Lena River", "Nile River"], 3, 3));

        //Category 4: Mathematics
        this.questionPool.push(new MCQ("Find the sum of 111 + 222 + 333 ", ["666", "777", "999", "100"], 0, 4));
        this.questionPool.push(new MCQ("50 times 5 is equal to ____ .", ["2500", "500", "25", "250"], 3, 4));
        this.questionPool.push(new MCQ("Find the product of 72 x 3", ["116", "216", "316", "416"], 1, 4));
        this.questionPool.push(new MCQ("Please solve 24 + 4 x 4", ["25", "45", "40", "50"], 2, 4));
        this.questionPool.push(new MCQ("How many diagonals are there in a quadrilateral?", ["1", "2", "3", "4"], 1, 4));
    }//end consstructor 

    getQuestionAt(index) {
        return this.questionPool[index];
    }
}

var quiz = new Quiz();

//ask user to choose one category to answer 
do {
    var cat = input.questionInt("Hi," + name + "! Please choose one quiz category you would like to answer :\n 1)General Knowledge \n 2)Biology \n 3)Geography \n 4)Mathematics\n>>>");

    switch (cat) {
        case 1: console.log("[General Knowledge] Category selected: ")
            for (var i = 0; i < 5; i++) {
                quiz.catPool.push(quiz.questionPool[i]);
            }
            break;

        case 2: console.log("[Biology] Category selected: ");
            for (var i = 5; i < 10; i++) {
                quiz.catPool.push(quiz.questionPool[i]);
            }
            break;

        case 3: console.log("[Geography] Category selected: ");
            for (var i = 10; i < 15; i++) {
                quiz.catPool.push(quiz.questionPool[i]);
            }
            break;

        case 4: console.log("[Mathematics] Category selected: ");
            for (var i = 15; i < 20; i++) {
                quiz.catPool.push(quiz.questionPool[i]);
            }
            break;

        default: console.log("Please enter number between 1 to 4 only.");
    }
} while (cat < 1 || cat > 4);

//show questions and ask user for input answer
for (var i = 0; i < 5;) {
    console.log("Question " + (i + 1) + ":");
    quiz.catPool[i].getQuestion();

    //allow user to enter answer or skip the questions
    console.log("(Please enter 1 to 4 to answer the question,N to next question, P to previous question)");
    check = input.question(">>> ");
    if (check < 5 && check > 0) {
        quiz.catPool[i].myAns = check;
        i++;
    } else if (check.toLowerCase() == "n") {
        i++;
    } else if (check.toLowerCase() == "p") {
        if (i > 0) {
            i--;
        }
    }
    console.log();

    //validate (check for correct input options)
    if ((check > 4 || check < 1) && (check.toLowerCase() != "n" || check.toLowerCase() != "p")) {
        console.log("Please choose between 1 to 4 or N or P.");
    } else if (check = "") {
        console.log("You have not answer one of the question yet. Please choose the number of question to complete them.");
    }
}

//Function for showing the summary for user input answer
function getSummary() {
    console.log("Here are your answers:");
    for (var i = 0; i < 5; i++) {
        console.log("Question " + (i + 1) + ": " + quiz.catPool[i].question + "\n" + "Your answer: " + "(" + quiz.catPool[i].myAns + ")" + quiz.catPool[i].choice[quiz.catPool[i].myAns - 1] + "\n");
    }
}

//Show summary and Ask user to submit or change answer 
do {
    getSummary(cat);
    do {
        changeAns = input.questionInt("Enter 0 to submit your quiz or [1 to 5] to change your answer.\n>>>");
        if (changeAns < 0 || changeAns > 5) {
            console.log("Please enter number between 0-5 only.");
        }
    } while (changeAns < 0 || changeAns > 5);

    //user choose to submit 
    if (changeAns == 0) {
        var unattempted = false;  //user has not answer one of the question
        for (i = 0; i < 5; i++) {
            if (quiz.catPool[i].myAns == 0) {
                console.log("You have not answer Question " + (i + 1) + " yet.");
                unattempted = true;
            }

        } if (unattempted) {
            var submit = input.question("Are you sure you want to submit? (Y (yes) | N (no) ) \n >>>");
            if (submit.toUpperCase() == "Y") {
                break;
            }
        }
    } else {    //(user choose to change answer)
        console.log("Question " + changeAns + ":");
        quiz.catPool[changeAns - 1].getQuestion();
        check = input.questionInt(">>> ");

        do {
            if (check < 1 || check > 4) {
                console.log("Please choose between 1 to 4.");
                check = input.questionInt(">>> ");
            }
        } while (check < 1 || check > 4)
        quiz.catPool[changeAns - 1].myAns = check;
    }
} while (changeAns != 0 || unattempted);

//Show results after pressing "0" (submit button)
for (i = 0; i < 5; i++) {
    if (quiz.catPool[i].answer == quiz.catPool[i].myAns - 1) {
        quiz.score++;
    }
}

//Function to show answer sheet if user enter "Y" or  "X" to exit the program 
function answerSheet() {
    do {
        var view = input.question("Press Y to view the answer sheet or X to exit: \n >>>");
        if (view.toUpperCase() == "Y") {
            console.log("Here are the answer sheet:\n")
            for (var i = 0; i < 5; i++) {
                console.log("Question " + (i + 1) + ":\n" + quiz.catPool[i].question + "\n" + "Correct Answer: (" + (quiz.catPool[i].answer + 1) + ") " + quiz.catPool[i].choice[quiz.catPool[i].answer]);
                console.log();
            } console.log("Hope to see you soon, bye!");
            break;
        } else if (view.toUpperCase() == "X") {
            console.log("Hope to see you soon! Bye!");
            break;
        } else {
            console.log("Please enter X and Y only.")
        }
    } while (view.toUpperCase() !== "Y" || view.toUpperCase() !== "X");
}

//show the user's score 
console.log("Congratulations! You have done the quiz! Here are your result:\n You get " + quiz.score + " out of 5!");

//ask user if they want to see answer sheet or quit(exit) the quiz
if (quiz.score <= 2) {
    console.log("You may work harder next time!");
    answerSheet();
}
else if (quiz.score > 2 && quiz.score < 4) {
    console.log("Wow, not bad and keep it up!");
    answerSheet();
}
else {
    console.log("Awesome! You did a great job!");
    answerSheet();
}