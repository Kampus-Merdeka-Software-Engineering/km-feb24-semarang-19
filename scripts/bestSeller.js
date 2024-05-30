fetch('./data/best_seller_looker.json')
    .then(response => response.json())
    .then(jsonData => {
        // Sort data by Total_Quantity and take the top 10
        const sortedData = jsonData.sort((a, b) => parseInt(b.Total_Quantity) - parseInt(a.Total_Quantity)).slice(0, 10);

        // Extract unique product names from the sorted data
        const productNames = sortedData.map(item => item.product_detail);
        const uniqueProductNames = [...new Set(productNames)];

        // Separate data by store location
        const astoriaProducts = sortedData.filter(item => item.store_location === 'Astoria');
        const lowerManhattanProducts = sortedData.filter(item => item.store_location === 'Lower Manhattan');
        const hellsKitchenProducts = sortedData.filter(item => item.store_location === 'Hells Kitchen');

        const astoriaData = uniqueProductNames.map(name => {
            const product = astoriaProducts.find(item => item.product_detail === name);
            return product ? parseInt(product.Total_Quantity) : 0;
        });

        const lowerManhattanData = uniqueProductNames.map(name => {
            const product = lowerManhattanProducts.find(item => item.product_detail === name);
            return product ? parseInt(product.Total_Quantity) : 0;
        });

        const hellsKitchenData = uniqueProductNames.map(name => {
            const product = hellsKitchenProducts.find(item => item.product_detail === name);
            return product ? parseInt(product.Total_Quantity) : 0;
        });

        const ctx = document.getElementById('stackedBarChartBestSeller').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: uniqueProductNames,
                datasets: [
                    {
                        label: 'Astoria',
                        data: astoriaData,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Lower Manhattan',
                        data: lowerManhattanData,
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Hell\'s Kitchen',
                        data: hellsKitchenData,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                indexAxis: 'y', // This makes the chart horizontal
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        beginAtZero: true
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading the JSON file:', error));
