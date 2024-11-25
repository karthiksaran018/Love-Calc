import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [boyName, setBoyName] = useState('');
  const [girlName, setGirlName] = useState('');

  const calculateMatch = () => {
    // Navigate to the Result page and pass data
    navigate('/result', { state: { boyName, girlName } });
  };

  return (
    <>
      <img src="/src/assets/love.png" alt="love icon" className="logo" />
      <h2>Love Calculator</h2>

      <div>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter boy name"
            value={boyName}
            onChange={(e) => setBoyName(e.target.value)}
          />
          <img src="/src/assets/boss.png" alt="boss icon" />
        </div>

        <div className="input_container">
          <input
            type="text"
            placeholder="Enter girl name"
            value={girlName}
            onChange={(e) => setGirlName(e.target.value)}
          />
          <img src="/src/assets/woman.png" alt="woman icon" />
        </div>
      </div>

      <button onClick={calculateMatch}>Calculate</button>
    </>
  );
}
