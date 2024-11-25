import { useLocation, useNavigate } from 'react-router-dom';
import datingGif from '../assets/dating-unscreen.gif';
import bossIcon from '../assets/boss.png';
import womanIcon from '../assets/woman.png';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { boyName = 'Unknown', girlName = 'Unknown' } = location.state || {};

  // List of names that guarantee a high match percentage
  const highMatchNames = [
    'karthik',
    'saran',
    'karthiksaran',
    'jc',
    'jesicka',
    'sweetlin',
    'sweety',
    'sweetlinjesicka',
  ];

  // Function to calculate match percentage
  const calculatePercentage = (name1, name2) => {
    const isHighMatch =
      highMatchNames.includes(name1.toLowerCase()) ||
      highMatchNames.includes(name2.toLowerCase());

    if (isHighMatch) {
      return Math.floor(Math.random() * (100 - 98 + 1)) + 98; // Random number between 98 and 100
    } else {
      return Math.floor(Math.random() * 100); // Random number between 0 and 99
    }
  };

  const matchPercentage = calculatePercentage(boyName, girlName);

  const calculateAgain = () => {
    navigate('/');
  };

  return (
    <>
      <img src={datingGif} alt="dating gif" className="logo" />
      <div className="submission_container">
        <div>
          <img className="submission_container_logo" src={bossIcon} alt="boss icon" />
          <p>{boyName}</p>
        </div>

        <p>{matchPercentage}%</p>

        <div>
          <img className="submission_container_logo" src={womanIcon} alt="woman icon" />
          <p>{girlName}</p>
        </div>
      </div>

      <p>Congratulations! Good choice</p>

      <button onClick={calculateAgain}>Calculate Again</button>
    </>
  );
}
