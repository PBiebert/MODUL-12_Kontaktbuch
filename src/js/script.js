"use strict";

let contacts = [];

function addContact(firstName, lastName) {
  // Erstellt eine leeres objekt aus der vorlage Contact
  let myContact = new Contact(firstName, lastName);
  contacts.push(myContact);
}

addContact("Philipp", "Biebert", "017333333");
