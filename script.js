document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.vertical-nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' || currentPage === 'index.html') && linkHref === 'flights.html') {
            link.parentElement.classList.add('active');
        }
    });
    
    // Trip type radio button functionality
    const tripTypeRadios = document.querySelectorAll('input[name="trip-type"]');
    const returnDateField = document.querySelector('.return-date');

    if (tripTypeRadios.length > 0 && returnDateField) {
        tripTypeRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'Round Trip') {
                    returnDateField.innerHTML = `
                        <h3>RETURN</h3>
                        <p class="date-value">Select Date</p>
                        <p class="day-label">Select Day</p>
                    `;
                } else {
                    returnDateField.innerHTML = `
                        <h3>RETURN</h3>
                        <p class="info">Tap to add a return date for bigger discounts</p>
                    `;
                }
            });
        });
    }

    // Switch origin and destination
    const switchIcon = document.querySelector('.switch-icon');
    if (switchIcon) {
        switchIcon.addEventListener('click', function() {
            const fromField = document.querySelector('.row:first-of-type .field:first-of-type');
            const toField = document.querySelector('.row:first-of-type .field:last-of-type');
            
            const fromCity = fromField.querySelector('.city-name').textContent;
            const fromAirport = fromField.querySelector('.airport-label').textContent;
            
            const toCity = toField.querySelector('.city-name').textContent;
            const toAirport = toField.querySelector('.airport-label').textContent;
            
            // Swap values
            fromField.querySelector('.city-name').textContent = toCity;
            fromField.querySelector('.airport-label').textContent = toAirport;
            
            toField.querySelector('.city-name').textContent = fromCity;
            toField.querySelector('.airport-label').textContent = fromAirport;
        });
    }

    // Special fare selection
    const fareOptions = document.querySelectorAll('.fare-options label');
    if (fareOptions.length > 0) {
        fareOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                fareOptions.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                this.classList.add('selected');
            });
        });
    }

    // Search button action
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Get selected trip type
            const selectedTripType = document.querySelector('input[name="trip-type"]:checked').value;
            
            // Get origin and destination
            const fromCity = document.querySelector('.row:first-of-type .field:first-of-type .city-name').textContent;
            const toCity = document.querySelector('.row:first-of-type .field:last-of-type .city-name').textContent;
            
            // Get selected fare type
            const selectedFare = document.querySelector('.fare-options label.selected').textContent.trim().split('\n')[0];
            
            console.log('Search initiated:', {
                tripType: selectedTripType,
                from: fromCity,
                to: toCity,
                departure: '16 Jun\'25',
                fareType: selectedFare
            });
            
            // In a real application, this would submit the form or navigate to results page
            alert('Search initiated! Check console for details.');
        });
    }
});



