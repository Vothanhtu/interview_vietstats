import { React, useState } from "react";
import '../css/LoginForm.css'
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";
export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.id === userId && user.password === password
    );

    if (user) {
      console.log("Đăng nhập thành công");
      navigate("/dashboard");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="language-selector">
            <i className="fas fa-globe"></i>
            <select>
              <option>English</option>
              <option>한국어</option>
              <option>Tiếng Việt</option>
            </select>
          </div>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userId">UserID:</label>
              <input
                type="text"
                id="userId"
                placeholder="Enter your ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div>{error}</div>}
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
        <div className="login-image">
          <img
            alt="..."
            src="img/signIn_image.svg"
          />
        </div>
      </div>
    </div>
  );
}
