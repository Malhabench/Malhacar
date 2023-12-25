import React, { useState } from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const [comments, setComments] = useState([
    { text: "Nice website, I recommend it", author: "Meriem Kerm" },
    { text: "It's so amazing!", author: "Ines Medj" },
    { text: "Awesome website!", author: "Malha Bench" },
    { text: "Awesome website!", author: "Meriem Kerm"  },
  ]);

  const [showCommentModal, setShowCommentModal] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, author: "New User" }]);
      setNewComment("");
      setShowCommentModal(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Slider {...settings}>
      {comments.map((comment, index) => (
        <div key={index} className="testimonial py-4 px-3">
          <p className="section__description">{comment.text}</p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={index === 0 ? ava01 : index === 1 ? ava02 : index === 2 ? ava03 : ava04} alt="" className="w-25 h-25 rounded-circle" />

            <div>
              <h6 className="mb-0 mt-3">{comment.author}</h6>
              <p className="section__description">Customer</p>
            </div>
          </div>
        </div>
      ))}

      <div className="testimonial py-4 px-3">
        <button className="btn btn-primary" onClick={() => setShowCommentModal(true)}>
          Add Comment
        </button>

        {showCommentModal && (
          <div className="comment-modal">
            <textarea
              placeholder="Add your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="form-control mb-3"
            />

            <button className="btn btn-primary" onClick={handleAddComment}>
              Submit Comment
            </button>
          </div>
        )}
      </div>
    </Slider>
  );
};

export default Testimonial;
