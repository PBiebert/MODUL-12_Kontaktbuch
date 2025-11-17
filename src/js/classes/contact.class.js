//Beschreibt wie ein objekt aussehen soll es ist nur eine Vorlage
class Contact extends Person {
  phone;

  //   Funktion die beim erstellen der klasse aufgerufen wird
  //   this greift auf das objekt dieses objekt zu
  constructor(firstName, lastName, phone) {
    // Super ruft denb construktor von Person auf
    super(firstName, lastName);

    this.phone = phone;
  }

  //   erstellt eine funktion die zu dem objekt gehört
  printFullName() {
    console.log(`${this.firstName}, ${this.lastName}`);
  }

  call() {
    window.location.href = "tel:" + this.phone;
  }
}

// Classendiagramm
// bsp person = superklasse
// gibt seine eigenschaften an contact und friends weiter in dem fall firstName und lastName
