const destinationElements = document.querySelectorAll('.box');

destinationElements.forEach((element, index) => {
  element.addEventListener('click', function () {
    openTourDetailsPage(destinationsData[index]);
  });
});



function openTourDetailsPage(destination) {
    const url = `tourDetails.html?location=${encodeURIComponent(destination.location)}&imageSrc=${encodeURIComponent(destination.imageSrc)}&city=${encodeURIComponent(destination.city)}&price=${encodeURIComponent(destination.price)}&rating=${encodeURIComponent(destination.rating)}&distance=${encodeURIComponent(destination.distance)}&maxGroup=${encodeURIComponent(destination.maxGroup)}&address=${encodeURIComponent(destination.address)}&desc=${encodeURIComponent(destination.desc)}`;
    window.location.href = url;
}
  

const url = `tourDetails.html?location=${encodeURIComponent(destination.location)}&imageSrc=${encodeURIComponent(destination.imageSrc)}&city=${encodeURIComponent(destination.city)}&price=${encodeURIComponent(destination.price)}&rating=${encodeURIComponent(destination.rating)}&distance=${encodeURIComponent(destination.distance)}&maxGroup=${encodeURIComponent(destination.maxGroup)}&address=${encodeURIComponent(destination.address)}&desc=${encodeURIComponent(destination.desc)}`;

console.log(url);
