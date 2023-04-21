//funciones postfav y deletefav
let myFavorites = [];

function postFav(req, res){
  myFavorites = [...myFavorites, req.body];
  res.status(201).json(myFavorites);
}
