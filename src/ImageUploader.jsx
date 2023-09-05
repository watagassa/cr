import { Button } from "@mui/material";
import React, { useState } from "react";
import "./ImageUpload.css";
import ImageLogo from "./image.svg";
import storage from "./firebase";
import { ref, uploadBytesResumable } from "firebase/storage"
const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setUploaded] = useState(false);

  const OnFileUploadToFirebase = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
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
        <div className="outerBox">
          <div className="title">
            <h2>画像 アップローダー</h2>
            <p>JpegかPngの画像ファイル</p>
          </div>
          <div className="imageUplodeBox">
            <div className="imageLogoAndText">
              <img src={ImageLogo} alt="imagelogo" />
              <p>ここにドラッグ＆ドロップしてね</p>
            </div>
            <input
              className="imageUploadInput"
              multiple
              name="imageURL"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={OnFileUploadToFirebase}
            />
          </div>
          <p>または</p>
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