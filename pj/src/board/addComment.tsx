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
    comments: {},
  }
  
const addComment = async (
    boardName: string,
    post: Post,
    setPost: any,
    ID: string,
    commentInput : string )=>{
        const postRef = db
        .collection("boards")
        .doc(boardName)
        .collection(boardName)
        .doc(post.docId);
        try {
            await postRef.update({
                comments: firebase.firestore.FieldValue.arrayUnion({ [ID]: commentInput }),
            });
            setPost((prevPost: Post) => ({
                ...prevPost,
                comments: { ...prevPost.comments, [ID]: commentInput },
              }));
            } 
        catch (error) {
            console.error("Error updating post:", error);
            }
        };

export {addComment};