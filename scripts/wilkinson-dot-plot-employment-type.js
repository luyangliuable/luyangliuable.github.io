document.addEventListener("DOMContentLoaded", function () {
    var isotypeEmployment = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "width": 800,
            "background": "transparent",
            "title": "Employment Rate Male vs Females",
            "config": graphSettings.config,
            "height": 200,
            "transform": [
                {
                    "calculate": "{'person': '🧍‍♂️', 'cattle': '🧍‍♀️', 'fulltime': '⏰', 'parttime': '⏳'}[datum.animal]",
                    "as": "emoji"
                },
                {"window": [{"op": "rank", "as": "rank"}], "groupby": ["classification", "animal"]}
            ],
            "data": {
                "values": [
                    {"classification": "Gender", "animal": "cattle", "col": 3},
                    {"classification": "Gender", "animal": "cattle", "col": 2},
                    {"classification": "Gender", "animal": "cattle", "col": 1},
                    {"classification": "Gender", "animal": "person", "col": 10},
                    {"classification": "Gender", "animal": "person", "col": 5},
                    {"classification": "Gender", "animal": "person", "col": 4},
                    {"classification": "Gender", "animal": "person", "col": 3},
                    {"classification": "Gender", "animal": "person", "col": 2},
                    {"classification": "Gender", "animal": "person", "col": 1},

                    // {"classification": "EmploymentType", "animal": "parttime", "col": 3},
                    // {"classification": "EmploymentType", "animal": "parttime", "col": 2},
                    // {"classification": "EmploymentType", "animal": "parttime", "col": 1},
                    // {"classification": "EmploymentType", "animal": "fulltime", "col": 10},
                    // {"classification": "EmploymentType", "animal": "fulltime", "col": 5},
                    // {"classification": "EmploymentType", "animal": "fulltime", "col": 4},
                    // {"classification": "EmploymentType", "animal": "fulltime", "col": 3},
                    // {"classification": "EmploymentType", "animal": "fulltime", "col": 2},
                    // {"classification": "EmploymentType", "animal": "fulltime", "col": 1}
                ]
            },
            "mark": {"type": "text", "baseline": "middle"},
            "encoding": {
                "x": {"field": "col", "type": "ordinal", "axis": null},
                "y": {"field": "animal", "type": "ordinal", "axis": null},
                "row": {"field": "cassification", "type": "nominal", "header": {"title": ""}},
                "text": {"field": "emoji", "type": "nominal"},
                "size": {"value": 50}
            }
        };


    vegaEmbed('#isotype-employment', isotypeEmployment);
});


