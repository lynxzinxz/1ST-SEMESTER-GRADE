const quiz = document.getElementById('quiz');
const r1 = document.getElementById('res1');
const exam = document.getElementById('exam');
const r2 = document.getElementById('res2');
const proj = document.getElementById('proj');
const r3 = document.getElementById('res3');
const recit = document.getElementById('recit');
const r4 = document.getElementById('res4');
const lt = document.getElementById('lt');
const r5 = document.getElementById('res5');
const att = document.getElementById('att');
const r6 = document.getElementById('res6');
const total = document.getElementById('total');

quiz.addEventListener("input", quizRes);
exam.addEventListener("input", examRes);
proj.addEventListener("input", projRes);
recit.addEventListener("input", recitRes);
lt.addEventListener("input", ltRes);
att.addEventListener("input", function() {
    attRes();
    updateTotal();
});

function quizRes() {
    const quizPer = parseFloat(quiz.value) * 0.10;
    r1.value = quizPer % 1 === 0 ? quizPer.toFixed(0) : quizPer.toFixed(2);
    updateTotal();
}

function examRes() {
    const examPer = parseFloat(exam.value) * 0.20;
    r2.value = examPer % 1 === 0 ? examPer.toFixed(0) : examPer.toFixed(2);
    updateTotal();
}

function projRes() {
    const projPer = parseFloat(proj.value) * 0.35;
    r3.value = projPer % 1 === 0 ? projPer.toFixed(0) : projPer.toFixed(2);
    updateTotal();
}

function recitRes() {
    const recitPer = parseFloat(recit.value) * 0.15;
    r4.value = recitPer % 1 === 0 ? recitPer.toFixed(0) : recitPer.toFixed(2);
    updateTotal();
}

function ltRes() {
    const ltPer = parseFloat(lt.value) * 0.15;
    r5.value = ltPer % 1 === 0 ? ltPer.toFixed(0) : ltPer.toFixed(2);
    updateTotal();
}

function attRes() {
    const attPer = parseFloat(att.value) * 0.05;
    r6.value = attPer % 1 === 0 ? attPer.toFixed(0) : attPer.toFixed(2);
    //r6.value = attPer + "%";
    updateTotal();
}
function updateTotal() {
    const quizPer = parseFloat(r1.value) || 0;
    const examPer = parseFloat(r2.value) || 0;
    const projPer = parseFloat(r3.value) || 0;
    const recitPer = parseFloat(r4.value) || 0;
    const ltPer = parseFloat(r5.value) || 0;
    const attPer = parseFloat(r6.value) || 0;

    let totalPer = quizPer + examPer + projPer + recitPer + ltPer + attPer;

    totalPer = Math.min(totalPer, 100);

    totalPer = isNaN(totalPer) ? 0 : (totalPer % 1 === 0 ? totalPer.toFixed(0) : totalPer.toFixed(2));

    total.textContent = totalPer + "%";
    console.log(total.value)
}