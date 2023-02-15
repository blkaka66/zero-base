import { appendChildList,makeDomwidthProperties } from "../utils/dom.js";
export const getProductCard = ({
    imgSrc,
    name,
    discountPercent,
    price,
    originalPrice,
    }) => {

    const productCard = makeDomwidthProperties('div',{
        className: 'product-card',
    });
    // -- product image con --
    const productImageCon = makeDomwidthProperties('div',{
        className: 'product-image-con',
    });
    
    const productImage = makeDomwidthProperties('img',{
        src:imgSrc,
        
        alt :name
    });
    
    const cartToggleBtn = makeDomwidthProperties('button',{
        className: 'cart-toggle-btn',
        type:'button'
    });
    const cartImage = makeDomwidthProperties('img',{
        className:'cart-image',
        src:imgSrc,
        alt :name
    });
    
    cartToggleBtn.appendChild(cartImage);
    
    appendChildList(productImageCon, [productImage,cartToggleBtn]);
    // -- product image con --
    
    // --product-description--
    const productDescription = makeDomwidthProperties('div',{
        className: 'product-description',
    });
    
    
    const productName = makeDomwidthProperties('div',{
        className: 'product-name',
        innerHTML: '파프리카',
    });
    
    const productPriceContainer = makeDomwidthProperties('div',{
        className: 'product-price-con',
    });
    
    
    const productDiscount = makeDomwidthProperties('div',{
        className: 'product-discount-percent',
        innerHTML: `${discountPercent}%`,
    });
    
    const productPrice = makeDomwidthProperties('div',{
        className: 'product-price',
        innerHTML: `${price.toLocaleString()}원`, 
    });
    
    const productOriginalPrice = makeDomwidthProperties('div',{
        className: 'product-original-price',originalPrice,
        innerHTML: `${originalPrice.toLocaleString()}원`,
    });
    
    
    
    appendChildList(productDescription, [productName,productPriceContainer,productOriginalPrice]);
    appendChildList(productPriceContainer, [productDiscount,productPrice]);
    // --product-description--
    
    appendChildList(productCard, [productImageCon,productDescription]);
    


    return productCard;
}