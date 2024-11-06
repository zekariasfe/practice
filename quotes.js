// References to DOM elements
const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const addQuoteButton = document.getElementById('add-quote');
const quotesList = document.getElementById('quotes-list');

// Event listener for the "Add Quote" button
addQuoteButton.addEventListener('click', addQuote);

// Function to add a quote
function addQuote() {
  const quote = quoteInput.value.trim();
  const author = authorInput.value.trim();

  if (quote && author) {
    // Create a quote object
    const newQuote = {
      quote: quote,
      author: author,
      id: Date.now() // Unique ID for removing the quote later
    };

    // Store the quote in localStorage
    const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    storedQuotes.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(storedQuotes));

    // Clear input fields
    quoteInput.value = '';
    authorInput.value = '';

    // Display the updated list of quotes
    displayQuotes();
  } else {
    alert('Please fill out both the quote and the author fields.');
  }
}

// Function to display stored quotes
function displayQuotes() {
  const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  quotesList.innerHTML = ''; // Clear the list before adding new items

  storedQuotes.forEach((quoteObj) => {
    const listItem = document.createElement('li');
    listItem.classList.add('quote-item');
    listItem.innerHTML = `
      <span>"${quoteObj.quote}" - ${quoteObj.author}</span>
      <button class="remove-btn" data-id="${quoteObj.id}">Remove</button>
    `;

    // Add event listener for the "Remove" button
    const removeButton = listItem.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => removeQuote(quoteObj.id));

    quotesList.appendChild(listItem);
  });
}

// Function to remove a quote
function removeQuote(id) {
  const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  const updatedQuotes = storedQuotes.filter(quote => quote.id !== id);

  // Update localStorage with the filtered quotes
  localStorage.setItem('quotes', JSON.stringify(updatedQuotes));

  // Display the updated list of quotes
  displayQuotes();
}

// Initial call to display quotes on page load
displayQuotes();
