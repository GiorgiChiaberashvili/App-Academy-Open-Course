import { useEffect, useState } from "react";
import { PictureDisplay } from './PictureDisplay'


function Message({ size }) {

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])

  return (
    <div className={`message ${'sizeClass'}`}>
      (message)
    </div>
  );
};

export default Message;
