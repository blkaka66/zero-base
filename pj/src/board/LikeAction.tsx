import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "./content";
import { useRecoilValue } from "recoil";
import { idAtom } from "../state/login";



interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId: string;
  like: number;
  disLike: number;
  likeActionBy: string[];
}

const handleLike = async (
  boardName: string,
  post: Post,
  setPost: any,
  ID: string,
  type: "like" | "disLike"
) => {
  if (boardName !== undefined) {
    console.log(ID);

    if (post.likeActionBy.includes(ID)) {
      alert("이미 눌렀습니다");
      return;
    }
    const postRef = db
    .collection("boards")
    .doc(boardName)
    .collection(boardName)
    .doc(post.docId);
    try {
      const field = type === "like" ? "like" : "disLike";


      await postRef
        .update({
          [field]: firebase.firestore.FieldValue.increment(1),
          likeActionBy: firebase.firestore.FieldValue.arrayUnion(ID),
        });

      setPost((prevPost: { [key: string]: any }) => ({
        ...prevPost,
        [field]: prevPost[field] + 1,
        likeActionBy: prevPost.likeActionBy.includes(ID)
          ? prevPost.likeActionBy
          : [...prevPost.likeActionBy, ID],
      }));
    } catch (error) {
      console.error("Error updating post:", error);
    }

    if(type === "disLike"){

      checkDisLike(postRef);
        
    }
  }
};


async function checkDisLike(postRef:any)  {

    try {
      const postSnapshot = await postRef.get();
      if (postSnapshot.exists) {
        const disLikeCount = postSnapshot.data()?.disLike || 0;
        if(disLikeCount >= 10){
          postRef.delete();
          console.log("삭제")
        }
      } else {
        console.log("비추");
      }
    } catch (error) {
      console.error("Error getting post:", error);
    }
}
export { handleLike };
