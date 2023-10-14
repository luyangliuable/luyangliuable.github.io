// https://mapshaper.org/

document.addEventListener("DOMContentLoaded", function () {

    const parallelCoordChart = {
        "$schema": graphSettings.schema,
        "width": graphSettings.width,
        "height": graphSettings.height,
        "description": "Though Vega-Lite supports only one scale per axes, one can create a parallel coordinate plot by folding variables, using `joinaggregate` to normalize their values and using ticks and rules to manually create axes.",
        "title": "Home Prices vs Rent Prices",
        "data": {
            "values": housePriceVsSuburbComprehensive
        },
        "transform": [
            {"filter": "datum['Year'] === 2011"},
            {"window": [{"op": "count", "as": "index"}]},
            {"fold": ["Price", "RentPrice"]},
            {
                "joinaggregate": [
                    {"op": "min", "field": "value", "as": "min"},
                    {"op": "max", "field": "value", "as": "max"}
                ],
                "groupby": ["key"]
            },
            {
                "calculate": "(datum.value - datum.min) / (datum.max-datum.min)",
                "as": "norm_val"
            },
            {
                "calculate": "(datum.min + datum.max) / 2",
                "as": "mid"
            }
        ],
        "layer": [{
            "mark": {"type": "rule", "color": "#ccc"},
            "encoding": {
                "detail": {"aggregate": "count"},
                "x": {"field": "key"}
            }
        }, {
            "mark": "line",
            "encoding": {
                "detail": {"type": "nominal", "field": "index"},
                "color": {"field": "Classification", "type": "nominal", "legend": {"title": "Classification"}},
                "opacity": {"value": 0.3},
                "x": {"type": "nominal", "field": "key"},
                "y": {"type": "quantitative", "field": "norm_val", "axis": null},
                "tooltip": [{
                    "type": "quantitative",
                    "field": "Price"
                }, {
                    "type": "quantitative",
                    "field": "RentPrice"
                }]
            }
        }, {
            "encoding": {
                "x": {"type": "nominal", "field": "key"},
                "y": {"value": 0}
            },
            "layer": [{
                "mark": {"type": "text", "style": "label"},
                "encoding": {
                    "text": {"aggregate": "max", "field": "max"}
                }
            }, {
                "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
            }]
        }, {
            "encoding": {
                "x": {"type": "nominal", "field": "key"},
                "y": {"value": 150}
            },
            "layer": [{
                "mark": {"type": "text", "style": "label"},
                "encoding": {
                    "text": {"aggregate": "min", "field": "mid"}
                }
            }, {
                "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
            }]
        }, {
            "encoding": {
                "x": {"type": "nominal", "field": "key"},
                "y": {"value": 300}
            },
            "layer": [{
                "mark": {"type": "text", "style": "label"},
                "encoding": {
                    "text": {"aggregate": "min", "field": "min"}
                }
            }, {
                "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
            }]
        }],
        "config": {
            "axisX": {"domain": false, "labelAngle": 0, "tickColor": "#ccc", "title": null},
            "view": {"stroke": null},
            "style": {
                "label": {"baseline": "middle", "align": "right", "dx": -5},
                "tick": {"orient": "horizontal"}
            }
        }
    };


    vegaEmbed('#parallel-coord-polot-rent-vs-house-price-for-suburbs', parallelCoordChart);
});
