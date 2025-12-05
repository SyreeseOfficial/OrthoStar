// Function to get URL parameter by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the client parameter from the URL
const clientParam = getUrlParameter('client');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get button elements
    const fiveStarBtn = document.getElementById('five-star-btn');
    const oneToFourStarBtn = document.getElementById('one-to-four-star-btn');

    // Handle 5-Star button click
    fiveStarBtn.addEventListener('click', function() {
        let redirectUrl = '/5-star-page.html';
        
        // Append client parameter if it exists
        if (clientParam) {
            redirectUrl += '?client=' + encodeURIComponent(clientParam);
        }
        
        window.location.href = redirectUrl;
    });

    // Handle 1-4 Star button click
    oneToFourStarBtn.addEventListener('click', function() {
        let redirectUrl = '/1-4-star-page.html';
        
        // Append client parameter if it exists
        if (clientParam) {
            redirectUrl += '?client=' + encodeURIComponent(clientParam);
        }
        
        window.location.href = redirectUrl;
    });
});

