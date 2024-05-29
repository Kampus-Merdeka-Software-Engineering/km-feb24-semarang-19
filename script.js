
document.addEventListener('DOMContentLoaded', function () {
    const globalFilter = document.getElementById('global-filter');

    globalFilter.addEventListener('change', function () {
        const selectedValue = globalFilter.value;
        updateCharts(selectedValue);
    });

    function updateCharts(selectedValue) {
        // Update Line Chart
        lineChart.data.datasets.forEach((dataset) => {
            dataset.data = getDataForChart(selectedValue);
        });
        lineChart.update();

        // Update Bar Chart Horizontal
        barChartHorizontal.data.datasets.forEach((dataset) => {
            dataset.data = getDataForChart(selectedValue);
        });
        barChartHorizontal.update();

        // Update Bar Chart Vertical
        barChartVertical.data.datasets.forEach((dataset) => {
            dataset.data = getDataForChart(selectedValue);
        });
        barChartVertical.update();

        // Update Pie Chart
        myPieChart.data.datasets[0].data = [getDataForChart(selectedValue).reduce((a, b) => a + b, 0)];
        myPieChart.update();

        // Update Bar Chart Vertical 2
        barChartVertical2.data.datasets.forEach((dataset) => {
            dataset.data = getDataForChart(selectedValue);
        });
        barChartVertical2.update();

        // Update Bar Chart Vertical 3
        barChartVertical3.data.datasets.forEach((dataset) => {
            dataset.data = getDataForChart(selectedValue);
        });
        barChartVertical3.update();
    }

    function getDataForChart(selectedValue) {
        switch (selectedValue) {
            case 'Astoria':
                return [65, 28, 18];
            case 'Hell\'s Kitchen':
                return [59, 48, 48];
            case 'Lower Manhattan':
                return [80, 40, 77];
            default:
                return [65, 28, 18];
        }
    }

    // Horizontal Bar Chart for Produk Best Seller
    const ctxBarHorizontal = document.getElementById('barChartHorizontal').getContext('2d');
    const barChartHorizontal = new Chart(ctxBarHorizontal, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Asroria',
                    data: [5, 15, 25, 35, 45, 55],
                    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Merah
                    borderColor: 'rgba(255, 0, 0, 1)', // Merah
                    borderWidth: 1
                },
                {
                    label: 'Hell"s Kitchen',
                    data: [10, 20, 30, 40, 50, 60],
                    backgroundColor: 'rgba(0, 0, 255, 0.2)', // Biru
                    borderColor: 'rgba(0, 0, 255, 1)', // Biru
                    borderWidth: 1
                },
                {
                    label: 'Lower Manhattan',
                    data: [15, 25, 35, 45, 55, 65],
                    backgroundColor: 'rgba(0, 128, 0, 0.2)', // Hijau Tua
                    borderColor: 'rgba(0, 128, 0, 1)', // Hijau Tua
                    borderWidth: 1
                }
            
            ]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart for Total Revenue
    const ctxPie = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Astoria', 'Hell"s Kitchen', 'Lower Manhattan'],
            datasets: [{
                data: [300, 150, 100],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 128, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 128, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });

    // Vertical Bar Chart for Transaksi Per Bulan
    const ctxBarVertical2 = document.getElementById('barChartVertical2').getContext('2d');
    const barChartVertical2 = new Chart(ctxBarVertical2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Astoria',
                    data: [10, 20, 30, 40, 50, 60],
                    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Merah
                    borderColor: 'rgba(255, 0, 0, 1)', // Merah
                    borderWidth: 1
                },
                {
                    label: 'Hell"s Kitchen',
                    data: [15, 25, 35, 45, 55, 65],
                    backgroundColor: 'rgba(0, 0, 255, 0.2)', // Biru
                    borderColor: 'rgba(0, 0, 255, 1)', // Biru
                    borderWidth: 1
                },
                {
                    label: 'Lower Manhattan',
                    data: [20, 30, 40, 50, 60, 70],
                    backgroundColor: 'rgba(0, 128, 0, 0.2)', // Hijau Tua
                    borderColor: 'rgba(0, 128, 0, 1)', // Hijau Tua
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Vertical Bar Chart for Transaksi Per Hari
    const ctxBarVertical3 = document.getElementById('barChartVertical3').getContext('2d');
    const barChartVertical3 = new Chart(ctxBarVertical3, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Astoria',
                    data: [3, 5, 2, 8, 3, 7, 6],
                    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Merah
                    borderColor: 'rgba(255, 0, 0, 1)', // Merah
                    borderWidth: 1
                },
                {
                    label: 'Hell"s Kitchen',
                    data: [4, 6, 4, 6, 4, 6, 4],
                    backgroundColor: 'rgba(0, 0, 255, 0.2)', // Biru
                    borderColor: 'rgba(0, 0, 255, 1)', // Biru
                    borderWidth: 1
                },
                {
                    label: 'Lower Manhattan',
                    data: [5, 7, 5, 7, 5, 7, 5],
                    backgroundColor: 'rgba(0, 128, 0, 0.2)', // Hijau Tua
                    borderColor: 'rgba(0, 128, 0, 1)', // Hijau Tua
                    borderWidth: 1
                }
            ]
        },
        options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });
});
