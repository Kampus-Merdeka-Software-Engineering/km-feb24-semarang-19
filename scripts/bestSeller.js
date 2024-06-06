let originalBestSellerData = [];
        let chartInstance = null;

        fetch("./data/best_seller_looker.json")
          .then((response) => response.json())
          .then((jsonData) => {
            originalBestSellerData = jsonData;
            console.log('Original Data:', originalBestSellerData); // Debug: Log original data
            renderBestSellerTable(jsonData);
            renderBestSellerChart(jsonData);
            setupFilter();
          })
          .catch((error) => console.error("Error loading the JSON file:", error));

        function setupFilter() {
          const filterElement = document.getElementById("global-filter");
          filterElement.addEventListener("change", function () {
            const selectedValue = filterElement.value;
            let filteredData = originalBestSellerData;

            if (selectedValue !== "all") {
              filteredData = originalBestSellerData.filter(
                (item) => item.store_location === selectedValue
              );
            }

            console.log('Filtered Data:', filteredData); // Debug: Log filtered data
            renderBestSellerTable(filteredData);
            renderBestSellerChart(filteredData);
          });
        }

        function renderBestSellerTable(data) {
          const sortedData = data.sort((a, b) => parseInt(b.Total_Quantity) - parseInt(a.Total_Quantity));
          const tableBody = document.getElementById("best-seller-table-body");
          tableBody.innerHTML = "";

          sortedData.forEach((item) => {
            const row = document.createElement("tr");

            row.innerHTML = `
              <td>${item.product_detail}</td>
              <td>${item.unit_price}</td>
              <td>${item.store_location}</td>
              <td>${item.Total_Quantity}</td>
            `;

            tableBody.appendChild(row);
          });

          $("#best-seller-table").DataTable({
            destroy: true, // Destroy any existing table instance
            data: sortedData,
            columns: [
              { data: "product_detail" },
              {
                data: "unit_price",
                render: $.fn.dataTable.render.number(",", ".", 2, "$ "),
              },
              { data: "store_location" },
              { data: "Total_Quantity" },
            ],
          });
        }

        function renderBestSellerChart(data) {
          const productNames = data.map((item) => item.product_detail);
          const uniqueProductNames = [...new Set(productNames)];
          const locations = ["Astoria", "Lower Manhattan", "Hells Kitchen"];

          const chartData = locations.map((location) => {
            return {
              label: location,
              data: uniqueProductNames.map((name) => {
                const product = data.find(
                  (item) => item.product_detail === name && item.store_location === location
                );
                return product ? parseInt(product.Total_Quantity) : 0;
              }),
              backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
              )}, ${Math.floor(Math.random() * 255)}, 0.6)`,
              borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
              )}, ${Math.floor(Math.random() * 255)}, 1)`,
              borderWidth: 1,
            };
          });

          if (chartInstance) {
            chartInstance.destroy();
          }

          const ctx = document.getElementById("stackedBarChartBestSeller").getContext("2d");
          chartInstance = new Chart(ctx, {
            type: "bar",
            data: {
              labels: uniqueProductNames,
              datasets: chartData,
            },
            options: {
              indexAxis: "y",
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
              scales: {
                x: {
                  stacked: true,
                  beginAtZero: true,
                },
                y: {
                  stacked: true,
                },
              },
            },
          });
        }