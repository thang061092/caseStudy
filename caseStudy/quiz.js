const questions = [
    ['Nhất quỷ nhì ..., Thứ ba học ...?', ["ma, trò", "tam, sinh", "trò, ma", "trời, đất"], "ma, trò", 100],
    ['Ai cũng biết đỉnh núi Everest cao nhất thế giới, vậy trước khi đỉnh Everest được khám phá, đỉnh núi nào cao nhất thế giới?', ["Himalaya", "Everest", "Phan Xi Păng", "Phú Sĩ"], "Everest", 200],
    ["Đâu là một loại hình chợ tạm tự phát thường xuất hiện trong các khu dân cư?", ["Ếch", "Nhái", "Thằn lằn", "Cóc",], "Cóc", 300],
    ["Đâu là tên một loại bánh Huế?", ["khoái", "sướng", "vui", "thích",], "khoái", 400],
    ["Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?", ["Truyện trinh thám", "Tiểu thuyết kiếm hiệp", "Sử thi", "Thơ lãng mạn",], "Tiểu thuyết kiếm hiệp", 500],
    ["Bộ phim (Chị Dậu) được chuyển thể từ tác phẩm nào?", ["Người mẹ cầm súng", "Vợ chồng A Phủ", "Tắt đèn", "Tuổi thơ dữ dội",], "Tắt đèn", 1000],
    ["Đại Ngu là quốc hiệu của triều đại nào?", ["Triều Ngô", "Triều Hồ", "Các chúa Nguyễn", "Nhà Tây Sơn",], "Triều Hồ", 2000],
    ["Phi hành gia Phạm Tuân đã mang loại thực vật nào để nghiên cứu trên con tàu vũ trụ Phương Đông?", ["Bèo tấm", "Bèo tổ ong", "Bèo hoa dâu", "Bèo cái",], "Bèo hoa dâu", 5000],
    ["Đâu là loại cháo khác với các món còn lại", ["cháo gà", "cháo heo", "cháo vịt", "cháo bò",], "cháo heo", 10000],
    ["Vũ điệu truyền thống của đảo Hawaii là ?", ["Điệu nhảy Hula", "Điệu nhảy cha cha cha", "Vũ điệu cồng chiêng", "Vũ điệu SamBa",], "Điệu nhảy Hula", 15000],
    ["Ngôn ngữ nào được nhiều người sử dụng chính thức nhất ?", ["Tiếng Anh", " Tiếng Đức", "Tiếng Trung quốc", "Tiếng Pháp",], "Tiếng Trung quốc", 25000],
    ["Ở người có bao nhiêu cặp nghiễm sắc thể ?", ["23 cặp", "22 cặp", "13 cặp", "12 cặp",], "23 cặp", 50000],
    ["Trên tay của Lý Công Uẩn khi sinh ra đã có 4 chữ son đó là những chữ nào ?", ["Sơn Hà Xã Tắc", "Giang Sơn Xã Tắc", "Xã Tắc Giang Sơn", "Xã Tắc Sơn Hà",], "Sơn Hà Xã Tắc", 75000],
    ["Tỉnh nào sau đây không có một ngọn núi nào ?", [" Thái Bình", " Nam Định", "Quảng Ninh", "Quảng Nam",], " Thái Bình", 100000],
    ["hệ số thập phân là phát minh của đất nước nào ?", ["Nga", "Nhật Bản", "Ấn Độ", "Trung Quốc",], "Ấn Độ", 150000],
];

class Quiz {
    constructor(question, answer, correct, score) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
        this.score = score;
    }

    getCorrect() {
        return this.correct;
    }

    selectAnswer(index) {
        return this.answer[index] == this.getCorrect() ? true : false;
    }
}

let quizs = [];
let count = 0;

function creatQuiz() {

    for (let i = 0; i < questions.length; i++) {
        let quiz = new Quiz(questions[i][0], questions[i][1], questions[i][2], questions[i][3]);
        quizs.push(quiz);
    }
}

function showQuiz() {
    document.getElementById('point').innerHTML = "Point : " + quizs[count].score + "$";
    document.getElementById('question-number').innerHTML = "Question " + (count + 1) + " :";
    document.getElementById('question').innerHTML = quizs[count].question;
    for (let i = 0; i < quizs[count].answer.length; i++) {
        document.getElementById('' + i).innerHTML = quizs[count].answer[i];
    }


}

function selectAnswer(index) {
    let select = quizs[count].selectAnswer(index);
    // count = select ? count += 1 : 0;
    if (!select) {
        checkPoint();
        count = 0;
    } else {
        count += 1;
         console.log(count);
    }
    if (count >= questions.length) {
        alert("Bạn Là triệu phú");
        count = 0;
    }
    showQuiz();
}

function checkPoint() {
    let point = 0;
    if (count < 5) {
        point = 0;
    } else if (count >= 5 && count < 10) {
        point = 5;
    } else if (count >= 10 && count < 15) {
        point = 10;
    }
    alert("Bạn ra về với số tiền thưởng là :" + quizs[point].score);

}
// creatQuiz();
// showQuiz();
// console.log(quizs);
//

