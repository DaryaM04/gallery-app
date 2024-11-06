// import React, { useState } from 'react';

// const ImageModal = ({ image, onClose }) => {
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment) {
//       setComments([...comments, comment]);
//       setComment('');
//     }
//   };

//   return (
//     <div className="modal">
//       <button className="close-button" onClick={onClose}>X</button>
//       <img src={image.image} alt={`Image ${image.id}`} className="modal-image" />
//       <h2>Комментарии</h2>
//       <div className="comments">
//         {comments.map((c, index) => (
//           <p key={index}>{c}</p>
//         ))}
//       </div>
//       <form onSubmit={handleCommentSubmit} className="comment-form">
//         <input 
//           type="text" 
//           value={comment} 
//           onChange={(e) => setComment(e.target.value)} 
//           placeholder="Написать комментарий..."
//           required 
//         />
//         <button type="submit">Добавить</button>
//       </form>
//     </div>
//   );
// };

// export default ImageModal;

// import React, { useState } from 'react';

// const ImageModal = ({ image, onClose }) => {
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment) {
//       setComments([...comments, comment]);
//       setComment('');
//     }
//   };

//   return (
//     <div className="modal">
//       <button className="close-button" onClick={onClose}>X</button>
//       <img src={image.image} alt={`Image ${image.id}`} className="modal-image" />
//       <h2>Комментарии</h2>
//       <div className="comments">
//         {comments.map((c, index) => (
//           <p key={index}>{c}</p>
//         ))}
//       </div>
//       <form onSubmit={handleCommentSubmit} className="comment-form">
//         <input 
//           type="text" 
//           value={comment} 
//           onChange={(e) => setComment(e.target.value)} 
//           placeholder="Написать комментарий..."
//           required 
//         />
//         <button type="submit">Добавить</button>
//       </form>
//     </div>
//   );
// };

// export default ImageModal;

// import React, { useState } from 'react';

// const ImageModal = ({ image, onClose }) => {
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment) {
//       setComments([...comments, comment]);
//       setComment('');
//     }
//   };

//   return (
//     <div className="modal">
//       {/* Кнопка закрытия */}
//       <button className="close-button" onClick={onClose}>X</button>
//       <img src={image.image} alt={`Image ${image.id}`} className="modal-image" />
//       <h2>Комментарии</h2>
//       <div className="comments">
//         {comments.map((c, index) => (
//           <p key={index}>{c}</p>
//         ))}
//       </div>
//       <form onSubmit={handleCommentSubmit} className="comment-form">
//         <input 
//           type="text" 
//           value={comment} 
//           onChange={(e) => setComment(e.target.value)} 
//           placeholder="Написать комментарий..."
//           required 
//         />
//         <button type="submit">Добавить</button>
//       </form>
//     </div>
//   );
// };

// export default ImageModal;

import React, { useState } from 'react';
import axios from 'axios';

const ImageModal = ({ image, onClose, comments, addComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Отправка комментария на сервер (не сохраняется на сервере, но отправляется)
    try {
      await axios.post(`http://test-backend.itdelta.agency/api/image/${image.id}/comments`, {
        comment: comment,
      });

      // Добавляем комментарий в локальное состояние в App.js
      addComment(image.id, comment);
      setComment(''); // Очищаем поле ввода
    } catch (error) {
      console.error("Ошибка при добавлении комментария:", error);
    }
  };

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>X</button>
      <img src={image.image} alt={`Image ${image.id}`} className="modal-image" />
      <h2>Комментарии</h2>
      <div className="comments">
        {comments.map((c, index) => (
          <p key={index}>{c.text}</p>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input 
          type="text" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Написать комментарий..."
          required 
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default ImageModal;