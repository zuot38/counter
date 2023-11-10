// Načtení aktuální hodnoty z localStorage
let counter = localStorage.getItem("counter") || 0;

// Funkce pro zvýšení počítadla a aktualizaci zobrazení
function increaseCounter() {
    counter++;
    document.getElementById("counter").innerText = counter;

    // Uložení hodnoty do localStorage
    localStorage.setItem("counter", counter);
}

// Zavolání increaseCounter() při každé návštěvě stránky
increaseCounter();
