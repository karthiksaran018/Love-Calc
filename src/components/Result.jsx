import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { boyName, girlName } = location.state || { boyName: 'Unknown', girlName: 'Unknown' };

  const calculateAgain = () => {
    navigate('/');
  };

  return (
    <>
      <img src="/src/assets/dating-unscreen.gif" alt="dating gif" className="logo" />
      <div className="submission_container">
        <div>
          <img className="submission_container_logo" src="/src/assets/boss.png" alt="boss icon" />
          <p>{boyName}</p>
        </div>

        <p>99%</p>

        <div>
          <img className="submission_container_logo" src="/src/assets/woman.png" alt="woman icon" />
          <p>{girlName}</p>
        </div>
      </div>

      <p>Congratulations! Good choice</p>

      <button onClick={calculateAgain}>Calculate Again</button>
    </>
  );
}
