import React from 'react';
import Form from './form';
import doc from '../../assets/images/doc1.jpg';

const Login = () => {
  return (
    <div className="mt-32">
      <div className="flex justify-center mx-28 bg-black/85 rounded-3xl">
        <Form />

        <div className="">
          <img src={doc} alt="Doctors Picture" className="rounded-3xl h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
