let nKilometraggio = prompt("Quanti km vuoi percorrere?")

let age = prompt("Quanti anni hai?")

let priceJourney = .21 * nKilometraggio


if (age < 18) {
    alert(priceJourney * .80);
    let discountPrice = priceJourney * .80
    let n = discountPrice.toFixed(2);
    console.log("prezzo scontato è", discountPrice.toFixed(2))


} else if (age > 65) {
    alert(priceJourney * .60);
    let discountPrice = priceJourney * .60
    let n = discountPrice.toFixed(2);
    console.log("prezzo scontato è", discountPrice.toFixed(2))


} else if (age >= 18 && age < 65) {
    alert(priceJourney)
}

if(age<18){
    prezzodelbiglietto = document.getElementById("prezzodelbiglietto");
prezzodelbiglietto.innerHTML = (priceJourney * .80).toFixed(2)
} else if (age > 65){
    prezzodelbiglietto = document.getElementById("prezzodelbiglietto");
    prezzodelbiglietto.innerHTML = (priceJourney * .60).toFixed(2)

} else (age >= 18 && age < 65)
    prezzodelbiglietto = document.getElementById("prezzodelbiglietto");
    prezzodelbiglietto.innerHTML = priceJourney.toFixed(2)













