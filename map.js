document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    /*const dataParagraph = document.querySelector('.data');*/
    const statisticsTableBody = document.querySelector('#statistics-table tbody');

    const stateStatistics = {
        NJ: [
            { statistic: 'Population', value: '9 million' },
            { statistic: 'Area', value: '8,722 square miles' },
            { statistic: 'Ahaha', value: 'Dunno what else to put' },
        ],
        NY: [
            { statistic: 'Population', value: '20 million' },
            { statistic: 'Area', value: '54,556 square miles' },
        ],
        // Add statistics for other states
    };

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetImageId = this.dataset.target;
            const targetImage = document.getElementById(`image${targetImageId}`);

            // Reset all images to hidden
            document.querySelectorAll('img').forEach(img => {
                img.classList.remove('visible');
            });

            // Toggle the visibility for the specific image
            targetImage.classList.toggle('visible');
            // Clear existing table rows
            statisticsTableBody.innerHTML = '';
            // Update the text content based on the clicked button
            /*dataParagraph.textContent = `You clicked the button for ${targetImageId}.`;*/

            // Populate table with statistics for the selected state
            stateStatistics[targetImageId].forEach(stat => {
                const row = document.createElement('tr');
                // Add classes to the table rows for easy manipulation in CSS
                row.classList.add('table-row');
                row.innerHTML = `<td class="statistic">${stat.statistic}</td><td class="value">${stat.value}</td>`;
                statisticsTableBody.appendChild(row);
            });
        });
    });
});

