document.addEventListener('DOMContentLoaded', function () {
    fetch('./data/transaksi_per_harga.json')
        .then(response => response.json())
        .then(data => {
            const labels = ["Astoria", "Hells_Kitchen", "Lower_Manhattan"];
            const priceRanges = ["1-8 Dollar", "9-16 Dollar", "17-24 Dollar", "Over 24 Dollar"];

            const datasets = priceRanges.map((range, index) => ({
                label: range,
                data: labels.map(location => data.TransaksiHarga.find(item => item.Price_Range === range)[location]),
                backgroundColor: getBackgroundColor(index),
                stack: 'Stack 1'
            }));

            const stackedBarConfig = {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1000 // Atur jika perlu
                            }
                        }
                    }
                }
            };

            const ctx = document.getElementById('stackedBarChart').getContext('2d');
            new Chart(ctx, stackedBarConfig);

            function getBackgroundColor(index) {
                const colors = [
                    'rgba(54, 162, 235, 0.6)', // Biru
                    'rgba(255, 99, 132, 0.6)', // Merah
                    'rgba(75, 192, 192, 0.6)', // Hijau
                    'rgba(153, 102, 255, 0.6)' // Ungu
                ];
                return colors[index % colors.length];
            }
        })
        .catch(error => console.error('Error loading JSON data:', error));
});
