import AuthContext from '@/configs/AuthContext';
import placeholder from '@/assets/placeholder.jpg';
import './style.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);

  const renderImage = () => (
    <img
      className="avatar"
      src={state.logged.picture ? state.logged.picture : placeholder}
      role="presentation"
      onError={({ currentTarget }) => {
        /* eslint-disable no-param-reassign */
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = placeholder;
        /* eslint-enable no-param-reassign */
      }}
    />
  );

  return (
    <div className="home-container">
      <div className="box">
        <div className="header">
          {renderImage()}
          <h3>{state.logged.name}</h3>
        </div>
        <div className="body">
          {Object.keys(state.logged).map((k, idx) => (
            <div className="line" key={idx.valueOf()}>
              <b>{k}:</b>
              <span>{state.logged[k as keyof typeof state.logged]}</span>
            </div>
          ))}
        </div>
        <div className="footer">
          <button
            className="btn btn-danger"
            onClick={() => navigate('/logout')}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
