
document.addEventListener('DOMContentLoaded', function () {

 // Line Chart For Data Jumlah Transaksi
 const lineCtx = document.getElementById('lineChart').getContext('2d');
 const lineChart = new Chart(lineCtx, {
     type: 'line',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
         datasets: [
             {
                 label: 'Astoria',
                 data: [65, 59, 80, 81, 56, 55],
                 backgroundColor: 'rgba(111, 78, 55, 0.2)',
                 borderColor: 'rgba(111, 78, 55, 1)',
                 borderWidth: 1,
                 fill: false
             },
             {
                 label: 'Hell"s Kitchen',
                 data: [28, 48, 40, 19, 86, 27],
                 backgroundColor:'rgba(152, 133, 88, 0.2)',
                 borderColor: 'rgba(152, 133, 88, 1)',
                 borderWidth: 1,
                 fill: false
             },
             {
                 label: 'Lower Manhattan',
                 data: [18, 48, 77, 9, 100, 27],
                 backgroundColor: 'rgba(128, 70, 27, 0.2)',
                 borderColor: 'rgba(128, 70, 27, 1)',
                 borderWidth: 1,
                 fill: false
             }
         ]
     },
     options: {
         responsive: true,
         scales: {
             x: {
                 beginAtZero: true
             },
             y: {
                 beginAtZero: true
             }
         }
     }
 });

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
                backgroundColor: 'rgba(111, 78, 55, 0.2)',
                borderColor: 'rgba(111, 78, 55, 1)',
                borderWidth: 1
            },
            {
                label: 'Hell"s Kitchen',
                data: [10, 20, 30, 40, 50, 60],
                backgroundColor: 'rgba(152, 133, 88, 0.2)',
                borderColor: 'rgba(152, 133, 88, 1)',
                borderWidth: 1
            },
            {
                label: 'Lower Manhattan',
                data: [15, 25, 35, 45, 55, 65],
                backgroundColor: 'rgba(128, 70, 27, 0.2)',
                borderColor: 'rgba(128, 70, 27, 1)',
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

// Vertical Bar Chart for Transaksi Per Harga
const ctxBarVertical = document.getElementById('barChartVertical').getContext('2d');
const barChartVertical = new Chart(ctxBarVertical, {
    type: 'bar',
    data: {
        labels: ['Astoria', 'Hell"s Kitchen', 'Lower Manhattan'],
        datasets: [
            {
                label: '1-8 Dollar',
                data: [15, 25, 14, 25, 17],
                backgroundColor: 'rgba(111, 78, 55, 0.2)',
                borderColor: 'rgba(111, 78, 55, 1)',
                borderWidth: 1
            },
            {
                label: '9-16 Dollar',
                data: [2, 4, 6, 16, 20],
                backgroundColor: 'rgba(152, 133, 88, 0.2)',
                borderColor: 'rgba(152, 133, 88, 1)',
                borderWidth: 1
            },
            {
                label: '17-24 Dollar',
                data: [2, 4, 6, 7, 5],
                backgroundColor: 'rgba(128, 70, 27, 0.2)',
                borderColor: 'rgba(128, 70, 27, 1)',
                borderWidth: 1
            },
            {   label: 'Over 24 Dollar',
                data: [5, 8, 6, 2, 1],
                backgroundColor: 'rgba(150, 105, 25, 0.2)',
                borderColor: 'rgba(150, 105, 25, 1)',
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

// Pie Chart for Total Revenue
const ctxPie = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Astoria', 'Hell"s Kitchen', 'Lower Manhattan'],
        datasets: [{
            data: [300, 150, 100],
            backgroundColor: [
                'rgba(111, 78, 55, 0.5)',
                'rgba(152, 133, 88, 0.5)',
                'rgba(128, 70, 27, 0.5)'
            ],
            borderColor: [
                'rgba(111, 78, 55, 1)',
                'rgba(152, 133, 88, 1)',
                'rgba(128, 70, 27, 1)'
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
                backgroundColor: 'rgba(111, 78, 55, 0.5)',
                borderColor: 'rgba(111, 78, 55, 1)',
                borderWidth: 1
            },
            {
                label: 'Hell"s Kitchen',
                data: [15, 25, 35, 45, 55, 65],
                backgroundColor: 'rgba(152, 133, 88, 0.5)',
                borderColor: 'rgba(152, 133, 88, 1)',
                borderWidth: 1
            },
            {
                label: 'Lower Manhattan',
                data: [20, 30, 40, 50, 60, 70],
                backgroundColor: 'rgba(128, 70, 27, 0.5)',
                borderColor: 'rgba(128, 70, 27, 1)',
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
                backgroundColor: 'rgba(111, 78, 55, 0.5)',
                borderColor: 'rgba(111, 78, 55, 1)',
                borderWidth: 1
            },
            {
                label: 'Hell"s Kitchen',
                data: [4, 6, 4, 6, 4, 6, 4],
                backgroundColor: 'rgba(152, 133, 88, 0.5)',
                borderColor: 'rgba(152, 133, 88, 1)',
                borderWidth: 1
            },
            {
                label: 'Lower Manhattan',
                data: [5, 7, 5, 7, 5, 7, 5],
                backgroundColor: 'rgba(128, 70, 27, 0.5)',
                borderColor: 'rgba(128, 70, 27, 1)',
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
    // Add event listener to each chart container to prevent hiding when clicked
    document.querySelectorAll('.chart-container').forEach(function (container) {
      container.addEventListener('click', function (event) {
          event.stopPropagation();
      });
  });
});
