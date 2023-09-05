import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import "./GetImage.css";
import storage from "./firebase";
import Likes from "./Likes";
import React, { useEffect, useState } from 'react';
function GetImage() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const directoryRef = ref(storage, 'image'); // 'images'ディレクトリへの参照を作成
            try {
                const listResult = await listAll(directoryRef); // 'images'ディレクトリ内のファイルを一覧表示

                // ファイルのダウンロードURLを取得して状態に設定
                let urls = await Promise.all(
                    listResult.items.map(async (item) => {
                        const url = await getDownloadURL(item);
                        return url;
                    })
                );
                urls = [...urls].reverse()
                setImageUrls(urls);
            } catch (error) {
                console.error('Error listing images:', error);
            }
        }

        fetchImages();
    }, []);

    return (
        <div className="GetImage-css">
            <h1>画像一覧</h1>
            <div className="image-list">
                {imageUrls.map((url, index) => (
                    <>
                        <img key={index} src={url} alt={`Image ${index}`} className="image-size" />
                        <Likes/>
                        <br></br>
                    </>
                ))}
            </div>
        </div>
    );
}

export default GetImage;