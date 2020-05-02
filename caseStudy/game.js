class Game {
    constructor(number) {
        this.quizs = [];
        this.count = 0;
        this.number = number;
        this.point = 0;
        this.time = 30;
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
        this.countDown();
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

    nextQuizs() {

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

    changeColor() {

    }

    countDown() {
        let time= document.getElementById("time");
        let width = 0;
        let id = setInterval(frame, 100);
        function frame() {
            this.time -= 1;
            if (width == 41) {
                clearInterval(id);
            } else {
                width++;
                time.style.width = width + '%';
            }
        }
    }

    gameOver() {

    }
}

let game = new Game(5);
game.creatQuizs();
console.log(game);
game.showQuizs();


