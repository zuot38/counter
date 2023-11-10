let counter = 0;

// Funkce pro zvýšení počítadla a aktualizaci zobrazení
function increaseCounter() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

// Zavolání increaseCounter() při každé návštěvě stránky
increaseCounter();
