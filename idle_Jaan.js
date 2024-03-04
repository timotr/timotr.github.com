(function() {
    money = 0
fish = 0
fishing = () => {
   if (Math.random() < (0.02+fishermans*0.01)) {
    fish++
       console.log("leidsin kala")
   }
    
}
a = setInterval(fishing, 100)
function sellFish() {
    money += fish * 1.2
    fish = 0;
    console.log("money:",money)
}

fishermans = 0
function buyFisherman() {
    if (money >= 10) {
        fishermans++
        money -= 10
    } else console.log("sul on vaja 10 raha")
}

boats=0
function buyBoat() {
    if (money >= 1000) {
        boats++
        money -= 1000
        clearInterval(a)
        a = setInterval(fishing, Math.max(10,100/boats))
    } else console.log("sul on vaja 1000 raha")
}

taxi = 0
function orderTaxi() {
    if (money >= 10000) {
        taxi++
        switch (taxi) {
          case 1: console.log("congrats, saad nüüd koju minna"); break;
          case 2: console.log("congrats, ma saan ka nüüd koju minna"); break;
          case 3: console.log("congrats, karu saab ka nüüd koju minna"); break;
          case 4: console.log("congrats, taksojuht saab nüüd puhkusele minna"); break;
          case 7: console.log("congrats, taksojuht ostsis Pariisi korteri"); break;
          case 11: console.log("congrats, taksojuht on reisinud juba kaheksasse eri riiki"); break;
          case 16: console.log("congrats, taksojuht lämbus rahahunniku alla ära, puhaku ta rahus"); break;
          case 19: console.log("keep going you are close "); break;
          default: console.log("congrats, taksojuht saab nüüd kauem puhkusel olla"); break;
        }
        money -= 10000
    } else console.log("sul on vaja 10k raha")

    window.sellFish = sellFish
    window.buyFisherman = buyFisherman
    window.buyBoat = buyBoat
    window.orderTaxi = orderTaxi
}
})()
