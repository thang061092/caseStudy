// const questions2 = [
//     ['Nhất quỷ nhì ..., Thứ ba học ...?', ["ma, trò", "tam, sinh", "trò, ma", "trời, đất"], "ma, trò", 0],
//     ['Ai cũng biết đỉnh núi Everest cao nhất thế giới, vậy trước khi đỉnh Everest được khám phá, đỉnh núi nào cao nhất thế giới?', ["Himalaya", "Everest", "Phan Xi Păng", "Phú Sĩ"], "Everest", 100],
//     ["Đâu là một loại hình chợ tạm tự phát thường xuất hiện trong các khu dân cư?", ["Ếch", "Nhái", "Thằn lằn", "cóc",], "cóc", 200],
//     ["Đâu là tên một loại bánh Huế?", ["khoái", "sướng", "vui", "thích",], "khoái", 300],
//     ["Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?", ["Truyện trinh thám", "Tiểu thuyết kiếm hiệp", "Sử thi", "Thơ lãng mạn",], "Tiểu thuyết kiếm hiệp", 500],
//     [ "Bộ phim (Chị Dậu) được chuyển thể từ tác phẩm nào?",["Người mẹ cầm súng","Vợ chồng A Phủ","Tắt đèn","Tuổi thơ dữ dội",],"Tắt đèn",1000],
//     ["Đại Ngu là quốc hiệu của triều đại nào?",["Triều Ngô","Triều Hồ","Các chúa Nguyễn","Nhà Tây Sơn",],"Triều Hồ",2000],
//     ["Phi hành gia Phạm Tuân đã mang loại thực vật nào để nghiên cứu trên con tàu vũ trụ Phương Đông?",["Bèo tấm","Bèo tổ ong","Bèo hoa dâu","Bèo cái",],"Bèo hoa dâu",5000],
//     ["Đâu là loại cháo khác với các món còn lại",["cháo gà","cháo heo","cháo vịt","cháo bò",],"cháo heo",10000],
//     ["Vũ điệu truyền thống của đảo Hawaii là ?",["Điệu nhảy Hula","Điệu nhảy cha cha cha","Vũ điệu cồng chiêng","Vũ điệu SamBa",],"Điệu nhảy Hula",15000],
//     [ "Ngôn ngữ nào được nhiều người sử dụng chính thức nhất ?",["Tiếng Anh"," Tiếng Đức","Tiếng Trung quốc","Tiếng Pháp",],"Tiếng Trung quốc",25000],
//     ["Ở người có bao nhiêu cặp nghiễm sắc thể ?",["23 cặp","22 cặp","13 cặp","12 cặp",],"23 cặp",50000],
//     ["Trên tay của Lý Công Uẩn khi sinh ra đã có 4 chữ son đó là những chữ nào ?",["Sơn Hà Xã Tắc","Giang Sơn Xã Tắc","Xã Tắc Giang Sơn","Xã Tắc Sơn Hà",],"Sơn Hà Xã Tắc",75000],
//     ["Tỉnh nào sau đây không có một ngọn núi nào ?",[" Thái Bình"," Nam Định","Quảng Ninh","Quảng Nam",]," Thái Bình",100000],
//     ["hệ số thập phân là phát minh của đất nước nào ?",["Nga","Nhật Bản","Ấn Độ","Trung Quốc",],"Ấn Độ",150000],
// ];
// let Game = function () {
//     let correctAnswer;
//     let questionBox = $('.question');
//     let questionNumber = $('.question-number');
//     let answers = $('.answers');
//     let restart = $('.restart');
//     let point = $('.point');
//     let help5050 = $('.help5050');
//     let exit = $('.exit');
//     let help = $('.help');
//
//     ask = -1;
//     function init() {
//         nextQuestion();
//         restart.click(reStart);
//         exit.click(function () {
//             exit.hide();
//             nextQuestion();
//         });
//     }
//
//     function nextQuestion() {
//         ask = ask + 1;
//         console.log("ask is " + ask)
//         let total = questions.length;
//         if (ask < total) {
//             askQuestion(ask);
//         } else {
//             point.html("Point : 150m");
//             questionBox.html("Bạn là triệu phú");
//             answers.hide();
//             restart.show();
//             questionNumber.hide();
//             help.hide();
//         }
//     }
//
//     function askQuestion(counterNum) {
//         questionBox.html(questions[counterNum][0]);
//         questionNumber.html('Question number ' + (counterNum + 1));
//         $('.answers').empty();
//         answers.append('<li data-answer=' + questions[counterNum][1][0].replace(/ /g, '') + '>' + questions[counterNum][1][0] + '</li>');
//         answers.append('<li data-answer=' + questions[counterNum][1][1].replace(/ /g, '') + '>' + questions[counterNum][1][1] + '</li>');
//         answers.append('<li data-answer=' + questions[counterNum][1][2].replace(/ /g, '') + '>' + questions[counterNum][1][2] + '</li>');
//         answers.append('<li data-answer=' + questions[counterNum][1][3].replace(/ /g, '') + '>' + questions[counterNum][1][3] + '</li>');
//         point.html("Point : 0" + questions[counterNum][3]);
//         correctAnswer = questions[counterNum][2];
//         console.log("Answer is " + correctAnswer);
//         correctAnswer = correctAnswer.replace(/ /g, '').toLowerCase();
//         $('.answers li').on('click', answerQuestion);
//         help5050.click(function () {
//             help5050.hide();
//             help5050count = 0;
//             $(".answers li").each(function () {
//                 if (help5050count < 2) {
//                     if ($(this).data('answer').replace(/ /g, '').toLowerCase() != correctAnswer) {
//                         $(this).hide();
//                         help5050count = help5050count + 1;
//                     }
//                 }
//             });
//         });
//     }
//
//     function answerQuestion() {
//         $('.answers li').off();
//         let UserAnswer = $(this).data('answer').replace(/ /g, '').toLowerCase();
//         if (UserAnswer == correctAnswer) {
//             nextQuestion();
//         } else {
//             questionBox.html("\n" + "Xin lỗi bạn đã mất tiền của bạn");
//             point.html("Point: 00");
//             answers.hide();
//             restart.show();
//             questionNumber.hide();
//             help.hide();
//         }
//     }
//
//     function reStart() {
//         ask = -1;
//         nextQuestion();
//         answers.show();
//         restart.hide();
//         questionNumber.show();
//         help.show();
//         help5050.show();
//         exit.show();
//     }
//
//     init();
// };
// $(function () {
//     new Game();
// });
//
