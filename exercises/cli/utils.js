const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, 'contacts.json');
// console.log(__dirname, '-----');
// console.log(contactsLocation, '++++++')

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation);
  return JSON.parse(contacts);
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const list = JSON.stringify(contacts, null, 2)
  fs.writeFileSync(contactsLocation, list);
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

