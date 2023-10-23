document.addEventListener("DOMContentLoaded", function () {

    var lineChartUnemploymentRate = 
        {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "title": "Unemployment Rate Australia",
            "background": "transparent",
            "width": 800,
            "height": graphSettings.height,
            "config": graphSettings.config,
            "data": {
                "values": [
                    {
                        "Year": "2000",
                        "Unemployment Rate": 6.6
                    },
                    {
                        "Year": "2001",
                        "Unemployment Rate": 5.9
                    },
                    {
                        "Year": "2002",
                        "Unemployment Rate": 6.5
                    },
                    {
                        "Year": "2003",
                        "Unemployment Rate": 5.6
                    },
                    {
                        "Year": "2004",
                        "Unemployment Rate": 5.4
                    },
                    {
                        "Year": "2005",
                        "Unemployment Rate": 5.5
                    },
                    {
                        "Year": "2006",
                        "Unemployment Rate": 5.3
                    },
                    {
                        "Year": "2007",
                        "Unemployment Rate": 4.9
                    },
                    {
                        "Year": "2008",
                        "Unemployment Rate": 4.5
                    },
                    {
                        "Year": "2009",
                        "Unemployment Rate": 5.2
                    },
                    {
                        "Year": "2010",
                        "Unemployment Rate": 5.3
                    },
                    {
                        "Year": "2011",
                        "Unemployment Rate": 4.9
                    },
                    {
                        "Year": "2012",
                        "Unemployment Rate": 5.3
                    },
                    {
                        "Year": "2013",
                        "Unemployment Rate": 5.7
                    },
                    {
                        "Year": "2014",
                        "Unemployment Rate": 6.3
                    },
                    {
                        "Year": "2015",
                        "Unemployment Rate": 6.4
                    },
                    {
                        "Year": "2016",
                        "Unemployment Rate": 5.9
                    },
                    {
                        "Year": "2017",
                        "Unemployment Rate": 6
                    },
                    {
                        "Year": "2018",
                        "Unemployment Rate": 5.6
                    },
                    {
                        "Year": "2019",
                        "Unemployment Rate": 4.6
                    },
                    {
                        "Year": "2020",
                        "Unemployment Rate": 4.9
                    },
                    {
                        "Year": "2021",
                        "Unemployment Rate": 6.2
                    },
                    {
                        "Year": "2022",
                        "Unemployment Rate": 4.2
                    },
                    {
                        "Year": "2023",
                        "Unemployment Rate": 3.7
                    }
                ]
            },
            "encoding": {
                "color": {
                    "value": "lightgreen",
                    "legend": {
                        "title": "Line Color",
                        "symbolType": "circle"
                    }
                }
            },
            "layer": [
                {
                    "mark": "line",
                    "encoding": {
                        "x": {
                            "field": "Year",
                            "type": "ordinal",
                            "axis": {
                                "grid": true,
                                "gridDash": [3, 3],
                                "gridWidth": 0.5
                            }
                        },
                        "y": {
                            "field": "Unemployment Rate",
                            "type": "quantitative",
                            "axis": {
                                "grid": true,
                                "gridDash": [3, 3],
                                "gridWidth": 0.5
                            }
                        }
                    }
                },
                {
                    "mark": "point",
                    "encoding": {
                        "x": {
                            "field": "Year",
                            "type": "ordinal",
                            "axis": { "grid": false }
                        },
                        "y": {
                            "field": "Unemployment Rate",
                            "type": "quantitative",
                            "axis": { "grid": false }
                        },
                        "tooltip": [
                            {"field": "Year", "type": "ordinal", "title": "Year"},
                            {"field": "Unemployment Rate", "type": "quantitative", "title": "Unemployment Rate"}
                        ]
                    }
                }
            ]
        };

    vegaEmbed('#line-chart-unemployment-rate', lineChartUnemploymentRate);
});


