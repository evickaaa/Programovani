/*Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 265 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.*/

let hod_mzda = 265
let pocetHodin_Den = 7
let pocet_dnu = 21

let mesicni_prijem = hod_mzda * pocetHodin_Den * pocet_dnu

console.log(mesicni_prijem)


/*Pokud pracujete na živnostenský list, můžete si odečíst 60% příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
*/


let pausal = 0.6

let dan = 0.15

let vyplata_po_zdaneni = mesicni_prijem - ((mesicni_prijem - (mesicni_prijem * pausal)) * dan)
console.log(Math.floor(vyplata_po_zdaneni))


