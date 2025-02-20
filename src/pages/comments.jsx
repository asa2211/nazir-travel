// src/components/Comments.jsx
import React from 'react';

function Comments() {
  // Namuna ma'lumotlar (real loyihada bu backend'dan kelishi mumkin)
  const commentsData = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Amazing travel experience! The team was very helpful in planning my trip.',
      date: 'Feb 15, 2025',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Loved the destinations they recommended. Will definitely book again!',
      date: 'Feb 10, 2025',
    },
    {
      id: 3,
      name: 'Ali Ahmad',
      text: 'Great service and affordable prices. Highly recommend!',
      date: 'Feb 5, 2025',
    },
  ];

  return (
    <section className="comments">
      <h2 className="comments-title">What Our Clients Say</h2>
      <div className="comments-container">
        {commentsData.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-text">{comment.text}</p>
            <span className="comment-date">{comment.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;