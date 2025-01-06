import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Home() {

    const handleFile = async (event) => {
        const file = event.target.files[0]; 
        const formData = new FormData();
      formData.append('file', file);// Access the first file from the FileList
        if (!file) {
          alert("No file selected!");
          return;
        }
      
        try {
          const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
            },
            body: formData, // Send the file directly as binary data
          });
      
          if (response.ok) {
            const result = await response.text();
            console.log("File uploaded successfully:", result);
          } else {
            console.error("Error uploading file:", response.statusText);
          }
        } catch (error) {
          console.error("Error during file upload:", error);
        }
      };
      

  return (
    <div className=' flex justify-center align-middle my-10'>
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={handleFile}
        multiple
        />
    </Button>
    </div>
  );
}
