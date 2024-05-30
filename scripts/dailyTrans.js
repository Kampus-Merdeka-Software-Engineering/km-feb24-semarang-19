// Async function untuk mengambil data dari file JSON eksternal
async function getData() {
    const response = await fetch('./data/daily_transaction.json'); // Ganti dengan path yang sesuai jika perlu
    const data = await response.json();
    return data;
}

// Fungsi untuk membuat bar chart setelah mendapatkan data
async function createChart() {
    const data = await getData(); // Mengambil data dari file JSON

    // Ekstrak data untuk labels hari dan nilai penjualan dari data JSON
    const days = data.map(item => item.Day);
    const astoriaSales = data.map(item => parseInt(item.Astoria));
    const lowerManhattanSales = data.map(item => parseInt(item['Lower Manhattan']));
    const hellsKitchenSales = data.map(item => parseInt(item["Hell's Kitchen"]));

    // Konfigurasi untuk chart
    const config = {
        type: 'bar',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'Astoria',
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    data: astoriaSales,
                },
                {
                    label: 'Lower Manhattan',
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    data: lowerManhattanSales,
                },
                {
                    label: "Hell's Kitchen",
                    backgroundColor: 'rgba(255, 206, 86, 0.7)',
                    data: hellsKitchenSales,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    };

    // Membuat chart menggunakan konfigurasi yang telah dibuat
    const ctx = document.getElementById('barChartVertical3').getContext('2d');
    new Chart(ctx, config);
}

// Memanggil fungsi createChart untuk membuat chart setelah halaman dimuat
createChart();