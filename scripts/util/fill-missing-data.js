const existingSuburbs = vicSuburbs.features.map(feature => feature.properties.Suburb);

function fillMissingDataForYear(dataForYear, year) {
    const existingDataSuburbs = new Set(dataForYear.map(item => item.Suburb));

    existingSuburbs.forEach(suburb => {
        if (!existingDataSuburbs.has(suburb)) {

            const baseYear = 2011;

            const scalingFactor = (year - baseYear) * 50000; // Increment of 50,000 for each year past the base year

            const minPrice = 500000 + scalingFactor;
            const maxPrice = 1000000 + scalingFactor;

            const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;

            dataForYear.push({
                Year: year,
                Suburb: suburb,
                Price: randomPrice
            });
        }
    });

    return dataForYear;
}

const fillMissingData = (arr) => {
    let filledData = [];

    availableYears.forEach(year => {
        let dataForYear = arr.filter(item => {
            return item.Year === year && typeof item.Price == "number" && item.Price > 0;
        });

        const existingDataSuburbs = new Set(dataForYear.map(item => item.Suburb));

        existingSuburbs.forEach(suburb => {
            if (!existingDataSuburbs.has(suburb)) {

                const baseYear = 2011;

                const scalingFactor = (year - baseYear) * 50000; // Increment of 50,000 for each year past the base year

                const minPrice = 500000 + scalingFactor;
                const maxPrice = 1000000 + scalingFactor;

                const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;

                dataForYear.push({
                    Year: year,
                    Suburb: suburb,
                    Price: randomPrice
                });
            }
        });

        filledData = filledData.concat(dataForYear);
    });

    return filledData;
};
