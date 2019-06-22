const storage = window.localStorage
var idCounter = 0;

// Toggle form field displayed/hidden
document.getElementById("show-form-button").addEventListener("click", function () {
  document.getElementById("show-div").style.display = "block";
});
// Hide showForm div after submit
document.getElementById("hide-form").addEventListener("click", function () {
  document.getElementById("show-div").style.display = "none";
});



console.log("here is some text")

const renderContacts = () => {
  
  // Read all the contacts from the storage
  const contacts = JSON.parse(storage.getItem('contacts'))

  // Select the container we will use to list the contacts 
  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = ''

    // render the contacts
    const ul = document.createElement('ul')

    // For every contact in our array of contacts, we will
    // create a li element that will contain a card with
    // all the information of the contact
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
        <div id="contact-card">
          <div class="content">
            <h2><i class="ion-md-person"></i>${ contact.name }</h2>
            <p>${ contact.company }</p>
            <p>${ contact.notes }</p> 
            <p>${ contact.email } | 
            <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a></p>
          </div>
          <br>
        </div>
     `
      // increment ID counter
      idCounter++
      // Create new delete button
      let button = document.createElement('button');
      // Give it a class of "delete-contact" !!TODO - Change delete-contact to unique value for every card
      button.classList += "delete-contact ui orange button";
      // Inside of the button will read "Delete Contact"
      button.innerHTML ='Delete Contact';

      // delete button functionality
      button.onclick = function () { 
        var elem = document.querySelector('li')
        elem.parentNode.removeChild(elem)
        var storedNames = JSON.parse(storage.getItem("contacts"));
        storedNames.splice(idCounter, 1)
        storage.setItem('contacts', JSON.stringify(storedNames));
      };

      // Append (add) the button to the bottom of the new contact card
      li.appendChild(button) 

      // Add the contact's li to the unordered list we created earlier
      ul.appendChild(li)
    })

    // Lastly, append the list to the contact-list container.
    div.appendChild(ul) 
  } else { 
    div.innerHTML = '<p>You have no contacts in your address book</p>' 
  }

}


document.addEventListener('DOMContentLoaded', () => {
    // As soon as the page is loaded, run render Contacts to load the page up with saved contacts 
    renderContacts()
    // Select form object from the DOM
    const addContactForm = document.querySelector('.new-contact-form')
  
    // Register an event to listen for form submission
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
      //const storage = window.localStorage
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      // Create contact object
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }      
  
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`)

      let contacts = JSON.parse(storage.getItem('contacts')) || []

      contacts.push(contact)
      // store existing contact currently added
      storage.setItem('contacts', JSON.stringify(contacts))

      renderContacts()
      addContactForm.reset()

    })
  })  

