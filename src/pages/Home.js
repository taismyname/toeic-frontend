import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Luyện Thi TOEIC</h1>
      <p>Chọn phần thi:</p>
      <Link to="/quiz/listening"><button>Listening</button></Link>
      <Link to="/quiz/reading"><button>Reading</button></Link>
      <Link to="/history"><button>Lịch sử điểm</button></Link>
      <Link to="/login"><button>Đăng nhập</button></Link>
    </div>
  );
};

export default Home;
