import React, { useState, useEffect, useContext } from "react";
import {collection, getDocs } from 'firebase/firestore/lite';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './addfirebase';
import {PostProvide, postProvider} from './context'

function Feed() 
{

  const{changePost,setChangePost}= useContext(postProvider);
  const [posts, setPosts] = useState([]);
  async function getPost(){
    const citiesCol = collection(db, 'posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setPosts(cityList) ;
  }
  useEffect(() => {
    getPost();
  }, [changePost]);
  return (
    <div className="feed"> 
        {/*header */}
        <div className="feed__header">
            <h2>Home</h2>
           
        </div>
        

        {/*Tweetbox */}
        <TweetBox />
       
        

        {/* Post */}
        
        {posts.map((post) => (
          <Post
            
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        
        
        
        
      

        {/*Post */}
        {/*Post */}


    </div>
  );
}

export default Feed;