import menShoes from "./category-datas/menShoes.js";import ladyhandbags from "./category-datas/ladyhandbags.js";import ladyShoes from "./category-datas/ladyShoes.js";import babyShoes from "./category-datas/babyShoes.js";let dataBase=mixDatas([menShoes,ladyhandbags,ladyShoes,babyShoes]);function mixDatas(orderedDatas){let mixedDatas=[];let max=Math.max(...orderedDatas.map(x=>x.length));for(let i=0;i<max;i++){if(orderedDatas[0][i])
    mixedDatas.push(orderedDatas[0][i]);if(orderedDatas[1][i])
    mixedDatas.push(orderedDatas[1][i])
    if(orderedDatas[2][i])
    mixedDatas.push(orderedDatas[2][i])
    if(orderedDatas[3][i])
    mixedDatas.push(orderedDatas[3][i])}
    return mixedDatas}
    let randomIndex=Math.floor(Math.random()*dataBase.length)
    let cutFront=dataBase.splice(0,randomIndex)
    dataBase.push(...cutFront);export default dataBase