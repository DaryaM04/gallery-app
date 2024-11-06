// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import Gallery from './components/Gallery';
// import ImageModal from './components/ImageModal';
// import './App.css';


// function App() {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [commentsData, setCommentsData] = useState({});

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://test-backend.itdelta.agency/api/images');
//         setImages(response.data);
//       } catch (error) {
//         console.error("Ошибка при загрузке изображений:", error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);

//     // Загружаем комментарии только при первом открытии модального окна для каждого изображения
//     if (!commentsData[image.id]) {
//       axios.get(`http://test-backend.itdelta.agency/api/image/${image.id}`)
//         .then(response => {
//           setCommentsData(prevData => ({
//             ...prevData,
//             [image.id]: response.data.comments || []
//           }));
//         })
//         .catch(error => {
//           console.error("Ошибка при загрузке комментариев:", error);
//         });
//     }
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setIsModalOpen(false);
//   };

//   const addComment = (imageId, comment) => {
//     // Добавляем комментарий локально, без сохранения на сервере
//     setCommentsData(prevData => ({
//       ...prevData,
//       [imageId]: [...(prevData[imageId] || []), { text: comment }]
//     }));
//   };

//   return (
//     <div className="app">
//       <Gallery images={images} onImageClick={openModal} />
//       {isModalOpen && selectedImage && (
//         <ImageModal 
//           image={selectedImage} 
//           onClose={closeModal} 
//           comments={commentsData[selectedImage.id] || []} 
//           addComment={addComment} 
//         />
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ImageModal from './components/ImageModal';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentsData, setCommentsData] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://test-backend.itdelta.agency/api/images');
        setImages(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке изображений:", error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);

    if (!commentsData[image.id]) {
      axios.get(`http://test-backend.itdelta.agency/api/image/${image.id}`)
        .then(response => {
          setCommentsData(prevData => ({
            ...prevData,
            [image.id]: response.data.comments || []
          }));
        })
        .catch(error => {
          console.error("Ошибка при загрузке комментариев:", error);
        });
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const addComment = (imageId, comment) => {
    setCommentsData(prevData => ({
      ...prevData,
      [imageId]: [...(prevData[imageId] || []), { text: comment }]
    }));
  };

  return (
    <div className="app">
      <Header />
      <Gallery images={images} onImageClick={openModal} />
      {isModalOpen && selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={closeModal} 
          comments={commentsData[selectedImage.id] || []} 
          addComment={addComment} 
        />
      )}
    </div>
  );
}

export default App;