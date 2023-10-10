import React, { useContext, useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material/index";
import db from './firebase';
import { collection, doc, setDoc } from "firebase/firestore"; 
import {PostProvide, postProvider} from './context'
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const{changePost,setChangePost}= useContext(postProvider);

  const sendTweet = async(e) =>{

    e.preventDefault();
  //   db.collection('users').doc(userId).collection('workouts').add({
  //     timeStamp,
  //     'class': false
  // })

const citiesRef = collection(db, "posts");

await setDoc(doc(citiesRef),{
  displayName: 'Rafeh Qazi',
  username: 'cleverqazi',
  verified : true,
  text: tweetMessage,
  image: tweetImage,
  avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
  
  
});
setChangePost([...changePost,{ displayName: 'Rafeh Qazi',
username: 'cleverqazi',
verified : true,
text: tweetMessage,
image: tweetImage,
avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
}]);

    // dbb.collection('post').add({
    //   displayName: 'Rafeh Qazi',
    //   username: 'cleverqazi',
    //   verified : true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
      
      
    // });
    
    setTweetMessage("");
    setTweetImage("");


  };
  return (
    <div className="tweetBox">
        <from>
            <div className="tweetBox__input">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
                <input 
                 onChange={(e) => setTweetMessage(e.target.value)} 
                 value={tweetMessage} 
                 placeholder="what's happening" 
                 type="text" 
                />
                
            </div>

            <input 
             value = {tweetImage}
             onChange={(e) => setTweetImage(e.target.value)}
             className="tweetBox__imageInput" 
             placeholder="Optional: Enter Image URL" 
             type="text" 
            />
                
            <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>          
        </from>
     
    </div>
  );
}

export default TweetBox;