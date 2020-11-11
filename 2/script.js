
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: _Det finns inget citattecken och funktionen kallas inte på_______

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello(name) {
    console.log("Hello " + name + ", how are you today?")
}
console.log(hello("Jonathan"))

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"
