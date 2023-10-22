document.addEventListener("DOMContentLoaded", function () {

    var isotypeEmployment = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 800,
        "background": "transparent",
        "title": {
            "text": "Employment Rate Male vs Females",
            "color": "white"
        },
        "height": 200,
        "config": {
            "axis": {
                "labelColor": "white",
                "titleColor": "white"
            },
            "legend": {
                "labelColor": "white",
                "titleColor": "white"
            }
        },
        "transform": [
            {
                "calculate": "{'male': '🧍‍♂️', 'female': '🧍‍♀️'}[datum.gender]",
                "as": "emoji"
            },
            {"window": [{"op": "rank", "as": "rank"}], "groupby": ["classification", "gender"]}
        ],
        "data": {
            "values": [
                {"classification": "Gender", "gender": "female", "number of employees": 2},
                {"classification": "Gender", "gender": "female", "number of employees": 1},
                {"classification": "Gender", "gender": "male", "number of employees": 10},
                {"classification": "Gender", "gender": "male", "number of employees": 5},
                {"classification": "Gender", "gender": "male", "number of employees": 4},
                {"classification": "Gender", "gender": "male", "number of employees": 3},
                {"classification": "Gender", "gender": "male", "number of employees": 2},
                {"classification": "Gender", "gender": "male", "number of employees": 1},
            ]
        },
        "mark": {"type": "text", "baseline": "middle", "color": "white"},
        "encoding": {
            "x": {"field": "number of employees", "type": "ordinal", "axis": {"grid": false}},
            "y": {"field": "gender", "type": "ordinal", "axis": {"grid": false}},
            "text": {"field": "emoji", "type": "nominal"},
            "size": {"value": 50}
        }
    };

    vegaEmbed('#isotype-employment', isotypeEmployment);
});


