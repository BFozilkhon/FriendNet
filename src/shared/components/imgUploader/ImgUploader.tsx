import React, { useState, ChangeEvent, useEffect } from 'react';

import { Container, Img } from './ImgUploader.styled';

type ImageUploaderProps = {
  handleSelect: (e: any) => void;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ handleSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        // You can send the imageUrl or the file to the server for storage and processing
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    handleSelect(selectedImage);
  }, [selectedImage]);

  return (
    <Container>
      {selectedImage ? (
        <Img src={selectedImage} alt='Uploaded' />
      ) : (
        <input
          required
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
        />
      )}
    </Container>
  );
};

export default ImageUploader;
