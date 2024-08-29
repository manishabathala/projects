const urlInput = document.getElementById('url');
const nameInput = document.getElementById('name');
const aliasInput = document.getElementById('star');

const button = document.getElementById('btn')
button.addEventListener('click', display)
function display ()
{
    const myDiv = document.createElement('div')
    myDiv.classList.add('card')
    const image = document.createElement('img');
    image.src = urlInput.value
    image.alt = nameInput.value;
    const name = document.createElement('h2');
    name.textContent = nameInput.value
    const alias = document.createElement('h3');
    alias.textContent = aliasInput.value
    myDiv.append(image,name,alias);
    document.getElementById('output').appendChild(myDiv);
    // resetValues();
    urlInput.value = "";
    nameInput.value="";
    aliasInput.value="";
}
// function resetValues(){
//     urlInput.value = "";
//     nameInput.value="";
//     aliasInput.value="";
// }

const actors=[
    {
        
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tI0H_jdPVlZ1E8Fus-Nkomd71HhGDLDGdw&s",
        name1:"NTR",
        aliasName:"Young Tiger",
    },
    {
        
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-EasKXDIpvjV0ngdbN0iYMjizc5f-qzHhw&s",
        name1:"Ram Charan",
        aliasName:"Mega Power Star",
    },
    {
        
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFbMY4WvH949oecieE8U8q5gJ69Zo_YGv9Q&s",
        name1:"Allu Arjun",
        aliasName:"Icon Star",
    },
    {
        
        poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0cxBb1MaMNVXDkmec7M9KopjZrwmkpBrOw&s",
        name1:"Ram",
        aliasName:"Energetic Star",
    }
]


function displayData ()
{
    actors.forEach(function (val)
    {
        const myyDiv = document.createElement('div');
        myyDiv.classList.add('movie');
        const image1 = document.createElement("img");
		image1.src = val.poster;
		image1.alt = val.name1;
		const title1 = document.createElement("h2");
		title1.textContent = val.name1;
        const aliasTitle1 = document.createElement("h3");
		aliasTitle1.textContent = val.aliasName;
        myyDiv.append(image1,title1,aliasTitle1);
        document.getElementById('output').appendChild(myyDiv);
    })
   

}
displayData()