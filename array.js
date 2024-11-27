
const marco = { name: "Marco", lastName: "Rossi", isAmbassador: true };
const paul = { name: "Paul", lastName: "Flynn", isAmbassador: false };
const amy = { name: "Amy", lastName: "Reed", isAmbassador: false };

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; 


const utenti = [];
utenti.push(marco, paul, amy);

for (const utente of utenti) {
  if (utente.isAmbassador) {
    console.log(`${utente.name} ${utente.lastName} è un ambassador`);
  } else {
    console.log(`${utente.name} ${utente.lastName} non è un ambassador`);
  }
}
const ambassadors = [];
for (const utente of utenti) {
  if (utente.isAmbassador) {
    ambassadors.push(utente);
  }
}

function calcolaCostoTotale(prices, utente, shippingCost) {

  const total = prices.reduce((acc, price) => acc + price, 0);
  const totalScontato = utente.isAmbassador ? total * 0.7 : total;

  const costoFinale = totalScontato > 100 ? totalScontato : totalScontato + shippingCost;

  return costoFinale;
}
const costoTotale = calcolaCostoTotale(prices, utenteCheEffettuaLAcquisto, shippingCost);
console.log(`Il costo totale del carrello per ${utenteCheEffettuaLAcquisto.name} è: €${costoTotale.toFixed(2)}`);
