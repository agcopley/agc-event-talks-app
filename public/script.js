document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('categorySearch');
    let scheduleData = [];

    // Fetch schedule from API
    fetch('/api/schedule')
        .then(response => response.json())
        .then(data => {
            scheduleData = data;
            renderSchedule(scheduleData);
        })
        .catch(err => {
            console.error('Error fetching schedule:', err);
            scheduleContainer.innerHTML = '<div class="loading">Error loading schedule. Please try again later.</div>';
        });

    // Render schedule items
    function renderSchedule(items) {
        scheduleContainer.innerHTML = '';
        
        if (items.length === 0) {
            scheduleContainer.innerHTML = '<div class="loading">No sessions found matching your search.</div>';
            return;
        }

        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = `schedule-item ${item.type}`;
            itemElement.dataset.id = item.id;

            if (item.type === 'talk') {
                const speakersList = item.speakers.join(' & ');
                const categoriesHtml = item.categories
                    .map(cat => `<span class="category-tag">${cat}</span>`)
                    .join('');

                itemElement.innerHTML = `
                    <div class="time-slot">${item.time}</div>
                    <div class="content-slot">
                        <h3>${item.title}</h3>
                        <div class="speakers">Speakers: ${speakersList}</div>
                        <p class="description">${item.description}</p>
                        <div class="categories">${categoriesHtml}</div>
                    </div>
                `;
            } else {
                itemElement.innerHTML = `
                    <div class="time-slot">${item.time}</div>
                    <div class="content-slot">
                        <h3>${item.title}</h3>
                        <p class="description">${item.description}</p>
                    </div>
                `;
            }

            scheduleContainer.appendChild(itemElement);
        });
    }

    // Filter logic
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Filter logic: 
        // 1. If it's a talk, match against categories.
        // 2. Breaks (transitions/lunch) are always visible UNLESS a search term is active 
        //    and they don't logically belong (we keep them for context or hide them?)
        // Let's hide breaks when searching to focus on talks.
        
        const filteredData = scheduleData.filter(item => {
            if (searchTerm === '') return true;
            if (item.type !== 'talk') return false; // Hide breaks when searching
            
            return item.categories.some(cat => cat.toLowerCase().includes(searchTerm));
        });

        renderSchedule(filteredData);
    });
});
