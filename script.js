// Get references to the menu button and the navbar
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

// Function to toggle the "active" class on the navbar
function toggleNavbar() {
  navbar.classList.toggle('active');
}

// Check if the screen width is less than or equal to 768px (for small screens)
if (window.innerWidth <= 768) {
  // Show the menu button for small screens
  menuBtn.style.display = 'block';

  // Add the event listener to the menu button for small screens
  menuBtn.addEventListener('click', toggleNavbar);
} else {
  // Hide the menu button for larger screens
  menuBtn.style.display = 'none';

  // Make sure the navbar is always visible on larger screens
  navbar.classList.add('active');
}



// JavaScript for image enlargement

const galleryImages = document.querySelectorAll('.box img');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');

// Add click event listeners to each gallery image
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {     
        enlargedImage.src = image.src;
        enlargedImageContainer.style.display = 'flex';
    });
});
 
enlargedImageContainer.addEventListener('click', () => {
    enlargedImageContainer.style.display = 'none';
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('#login-popup'); // Removed #
const iconClose = document.querySelector('.icon-close'); // Added . before icon-close


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

// script.js
$(document).ready(function () {
    $(".wrapper .icon-close").click(function () {
      $(".wrapper").removeClass("active-popup");
      $("body").css("overflow", "auto"); // Enable scrolling
    });
  
    $(".register-link, .login-link").click(function () {
      $(".wrapper").addClass("active-popup");
      $("body").css("overflow", "hidden"); // Disable scrolling
    });
  });

// searchbar


const form = document.getElementById('book-form');

  // Add an event listener to the form submission
  form.addEventListener('submit', function (event) {
    // Get the input fields
    const destinationInput = document.querySelector('.inputBox:nth-child(1) input');
    const dateInput = document.querySelector('.inputBox:nth-child(2) input');
    const travelersInput = document.querySelector('.inputBox:nth-child(3) input');

    // Check if any of the input fields are empty
    if (
      destinationInput.value === '' ||
      dateInput.value === '' ||
      travelersInput.value === ''
    ) {
     
      event.preventDefault();

      alert('All fields are required.');
    }
  });

// review


  function getLocationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("location");
  }

  // Function to display reviews based on the location
  function displayReviews(location) {
    const reviews = [
      {
        text: "ExploreExperts made our honeymoon in India truly magical. We explored romantic destinations, savored delicious cuisine, and stayed in luxurious accommodations. It was a perfect blend of adventure and relaxation. We'll cherish these memories forever!",
        user: {
          name: "Argha Bosu",
          occupation: "Designer",
          imageSrc: "/profiles/bosu.jpg",
        },
        tourLocation: "Banaras",
      },
      {
        text: "What an amazing experience! ExploreExperts made my solo trip to India unforgettable.",
        user: {
          name: "Harshit Srivastav",
          occupation: "Developer",
          imageSrc: "/profiles/s2.jpg",
        },
        tourLocation: "Jaipur",
      },
      {
        text: "They took care of all the logistics, allowing me to focus on soaking in the culture and history of this incredible country. I met wonderful people and created memories that will last a lifetime.",
        user: {
          name: "Anitesh Pandey",
          occupation: "Trader",
          imageSrc: "/profiles/pandu.jpg",
        },
        tourLocation: "Kashmir",
      },
      {
        text: "I can't recommend ExploreExperts enough! They curated a fantastic trip for my family, and we got to explore the hidden gems of India. The guides were knowledgeable, and the entire trip was stress-free. It's the best way to experience India's rich culture and diverse landscapes.",
        user: {
          name: "Thakur",
          occupation: "Gay",
          imageSrc: "/profiles/thakur.jpg",
        },
        tourLocation: "Kerla",
      },
    ];

    const reviewsContainer = document.getElementById("review-container");

    // Filter reviews based on the location
    const matchingReviews = reviews.filter(
      (review) => review.tourLocation === location
    );

    if (matchingReviews.length > 0) {
      matchingReviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.innerHTML = `
          <div class="box">
            <p>${review.text}</p>
            <p><strong>Tour Location:</strong> ${review.tourLocation}</p>
            <div class="user">
              <img src="${review.user.imageSrc}" alt="" />
              <div class="info">
                <h3>${review.user.name}</h3>
                <span>${review.user.occupation}</span>
              </div>
            </div>
          </div>
        `;
        reviewsContainer.appendChild(reviewElement);
      });
    } else {
      reviewsContainer.innerHTML =
        "No reviews available for this location. Would you like to write a review?";
    }
  }

  // Call the function to display reviews when the page loads
  window.addEventListener('load', function() {
    const location = getLocationFromURL();
    displayReviews(location);
  });

const Register = () =>{
  const[credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  })
}

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
};