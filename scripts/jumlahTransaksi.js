// Data JSON yang disediakan
const data = {
    "trend": [
      {
        "start_date": "1/1/2023",
        "start_end": "1/7/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 1654,
        "week_id": 1
      },
      {
        "start_date": "1/8/2023",
        "start_end": "1/14/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 1928,
        "week_id": 2
      },
      {
        "start_date": "1/15/2023",
        "start_end": "1/21/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 1876,
        "week_id": 3
      },
      {
        "start_date": "1/22/2023",
        "start_end": "1/28/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2178,
        "week_id": 4
      },
      {
        "start_date": "1/29/2023",
        "start_end": "2/4/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 1620,
        "week_id": 5
      },
      {
        "start_date": "2/5/2023",
        "start_end": "2/11/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 1780,
        "week_id": 6
      },
      {
        "start_date": "2/12/2023",
        "start_end": "2/18/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 1882,
        "week_id": 7
      },
      {
        "start_date": "2/19/2023",
        "start_end": "2/25/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2261,
        "week_id": 8
      },
      {
        "start_date": "2/26/2023",
        "start_end": "3/4/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2154,
        "week_id": 9
      },
      {
        "start_date": "3/5/2023",
        "start_end": "3/11/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2182,
        "week_id": 10
      },
      {
        "start_date": "3/12/2023",
        "start_end": "3/18/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2283,
        "week_id": 11
      },
      {
        "start_date": "3/19/2023",
        "start_end": "3/25/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2556,
        "week_id": 12
      },
      {
        "start_date": "3/26/2023",
        "start_end": "4/1/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2374,
        "week_id": 13
      },
      {
        "start_date": "4/2/2023",
        "start_end": "4/8/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2499,
        "week_id": 14
      },
      {
        "start_date": "4/9/2023",
        "start_end": "4/15/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2810,
        "week_id": 15
      },
      {
        "start_date": "4/16/2023",
        "start_end": "4/22/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 2916,
        "week_id": 16
      },
      {
        "start_date": "4/23/2023",
        "start_end": "4/29/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3265,
        "week_id": 17
      },
      {
        "start_date": "4/30/2023",
        "start_end": "5/6/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3152,
        "week_id": 18
      },
      {
        "start_date": "5/7/2023",
        "start_end": "5/13/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3581,
        "week_id": 19
      },
      {
        "start_date": "5/14/2023",
        "start_end": "5/20/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3573,
        "week_id": 20
      },
      {
        "start_date": "5/21/2023",
        "start_end": "5/27/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 4395,
        "week_id": 21
      },
      {
        "start_date": "5/28/2023",
        "start_end": "6/3/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3350,
        "week_id": 22
      },
      {
        "start_date": "6/4/2023",
        "start_end": "6/10/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3615,
        "week_id": 23
      },
      {
        "start_date": "6/11/2023",
        "start_end": "6/17/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3982,
        "week_id": 24
      },
      {
        "start_date": "6/18/2023",
        "start_end": "6/24/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 4274,
        "week_id": 25
      },
      {
        "start_date": "6/25/2023",
        "start_end": "7/1/2023",
        "store_location": "Lower Manhattan",
        "transaction_qty": 3602,
        "week_id": 26
      },
      {
        "start_date": "1/1/2023",
        "start_end": "1/7/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 1907,
        "week_id": 1
      },
      {
        "start_date": "1/8/2023",
        "start_end": "1/14/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2103,
        "week_id": 2
      },
      {
        "start_date": "1/15/2023",
        "start_end": "1/21/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 1929,
        "week_id": 3
      },
      {
        "start_date": "1/22/2023",
        "start_end": "1/28/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 1746,
        "week_id": 4
      },
      {
        "start_date": "1/29/2023",
        "start_end": "2/4/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 1780,
        "week_id": 5
      },
      {
        "start_date": "2/5/2023",
        "start_end": "2/11/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2012,
        "week_id": 6
      },
      {
        "start_date": "2/12/2023",
        "start_end": "2/18/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2063,
        "week_id": 7
      },
      {
        "start_date": "2/19/2023",
        "start_end": "2/25/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 1959,
        "week_id": 8
      },
      {
        "start_date": "2/26/2023",
        "start_end": "3/4/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2048,
        "week_id": 9
      },
      {
        "start_date": "3/5/2023",
        "start_end": "3/11/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2482,
        "week_id": 10
      },
      {
        "start_date": "3/12/2023",
        "start_end": "3/18/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2413,
        "week_id": 11
      },
      {
        "start_date": "3/19/2023",
        "start_end": "3/25/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2284,
        "week_id": 12
      },
      {
        "start_date": "3/26/2023",
        "start_end": "4/1/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2139,
        "week_id": 13
      },
      {
        "start_date": "4/2/2023",
        "start_end": "4/8/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2799,
        "week_id": 14
      },
      {
        "start_date": "4/9/2023",
        "start_end": "4/15/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 3183,
        "week_id": 15
      },
      {
        "start_date": "4/16/2023",
        "start_end": "4/22/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2843,
        "week_id": 16
      },
      {
        "start_date": "4/23/2023",
        "start_end": "4/29/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 2633,
        "week_id": 17
      },
      {
        "start_date": "4/30/2023",
        "start_end": "5/6/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 3286,
        "week_id": 18
      },
      {
        "start_date": "5/7/2023",
        "start_end": "5/13/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 4218,
        "week_id": 19
      },
      {
        "start_date": "5/14/2023",
        "start_end": "5/20/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 3653,
        "week_id": 20
      },
      {
        "start_date": "5/21/2023",
        "start_end": "5/27/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 3524,
        "week_id": 21
      },
      {
        "start_date": "5/28/2023",
        "start_end": "6/3/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 3268,
        "week_id": 22
      },
      {
        "start_date": "6/4/2023",
        "start_end": "6/10/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 4137,
        "week_id": 23
      },
      {
        "start_date": "6/11/2023",
        "start_end": "6/17/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 4264,
        "week_id": 24
      },
      {
        "start_date": "6/18/2023",
        "start_end": "6/24/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 4058,
        "week_id": 25
      },
      {
        "start_date": "6/25/2023",
        "start_end": "7/1/2023",
        "store_location": "Hell's Kitchen",
        "transaction_qty": 3006,
        "week_id": 26
      },
      {
        "start_date": "1/1/2023",
        "start_end": "1/7/2023",
        "store_location": "Astoria",
        "transaction_qty": 1893,
        "week_id": 1
      },
      {
        "start_date": "1/8/2023",
        "start_end": "1/14/2023",
        "store_location": "Astoria",
        "transaction_qty": 1634,
        "week_id": 2
      },
      {
        "start_date": "1/15/2023",
        "start_end": "1/21/2023",
        "store_location": "Astoria",
        "transaction_qty": 2069,
        "week_id": 3
      },
      {
        "start_date": "1/22/2023",
        "start_end": "1/28/2023",
        "store_location": "Astoria",
        "transaction_qty": 1963,
        "week_id": 4
      },
      {
        "start_date": "1/29/2023",
        "start_end": "2/4/2023",
        "store_location": "Astoria",
        "transaction_qty": 1868,
        "week_id": 5
      },
      {
        "start_date": "2/5/2023",
        "start_end": "2/11/2023",
        "store_location": "Astoria",
        "transaction_qty": 1744,
        "week_id": 6
      },
      {
        "start_date": "2/12/2023",
        "start_end": "2/18/2023",
        "store_location": "Astoria",
        "transaction_qty": 1940,
        "week_id": 7
      },
      {
        "start_date": "2/19/2023",
        "start_end": "2/25/2023",
        "store_location": "Astoria",
        "transaction_qty": 1975,
        "week_id": 8
      },
      {
        "start_date": "2/26/2023",
        "start_end": "3/4/2023",
        "store_location": "Astoria",
        "transaction_qty": 2292,
        "week_id": 9
      },
      {
        "start_date": "3/5/2023",
        "start_end": "3/11/2023",
        "store_location": "Astoria",
        "transaction_qty": 2082,
        "week_id": 10
      },
      {
        "start_date": "3/12/2023",
        "start_end": "3/18/2023",
        "store_location": "Astoria",
        "transaction_qty": 2259,
        "week_id": 11
      },
      {
        "start_date": "3/19/2023",
        "start_end": "3/25/2023",
        "store_location": "Astoria",
        "transaction_qty": 2300,
        "week_id": 12
      },
      {
        "start_date": "3/26/2023",
        "start_end": "4/1/2023",
        "store_location": "Astoria",
        "transaction_qty": 2412,
        "week_id": 13
      },
      {
        "start_date": "4/2/2023",
        "start_end": "4/8/2023",
        "store_location": "Astoria",
        "transaction_qty": 2755,
        "week_id": 14
      },
      {
        "start_date": "4/9/2023",
        "start_end": "4/15/2023",
        "store_location": "Astoria",
        "transaction_qty": 2579,
        "week_id": 15
      },
      {
        "start_date": "4/16/2023",
        "start_end": "4/22/2023",
        "store_location": "Astoria",
        "transaction_qty": 2862,
        "week_id": 16
      },
      {
        "start_date": "4/23/2023",
        "start_end": "4/29/2023",
        "store_location": "Astoria",
        "transaction_qty": 3011,
        "week_id": 17
      },
      {
        "start_date": "4/30/2023",
        "start_end": "5/6/2023",
        "store_location": "Astoria",
        "transaction_qty": 3565,
        "week_id": 18
      },
      {
        "start_date": "5/7/2023",
        "start_end": "5/13/2023",
        "store_location": "Astoria",
        "transaction_qty": 3179,
        "week_id": 19
      },
      {
        "start_date": "5/14/2023",
        "start_end": "5/20/2023",
        "store_location": "Astoria",
        "transaction_qty": 3869,
        "week_id": 20
      },
      {
        "start_date": "5/21/2023",
        "start_end": "5/27/2023",
        "store_location": "Astoria",
        "transaction_qty": 3789,
        "week_id": 21
      },
      {
        "start_date": "5/28/2023",
        "start_end": "6/3/2023",
        "store_location": "Astoria",
        "transaction_qty": 3919,
        "week_id": 22
      },
      {
        "start_date": "6/4/2023",
        "start_end": "6/10/2023",
        "store_location": "Astoria",
        "transaction_qty": 3652,
        "week_id": 23
      },
      {
        "start_date": "6/11/2023",
        "start_end": "6/17/2023",
        "store_location": "Astoria",
        "transaction_qty": 3781,
        "week_id": 24
      },
      {
        "start_date": "6/18/2023",
        "start_end": "6/24/2023",
        "store_location": "Astoria",
        "transaction_qty": 4056,
        "week_id": 25
      },
      {
        "start_date": "6/25/2023",
        "start_end": "7/1/2023",
        "store_location": "Astoria",
        "transaction_qty": 3543,
        "week_id": 26
      }
    ]
  };
  
// Memisahkan data berdasarkan lokasi toko
const lowerManhattanData = data.trend.filter(entry => entry.store_location === 'Lower Manhattan');
const hellsKitchenData = data.trend.filter(entry => entry.store_location === "Hell's Kitchen");
const astoriaData = data.trend.filter(entry => entry.store_location === 'Astoria');

// Mengumpulkan jumlah transaksi per minggu untuk setiap lokasi
const weeks = lowerManhattanData.map(entry => entry.week_id); // Menggunakan week_id sebagai label

const lowerManhattanTransactions = lowerManhattanData.map(entry => entry.transaction_qty);
const hellsKitchenTransactions = hellsKitchenData.map(entry => entry.transaction_qty);
const astoriaTransactions = astoriaData.map(entry => entry.transaction_qty);

// Definisi canvas untuk chart
const ctx = document.getElementById('multiAxisLineChart').getContext('2d');

// Inisialisasi Chart.js
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: weeks,
    datasets: [
      {
        label: 'Lower Manhattan',
        borderColor: 'blue',
        data: lowerManhattanTransactions,
        fill: false,
      },
      {
        label: "Hell's Kitchen",
        borderColor: 'red',
        data: hellsKitchenTransactions,
        fill: false,
        
      },
      {
        label: 'Astoria',
        borderColor: 'green',
        data: astoriaTransactions,
        fill: false,
        
      }
    ]
  },
});

// Fungsi untuk memperbarui grafik berdasarkan lokasi yang dipilih
const globalFilter = document.getElementById('global-filter');

globalFilter.addEventListener('change', updateChart);

function updateChart() {
  const selectedLocation = globalFilter.value;

  let selectedData;
  let labelColor;

  switch (selectedLocation) {
    case 'Lower Manhattan':
      selectedData = lowerManhattanTransactions;
      labelColor = 'blue';
      break;
    case "Hells Kitchen":
      selectedData = hellsKitchenTransactions;
      labelColor = 'red';
      break;
    case 'Astoria':
      selectedData = astoriaTransactions;
      labelColor = 'green';
      break;
    case 'all':
      // Mengembalikan semua data
      myChart.data.datasets = [
        {
          label: 'Lower Manhattan',
          borderColor: 'blue',
          data: lowerManhattanTransactions,
          fill: false,
        },
        {
          label: "Hell's Kitchen",
          borderColor: 'red',
          data: hellsKitchenTransactions,
          fill: false,
        },
        {
          label: 'Astoria',
          borderColor: 'green',
          data: astoriaTransactions,
          fill: false,
        }
      ];
      myChart.update();
      return;
    default:
      // Jika tidak ada yang dipilih, tidak melakukan perubahan
      return;
  }

  // Memperbarui dataset di grafik
  myChart.data.datasets = [
    {
      label: selectedLocation,
      borderColor: labelColor,
      data: selectedData,
      fill: false,
    }
  ];

  // Menggambar ulang grafik dengan dataset yang baru
  myChart.update();
}