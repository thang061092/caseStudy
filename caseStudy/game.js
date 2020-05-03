let time = 0;
let fullTime = 10;
let widthTime =500;
class Game {
    constructor(number) {
        this.quizs = [];
        this.count = 0;
        this.number = number;
        this.point = 0;

    }
    getCorrects(){
        return this.quizs.correct;
    }
    selectAnswer(info){
        return this.quizs.answer(info)== this.getCorrects()? true:false;
    }
    creatQuizs() {
        for (let i = 0; i < this.number; i++) {
            let quiz = new Quiz(questions[i][0], questions[i][1], questions[i][2], questions[i][3]);
            this.quizs.push(quiz);
        }
    }
    showQuizs() {
        document.getElementById('point').innerHTML = "Point : " + this.quizs[this.count].score + " Point";
        document.getElementById('question-number').innerHTML = "Question " + (this.count + 1) + " :";
        document.getElementById('question').innerHTML = this.quizs[this.count].question;
        for (let i = 0; i < this.quizs[this.count].answer.length; i++) {
            document.getElementById('' + i).innerHTML = this.quizs[this.count].answer[i];
        }
        time=0;
    }

    selectAnswers(info) {
        let select = this.quizs[this.count].selectAnswer(info);
        if (!select) {
            this.checkPoint();
            this.count = 0;
            document.getElementById("false").play();
        } else {
            document.getElementById("true").play();
            this.count ++;
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

    changeColor() {

    }
    // stop(){
    //     document.getElementById("sound-exit").play();
    //     this.gameOver();
    // }


    // countDown() {
    //     let time = document.getElementById("time");
    //     let width = 0;
    //     let id = setInterval(frame, 50);
    //
    //     function frame() {
    //         this.time -= 1;
    //         if (width == 400) {
    //             clearInterval(id);
    //           this.gameOver();
    //         } else {
    //             width++;
    //             time.style.width = width + 'px';
    //         }
    //     }
    // }

    gameOver() {
        console.log("gameOver")
        document.getElementById("main").style.display = 'none';
        document.getElementById("start-game").style.display="block";
        location.reload();

    }
}
function countDown(){
    let timeDiv = document.getElementById("time");
    let run = setInterval(function () {
        time+=0.1;
        timeDiv.style.width = widthTime * time/fullTime + "px";
        if(time >= fullTime){
            document.getElementById("lose").play();
            game.checkPoint();
            clearInterval(run);
            game.gameOver();
        }
    },100);

}

// let game = new Game(15);
// game.creatQuizs();
// console.log(game);
// game.showQuizs();
//


