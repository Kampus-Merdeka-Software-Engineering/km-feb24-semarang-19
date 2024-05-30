// Async function untuk mengambil data dari file JSON eksternal
async function getData() {
    const response = await fetch('./data/total_revenue.json'); // Ganti dengan path yang sesuai jika perlu
    const data = await response.json();
    return data;
}

// Fungsi untuk membuat pie chart setelah mendapatkan data
async function createChart() {
    const data = await getData(); // Mengambil data dari file JSON

    // Ekstrak nilai total penjualan dan label lokasi toko dari data JSON
    const salesData = data.map(item => parseInt(item.total_sales.replace(',', '')));
    const locations = data.map(item => item.store_location);

    // Hitung total penjualan untuk menghitung persentase
    const totalSales = salesData.reduce((acc, curr) => acc + curr, 0);

    // Hitung persentase penjualan untuk setiap lokasi
    const percentages = salesData.map(sales => ((sales / totalSales) * 100).toFixed(2));

    // Buat konfigurasi untuk chart
    const config = {
        type: 'pie',
        data: {
            labels: locations,
            datasets: [{
                label: 'Sales Percentage',
                data: percentages,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            let label = tooltipItem.label || '';

                            if (label) {
                                label += ': ';
                            }
                            label += `${parseFloat(tooltipItem.raw).toFixed(2)}%`;
                            return label;
                        }
                    }
                }
            }
        }
    };

    // Membuat chart menggunakan konfigurasi yang telah dibuat
    const ctx = document.getElementById('myPieChart').getContext('2d');
    new Chart(ctx, config);
}

// Memanggil fungsi createChart untuk membuat chart setelah halaman dimuat
createChart();