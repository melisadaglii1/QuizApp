// script.js dosyası

// Quiz sorularının ve seçeneklerinin bulunacağı div
const quizContainer = document.getElementById('quiz');

// Soruları API'dan çeken fonksiyon
async function fetchQuestions() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const questions = response.data.slice(0, 10); // İlk 10 soruyu al
        questions.forEach((question, index) => {
            createQuestionElement(question, index + 1);
        });
    } catch (error) {
        console.error('Soruları alma hatası:', error);
    }
}

// Soru elementini oluşturan fonksiyon
function createQuestionElement(question, number) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
        <h2>Soru ${number}</h2>
        <p>${question.title}</p>
        <button>A) Seçenek A</button>
        <button>B) Seçenek B</button>
        <button>C) Seçenek C</button>
        <button>D) Seçenek D</button>
    `;
    quizContainer.appendChild(questionElement);
}



// Sayfa yüklendiğinde soruları çek
fetchQuestions();
