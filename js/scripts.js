'use strict';

// Function to make overlay visible
function toggleModal() {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}


const closeModalButton = document.querySelector('#closeModal');

closeModalButton.addEventListener('click', function () {
    toggleModal();
})

const overlay = document.querySelector('#overlay');
overlay.addEventListener('click', function() {
    toggleModal();
})

function buildQuote(theQuote) {
    // 1. Select the #modal element (div)
    // 2. Select the paragraph element from the #modal
    // 3. Change the innerText of the paragraph to be the quote

    // Query selector is going inside to the #modal (div) to grab the <p>
    const modalElement = document.querySelector('#modal p')
    modalElement.innerText = theQuote;
    toggleModal();
}
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            buildQuote(data.value)
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
            return error;
        });

    // Event listener will watch for ALL keys pressed after DOM is loaded
    // If the escape key is pressed, it will toggleModal 
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            toggleModal();
        }
    })
})