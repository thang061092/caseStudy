let time = 0;
let fullTime = 20;
let widthTime = 500;

class Game {
    constructor(number) {
        this.quizs = [];
        this.count = 0;
        this.number = number;
        this.point = 0;

    }
    getCorrects() {
        return this.quizs.correct;
    }
    selectAnswer(info) {
        return this.quizs.answer(info) == this.getCorrects() ? true : false;
    }
    creatQuizs() {
        for (let i = 0; i < this.number; i++) {
            let quiz = new Quiz(questions[i][0], questions[i][1], questions[i][2], questions[i][3]);
            this.quizs.push(quiz);
        }
    }
    showQuizs() {
        document.getElementById('point').innerHTML = "Point : " + this.quizs[this.count].score + " Điểm";
        document.getElementById('question-number').innerHTML = "Question " + (this.count + 1) + " :";
        document.getElementById('question').innerHTML = this.quizs[this.count].question;
        for (let i = 0; i < this.quizs[this.count].answer.length; i++) {
            document.getElementById('' + i).innerHTML = this.quizs[this.count].answer[i];
        }
        time = 0;
    }
    selectAnswers(info) {
        let select = this.quizs[this.count].selectAnswer(info);
        if (!select) {
            document.getElementById("false").play();
            this.checkPoint();
            this.count = 0;
        } else {
            this.count++;
            document.getElementById("true").play();
            console.log(this.count);
        }
        if (this.count >= this.number) {
            alert("Xin chúc mừng bạn là triệu phú");
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
        alert("Bạn ra về với số tiền thưởng là :" + this.quizs[this.point].score + "000 vnđ");
    }
    exitss() {
        this.showQuizs();
        this.count += 1;
    }
    gameOver() {
        console.log("gameOver")
        document.getElementById("main").style.display = 'none';
        document.getElementById("start-game").style.display = "block";
        location.reload();
    }
}
function countDown() {
    let timeDiv = document.getElementById("time");
    let run = setInterval(function () {
        time += 0.1;
        timeDiv.style.width = widthTime * time / fullTime + "px";
        if (time >= fullTime) {
            document.getElementById("lose").play();
            game.checkPoint();
            clearInterval(run);
            game.gameOver();
        }
    }, 100);

}
let game = null;
function start() {
    document.getElementById('main').style.display = "block";
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('sound').play();
    game = new Game(15);
    game.creatQuizs();
    console.log(game);
    game.showQuizs();
    countDown();
}
function stop() {
    alert("Bạn thua cuộc và không nhận được gì ^^");
    document.getElementById("main").style.display = 'none';
    document.getElementById("start-game").style.display = "block";
    document.getElementById("lose").play();
}