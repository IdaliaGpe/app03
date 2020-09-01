/*const char={
    image:document.getElementById('char-image'),
    name:document.getElementById('char-name'),
    status:document.getElementById('char-status'),
    species:document.getElementById('char-species'),
    type:document.getElementById('char-type'),
    gender:document.getElementById('char-gender'),
    origin:document.getElementById('char-origin'),
    created:document.getElementById('char-created'),
}

const Getchar=async _=>{
    const url='https://rickandmortyapi.com/api/character/22';
    console.log(`URL UNOWN= ${url}`);
    const data= await fetch(url);
    const dataJson=await data.json();

    const{name,image,status,species,type,gender,origin,created}=dataJson;
    char.image.src=await image;
    char.name.innerHTML= `Name: ${name}`;
    char.status.innerHTML= `Status: ${status}`;
    char.species.innerHTML= `species: ${species}`;
    char.type.innerHTML= `type: ${type}`;
    char.gender.innerHTML= `gender: ${gender}`;
    char.origin.innerHTML= `origin: ${origin[0].name}`;
    char.created.innerHTML= `created: ${created}`;
}
Getchar();

const chris={
    image1:document.getElementById('char-image1'),
    name1:document.getElementById('char-name1'),
    status1:document.getElementById('char-status1'),
    species1:document.getElementById('char-species1'),
    type1:document.getElementById('char-type1'),
    gender1:document.getElementById('char-gender1'),
    origin1:document.getElementById('char-origin1'),
    created1:document.getElementById('char-created1'),
}

const GetChris=async _=>{
    const url='https://rickandmortyapi.com/api/character/24';
    console.log(`URL UNOWN= ${url}`);
    const data= await fetch(url);
    const dataJson=await data.json();

    const{name,image,status,species,type,gender,origin,created}=dataJson;
    chris.image1.src=await image;
    chris.name1.innerHTML= `Name: ${name}`;
    chris.status1.innerHTML= `Status: ${status}`;
    chris.species1.innerHTML= `species: ${species}`;
    chris.type1.innerHTML= `type: ${type}`;
    chris.gender1.innerHTML= `gender: ${gender}`;
    chris.origin1.innerHTML= `origin: ${origin[0].name}`;
    chris.created1.innerHTML= `created: ${created}`;
}
GetChris();*/

//Indicar URL API
const baseUrl = 'https://rickandmortyapi.com/api/';
const characterList = document.getElementById('characters-list');

const GetCharactersList = async url =>{
    /*fetch(`${baseUrl}${url}`)
    .then(res => console.log(res.json()));*/

    const reponse = await fetch(`${baseUrl}${url}`);
    const data = await reponse.json();
    const {results} = data;

    const infoArr = results.map(element => {
        //console.log(element);
        const {image, url} = element;
        return {characterImg: image, characterUrl: url};
        //console.log(image);
    });

    await infoArr.forEach(element => {
        const imgElement = document.createElement('img');
        imgElement.src = element.characterImg;
        imgElement.onclick = ()=> {
            localStorage.setItem('characterUrl', element.characterUrl);
            window.location.href = 'file:///D:/almacenamiento-de-mis-cosas/escuela/universidad/semestre3/hipermedia/app03/characters.htm';
        };
        characterList.appendChild(imgElement);
    });

    //console.log(await imgArr);
    //console.log(await data.results);
}

GetCharactersList('character');