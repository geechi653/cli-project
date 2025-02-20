import yollLogo from '/yollo-logo.svg';

function Logo() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-5">
        <img src={yollLogo} className="w-25 pulse" alt="React logo" />
      </div>
      <h1 className="text-center my-5 text-body-secondary fw-bold">
        CLI Challange Project
      </h1>
    </div>
  );
}

export default Logo;
