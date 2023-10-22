const colorMap = {
    'Osaka': '#1f77b4',    // Blue
    'Vienna': '#ff7f0e',   // Orange
    'Vancouver': '#2ca02c',// Green
    'Sydney': '#d62728',   // Red
    'Melbourne': '#9467bd' // Purple
};


function filterBumpChartData() {
    checkedSuburbs = new Set();

    const checkboxes = document.querySelectorAll('.bump-chart-select');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const city = checkbox.id.replace(/_/g, ' ');
            checkedSuburbs.add(city);
        }
    });

    const filteredData = mostLiveableCity.filter((item) => {
        return checkedSuburbs.has(item.City);
    });

    embedBumpChart(filteredData);
}

function showDataExtendingTen(data) {
    let filteredData = [];

    const allYears = Array.from(new Set(data.map(d => d.Year)));
    const allCities = Array.from(new Set(data.map(d => d.City)));

    allYears.forEach(year => {
        allCities.forEach(city => {
            const hasData = data.some(d => d.Year === year && d.City === city);
            if (!hasData) {
                filteredData.push({
                    Year: year,
                    City: city,
                    Rank: 100,
                });
            }
        });
    });

    filteredData.push(...data);

    return filteredData;
}


function embedBumpChart(data) {
    const targetCities = ['Vienna', 'Melbourne', 'Sydney', 'Vancouver'];

    let filteredData = showDataExtendingTen(data);

    function filterDataByYears(data, startYear, endYear) {
        return data.filter(d => d.Year >= startYear && d.Year <= endYear);
    }

    filteredData = showDataExtendingTen(filteredData);


    var mostLiveableCityBumpChart = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A bump chart of the top 10 most liveable cities in the world.",
            "width": 800,
            "height": graphSettings.height,
            "config": graphSettings.config,
            "background": "transparent",
            "title": "Most Liveable City Around the World",
            "data": {
                "values": filteredData
            },
            "layer": [
                {
                    "mark": {
                        "type": "line",
                        "point": {
                            "filled": true,
                            "size": 700
                        }
                    },
                    "encoding": {
                        "x": {"field": "Year", "type": "ordinal"},
                        "y": {
                            "field": "Rank",
                            "type": "ordinal",
                            "sort": "descending",
                            "scale": {
                                "domain": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
                            }
                        },
                        "color": {
                            "field": "City", "type": "nominal",
                            "legend": {
                                "offset": 8
                            },
                            "scale": {
                                "domain": Object.keys(colorMap),
                                "range": Object.values(colorMap)
                            }
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text"
                    },
                    "encoding": {
                        "x": {"field": "Year", "type": "ordinal"},
                        "y": {
                            "field": "Rank",
                            "type": "ordinal",
                            "sort": "descending"
                        },
                        "text": {
                            "condition": {
                                "test": "datum.Rank !== 100",
                                "field": "Rank",
                                "type": "ordinal"
                            },
                            "value": "10 <"
                        }
                    }
                }
            ]
        };

    vegaEmbed('#most-liveable-city-bump-chart', mostLiveableCityBumpChart);
}

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.bump-chart-select');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', filterBumpChartData);
    });

    filterBumpChartData();
});

