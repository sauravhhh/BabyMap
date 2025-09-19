// Initialize map centered on India
const map = L.map('map').setView([20.5937, 78.9629], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Top 50 countries by birth rate in descending order
const countries = [
    { name: 'India', birthsPerSecond: 0.78, lat: 20.5937, lng: 78.9629, color: '#FF9933', flag: '🇮🇳' },
    { name: 'China', birthsPerSecond: 0.58, lat: 35.8617, lng: 104.1954, color: '#DE2910', flag: '🇨🇳' },
    { name: 'Pakistan', birthsPerSecond: 0.40, lat: 30.3753, lng: 69.3451, color: '#01411C', flag: '🇵🇰' },
    { name: 'Nigeria', birthsPerSecond: 0.32, lat: 9.0820, lng: 8.6753, color: '#008751', flag: '🇳🇬' },
    { name: 'Indonesia', birthsPerSecond: 0.28, lat: -0.7893, lng: 113.9213, color: '#CE1126', flag: '🇮🇩' },
    { name: 'Bangladesh', birthsPerSecond: 0.25, lat: 23.6850, lng: 90.3563, color: '#006A4E', flag: '🇧🇩' },
    { name: 'Uganda', birthsPerSecond: 0.22, lat: 1.3733, lng: 32.2903, color: '#FCDC04', flag: '🇺🇬' },
    { name: 'Ethiopia', birthsPerSecond: 0.23, lat: 9.1450, lng: 40.4897, color: '#DA121A', flag: '🇪🇹' },
    { name: 'Brazil', birthsPerSecond: 0.20, lat: -14.2350, lng: -51.9253, color: '#009B3A', flag: '🇧🇷' },
    { name: 'Philippines', birthsPerSecond: 0.17, lat: 12.8797, lng: 121.7740, color: '#0038A8', flag: '🇵🇭' },
    { name: 'Afghanistan', birthsPerSecond: 0.17, lat: 33.9391, lng: 67.7100, color: '#000000', flag: '🇦🇫' },
    { name: 'Egypt', birthsPerSecond: 0.13, lat: 26.8206, lng: 30.8025, color: '#CE1126', flag: '🇪🇬' },
    { name: 'USA', birthsPerSecond: 0.13, lat: 37.0902, lng: -95.7129, color: '#B22234', flag: '🇺🇸' },
    { name: 'Iraq', birthsPerSecond: 0.13, lat: 33.2232, lng: 43.6793, color: '#CE1126', flag: '🇮🇶' },
    { name: 'Vietnam', birthsPerSecond: 0.14, lat: 14.0583, lng: 108.2772, color: '#DA020E', flag: '🇻🇳' },
    { name: 'Mexico', birthsPerSecond: 0.14, lat: 23.6345, lng: -102.5528, color: '#006847', flag: '🇲🇽' },
    { name: 'Angola', birthsPerSecond: 0.14, lat: -11.2027, lng: 17.8739, color: '#CE1126', flag: '🇦🇴' },
    { name: 'DR Congo', birthsPerSecond: 0.18, lat: -4.0383, lng: 21.7587, color: '#007FFF', flag: '🇨🇩' },
    { name: 'Kenya', birthsPerSecond: 0.18, lat: -0.0236, lng: 37.9062, color: '#BB0000', flag: '🇰🇪' },
    { name: 'Tanzania', birthsPerSecond: 0.15, lat: -6.3690, lng: 34.8888, color: '#00A859', flag: '🇹🇿' },
    { name: 'Yemen', birthsPerSecond: 0.12, lat: 15.5527, lng: 48.5164, color: '#CE1126', flag: '🇾🇪' },
    { name: 'Turkey', birthsPerSecond: 0.12, lat: 38.9637, lng: 35.2433, color: '#E30A17', flag: '🇹🇷' },
    { name: 'Iran', birthsPerSecond: 0.10, lat: 32.4279, lng: 53.6880, color: '#239F40', flag: '🇮🇷' },
    { name: 'Algeria', birthsPerSecond: 0.10, lat: 28.0339, lng: 1.6596, color: '#006233', flag: '🇩🇿' },
    { name: 'Madagascar', birthsPerSecond: 0.10, lat: -18.7669, lng: 46.8691, color: '#FC3D32', flag: '🇲🇬' },
    { name: 'Cameroon', birthsPerSecond: 0.10, lat: 7.3697, lng: 12.3547, color: '#007A5E', flag: '🇨🇲' },
    { name: 'Ghana', birthsPerSecond: 0.11, lat: 7.9465, lng: -1.0232, color: '#006B3F', flag: '🇬🇭' },
    { name: 'Mozambique', birthsPerSecond: 0.12, lat: -18.6657, lng: 35.5296, color: '#009639', flag: '🇲🇿' },
    { name: 'Russia', birthsPerSecond: 0.09, lat: 61.5240, lng: 105.3188, color: '#0039A6', flag: '🇷🇺' },
    { name: 'Côte d\'Ivoire', birthsPerSecond: 0.09, lat: 7.5400, lng: -5.5471, color: '#F77F00', flag: '🇨🇮' },
    { name: 'Burkina Faso', birthsPerSecond: 0.09, lat: 12.2384, lng: -1.5616, color: '#009E60', flag: '🇧🇫' },
    { name: 'Morocco', birthsPerSecond: 0.09, lat: 31.7917, lng: -7.0926, color: '#C1272D', flag: '🇲🇦' },
    { name: 'Saudi Arabia', birthsPerSecond: 0.08, lat: 23.8859, lng: 45.0792, color: '#006C35', flag: '🇸🇦' },
    { name: 'Uzbekistan', birthsPerSecond: 0.08, lat: 41.3775, lng: 64.5853, color: '#0099B5', flag: '🇺🇿' },
    { name: 'Peru', birthsPerSecond: 0.08, lat: -9.1900, lng: -75.0152, color: '#D91023', flag: '🇵🇪' },
    { name: 'Mali', birthsPerSecond: 0.08, lat: 17.5707, lng: -3.9962, color: '#14B53A', flag: '🇲🇱' },
    { name: 'Syria', birthsPerSecond: 0.08, lat: 34.8021, lng: 38.9968, color: '#CE1126', flag: '🇸🇾' },
    { name: 'Malawi', birthsPerSecond: 0.08, lat: -13.2543, lng: 34.3015, color: '#21873D', flag: '🇲🇼' },
    { name: 'Zambia', birthsPerSecond: 0.08, lat: -13.1339, lng: 27.8493, color: '#198A00', flag: '🇿🇲' },
    { name: 'Nepal', birthsPerSecond: 0.08, lat: 28.3949, lng: 84.1240, color: '#DC143C', flag: '🇳🇵' },
    { name: 'Venezuela', birthsPerSecond: 0.07, lat: 6.4238, lng: -66.5897, color: '#FFCD00', flag: '🇻🇪' },
    { name: 'Malaysia', birthsPerSecond: 0.07, lat: 4.2105, lng: 101.9758, color: '#CC0001', flag: '🇲🇾' },
    { name: 'Senegal', birthsPerSecond: 0.07, lat: 14.4974, lng: -14.4524, color: '#00853F', flag: '🇸🇳' },
    { name: 'Somalia', birthsPerSecond: 0.07, lat: 5.1521, lng: 46.1996, color: '#4189DD', flag: '🇸🇴' },
    { name: 'Guatemala', birthsPerSecond: 0.06, lat: 15.7835, lng: -90.2308, color: '#4997D0', flag: '🇬🇹' },
    { name: 'Ecuador', birthsPerSecond: 0.06, lat: -1.8312, lng: -78.1834, color: '#FFDD00', flag: '🇪🇨' },
    { name: 'Cambodia', birthsPerSecond: 0.06, lat: 12.5657, lng: 104.9910, color: '#032EA1', flag: '🇰🇭' },
    { name: 'Chad', birthsPerSecond: 0.06, lat: 15.4542, lng: 18.7322, color: '#002664', flag: '🇹🇩' },
    { name: 'Kazakhstan', birthsPerSecond: 0.06, lat: 48.0196, lng: 66.9237, color: '#00AFCA', flag: '🇰🇿' },
    { name: 'South Sudan', birthsPerSecond: 0.05, lat: 6.8770, lng: 31.3070, color: '#078930', flag: '🇸🇸' },
    { name: 'Japan', birthsPerSecond: 0.05, lat: 36.2048, lng: 138.2529, color: '#BC002D', flag: '🇯🇵' },
    { name: 'Chile', birthsPerSecond: 0.05, lat: -35.6751, lng: -71.5430, color: '#0039A6', flag: '🇨🇱' },
    { name: 'Romania', birthsPerSecond: 0.05, lat: 45.9432, lng: 24.9668, color: '#002B7F', flag: '🇷🇴' },
    { name: 'Zimbabwe', birthsPerSecond: 0.05, lat: -19.0154, lng: 29.1549, color: '#319500', flag: '🇿🇼' },
    { name: 'Guinea', birthsPerSecond: 0.05, lat: 9.9456, lng: -9.6966, color: '#CE1126', flag: '🇬🇳' },
    { name: 'Rwanda', birthsPerSecond: 0.05, lat: -1.9403, lng: 29.8739, color: '#00A1DE', flag: '🇷🇼' },
    { name: 'Benin', birthsPerSecond: 0.05, lat: 9.3077, lng: 2.3158, color: '#008751', flag: '🇧🇯' },
    { name: 'Burundi', birthsPerSecond: 0.05, lat: -3.3731, lng: 29.9189, color: '#CE1126', flag: '🇧🇮' }
];

// Create markers and borders for each country
const markers = {};
const borders = {};
const countryList = document.getElementById('country-list');
let totalBabies = 0;
let activeCountries = []; // Start with no active countries

// Initialize all countries
countries.forEach((country, index) => {
    // Create marker
    const marker = L.circleMarker([country.lat, country.lng], {
        radius: 10,
        fillColor: country.color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    // Create custom popup content
    const popupContent = `
        <div class="country-popup">
            <div class="popup-title">
                <span class="popup-flag">${country.flag}</span>
                <span>${country.name}</span>
            </div>
            <div class="popup-births">Births: <span id="popup-count-${country.name}">0</span></div>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    markers[country.name] = marker;
    
    // Create a simple border (circle) around the country
    const border = L.circle([country.lat, country.lng], {
        radius: 300000, // 300km radius (adjust as needed)
        fillColor: country.color,
        color: country.color,
        weight: 2,
        opacity: 0.5,
        fillOpacity: 0.1
    }).addTo(map);
    
    borders[country.name] = border;
    
    // Hide all countries initially
    marker.setStyle({ opacity: 0, fillOpacity: 0 });
    border.setStyle({ opacity: 0, fillOpacity: 0 });
    
    // Add first 10 countries to the list and make them active
    if (index < 10) {
        addCountryToList(country.name);
    }
});

// Function to add a country to the list in the correct position (by birth rate)
function addCountryToList(countryName) {
    if (activeCountries.includes(countryName)) return;
    
    activeCountries.push(countryName);
    const country = countries.find(c => c.name === countryName);
    
    // Create the list item
    const listItem = document.createElement('li');
    listItem.className = 'country-item';
    listItem.innerHTML = `
        <span class="country-name"><span class="country-flag">${country.flag}</span> ${country.name}</span>
        <span class="country-count" id="count-${country.name}">0</span>
    `;
    
    // Add to the list
    countryList.appendChild(listItem);
    
    // Show marker and border
    markers[countryName].setStyle({ opacity: 1, fillOpacity: 0.8 });
    borders[countryName].setStyle({ opacity: 0.5, fillOpacity: 0.1 });
}

// Function to simulate a baby birth
function simulateBirth() {
    try {
        // Filter to only active countries that have birthsPerSecond > 0
        let activeCountryData = countries.filter(c => 
            activeCountries.includes(c.name) && c.birthsPerSecond > 0
        );
        
        // If no active countries have birthsPerSecond > 0, add a new country
        if (activeCountryData.length === 0) {
            const inactiveCountries = countries.filter(c => 
                !activeCountries.includes(c.name) && c.birthsPerSecond > 0
            );
            
            if (inactiveCountries.length > 0) {
                // Add the country with the highest birth rate
                const nextCountry = inactiveCountries.reduce((prev, current) => 
                    prev.birthsPerSecond > current.birthsPerSecond ? prev : current
                );
                addCountryToList(nextCountry.name);
                
                // Update activeCountryData after adding the new country
                activeCountryData = [nextCountry];
            } else {
                // All countries are already active but none have birthsPerSecond > 0
                // Just continue with a default delay
                setTimeout(simulateBirth, 2000);
                return;
            }
        }
        
        // Select a random country with probability based on their birth rates
        const weights = activeCountryData.map(c => c.birthsPerSecond);
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        
        // Ensure totalWeight is not zero or NaN
        if (totalWeight <= 0 || isNaN(totalWeight)) {
            setTimeout(simulateBirth, 1000);
            return;
        }
        
        // Use a simpler approach for country selection
        const randomValue = Math.random() * totalWeight;
        let cumulativeWeight = 0;
        let selectedCountry = activeCountryData[0]; // Default to first country
        
        for (let i = 0; i < activeCountryData.length; i++) {
            cumulativeWeight += activeCountryData[i].birthsPerSecond;
            if (randomValue <= cumulativeWeight) {
                selectedCountry = activeCountryData[i];
                break;
            }
        }
        
        // Update counters
        totalBabies++;
        document.getElementById('total-counter').textContent = totalBabies;
        
        const countryCountElement = document.getElementById(`count-${selectedCountry.name}`);
        const popupCountElement = document.getElementById(`popup-count-${selectedCountry.name}`);
        const currentCount = parseInt(countryCountElement.textContent) || 0;
        const newCount = currentCount + 1;
        
        countryCountElement.textContent = newCount;
        if (popupCountElement) {
            popupCountElement.textContent = newCount;
        }
        
        // Update popup content
        const popupContent = `
            <div class="country-popup">
                <div class="popup-title">
                    <span class="popup-flag">${selectedCountry.flag}</span>
                    <span>${selectedCountry.name}</span>
                </div>
                <div class="popup-births">Births: <span id="popup-count-${selectedCountry.name}">${newCount}</span></div>
            </div>
        `;
        markers[selectedCountry.name].setPopupContent(popupContent);
        
        // Flash the marker and border
        const marker = markers[selectedCountry.name];
        const border = borders[selectedCountry.name];
        
        marker.setStyle({ fillOpacity: 1, radius: 15 });
        border.setStyle({ opacity: 0.8, fillOpacity: 0.3 });
        marker.getElement().classList.add('flash');
        
        setTimeout(() => {
            marker.setStyle({ fillOpacity: 0.8, radius: 10 });
            border.setStyle({ opacity: 0.5, fillOpacity: 0.1 });
            marker.getElement().classList.remove('flash');
        }, 500);
        
        // Randomly add a new country if there are still inactive ones
        const inactiveCountries = countries.filter(c => !activeCountries.includes(c.name) && c.birthsPerSecond > 0);
        if (inactiveCountries.length > 0 && Math.random() < 0.1) { // 10% chance to add a new country
            // Select a random country from the top remaining countries (higher birth rates)
            const topInactiveCountries = inactiveCountries
                .sort((a, b) => b.birthsPerSecond - a.birthsPerSecond)
                .slice(0, Math.min(5, inactiveCountries.length));
            const randomCountry = topInactiveCountries[Math.floor(Math.random() * topInactiveCountries.length)];
            addCountryToList(randomCountry.name);
        }
        
        // Calculate next birth time based on total birth rate
        const totalBirthRate = activeCountryData.reduce((sum, country) => sum + country.birthsPerSecond, 0);
        
        // Ensure totalBirthRate is not zero or NaN
        if (totalBirthRate <= 0 || isNaN(totalBirthRate)) {
            setTimeout(simulateBirth, 1000);
            return;
        }
        
        // Use a fixed minimum delay to prevent extremely short intervals
        const averageTimeBetweenBirths = Math.max(100, 1000 / totalBirthRate); // in milliseconds
        const nextBirthTime = Math.random() * averageTimeBetweenBirths * 1.5; // Random variation
        
        // Schedule next birth
        setTimeout(simulateBirth, nextBirthTime);
    } catch (error) {
        console.error("Error in simulation:", error);
        // If an error occurs, continue the simulation after a short delay
        setTimeout(simulateBirth, 1000);
    }
}

// Start the simulation
setTimeout(simulateBirth, 1000);
