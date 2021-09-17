var listaFilmesFavoritos = [
    "https://m.media-amazon.com/images/I/71Nq-vqP0QL._AC_SL1500_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b7c6b9756d1fcc53987ae7ba88b1cb04d3daa47db2ffa11f88cbc57a8deb7683._RI_V_TTW_.jpg",

]

for (var i = 0; i < listaFilmesFavoritos.length; i++) {
    document.write("<img src=" + listaFilmesFavoritos[i] + ">")
}