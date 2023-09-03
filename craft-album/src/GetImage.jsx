import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import "./GetImage.css";
import storage from "./firebase";
import React, { useEffect, useState } from 'react';
// function GetImage() {
//     const [imageUrl, setUrl] = useState(null);
//     const gsReference = ref(
//         storage,
//         "gs://test-3d26d.appspot.com/image/ToBeContinude.jpg"
//     );
//     getDownloadURL(gsReference)
//         .then((url) => {
//             console.log(url);
//             setUrl(url);
//         })
//         .catch((err) => console.log(err));


//     return (
//         <div>
//             <img src={imageUrl}></img>
//         </div>
//     );
// }async function listImagesInDirectory() {
// async function GetImage() {
//     const [imageUrl, setUrl] = useState(null);
//     const directoryRef = ref(storage, 'image'); // 'images'ディレクトリへの参照を作成

//     try {
//         const listResult = await listAll(directoryRef); // 'images'ディレクトリ内のファイルを一覧表示
//         // listResult.itemsにファイルのリストが含まれます
//         listResult.items.forEach((item) => {
//             console.log('File Name:', item.name);

//         });
//     } catch (error) {
//         console.error('Error listing images:', error);
//     }
// }
// return(imageUrls.map((url, index));
function GetImage() {
    const [imageUrls, setImageUrls] = useState([]);
  
    useEffect(() => {
      async function fetchImages() {
        const directoryRef = ref(storage, 'image'); // 'images'ディレクトリへの参照を作成
        try {
          const listResult = await listAll(directoryRef); // 'images'ディレクトリ内のファイルを一覧表示
  
          // ファイルのダウンロードURLを取得して状態に設定
          const urls = await Promise.all(
            listResult.items.map(async (item) => {
              const url = await getDownloadURL(item);
              return url;
            })
          );
          console.log(listResult.items.map);
          setImageUrls(urls);
        } catch (error) {
          console.error('Error listing images:', error);
        }
      }
  
      fetchImages();
    }, []);
  
    return (
      <div>
        <h1>画像一覧</h1>
        <div className="image-list">
          {imageUrls.map((url) => (
            <img src={url} />
          ))}
        </div>
      </div>
    );
  }
  
export default GetImage;