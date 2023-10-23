document.addEventListener("DOMContentLoaded", function () {

    var lineChartHouseholdSize = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            title: "Household size over the years",
            "width": 800,
            "height": graphSettings.height,
            "config": graphSettings.config,
            "background": "transparent",
            "data": {
                "values": household_size
            },
            "mark": "bar",
            "encoding": {
                "x": {
                    "field": "Year",
                    "type": "ordinal",
                    "axis": {
                        "title": "Year"
                    }
                },
                "y": {
                    "field": "Population",
                    "type": "quantitative",
                    "axis": {
                        "title": "Population"
                    }
                },
                "color": {
                    "field": "People",
                    "type": "nominal",
                    "legend": {
                        "title": "People"
                    }
                }
            }
        };

    vegaEmbed('#line-chart-household-size', lineChartHouseholdSize);
});


