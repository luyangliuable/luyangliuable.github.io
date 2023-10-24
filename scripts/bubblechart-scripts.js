// https://mapshaper.org/

const rentBySuburbYear2 = housePriceVsSuburbComprehensive.filter(item => {
    return item.rentPrice !== null;
});

document.addEventListener("DOMContentLoaded", function () {
    let uniqueSuburbs = [...new Set(rentBySuburbYear.map(item => item.Suburb))];

    uniqueSuburbs.sort((a, b) => a.localeCompare(b));

    const rentBySuburbYearWithPopulation = rentBySuburbYear.map(item => {
        var yearKey = item.Year; 

        if (populationByYearMelbourne[yearKey]) {
            return {
                ...item,
                Year: yearKey,
                Population: populationByYearMelbourne[yearKey]
            };
        }
        return item;
    });

    var rentBySuburbYearBubbleChart = {
        "$schema": graphSettings.schema,
        "width": graphSettings.width,
        "height": graphSettings.height,
        "config": graphSettings.config,
        "background": "transparent",
        "title": "Average Price of Rent per Room vs Year by Suburb",
        "data": {
            "values": rentBySuburbYearWithPopulation
        },
        "selection": {
            "Select": {
                "type": "single",
                "fields": ["Suburb"],
                "init": { "Suburb": "All Suburbs Average" },
                "bind": {
                    "input": "select",
                    "options": uniqueSuburbs
                }
            }
        },
        "transform": [{
            "filter": { "selection": "Select", "filter": "isValid(datum.Population)" }
        }],
        "mark": "circle",
        "encoding": {
            "color": {
                "value": "lightgreen"
            },
            "x": {
                "field": "Year",
                "type": "ordinal"
            },
            "size": {
                "field": "Population",
                "type": "quantitative",
                "scale": {
                    "type": "pow",
                    "exponent": 4, 
                    // "range": [10, 1000]
                },
                "legend": {
                    "title": "Population Size of Melbourne",
                    "orient": "bottom"
                }
            },
            "y": {
                "field": "Price",
                "type": "quantitative",
                "scale": {
                    "domain": [0, 620]
                },
                "axis": {
                    "grid": false,
                },
                "title": "Rent Price"
            },
            "tooltip": [
                { "field": "Year", "type": "ordinal", "title": "Year" },
                { "field": "Price", "type": "quantitative", "title": "Rent Price" },
                { "field": "Population", "type": "quantitative", "title": "Population" }
            ]
        }
    };

    vegaEmbed('#rent-by-suburb-year-line-chart', rentBySuburbYearBubbleChart);
});
