import React from 'react'
import { db } from "./content";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
interface Post {
    title: string;
    content: string;
    createdBy: string;
    docId: string;
    like: number;
    disLike: number;
    likeActionBy: string[];
    comments: { [uid: string]: { nickName: string, commentInput: string } };
  }
  
  const addComment = async (
    boardName: string,
    post: Post,
    setPost: React.Dispatch<React.SetStateAction<Post>>,
    ID: string,
    nickName: string,
    commentInput: string,
  ) => {
    const postRef = db
      .collection("boards")
      .doc(boardName)
      .collection(boardName)
      .doc(post.docId);
  
    try {
      const newComment = { [ID]: { nickName, commentInput } };
      await postRef.update({
        comments: firebase.firestore.FieldValue.arrayUnion(newComment),
      });
  
      setPost((prevPost: Post) => ({
        ...prevPost,
        comments: { ...prevPost.comments, ...newComment },
      }));
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const removeComment = async (
    boardName: string,
    post: Post,
    setPost: React.Dispatch<React.SetStateAction<Post>>,
    ID: string,
    nickName: string,
    comment: string,
  ) => {
    const postRef = db
      .collection("boards")
      .doc(boardName)
      .collection(boardName)
      .doc(post.docId);
  
    try {
      // Remove the comment from the post
      const updatedComments = { ...post.comments };
  
      for (const uid in updatedComments) {
        if (updatedComments[uid][ID] !== undefined) {
          const commentData = updatedComments[uid][ID];
          if (commentData.nickName === nickName && commentData.commentInput === comment) {
            delete updatedComments[uid];
            
          }
        }
      }
  
      console.log(updatedComments);
  
      // Update the post document in Firestore with the updated comments
      await postRef.update({
        comments: updatedComments,
      });
  

      setPost((prevPost) => ({
        ...prevPost,
        comments: updatedComments,

      }));
     
  
      console.log("Comment removed successfully.");
    } catch (error) {
      console.error("Error removing comment:", error);
    }
  };
  
 
  

  
  
export { addComment,removeComment };
  

