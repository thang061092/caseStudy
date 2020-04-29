// var WWTBAM = WWTBAM || {};
// WWTBAM.Game = function () {
//     questions = [
//         ['Complete this phrase. As sick as a...', ['Penguin', 'Parrot', 'Puffin', 'Partridge'], 'Parrot', 0],
//     ];
//     let correctAnswer;
//     let questionBox = $('.question');
//     let questionNumber = $('.question-number');
//     let answers = $('.answers');
//     let restart = $('.restart');
//     let point = $('.point');
//     let help5050 = $('.help5050');
//     let exit = $('.exit');
//     let help = $('.help');
//     Qnum = -1;
//     function init() {
//         nextQuestion();
//         restart.click(reStart);
//         exit.click(function () {
//             exit.hide();
//             nextQuestion();
//         });
//     }
//     function nextQuestion() {
//         Qnum = Qnum + 1;
//         console.log("qnum is " + Qnum)
//         var total = questions.length;
//         if (Qnum < total) {
//             askQuestion(Qnum);
//         } else {
//             point.html("Point : 150m");
//             questionBox.html("Bạn là triệu phú");
//             answers.hide();
//             restart.show();
//             questionNumber.hide();
//             help.hide();
//         }
//     }
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
//     function answerQuestion() {
//         $('.answers li').off();
//         let UserAnswer = $(this).data('answer').replace(/ /g, '').toLowerCase();
//         if (UserAnswer == correctAnswer) {
//             nextQuestion();
//         } else {
//             questionBox.html("\n" + "Xin lỗi bạn đã mất tiền của bạn");
//             point.html("Balance : £0");
//             answers.hide();
//             restart.show();
//             questionNumber.hide();
//             help.hide();
//         }
//     }
//     function reStart() {
//         Qnum = -1;
//         nextQuestion();
//         answers.show();
//         restart.hide();
//         questionNumber.show();
//         help.show();
//         help5050.show();
//         exit.show();
//     }
//     init();
// };
// $(function () {
//     new WWTBAM.Game();
// });
//
