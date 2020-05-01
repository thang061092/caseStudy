class Game {
    constructor(number) {
        this.quizs = [];
        this.count = 0;
        this.number = number;
        this.point=0;
    }

    creatQuizs() {
        for (let i = 0; i < this.number; i++) {
            let quiz = new Quiz(questions[i][0], questions[i][1], questions[i][2], questions[i][3]);
            this.quizs.push(quiz);
        }
    }

    showQuizs() {
        document.getElementById('point').innerHTML = "Point : " + this.quizs[this.count].score + "$";
        document.getElementById('question-number').innerHTML = "Question " + (this.count + 1) + " :";
        document.getElementById('question').innerHTML = this.quizs[this.count].question;
        for (let i = 0; i < this.quizs[this.count].answer.length; i++) {
            document.getElementById('' + i).innerHTML = this.quizs[this.count].answer[i];
        }
    }

    selectAnswers(index) {
        let select = this.quizs[this.count].selectAnswers(index);
        if (!select) {
            this.checkPoint();
            this.count = 0;
        } else {
            this.count += 1;
            console.log(this.count);
        }
        if (this.count >= this.number) {
            alert("Xin chúc mừng bạn Là triệu phú");
            this.count = 0;
        }
        this.showQuizs();
    }
    checkPoint() {
        if (this.count < 5) {
            this.point = 0;
        } else if (this.count >= 5 && this.count < 10) {
            this.point = 5;
        } else if (this.count >= 10 && this.count < 15) {
            this.point = 10;
        }
        alert("Số tiền bạn nhận được là :" + this.quizs[this.point].score);

    }
    changeColor(){

    }
    nextQuizs(){

    }
    countDown(){

    }
}

// let game = new Game(5);
// game.creatQuizs();
// console.log(game);
// game.showQuizs();


