import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Product {//받아올 데이터 타입 정의
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
    count:number;
    rate:number;
  }
  cartCount:number;
}

export function getProducts() {
  const [products, setProducts] = useState<Product[]>([]);//products 초기화

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');//받아오기
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (products.length === 0) {//products 배열에 데이터하나도없을때만
      fetchData();//데이터받아옴
    }
  }, [products]);//products안에 값일 바뀔때마다 실행(근데 왜 계속 두번씩 받아오지?)

  return products;
}

export default getProducts;