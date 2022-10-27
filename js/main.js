let nKilometraggio = prompt("Quanti km vuoi percorrere?")

let age = prompt("Quanti anni hai?")

let priceJourney = .21 * nKilometraggio

if (age < 18) {
    alert(priceJourney * .80);

} else if (age > 65) {
    alert(priceJourney * .60)
}

