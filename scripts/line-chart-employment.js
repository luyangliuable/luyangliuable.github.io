document.addEventListener("DOMContentLoaded", function () {

    var lineChartEmployment = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "title": "Employment Rate Male vs. Females",
            "width": 800,
            "background": "transparent",
            "height": graphSettings.height,
            "config": graphSettings.config,
            "data": {
                "values": employmentRate
            },
            "encoding": {
                "x": {
                    "field": "year",
                    "type": "ordinal",
                    "title": "Year",
                    "axis": {
                        "grid": true,
                        "gridDash": [3, 3],
                        "gridWidth": 0.5
                    }
                },
                "y": {
                    "field": "value",
                    "type": "quantitative",
                    "title": "Employment (x100)",
                    "axis": {
                        "grid": true,
                        "gridDash": [3, 3],
                        "gridWidth": 0.5
                    }
                },
                "color": {
                    "field": "category",
                    "type": "nominal",
                    "title": "Category",
                    "legend": {
                        "symbolType": "circle",
                        "orient": "bottom"
                    }
                }
            },
            "layer": [
                {
                    "mark": "line",
                    "transform": [
                        {
                            "fold": ["Employment", "Employment Fulltime", "Employment Parttime"],
                            "as": ["category", "value"]
                        }
                    ]
                },
                {
                    "mark": "point",
                    "transform": [
                        {
                            "fold": ["Employment", "Employment Fulltime", "Employment Parttime"],
                            "as": ["category", "value"]
                        }
                    ],
                    "encoding": {
                        "tooltip": [
                            {"field": "year", "type": "ordinal", "title": "Year"},
                            {"field": "value", "type": "quantitative", "title": "Employment Rate"},
                            {"field": "category", "type": "nominal", "title": "Category"}
                        ]
                    }
                }
            ]
        };

    vegaEmbed('#line-chart-employment', lineChartEmployment);
});


