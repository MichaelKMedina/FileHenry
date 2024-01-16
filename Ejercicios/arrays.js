const req = {"url" : "https://rickandmortyapi.com/api/character/1", "otracosa" : "otracosa"}
const { url } = req;
const urlMod = url.split('/')
const id = urlMod.pop();
console.log(typeof(url));
  

