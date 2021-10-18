/*console.log("Hello World")*/

/*let jmeno = "Eliska"
let prijmeni = "Kralova"
let vek = 20*/


/*console.log("Cele jmeno: ")
console.log(jmeno + " " + prijmeni)
console.log(jmeno, prijmeni, vek)

let mocnina = Math.pow((7 + 3), 3)
console.log(mocnina)


console.log(vek === 18)*/

/*if (vek < 18) {
    console.log("Je nam lito, mladistvym nenalevame.")
    console.log("Zkus to pozdeji.")
} else if (vek === 18) {
    console.log("Jen tak tak.")
} else if (vek <= 21) {
    console.log("Racte vstoupit.")
} else {
    console.log("Vam bychom nalili i v USA.")
}
*/



/*
let vek = 10
let prilisMlady = vek < 18

if (prilisMlady) {
    console.log("Je nám líto, mladistvým nenaléváme.")
    console.log("Zkus to později.")
} else {
    console.log("Račte vstoupit.")
}
*/

/*
let vek = 18
let maRad = "víno"
let mladistvy = vek < 18

if (plnolety && maRad === "víno") { // ||
  console.log("Nalévám víno.")
} else if (plnolety && maRad === "pivo") {
  console.log("Nalévám pivo.")
} else {
  console.log("Je nám líto, mladistvým nenaléváme.")
  console.log("Zkus to později.")
}
*/



let vek = 18
let maRad = "víno" // "víno" nebo "pivo"
let jeplnolety = vek >= 18
let maProtekci = true

if ((jeplnolety && maRad === "víno") || maProtekci) {
    console.log("Nalévám víno.")
} else if (plnolety && maRad === "pivo") {
    console.log("Nalévám pivo.")
} else {
    console.log("Je nám líto, mladistvým nenaléváme.")
    console.log("Zkus to později.")
}