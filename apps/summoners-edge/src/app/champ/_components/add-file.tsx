'use client';

import { useState } from 'react';

const AddFile = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const fileName = 'newfile.txt'; // You can change this filename or make it dynamic
    try {
      const response = await window.electron.createTextFile(fileName);
      setMessage(response);
    } catch (error) {
      console.error(error);
      setMessage('Failed to create file');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Create Text File</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddFile;
