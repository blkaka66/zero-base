import { appendChildList, makeDomwidthProperties } from "../utils/dom.js"
import { getProductList } from "./productList.js";


export const getProductSection =(sectionName , productInfoList) =>{
    const productListSection = makeDomwidthProperties('div',{
        className: 'product-list-section',
    });
    const sectionTitle = makeDomwidthProperties('div',{
        className: 'section-title',
    });
    const titleHighLight = makeDomwidthProperties('span',{
        className: 'section-title-highlight',
    });
    const title = makeDomwidthProperties('span',{
        innerHTML: sectionName,
    });

    appendChildList(sectionTitle,[titleHighLight,title]);

    const productListContainer = getProductList(productInfoList);

    appendChildList(productListSection ,{sectionTitle,productListContainer});

    return productListSection;
};