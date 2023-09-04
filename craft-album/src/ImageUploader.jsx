import { Button } from "@mui/material";
import React, { useState } from "react";
import "./ImageUpload.css";
import storage from "./firebase";
import { ref, uploadBytesResumable } from "firebase/storage"
const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setUploaded] = useState(false);

  const OnFileUploadToFirebase = (e) => {
    const file = e.target.files[0];
    const ext = file.name.split(".").pop();
    const fileName = `${ Date.now()}.${ext}`;
    const storageRef = ref(storage, "image/" + fileName);
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setUploaded(true);
      }
    )
  };

  return (
    <>
      {loading ? (
        <h2>アップロード中・・・</h2>
      ) : (
        <div>

          <div>
            <input
              className="imageUploadInput"
              multiple
              name="imageURL"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={OnFileUploadToFirebase}
            />
          </div>
          <Button variant="contained">
            ファイルを選択
            <input
              className="imageUploadInput"
              type="file"
              onChange={OnFileUploadToFirebase}
              accept=".png, .jpg, .jpeg"
            />
          </Button>
        </div>
      )}
    </>
  );
};

export default ImageUploader;