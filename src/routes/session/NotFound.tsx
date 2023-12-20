import logo from '@/assets/logo.png';
import { useState } from 'react';
import { useRouteError } from 'react-router-dom';
import './style.scss';

export default function NotFound() {
  const [show, setShow] = useState(false);
  const error = useRouteError();

  const handleRedirect = () => {
    window.location.href = '/';
  };

  return (
    <div className="box-container">
      <div className="box">
        <img src={logo} />
        <h1 className="title">Ops, page not found.</h1>
        <div
          className="disclaimer pointer"
          onClick={handleRedirect}
          role="presentation"
        >
          Click here to be redirected to the login page
        </div>
        <div
          className="error-details "
          onClick={() => setShow((prevState) => !prevState)}
          role="presentation"
        >
          click here for error details
        </div>
      </div>
      {show && (
        <pre className="error-stack">{JSON.stringify(error, null, 2)}</pre>
      )}
    </div>
  );
}
