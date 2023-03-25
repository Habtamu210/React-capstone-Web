import React from 'react';
import PropTypes from 'prop-types';

const Crypto = ({ crypto }) => {
  const {
    img, Name,
  } = crypto;

  return (
    <div className="rounded-0 w-100 h-100 border border-none d-flex justify-content">
      <div className="w-100">
        <div className="d-flex m-1 justify-content-left">
          <img className="images w-74" src={`https://www.cryptocompare.com${img} `} alt="symbol" />
        </div>
        <p className=" p-2 font text-light text-center">
          {' '}
          <span>Name:</span>
          {Name}
        </p>
        <p />
      </div>
    </div>
  );
};

Crypto.propTypes = {
  crypto: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
export default Crypto;
