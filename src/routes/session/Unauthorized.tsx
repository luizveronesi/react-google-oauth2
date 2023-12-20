import logo from '@/assets/logo.png';
import './style.scss';

function Unauthorized() {
  const handleRedirect = () => {
    window.location.href = '/admin';
  };

  return (
    <div className="unauthorized-container">
      <div className="box">
        <img src={logo} />
        <h1 className="title">You are not authorized to access.</h1>
        <div
          className="disclaimer"
          onClick={handleRedirect}
          role="presentation"
        >
          Click here to be redirected.
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
