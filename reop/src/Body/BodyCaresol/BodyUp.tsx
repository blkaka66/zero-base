import React, { useState } from 'react';
import styles from './BodyUp.module.css';

function BodyUp() {
  const descript =[
    {index:0 ,title:'신선한 식품!' , content:'농장 직배송으로 더욱 신선한 식료품을 만나보세요.'},
    {index:1 ,title:'물빠진 청바지!' , content:'이제 막 도착한 패션 청바지를 구경해 보세요.'},
    {index:2 ,title:'신속한 업무처리!' , content:'다양한 디지털 상품을 둘러보세요.'},
  ];

  const [position, setPosition] = useState(0);
  let [index, setIndex] = useState(0);
  const imageWidth = document.documentElement.clientWidth;
  const numImages = 3; 
  const maxPosition = -(numImages - 1) * imageWidth;

  const handlePrevClick = () => {
    if(index === 0){
      index=2;
    }
    else{
      index=index-1;
    }
    setIndex(index);
  
    if (position < 0) {
        setPosition(position + imageWidth);
    }
    else{
        setPosition(maxPosition);
    }
  };

  const handleNextClick = () => {
    if(index === 2){
      index=0;
    }
    else{
      index=index+1;
    }
    setIndex(index);
    console.log(index)
    if (position > maxPosition) {
      setPosition(position - imageWidth);
    } else {
      setPosition(0);
    }
  };

  return (
    <div className={styles.bodyUp}>
      <div className={styles.imageContainer} style={{ transform: `translateX(${position}px)` }}>
        <img src='../../../img/img_shop_grocery.jpeg' alt="Image 1" />
        <img src='../../../img/img_shop_fashion.jpeg' alt="Image 2" />
        <img src='../../../img/img_shop_digital.jpeg' alt="Image 3" />
      </div>
      <div>
        <span className={styles.description}>
        <strong style={{fontWeight: 'bold'}}>{descript[index].title}</strong><br/>
        {descript[index].content}
        </span>
        </div>
      <button className={styles.goto} onClick={handleNextClick}><span className={styles.font}>바로가기{"->"} </span></button>
      <button className={styles.prev} onClick={handlePrevClick}>Prev</button>
      <button className={styles.next} onClick={handleNextClick}>Next</button>

    </div>
  );
}

export default BodyUp;
