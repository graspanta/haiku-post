import { Button, CardMedia } from '@mui/material';
import { useRef, useState, ChangeEvent, useEffect, Dispatch, SetStateAction } from 'react';

export type ImageSelectProps = {
  imageFile: File | undefined;
  setImageFile: Dispatch<SetStateAction<File | undefined>>;
};

export const HaikuImageSelector = ({ imageFile, setImageFile }: ImageSelectProps) => {
  const [imageURL, setImageURL] = useState<string>();

  const selectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setImageFile(event.currentTarget.files[0]);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (imageFile) {
      setImageURL(URL.createObjectURL(imageFile));
    }
  }, [imageFile]);

  return (
    <div
      style={{ display: 'flex', minHeight: 300, justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{}}>
        {imageURL && (
          <div>
            <CardMedia
              component="img"
              height="220"
              image={imageURL}
              style={
                {
                  // padding: '56.25%',
                }
              }
            />
          </div>
        )}
      </div>

      <input type="file" hidden ref={inputRef} onChange={selectedFile} />

      {!imageURL && (
        <Button onClick={handleClick} variant="contained" color="primary">
          写真(しゃしん)
        </Button>
      )}
    </div>
  );
};
