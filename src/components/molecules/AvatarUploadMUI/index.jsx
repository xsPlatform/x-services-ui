import React, { useRef, useState } from 'react';
import { func } from 'prop-types';
import { HiddenFileInput, AvatarMUI, IconButtonMUI } from './styles';

const AvatarUploadMUI = ({ handleChange }) => {
  const inputRef = useRef(null);

  const [file, setFile] = useState('');

  const handleClickIcon = () => {
    if (inputRef.current !== null) inputRef.current.click();
  };

  const toBase64 = (fileInput) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileInput);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChangeFile = async (event) => {
    event.preventDefault();
    const { target } = event;
    if (target.files !== null) {
      const fileInput = target.files[0];
      const fileBase64 = await toBase64(fileInput);
      setFile(fileBase64);
      handleChange(fileBase64);
    }
  };

  return (
    <IconButtonMUI onClick={handleClickIcon}>
      <HiddenFileInput
        id="imgUpload"
        ref={inputRef}
        onChange={handleChangeFile}
        accept="image/jpeg,image/png"
      />
      <AvatarMUI
        src={file}
        style={{
          border: '2px solid #00909B',
        }}
      />
    </IconButtonMUI>
  );
};

AvatarUploadMUI.propTypes = {
  handleChange: func.isRequired,
};

export { AvatarUploadMUI };
