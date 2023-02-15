export const makeDomwidthProperties = (domType, propertyMap) => {
    //domType : div, a,li..
    //propertyMap : {"className": "product-card",..}
    const dom =document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
        dom[key] = propertyMap[key];
    });
    return dom;
};

export const appendChildList = (target , childrenList)=>{
    if(!Array.isArray(childrenList)) return; 

    childrenList.forEach((children)=>{
        target.appendChild(children);
    })
};