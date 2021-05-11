import React, { useState } from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
// import classes from './PictureInput.module.css'

interface Props {
  onChange: (file: File) => void;
}

const PictureInput: React.FC<Props> = ({ onChange }) => {
  let [image, setImage] = useState<File>();

  return (
    <label htmlFor="upload-photo" style={{ marginRight: '1rem' }}>
      <input
        style={{ display: 'none' }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        onChange={(event) => {
          setImage(event.target.files![0]);
          onChange(event.target.files![0]);
        }}
      />

      <div
        style={{
          width: '15rem',
          height: '15rem',
          backgroundColor: 'lightGrey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Recette de l'utilisateur"
            style={{ width: '14.5rem', height: '14.5rem', objectFit: 'cover' }}
          />
        ) : (
          <CameraAltIcon fontSize="large" style={{ transform: 'scale(2)' }} />
        )}
      </div>
    </label>
  );
};

export default PictureInput;
