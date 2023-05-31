import React, { useEffect, useState } from 'react';
import './Posts.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Comment from'../../../comment/Comment'
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://35.78.201.111:3008/user/post/get/${userId}`);
        if (response.data) {
          console.log(response.data);
          setPosts(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleEditPost = (postId) => {
    navigate(`/updatePost/${postId}`);
  };


  const handleDeletePost = async (postId) => {
    try {
      // console.log(postId)
      const response = await axios.post(`http://35.78.201.111:3008/user/post/delete/${postId}`);
      console.log(response.data);
      window.alert('Post Deleted');
      navigate('/Post');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Your Posts:</h1>
      <div className="post-container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <img src={`http://35.78.201.111:3008/posts/${post.postUrl}`} alt={post.caption} />
            <h2>{post.caption}</h2>
            <button onClick={() => handleEditPost(post.id)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <Comment />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;











// http://35.78.201.111:3008/profile_images/profile_image_1685380245019_CSS%20DEMO1.png
// PROFILE PHOTO
// -----------------------------------------------------------------
// mahesh mhaske3:13 PM
// http://35.78.201.111:3008/posts/profile_image_1685380245019_CSS%20DEMO1.png

// post
// http://35.78.201.111:3008/posts
// mahesh mhaske3:19 PM
// http://35.78.201.111:3008/profile_images/