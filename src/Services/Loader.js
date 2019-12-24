import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
	<ReactLoading
    type={type}
    color={color}
    height={'5%'}
    width={'5%'} 
    className={'Loader'}
  />
);

export default Loader;
