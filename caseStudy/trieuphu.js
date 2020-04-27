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
    this.drawMap=function () {
        let countQuestion = Question.length;
        for (let i = 1; i <= countQuestion; i++) {
            if (i % 5 !== 0) {
                $("#reward").append("<div class='rewardStep' id='step" + i + "'><p class='number'>" + i + "</p><span class='step'>"+Question[i-1].point+" $</span></div>")
            } else {
                $("#reward").append("<div class='specialRewardStep' id='step" + i + "'><p class='specialNumber'>" + i + "</p><span class='step'>"+Question[i-1].point+" $</span></div>")
            }
        }
    }

}
