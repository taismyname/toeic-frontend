import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
  const { type } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get(`/api/questions?type=${type}`)
      .then(res => setQuestions(res.data))
      .catch(err => alert('Lỗi lấy câu hỏi: ' + err.message));
  }, [type]);

  const handleAnswer = (qId, ans) => {
    setAnswers({ ...answers, [qId]: ans });
  };

  const submitQuiz = async () => {
    let total = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) total++;
    });
    setScore(total);

    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.post('/api/scores', { score: total }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert('Đã lưu điểm!');
      } catch (err) {
        alert('Lỗi lưu điểm: ' + err.message);
      }
    }
  };

  return (
    <div>
      <h2>{type === 'listening' ? 'Listening' : 'Reading'} Quiz</h2>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(q.id, idx)}>{opt}</button>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Nộp bài</button>
      {score !== null && <p>Điểm: {score}/{questions.length}</p>}
    </div>
  );
};

export default Quiz;
