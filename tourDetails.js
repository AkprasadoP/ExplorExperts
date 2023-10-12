// Function to extract URL parameters
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of urlParams) {
      params[key] = value;
    }
    return params;
  }
  
  // Function to populate destination details
  function populateDestinationDetails() {
    const params = getUrlParams();
    document.getElementById('destination-image').src = params.image;
    document.getElementById('destination-city').textContent = params.city;
    document.getElementById('destination-location').textContent = params.location;
    document.getElementById('destination-rating').textContent = params.rating;
    document.getElementById('destination-price').textContent = `${params.price} /per person`;
    document.getElementById('destination-desc').textContent = params.desc;
    document.getElementById('destination-max-group').textContent = params.maxGroup;
    document.getElementById('destination-address').textContent = params.address;
  
    
    displayReviews(params.location);
  }
  

  function getLocationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('location');
  }
  

  function displayReviews(location) {
   
    const reviews = [
    
    ];
  
    const reviewsContainer = document.getElementById('review-container');
    reviewsContainer.innerHTML = '';
  

    const matchingReviews = reviews.filter((review) => review.tourLocation === location);
  
    if (matchingReviews.length > 0) {
      matchingReviews.forEach((review) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('box');
        reviewElement.innerHTML = `
          <p>${review.text}</p>
          <div class="user">
            <img src="${review.user.imageSrc}" alt="${review.user.name}" />
            <div class="info">
              <h3>${review.user.name}</h3>
              <span>${review.user.occupation}</span>
            </div>
          </div>
        `;
        reviewsContainer.appendChild(reviewElement);
      });
    } else {
      
      reviewsContainer.innerHTML = 'No reviews available for this location.';
    }
  }
  
  window.addEventListener('load', populateDestinationDetails);
  

  
  const locationReviews = {
    Kashmir: [
      {
        user: "Arghadeep Bosu",
        text: "Amazing place, I loved it!",
        rating: 5,
      },
      {
        user: "Anitesh Pandey",
        text: "Breathtaking views, highly recommended.",
        rating: 5,
      },
    ],
    Kerla: [
      {
        user: "Harshit Mangtani",
        text: "Incredible experience in Kerla!",
        rating: 4,
      },
      {
        user: "Bob Anderson",
        text: "Beautiful and serene destination.",
        rating: 5,
      },
    ],
    Goa: [
      {
        user: "Harshit Srivastav",
        text: "Goa is a paradise for beach lovers.",
        rating: 4,
      },
      {
        user: "Charlie Brown",
        text: "Lively and fun atmosphere in Goa.",
        rating: 4,
      },
    ],
  };
  

  const destinationLocation = document.getElementById('destination-city').textContent;
  const tourLocation = "Kashmir"; // Replace this with your actual tour location
  
  
  function displayDynamicReviews() {
    const dynamicReviewsContainer = document.getElementById('dynamic-reviews');
    dynamicReviewsContainer.innerHTML = '';
  
    
    if (locationReviews.hasOwnProperty(tourLocation)) {
      const reviews = locationReviews[tourLocation];
  
     
      reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-item');
        reviewElement.innerHTML = `
          <p><strong>${review.user}</strong>: ${review.text}</p>
          <div class="stars" data-rating="${review.rating}">
            ${'★'.repeat(review.rating)}
          </div>
        `;
        dynamicReviewsContainer.appendChild(reviewElement);
      });
    } else {
      dynamicReviewsContainer.textContent = "No reviews available for this location.";
    }
  }
  displayDynamicReviews();


  // -----------------------------------------------------------


  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    window.location.href = 'thankyou.html';
  });

