// https://mapshaper.org/

document.addEventListener("DOMContentLoaded", function () {

    var homeOwnershipTypePieChart = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A pie chart showing the distribution of home ownership in Melbourne",
            "background": "transparent",
            "config": graphSettings.config,
            "autosize": {
                "contains": "padding"
            },
            "data": {
                "values": [
                    {"Category": "Owned Outright", "Percent": 31},
                    {"Category": "Owned with Mortgage", "Percent": 35},
                    {"Category": "Rented", "Percent": 30.6},
                    {"Category": "Others", "Percent": 3.4}  // You can add this to make it sum to 100
                ]
            },
            "mark": {
                "type": "arc"
            },
            "encoding": {
                "theta": {"field": "Percent", "type": "quantitative"},
                "color": {
                    "field": "Category",
                    "type": "nominal",
                    "legend": {
                        // "orient": "bottom"
                    }
                }
            },
            "view": {"stroke": null}
        };

    vegaEmbed('#home-ownership-type-pie-chart', homeOwnershipTypePieChart);
});


