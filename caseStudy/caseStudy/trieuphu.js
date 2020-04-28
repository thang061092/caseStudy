// dữ liệu câu hỏi
const Question = [
    {
        question: "Nhất quỷ nhì ..., Thứ ba học ...",
        point: 200,
        answer: {
            A: "ma, trò",
            B: "tam, sinh",
            C: "trò, ma",
            D: "trời, đất",
        },
        correct: "A"
    },
    {
        question: " Ai cũng biết đỉnh núi Everest cao nhất thế giới, vậy trước khi đỉnh Everest được khám phá, đỉnh núi nào cao nhất thế giới?",
        point: 400,
        answer: {
            A: "Himalaya",
            B: "Everest",
            C: "Phan Xi Păng",
            D: "Phú Sĩ",
        },
        correct: "B"
    },
    {
        question: "Đâu là một loại hình chợ tạm tự phát thường xuất hiện trong các khu dân cư?",
        point: 600,
        answer: {
            A: "Ếch",
            B: "Nhái",
            C: "Thằn lằn",
            D: "cóc",
        },
        correct: "D"
    },
    {
        question: "Đâu là tên một loại bánh Huế?",
        point: 1000,
        answer: {
            A: "khoái",
            B: "sướng",
            C: "vui",
            D: "thích",
        },
        correct: "A"
    },
    {
        question: "Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?",
        point: 2000,
        answer: {
            A: "Truyện trinh thám",
            B: "Tiểu thuyết kiếm hiệp",
            C: "Sử thi",
            D: "Thơ lãng mạn",
        },
        correct: "B"
    },
    {
        question: "Bộ phim \"Chị Dậu\" được chuyển thể từ tác phẩm nào?",
        point: 3000,
        answer: {
            A: "Người mẹ cầm súng",
            B: "Vợ chồng A Phủ",
            C: "Tắt đèn",
            D: "Tuổi thơ dữ dội",
        },
        correct: "C"
    },
    {
        question: "Đại Ngu là quốc hiệu của triều đại nào?",
        point: 6000,
        answer: {
            A: "Triều Ngô",
            B: "Triều Hồ",
            C: "Các chúa Nguyễn",
            D: "Nhà Tây Sơn",
        },
        correct: "B"
    },
    {
        question: "Phi hành gia Phạm Tuân đã mang loại thực vật nào để nghiên cứu trên con tàu vũ trụ Phương Đông?",
        point: 10000,
        answer: {
            A: "Bèo tấm",
            B: "Bèo tổ ong",
            C: "Bèo hoa dâu",
            D: "Bèo cái",
        },
        correct: "C"
    },
    {
        question: "Đâu là loại cháo khác với các món còn lại",
        point: 14000,
        answer: {
            A: "cháo gà",
            B: "cháo heo",
            C: "cháo vịt",
            D: "cháo bò",
        },
        correct: "B"
    },
    {
        question: "Vũ điệu truyền thống của đảo Hawaii là ?",
        point: 22000,
        answer: {
            A: "Điệu nhảy Hula",
            B: "Điệu nhảy cha cha cha",
            C: "Vũ điệu cồng chiêng",
            D: "Vũ điệu SamBa",
        },
        correct: "A"
    },
    {
        question: "Ngôn ngữ nào được nhiều người sử dụng chính thức nhất ?",
        point: 30000,
        answer: {
            A: "Tiếng Anh",
            B: " Tiếng Đức",
            C: "Tiếng Trung quốc",
            D: "Tiếng Pháp",
        },
        correct: "C"
    },
    {
        question: "Ở người có bao nhiêu cặp nghiễm sắc thể ?",
        point: 40000,
        answer: {
            A: "23 cặp",
            B: "22 cặp",
            C: "13 cặp",
            D: "12 cặp",
        },
        correct: "A"
    },
    {
        question: "Trên tay của Lý Công Uẩn khi sinh ra đã có 4 chữ son đó là những chữ nào ?",
        point: 60000,
        answer: {
            A: "Sơn Hà Xã Tắc",
            B: "Giang Sơn Xã Tắc",
            C: "Xã Tắc Giang Sơn",
            D: "Xã Tắc Sơn Hà",
        },
        correct: "A"
    },
    {
        question: "Tỉnh nào sau đây không có một ngọn núi nào ?",
        point: 85000,
        answer: {
            A: " Thái Bình",
            B: " Nam Định",
            C: "Quảng Ninh",
            D: "Quảng Nam",
        },
        correct: "A"
    },
    {
        question: "hệ số thập phân là phát minh của đất nước nào ?",
        point: 150000,
        answer: {
            A: "Nga",
            B: "Nhật Bản",
            C: "Ấn Độ",
            D: "Trung Quốc",
        },
        correct: "C"
    },
]
let Millionaire = function () {
    this.point = 0;
    this._color = '#3498db';
    this._selectArray = [];
    this._number5050 = 0;
    this._keep = 0;
    let self = this;

    this.startGame = function () {
        this._boardPage = 0;
        this._use5050 = false;
        this._useSurvey = false;
        this.hide($("#question-form"));
        this.hide($("#button"));
        this.show($("#board-button"));
        this.hide($("#submit-answer"));
        this.hide($('#next-question'));
        this.hide($("#restart-game"));
        this.hide($("#alert"));
        this.hide($("#survey-region"));
        this.showBoard();
        this.drawMap();
        this.changeStepColor();
    }
    this.restartGame = function () {
        this._boardPage = 0;
        this.point = 0;
        $("#question-number").html(this._boardPage + 1);
        $("#display-question").html(Question[this._boardPage]);
        $("#reward").empty();
        $("#surveyBoard").empty();
        this.show($('#board-button'));
        this.hide($("#submit-answer"));
        this.hide($('#restart-game'));
        this.hide($('#next-question'));
        this.hide($('#alert'));
        this.hide($("#survey-region"));
        this._use5050 = false;
        this._useSurvey = false;
        this.showBoard();
    }
    this.showBoard = function () {
        let index = this._boardPage * 5;
        this.show($("#withdraw-button"));
        $("#point").html(this.point + "vnd");
        $("#question-number").html(this._boardPage + 1);
        $("#display-question").html(Question[this._boardPage]);
        $("#boxA").append("<span class='char'>A</span>" + this.Question[index]);
        $("#boxB").append("<span class='char'>B</span>" + this.Question[index + 1]);
        $("#boxC").append("<span class='char'>C</span>" + this.Question[index + 2]);
        $("#boxD").append("<span class='char'>D</span>" + this.Question[index + 3]);
        let answerID = "#box" + Question[this._boardPage].correct;
        $(answerID).attr('class', 'answerBox');
        this.show($("#reward"));
        this.hide($("#survey-region"));
        this.show5050();
        this.showSurvey();
    }
    this.drawMap = function () {
        let countQuestion = Question.length;
        for (let i = 1; i <= countQuestion; i++) {
            if (i % 5 !== 0) {
                $("#reward").append("<div class='rewardStep' id='step" + i + "'><p class='number'>" + i + "</p><span class='step'>" + Question[i - 1].point + " $</span></div>")
            } else {
                $("#reward").append("<div class='specialRewardStep' id='step" + i + "'><p class='specialNumber'>" + i + "</p><span class='step'>" + Question[i - 1].point + " $</span></div>")
            }
        }
    }
    this.changeStepColor = function () {
        this.point += Question[this._boardPage].point;
        let currentStep = this._boardPage + 1;
        for (let i = 1; i < currentStep; i++) {
            let id = "#step" + i;
            $(id).css('background-color', '#2ecc71');
        }
        currentStep = "#step" + currentStep;
        $(currentStep).css('background-color', '#f39c12');

    }
    this.getAnswer = function () {
        this.answer = Question[this._boardPage].answer;
        return this.answer;
    }
    this.getCorrect = function () {
        return this.correct = Question[this._boardPage].correct;
    }
    this.getElement = function (elementId) {
        return document.getElementById(elementId);
    }
    this.checkAnswer = function () {

        if (this._selectArray[this._boardPage] == "box" + this.getCorrect()) {
            return true;
        } else {
            return false;
        }
    }
    this.showAnswer = function () {
        this.getElement('boxA').innerHTML = "<span class=\'char\'>A</span>" + this.getAnswer().A;
        this.getElement('boxB').innerHTML = "<span class=\'char\'>B</span>" + this.getAnswer().B;
        this.getElement('boxC').innerHTML = "<span class=\'char\'>C</span>" + this.getAnswer().C;
        this.getElement('boxD').innerHTML = "<span class=\'char\'>D</span>" + this.getAnswer().D;
    }
    this.getElement('boxA').addEventListener('click', function () {
        return self.selectBox(this.id);
    });
    this.getElement('boxB').addEventListener('click', function () {
        return self.selectBox(this.id);
    });
    this.getElement('boxC').addEventListener('click', function () {
        return self.selectBox(this.id);
    });
    this.getElement('boxD').addEventListener('click', function () {
        return self.selectBox(this.id);
    });
    this.getElement('submit-answer').addEventListener('click', function () {
        self.changeSubmitAnswerButton();
        self.nextOrStop();
        self.congrats();
        self.hide($('#board-button'));
        self.show($('#alert'));

    })
    this.getElement('next-question').addEventListener('click', function () {
        self.resetBoardStatus();
        self.nextLevel();
        self.showBoard();
        self.changeStepColor();
    })
    this.getElement('withdraw-button').addEventListener('click', function () {
        self.congrats();
        self.withdraw();
    })
    this.getElement('helpSurvey-button').addEventListener('click', function () {
        self.helpSurvey();
        self.showSurvey();
    })
    this.getElement('help5050-button').addEventListener('click', function () {
        self.help5050();
    })
}
Millionaire.prototype.hide = function (element) {
    this._element = element;
    this._element.css('display', 'none');
};
Millionaire.prototype.show = function (element) {
    this._element = element;
    this._element.css('display', 'block');
};
Millionaire.prototype.show5050 = function () {
    if (!this._use5050 && this._boardPage >= 5) {
        this.show($("#help5050-button"))
    } else {
        this.hide($("#help5050-button"))
    }
};
Millionaire.prototype.showSurvey = function () {
    if (!this._useSurvey && this._boardPage >= 5) {
        this.show($("#helpSurvey-button"))
    } else {
        this.hide($("#helpSurvey-button"))
    }
};

Millionaire.prototype.selectBox = function (boxID) {

    let id = "#" + boxID;

    if (boxID == "boxA" || boxID == "boxB" || boxID == "boxC" || boxID == "boxD") {

        $("#boxA").css('background-color', '#3498db');
        $("#boxB").css('background-color', '#3498db');
        $("#boxC").css('background-color', '#3498db');
        $("#boxD").css('background-color', '#3498db');


        $(id).css('background-color', '#f1c40f');
        this.show($('#submit-answer'));
        this._selectArray[this._boardPage] = boxID;
    }

};
Millionaire.prototype.congrats = function () {
    this._interval = setInterval(function () {
        if (this._hover) {
            $('.answerBox').css('background-color', '#2ecc71');
            $('.answerBox').css('pointer-events', 'none');
            $('#sellector').css('pointer-events', 'none');
            $('.box').css('pointer-events', 'none');
        } else {
            $('.answerBox').css('background-color', '#orange');
            $('.answerBox').css('pointer-events', 'none');
            $('#sellector').css('pointer-events', 'none');
            $('.box').css('pointer-events', 'none');
        }
        this._hover = !this._hover;

    }, 150);
};
Millionaire.prototype.nextQuestion = function () {
    this._boardPage++;
    let step = this._boardPage + 1;
    this.hide($('#submit-answer'));
    this.hide($('#restart-game'));
    this.hide($('#next-question'));
    this.show($('#board-button'));
    this.hide($('#alert'));

    $("#question-number").html(this._boardPage + 1);
    if (step % 5 == 0) {
        $("#question-number").css("background-color", "yellow");
        $("#display-question").css("color", "yellow");
    } else {
        $("#question-number").css("background-color", "#ffffff");
        $("#display-question").css("color", "#ffffff");
    }

    $("#display-question").html(this.Question[this._boardPage].question);
};
Millionaire.prototype.resetBoardStatus = function () {
    $("#boxA").css('background-color', '#3498db');
    $("#boxB").css('background-color', '#3498db');
    $("#boxC").css('background-color', '#3498db');
    $("#boxD").css('background-color', '#3498db');
    $("#boxA").empty();
    $("#boxB").empty();
    $("#boxC").empty();
    $("#boxD").empty();
    $("#chartA").empty();
    $("#chartB").empty();
    $("#chartC").empty();
    $("#chartD").empty();
    $('.answerBox').css('pointer-events', 'auto');
    $('.boxWrong').css('pointer-events', 'auto');
    $('#sellector').css('pointer-events', 'auto');
    $('.box').css('pointer-events', 'auto');
    $('.answerBox').attr('class', 'box');
    $('.boxWrong').attr('class', 'box');
    this._color = '#3498db';
    clearInterval(this._interval);
    this._number5050 = 0;
};
Millionaire.prototype.help5050 = function () {
    let answerBox = this.getCorrect();
    let random1 = this.random(1, 3);
    let random2 = this.random(1, 3);
    this.boxWrong(answerBox, random1, random2);
    this._use5050 = true;
    this._number5050 = this._boardPage + 1;
};
Millionaire.prototype.NumberBoxNameChanger = function (value) {
    if (value == "A") {
        return 1;
    } else if (value == "B") {
        return 2;
    } else if (value == "C") {
        return 3;
    } else if (value == "D") {
        return 4;
    } else if (value == 1) {
        return "boxA"
    } else if (value == 2) {
        return "boxB"
    } else if (value == 3) {
        return "boxC"
    } else {
        return "boxD"
    }
};

Millionaire.prototype.clearWrong = function (boxName1, boxName2) {
    boxName1 = "#" + boxName1;
    boxName2 = "#" + boxName2;
    $(boxName1).attr('class', 'boxWrong');
    $(boxName2).attr('class', 'boxWrong');
    $(boxName1).css('pointer-events', 'none');
    $(boxName2).css('pointer-events', 'none');
    $(boxName1).css('background-color', '#3498db');
    $(boxName2).css('background-color', '#3498db');

};
Millionaire.prototype.boxWrong = function (boxName, random1, random2) {
    let boxID = this.NumberBoxNameChanger(boxName);
    if (random1 == random2) {
        if (random1 !== 1) {
            random1--
        } else {
            random1++
        }
    }
    let number1 = (boxID + random1) % 4;
    if (number1 == 0) (number1 = 4);
    let number2 = (boxID + random2) % 4;
    if (number2 == 0) (number2 = 4);
    let boxWrong1 = this.NumberBoxNameChanger(number1);
    let boxWrong2 = this.NumberBoxNameChanger(number2);
    for (let i = 1; i <= 4; i++) {
        if (i !== number1 && i !== number2 && i !== boxID) self._keep = i;
    }
    this.clearWrong(boxWrong1, boxWrong2);
};
Millionaire.prototype.helpSurvey = function () {
    let answerBox = this.getCorrect();
    let sum = 76;
    let value1 = this.random(0, sum);
    let value2 = this.random(0, sum - value1);
    let value3 = this.random(0, sum - value1 - value2);
    let value4 = sum - value1 - value2 - value3;
    let valueA = this.random(1, 4);
    let valueB = 0;
    let valueC = 0;
    let valueD = 0;


    if (valueA === 1) {
        valueA = value1;
        valueB = value2;
        valueC = value3;
        valueD = value4;
    } else if (valueA === 2) {
        valueA = value2;
        valueB = value3;
        valueC = value4;
        valueD = value1;
    } else if (valueA === 3) {
        valueA = value3;
        valueB = value4;
        valueC = value1;
        valueD = value2;
    } else {
        valueA = value4;
        valueB = value1;
        valueC = value2;
        valueD = value3;
    }


    if (answerBox === "boxA") {
        valueA = valueA + 50;

    } else if (answerBox === "boxB") {
        valueB = valueB + 50;

    } else if (answerBox === "boxC") {
        valueC = valueC + 50;
    } else {
        valueD = valueD + 50;
    }

    if (this._number5050 == this._boardPage + 1) {
        let sumRemove = 0;
        if (self._keep !== 1 || answerBox !== "boxA") {
            sumRemove += valueA;
            valueA = 0;
        }
        if (self._keep !== 2 && answerBox !== "boxB") {
            sumRemove += valueB;
            valueB = 0;
        }
        if (self._keep !== 3 && answerBox !== "boxC") {
            sumRemove += valueC;
            valueC = 0;
        }
        if (self._keep !== 4 && answerBox !== "boxD") {
            sumRemove += valueD;
            valueD = 0;
        }
        if (answerBox === "boxA") {
            valueA = valueA + sumRemove;

        } else if (answerBox === "boxB") {
            valueB = valueB + sumRemove;

        } else if (answerBox === "boxC") {
            valueC = valueC + sumRemove;
        } else {
            valueD = valueD + sumRemove;
        }
    }
    this.drawChart(valueA, valueB, valueC, valueD);
    this._useSurvey = true;
};
Millionaire.prototype.drawChart = function (valueA, valueB, valueC, valueD) {
    this.hide($("#reward"));
    this.show($("#survey-region"));
    let i = 0;
    $("#chartA").append("<span class='ABCD'>A</span><span class='startPercent'></span>");
    $("#chartB").append("<span class='ABCD'>B</span><span class='startPercent'></span>");
    $("#chartC").append("<span class='ABCD'>C</span><span class='startPercent'></span>");
    $("#chartD").append("<span class='ABCD'>D</span><span class='startPercent'></span>");

    for (i = 1; i <= valueA; i++) {
        setTimeout(function () {
            $("#chartA").append("<span class='percent'></span>")
        }, 100)
    }
    for (i = 1; i <= valueB; i++) {
        setTimeout(function () {
            $("#chartB").append("<span class='percent'></span>")

        }, 100)
    }
    for (i = 1; i <= valueC; i++) {
        setTimeout(function () {
            $("#chartC").append("<span class='percent'></span>")

        }, 100)
    }
    for (i = 1; i <= valueD; i++) {
        setTimeout(function () {
            $("#chartD").append("<span class='percent'></span>")

        }, 100)
    }

    setTimeout(function () {
        $("#chartA").append("<span class='percentNumber'> " + valueA + "%</span>")

    }, 900);

    setTimeout(function () {
        $("#chartB").append("<span class='percentNumber'> " + valueB + "%</span>")

    }, 900);

    setTimeout(function () {
        $("#chartC").append("<span class='percentNumber'> " + valueC + "%</span>")

    }, 900);

    setTimeout(function () {
        $("#chartD").append("<span class='percentNumber'> " + valueD + "%</span>")

    }, 900)

};
Millionaire.prototype.changeSubmitAnswerButton = function () {
    this.checkAnswer() ? this.show($("#next-question")) : this.show($("#restart-game"));
};
Millionaire.prototype.withdraw = function () {
    this._point = $("#point").html();
    this.show($('#alert'));
    this.hide($("#submit-answer"));
    this.hide($("#withdraw-button"));
    this.show($("#restart-game"));
    let message = "Bạn sẽ ra về với " + this._point;
    $("#alert").attr("class", "alert alert-info");
    $("#alert").html(message);

};
Millionaire.prototype.nextOrStop = function () {
    if (this.checkAnswer()) {
        $("#alert").attr("class", "alert alert-success");
        $("#alert").html("Chúc mừng ! Bạn đã trả lời đúng !");
        this._color = '#f1c40f';
        if (this.level + 1 == Question.length) {
            $("#alert").attr("class", "alert alert-success");
            $("#alert").html("Chúc mừng bạn đã trở thành TRIỆU PHÚ");
            this.show($('#restart-game'));
            this.hide($('#next-question'));

        }
    } else {
        let message = "";
        $("#alert").attr("class", "alert alert-danger");
        if (this._boardPage >= 10) {
            message = "Bạn ra về với "+Question[9].point +" $";
        } else if (this._boardPage >= 5) {
            message = "Bạn ra về với "+Question[4].point +" $";
        } else {
            message = "Tiếc quá ! Bạn đã trả lời sai rồi."
        }

        $("#alert").html(message);

    }
    this.hide($("#submit-answer"))
};

Millionaire.prototype.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};




function init(){
    let g = new M();
    g.startGame();
}










