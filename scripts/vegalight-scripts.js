// https://mapshaper.org/

let intervalId = null;
let availableYears = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
let currYearIdx = 0;

const filterHousePriceVsSuburbForYear = (arr, year) => {

    const r = arr.filter(item => {
        return item.Year === parseInt(year) && typeof item.Price == "number" && item.Price > 0;
    });

    return r;
};

let housePriceVsSuburbForYear = filterHousePriceVsSuburbForYear(housePriceVsSuburbComprehensive, availableYears[currYearIdx]);

const visTopologyYearOnChange = (e) => {
    embedChart(e.target.value);
    UpdatevisTopologyYearDisplay(e.target.value);
    rerenderVisTopologyChart(e.target.value);
    currYearIdx = availableYears.indexOf(parseInt( e.target.value ));
};   


const UpdatevisTopologyYearDisplay = (year) => {
    document.getElementById("vis-topology__current-year").innerHTML = `Current displaying data for year ${year}`;
};

const UpdatevisTopologyYearSlider = (year) => {
    console.log(year);
    document.getElementById("year-slider").value = year;
    UpdatevisTopologyYearDisplay(year);
};   

const rerenderVisTopologyChart = (year) => {
    housePriceVsSuburbForYear = filterHousePriceVsSuburbForYear(housePriceVsSuburbComprehensive, year);
    embedChart(housePriceVsSuburbForYear);
};

const toggleVisTopologyChartTemporalAnimation = (e) => {
    const visTopologyChartTemporalAnimationButton = document.getElementById("visTopologyChartTemporalAnimationButton");

    if (intervalId === null) {
        intervalId = setInterval(() => {
            currYearIdx = (currYearIdx + 1) % availableYears.length;
            UpdatevisTopologyYearSlider(availableYears[currYearIdx]);
            rerenderVisTopologyChart(availableYears[currYearIdx]);
        }, 500);

        visTopologyChartTemporalAnimationButton.innerHTML = "Stop";
    } else {
        clearInterval(intervalId);
        intervalId = null;

        visTopologyChartTemporalAnimationButton.innerHTML = "Play";
    }  
};

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
                    "data": {"values": housePriceVsSuburbForYear},
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
                        {"field": "properties.Suburb", "type": "nominal", "title": "Suburb"},
                        {"field": "Price", "type": "quantitative", "title": "Average Price"}
                    ]
                }
            }
        ]
    };

    vegaEmbed('#vis-topology', topology).catch(console.warn); 
};


document.addEventListener("DOMContentLoaded", function() {
    housePriceVsSuburbForYear = filterHousePriceVsSuburbForYear(housePriceVsSuburbComprehensive, availableYears[currYearIdx]);
    UpdatevisTopologyYearDisplay(availableYears[currYearIdx]);
    embedChart(housePriceVsSuburbForYear);
});
