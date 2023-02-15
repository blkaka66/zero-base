import { makeDomwidthProperties } from "../utils/dom.js"
import { getProductCard } from "./productCard.js"

export const getProductList = (productInfoList) =>
{
    const productListContainer = makeDomwidthProperties('div',{
        className:'product-list-con'
    });

    productInfoList.forEach((productInfo) =>{
        
        productListContainer.appendChild(
            getProductCard({
                ...productInfo,//spread 문법
            })
        );
        
    })
    return productListContainer;
};
