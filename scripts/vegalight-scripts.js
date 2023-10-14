// https://mapshaper.org/

document.addEventListener("DOMContentLoaded", function() {
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
        "transform": [{
            "lookup": "properties.Suburb",
            "from": {
                "data": {"values": avgPriceDataset},
                "key": "Suburb",
                "fields": ["AvgPrice"]
            }
        }],
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
                        "field": "priceCategory",
                        "type": "nominal",
                        "legend": {"title": "Data Availability"},
                        "scale": {
                            "domain": ["No Data from Source"],
                            "range": ["white"]
                        }
                    }
                },
                "tooltip": [
                    {"field": "properties.Suburb", "type": "nominal", "title": "Suburb"},
                    {"field": "properties.Suburb", "type": "nominal", "title": "Suburb"}
                ]
            },
            {
                "mark": "geoshape",
                "encoding": {
                    "color": {
                        "field": "AvgPrice",
                        "type": "quantitative",
                        "legend": {"title": "Average Price"}
                    },
                    "tooltip": [
                        {"field": "properties.Suburb", "type": "nominal", "title": "Suburb"},
                        {"field": "AvgPrice", "type": "quantitative", "title": "Average Price"}
                    ]
                }
            }
        ]
    };

    vegaEmbed('#vis-topology', topology);
});
