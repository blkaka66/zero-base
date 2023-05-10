import React, { useEffect, useState } from 'react'
import { firebaseConfig } from '../api/API'
import firebase from 'firebase/compat/app';

interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId:string;
  like:number;
  disLike:number;
}

function getData(boardName:string): Promise<Post[]> {
  const db = firebase.firestore();
  const postsRef = db.collection("boards").doc(boardName).collection(boardName);

  return postsRef.get().then((querySnapshot) => {
    const data: Post[] = [];
    querySnapshot.forEach((doc) => {
      const post = doc.data() as Post;
      data.push({ ...post, docId: doc.id });
    });

    return data;
  });
}



export default getData