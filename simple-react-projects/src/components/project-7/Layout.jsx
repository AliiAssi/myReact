import React, { useEffect, useState } from "react";
import QRCode from 'qrcode.react';
import Slider from "./Slider";

function Layout() {
  const [imagesUrl, setImagesUrl] = useState([]);
  const [indexOn, setIndexOn] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?page=${page}&limit=3`);
        const data = await response.json();
        setImagesUrl(data.photos.map(image => image.url));
        // Reset index if the number of images is less than the current index
        if (indexOn >= data.photos.length) {
          setIndexOn(0);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [page]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex flex-col items-center">
          <Slider
            indexOn={indexOn}
            setIndexOn={setIndexOn}
            imageUrl={imagesUrl[indexOn] || ''}
            page={page}
            setPage={setPage}
            totalImages={imagesUrl.length}
          />
          <div className="p-4 mt-4">
            <h1 className="text-xl font-semibold mb-4">QR Code Generator</h1>
            <QRCode value={imagesUrl[indexOn] || ''} size={256} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
