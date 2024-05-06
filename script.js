    anime({
      targets: 'body',
      backgroundColor: ['#FFFFFF', '#F0F0F0', '#E0E0E0', '#D0D0D0', '#C0C0C0', '#B0B0B0', '#A0A0A0', '#909090', '#808080', '#707070'],
      easing: 'easeInOutQuad',
      duration: 1000000,
      direction: 'alternate',
      loop: true
    });

    fetch('api.json')
      .then(response => response.json())
      .then(data => {
        const table = document.getElementById('api-table');

        const headerRow = document.createElement('tr');
        headerRow.className = 'bg-gray-800 text-gray-300';
        headerRow.innerHTML = `
          <th class="px-4 py-2 border">Name</th>
          <th class="px-4 py-2 border status">Status</th>
          <th class="px-4 py-2 border apikey">apiKey</th>
        `;
        table.appendChild(headerRow);

        data.forEach(api => {
          const apiRow = document.createElement('tr');
          apiRow.className = 'bg-gray-700 text-gray-300';
          apiRow.innerHTML = `
            <td class="px-4 py-2 border"><a href="${api.Link}" target="_blank" rel="noopener noreferrer" class="text-blue-500">${api.Name}</a></td>
            <td class="px-4 py-2 border status">
              <div class="status-indicator ${api.Status === 'Online' ? 'online' : 'offline'}">${api.Status}</div>
            </td>
            <td class="px-4 py-2 border apikey">
              <div class="apikey-indicator ${api.Apikey === 'Yes' ? 'yes' : 'no'}">${api.Apikey}</div>
            </td>
          `;
          table.appendChild(apiRow);
        });
      })
      .catch(error => console.error('Error fetching data:', error));