const originalColorMap = {
    'Osaka': '#1F77B4',       
    'Vienna': '#FF7F0E',      
    'Vancouver': '#2CA02C',   
    'Sydney': '#D62728',      
    'Melbourne': '#9467BD',   
    'Brisbane': '#8C564B',    
    'Hamburg': '#E377C2',     
    'Wellington': '#BCBD22',  
    'Tokyo': '#17BECF',       
    'Helsinki': '#7F7F7F',    
    'Copenhagen': '#Bcbd91',  
    'Zurich': '#D6616B',     
    'Adelaide': '#1e90ff',
    'Auckland': '#483D8B',
    'Amsterdam': '#DAA520',
    'Geneva': '#2E8B57',
    'Calgary': '#FF6347',
    'Frankfurt': '#8B0000'
};

const colorMap = {};

function filterBumpChartData() {
    checkedSuburbs = new Set();

    const checkboxes = document.querySelectorAll('.bump-chart-select');

    checkboxes.forEach((checkbox) => {
        const city = checkbox.id.replace(/_/g, ' ');

        if (checkbox.checked) {
            checkedSuburbs.add(city);
            colorMap[city] = originalColorMap[city];
        } else {
            delete colorMap[city];
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
                        "x": {
                            "field": "Year", "type": "ordinal",
                            "axis": {
                                "grid": true,
                                "gridDash": [3, 3],
                                "gridWidth": 0.5
                            }
                        },
                        "y": {
                            "field": "Rank",
                            "type": "ordinal",
                            "axis": {
                                "grid": true,
                                "gridDash": [3, 3],
                                "gridWidth": 0.5
                            },
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
                        },
                        "tooltip": [
                            {"field": "Year", "type": "ordinal"},
                            {"field": "Rank", "type": "ordinal"},
                            {"field": "City", "type": "nominal"}
                        ]
                    }
                },
                {
                    "mark": {
                        "type": "text"
                    },
                    "encoding": {
                        "x": {
                            "field": "Year",
                            "type": "ordinal",
                            "axis": {
                                "grid": false
                            }
                        },
                        "y": {
                            "field": "Rank",
                            "type": "ordinal",
                            "sort": "descending",
                            "axis": {
                                "grid": false
                            }
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

