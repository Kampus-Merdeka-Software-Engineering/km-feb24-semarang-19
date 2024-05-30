
document.addEventListener('DOMContentLoaded', function () {
    const globalFilter = document.getElementById('global-filter');

    globalFilter.addEventListener('change', function () {
        const selectedValue = globalFilter.value;
        updateCharts(selectedValue);
    });
});
