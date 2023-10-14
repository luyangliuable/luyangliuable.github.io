// https://mapshaper.org/

let availableYears = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

// console.log(fillMissingData(housePriceVsSuburbComprehensive);

const filterHousePriceVsSuburbForYear = (arr, year) => {
    return arr.filter(item => {
        return item.Year === year && typeof item.Price == "number" && item.Price > 0;
    });
};

let currYearIdx = 0;
let housePriceVsSuburbForYear = filterHousePriceVsSuburbForYear(housePriceVsSuburbComprehensive, availableYears[currYearIdx]);

function embedChart(dataForYear) {
    var topology = {
        "$schema": graphSettings.schema,
        "width": graphSettings.width,
        "height": graphSettings.height,
        "title": "Average House Prices by Suburb",
        "data": {
            "name": "suburbs",
            "values": vicSuburbs,
            "format": {"property": "features"}
        },
        "transform": [
            {
                "lookup": "properties.Suburb",
                "from": {
                    "data": {"values": temp2},
                    "key": "Suburb",
                    "fields": ["Price"]
                }
            }
        ],
        "layer": [
            {
                "mark": {
                    "type": "geoshape",
                    "stroke": "black",
                    "fill": "white",
                    "strokeWidth": .2
                },
                "encoding": {
                    "color": {
                        "field": "price category",
                        "type": "nominal",
                        "legend": {"title": "Data Availability"},
                        "scale": {
                            "domain": ["No Data from Source"],
                            "range": ["white"]
                        }
                    }
                },
                "tooltip": [
                    {
                        "field": "properties.Suburb",
                        "type": "nominal",
                        "title": "Suburb"
                    }
                ]
            },
            {
                "mark": "geoshape",
                "encoding": {
                    "color": {
                        "field": "Price",
                        "type": "quantitative",
                        "legend": {"title": "Average Price"},
                        "scale": {
                            "domain": [500000, 8000000] // Set these values based on your full data range
                        }
                    },
                    "tooltip": [
                        {"field": "properties.Suburb", "type": "nominal", "title": "Suburb"}
                    ]
                }
            }
        ]
    };

    vegaEmbed('#vis-topology', topology).catch(console.warn); 
};


document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {
        currYearIdx = ( currYearIdx + 1 ) % availableYears.length;
        housePriceVsSuburbForYear = filterHousePriceVsSuburbForYear(housePriceVsSuburbComprehensive, availableYears[currYearIdx]);
        embedChart(housePriceVsSuburbForYear);
        document.getElementById("vis-topology__current-year").innerHTML = `Current displaying data for year ${ availableYears[currYearIdx] }`;
    }, 500);
});
