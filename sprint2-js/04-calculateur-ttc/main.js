function calculerTtc ( prix ){
    return prix + 0.2 *prix
}
console.log(calculerTtc(100))

function afficherprix( select,prix){
    const element = document.querySelector( select)
    element.textContent = `HT  : ${prix} DH `  +` || ` +  ` TTc :  ${calculerTtc(prix)} DH ` 
}
afficherprix('#p1', 100 )
afficherprix('#p2' , 320 )
afficherprix('#p3' , 45)





