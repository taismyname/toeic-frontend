import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('token', userCredential.user.accessToken);
      navigate('/');
    } catch (err) {
      alert('Lỗi đăng ký: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Mật khẩu"
      />
      <button type="submit">Đăng ký</button>
      <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
    </form>
  );
};

export default Register;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Mật khẩu"
      />
      <button type="submit">Đăng ký</button>
      <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
    </form>
  );
};

export default Register;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng ký</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Mật khẩu"
      />
      <button type="submit">Đăng ký</button>
      <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
    </form>
  );
};

export default Register;
