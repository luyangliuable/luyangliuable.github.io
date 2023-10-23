document.addEventListener("DOMContentLoaded", function () {

    var lineChartEmployment = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A Multi-Series Line Chart of Employment Data.",
            "width": 800,
            "background": "transparent",
            "height": graphSettings.height,
            "config": graphSettings.config,
            "data": {
                "values": employmentRate
            },
            "mark": "line",
            "encoding": {
                "x": {
                    "field": "year",
                    "type": "ordinal",
                    "title": "Year"
                },
                "y": {
                    "field": "value",
                    "type": "quantitative",
                    "title": "Employment (x100)",
                    "axis": {"grid": false}
                },
                "color": {
                    "field": "category",
                    "type": "nominal",
                    "title": "Category"
                }
            },
            "transform": [
                {
                    "fold": ["Employment", "Employment Fulltime", "Employment Parttime"],
                    "as": ["category", "value"]
                }
            ]
        };

    vegaEmbed('#line-chart-employment', lineChartEmployment);
});


