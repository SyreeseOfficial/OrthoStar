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

// Function to load Google Review Link from Airtable
async function loadGoogleLink() {
    try {
        // Get the client_id from URL parameter
        const clientId = getUrlParameter('client_id');
        
        // If client_id is missing, show error and exit
        if (!clientId) {
            const errorMessage = document.getElementById('error-message');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
            return;
        }
        
        // Airtable API configuration
        const airtableBaseId = 'appmmOqQKtbTOTawQ';
        const airtableToken = '[Placeholder]';
        const tableName = 'Client Configuration';
        
        // Build the filter formula: {A Client ID}='[client_id]'
        const filterFormula = encodeURIComponent(`{A Client ID}='${clientId}'`);
        
        // Construct the Airtable API URL
        const airtableUrl = `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(tableName)}?filterByFormula=${filterFormula}`;
        
        // Fetch data from Airtable
        const response = await fetch(airtableUrl, {
            headers: {
                'Authorization': `Bearer ${airtableToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`Airtable API error: ${response.status}`);
        }
        
        // Parse the response
        const data = await response.json();
        
        // Check if records were found
        if (data.records && data.records.length > 0) {
            const record = data.records[0];
            const googleReviewLink = record.fields['Google Review Link'];
            
            // If Google Review Link exists, display the button
            if (googleReviewLink) {
                const googleReviewButton = document.getElementById('google-review-button');
                const googleReviewSection = document.getElementById('google-review-section');
                
                if (googleReviewButton) {
                    googleReviewButton.href = googleReviewLink;
                }
                
                if (googleReviewSection) {
                    googleReviewSection.style.display = 'block';
                }
            } else {
                // If link field is empty, show error
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                }
            }
        } else {
            // No records found, show error
            const errorMessage = document.getElementById('error-message');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        }
    } catch (error) {
        // Handle any errors (fetch failures, etc.)
        console.error('Error loading Google Review Link:', error);
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.style.display = 'block';
        }
    }
}

// Execute the function immediately when the page loads
// Wait for DOM to be ready before accessing elements
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGoogleLink);
} else {
    // DOM is already ready
    loadGoogleLink();
}

