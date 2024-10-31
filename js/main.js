'use strict';

const addEventOnElement = function(element, type, listener){
    if(element.length > 1){
        for(let i = 0; i < element.length; i++){            
        element[i].addEventListener(type, listener);
        }
    }
    else{
        element.addEventListener(type, listener)
    }
}



//============ NAVBAR ===============//

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelector("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);

const closeNav = function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active")
}

addEventOnElement(navLinks, "clicks", closeNav);

// Adding the active class to the header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 50){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
});

// Tab Button
const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function(){
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab)



//============ FAQ ===============//

// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event to each question
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the active class
        question.classList.toggle('active');

        // Toggle the display of the answer
        const answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

        // Rotate the icon based on active state
        const icon = question.querySelector('ion-icon');
        icon.style.transform = question.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});



//============ About us ===============//

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

   
    console.log('Review Submitted:', { name, review, rating });
    
   
    this.reset();
});

//========== favorite ==========//

document.getElementById('favorite-btn').addEventListener('click', function() {
    const icon = document.getElementById('favorite-icon');
    const propertyId = this.getAttribute('data-property-id');
    let likedProperties = JSON.parse(localStorage.getItem('likedProperties')) || [];

    if (icon.name === 'heart-outline') {
        icon.name = 'heart';
        icon.classList.add('red-heart');
        likedProperties.push(propertyId);
    } else {
        icon.name = 'heart-outline';
        icon.classList.remove('red-heart');
        likedProperties = likedProperties.filter(id => id !== propertyId);
    }

    localStorage.setItem('likedProperties', JSON.stringify(likedProperties));
});

//===========FAQs===========

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq=> {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   });
});




//=========== Contact-form ===========

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll(".input");
    const form = document.querySelector('form');
    const contactBtn = document.querySelector('.contact-btn');

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value === "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });

    // Form submission event
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // Simple validation for required fields
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // Simulate form submission
            alert('Form submitted successfully!');
            form.reset();
            inputs.forEach(input => input.classList.remove('error'));
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Add hover effect to contact button
    contactBtn.addEventListener('mouseover', () => {
        contactBtn.style.transform = 'scale(1.05)';
    });

    contactBtn.addEventListener('mouseout', () => {
        contactBtn.style.transform = 'scale(1)';
    });
});


