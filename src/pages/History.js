import { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/scores', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setScores(res.data))
        .catch(err => alert('Lỗi lấy lịch sử: ' + err.message));
    }
  }, []);

  return (
    <div>
      <h2>Lịch sử điểm</h2>
      <ul>
        {scores.map(s => (
          <li key={s.id}>Điểm: {s.score} - Ngày: {new Date(s.date).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
