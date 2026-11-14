// Uppgift 2 – Variabler och scope

console.log("Före blocket:", stad);

{
    let namn = "Shakir";
    const alder = 23;
    var stad = "Borlänge";

    console.log("Inuti blocket:", namn);
    console.log("Inuti blocket:", alder);
    console.log("Inuti blocket:", stad);
}

console.log("Efter blocket:", stad);
// console.log(namn);
/*
Reflektion uppgift 2

1. let och const är blockbundna och kan bara nås inuti sitt block. var är inte blockbunden och kan därför nås både inuti och utanför blocket.
2. console.log()-placering:
   - Inuti blocket: Alla tre variabler (t.ex. stad, namn, ålder) kan skrivas ut.
   - Efter blocket: var-variabeln fungerar, medan let och const ger ett ReferenceError eftersom de inte är tillgängliga utanför blocket.
*/

// Uppgift 3 – Funktion för att addera tal

const add = (num1, num2) => {
    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);

    console.log(num1 ? "truthy" : "falsy");

    if (
    num1 != null &&
    num2 != null &&
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    !Number.isNaN(num1) &&
    !Number.isNaN(num2)
) {
    return num1 + num2;
} else {
    return "Ogiltig input";
}
};
console.log(add(2, 3));


/*
Reflektion uppgift 3

1. Med let kan variabeln tilldelas ett nytt värde senare (till skillnad från const), men funktionen fungerar på samma sätt.
2. Funktionsdeklaration:
   function add(num1, num2) {
       return num1 + num2;
   }
3. Att returnera betyder att funktionen skickar tillbaka ett värde (t.ex. 5 från add(2, 3)) till koden som anropade den.
*/


/*
Reflektion uppgift 4

1. En ternary operator (villkor ? värde1 : värde2) väljer ett av två värden. En if-sats styr kodflödet och kör kodblock (med ev. else-del).
2. == jämför värden och tillåter typomvandling ("0" == 0 ger true). === jämför både värde och datatyp ("0" === 0 ger false).
3. num1 != null && num2 != null utesluter både null och undefined, och && säkerställer att båda villkoren är sanna.
*/


// Uppgift 5 – Anropa funktioner

const num1 = 0;
let arg1;
let sum = false;

console.log("Test 1:", add(sum, 1));
console.log("Test 2:", add("0", 3));
console.log("Test 3:", add(3, "num1"));
console.log("Test 4:", add(-5, num1));
console.log("Test 5:", add(arg1, 7));
console.log("Test 6:", add());

console.log("num1:", num1);
console.log("sum:", sum);


/*
Reflektion uppgift 5

1. Variabel lagrar ett värde (t.ex. sum). 
   Parameter är ett namn i funktionens definition (num1, num2). 
   Argument är värdet som skickas med vid anrop (t.ex. -5).

2. num1 är fortfarande 0. Funktionens parametrar är lokala och påverkar inte den yttre variabeln.

3. Genomgång av add(-5, num1) (där num1 = 0):
   - Parametrarna blir num1 = -5 och num2 = 0.
   - Jämförelser: num1 == 0 (false), num2 === 0 (true), NaN != NaN.
   - Ternary: ger "truthy" eftersom -5 är truthy.
   - If-satsen släpper igenom eftersom båda är giltiga tal. Returnerar -5 + 0 = -5.
   - Övriga anrop (1-3, 5-6) ger "Ogiltig input" pga felaktiga datatyper, strängar eller undefined.
*/