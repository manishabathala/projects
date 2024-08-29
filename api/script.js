const price=[150,200,250,300,170,140,160,90,120,130,150,200,250,300,170,140,160,90,120,130]
const mainDiv=document.getElementById('main')
function fetchData(){
    fetch("https://api.sampleapis.com/coffee/hot")
    .then(function(res){return res.json()})
    .then(function(data){display(data)})

}
fetchData();
function display(data){
    let priceIndex = 0;
    data.forEach(function(value){
        const productDiv=document.createElement('div');
        productDiv.classList.add("product");
        const productImage=document.createElement('img');
        productImage.src=value.image;
        productImage.alt=value.title;
        const productTitle=document.createElement('h2');
        productTitle.textContent=value.title;
        const productIngredients=document.createElement('p');
        productIngredients.textContent=value.ingredients.join(", ");
        const productCost=document.createElement('h3');
        productCost.textContent=`Price: $${price[priceIndex]}`
        
        const cartButton=document.createElement('button');
        cartButton.textContent="add to cart";
        cartButton.addEventListener('click',addCart);
        productDiv.append(productImage,productTitle,productIngredients,productCost,cartButton);
        mainDiv.appendChild(productDiv);
        priceIndex++;

    });
}
let c=0;
function addCart(){
    c++;
    document.getElementById('count').textContent=`(${c})`;


}