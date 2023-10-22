document.addEventListener("DOMContentLoaded", function () {

    const generateDotPlotValues = (dataset) => {
        const res = [];

        for (var eachYearItem of dataset) {
            const year = eachYearItem.year;
            const employmentFulltime = Math.round(eachYearItem["Employment Fulltime"] / 100) * 100;
            const employmentParttime = Math.round(eachYearItem["Employment Parttime"] / 100) * 100;

            for (var i = 0; i < employmentFulltime; i += 100) {
                res.push({"year": year, "type": "Fulltime"});
            }

            for (var i = 0; i < employmentParttime; i += 100) {
                res.push({"year": year, "type": "Parttime"});
            }
        };

        return res;
    };

    const wilkinsonDotPlotEmploymentTypeData = generateDotPlotValues(employmentRate);

    var wilkinsonDotPlotEmploymentType = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A Wilkinson Dot Plot",
            "width": 400,
            "height": 500,
            "background": "transparent",
            "config": {
                "legend": {
                    "titleColor": "white",
                    "labelColor": "white"
                },
                "view": {
                    "strokeWidth": 0 
                }
            },            "title": {
                "text": "Fulltime employment vs. Parttime employment",
                "color": "#FFF"
            },
            "data": {
                "values": wilkinsonDotPlotEmploymentTypeData
            },
            "transform": [
                {
                    "window": [{"op": "rank", "as": "id"}],
                    "groupby": ["year", "type"]
                }
            ],
            "mark": {
                "type": "circle",
                "opacity": 1
            },
            "encoding": {
                "x": {
                    "field": "year",
                    "type": "ordinal",
                    "axis": {
                        "title": "Year",
                        "titleColor": "#FFF",
                        "labelColor": "#FFF",
                        "tickColor": "#FFF",
                        "domainColor": "#FFF"
                    }
                },
                "y": {
                    "field": "id",
                    "type": "ordinal",
                    "axis": {
                        "title": "Number of Employees",
                        "titleColor": "#FFF",
                        "labelColor": "#FFF",
                        "tickColor": "#FFF",
                        "domainColor": "#FFF"
                    },
                    "sort": "descending"
                },
                "color": {
                    "field": "type",
                    "type": "nominal",
                    "scale": {
                        "domain": ["Fulltime", "Parttime"],
                        "range": ["#1e90ff", "#FFF"]
                    }
                },
                "legend": {
                    "titleColor": "#FFF",
                    "labelColor": "#FFF"
                }
            }
        };

    vegaEmbed('#wilkinson-dot-plot-employment-type', wilkinsonDotPlotEmploymentType);
});


