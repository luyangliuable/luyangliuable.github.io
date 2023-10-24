let parallelCoordinatecurrentYear = 2011;

const updateParallelCoordinatecurrentYear = (event) => {
    parallelCoordinatecurrentYear = parseInt( event.target.value );

    filterData();
};

function embedParallelCoordChart(data) {

    const parallelCoordChart =
          {
              "$schema": graphSettings.schema,
              "width": 1050,
              "height": graphSettings.height + 500,
              "config": {
                  ...graphSettings.config,
                  "axisX": {"domain": false, "labelAngle": 0, "tickColor": "#ccc", "title": null},
                  "view": {"stroke": null},
                  "style": {
                      "label": {"baseline": "middle", "align": "right", "dx": -5},
                      "tick": {"orient": "horizontal"}
                  }
              },
              "background": "transparent",
              "description": "Though Vega-Lite supports only one scale per axes, one can create a parallel coordinate plot by folding variables, using `joinaggregate` to normalize their values and using ticks and rules to manually create axes.",
              "title": "Home Prices vs Rent Prices",
              "data": {
                  "values": data
              },
              "transform": [
                  {"filter": `datum['Year'] === ${parallelCoordinatecurrentYear}`},
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
              "layer": [
                  {
                      "mark": {"type": "rule", "color": "#ccc"},
                      "encoding": {
                          "detail": {"aggregate": "count"},
                          "x": {"field": "key"}
                      }
                  },

                  {
                      "mark": "line",
                      "encoding": {
                          "color": {
                              "type": "nominal",
                              "field": "Classification",
                              "legend": {
                                  "title": "Classification",
                                  "orient": "bottom"
                              }
                          },
                          "detail": {"type": "nominal", "field": "index"},
                          "opacity": {"value": 0.3},
                          "x": {"type": "nominal", "field": "key"},
                          "y": {"type": "quantitative", "field": "norm_val", "axis": null},
                          "strokewidth": {"value": .5},
                          "tooltip": [{
                              "type": "quantitative",
                              "field": "Price"
                          }, {
                              "type": "quantitative",
                              "field": "RentPrice"
                          }],
                      },
                  },


                  {
                      "mark": "line",
                      "encoding": {
                          "color": {value: "white"},
                          "detail": {"type": "nominal", "field": "index"},
                          "opacity": {"condition": {"selection": "hover", "value": 1}, "value": 0},
                          "x": {"type": "nominal", "field": "key"},
                          "y": {"type": "quantitative", "field": "norm_val", "axis": null},
                      },
                      "tooltip": [{
                          "type": "quantitative",
                          "field": "Price"
                      }, {
                          "type": "quantitative",
                          "field": "RentPrice"
                      }],
                      "selection": {
                          "hover": {"type": "single", "on": "mouseover", "nearest": false, "empty": "none"}
                      }
                  },

                  {
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
                  },

                  {
                      "encoding": {
                          "x": {"type": "nominal", "field": "key"},
                          "y": {"value": 360}
                      },
                      "layer": [{
                          "mark": {"type": "text", "style": "label"},
                          "encoding": {
                              "text": {"aggregate": "min", "field": "mid"}
                          }
                      }, {
                          "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
                      }]
                  },

                  {
                      "encoding": {
                          "x": {"type": "nominal", "field": "key"},
                          "y": {"value": 750}
                      },
                      "layer": [{
                          "mark": {"type": "text", "style": "label"},
                          "encoding": {
                              "text": {"aggregate": "min", "field": "min"}
                          }
                      }, {
                          "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"}
                      }]
                  },
                  
              ],
          };

    vegaEmbed('#parallel-coord-polot-rent-vs-house-price-for-suburbs', parallelCoordChart);
}


const toggleBumpChart = (e) => {
    const visTopologyChartTemporalAnimationButton = document.getElementById("visTopologyChartTemporalAnimationButton");

    if (intervalId === null) {
        intervalId = setInterval(() => {
            currYearIdx = (currYearIdx + 1) % availableYears.length;
            UpdatevisTopologyYearSlider(availableYears[currYearIdx]);
            rerenderVisTopologyChart(availableYears[currYearIdx]);
        }, 500);

        visTopologyChartTemporalAnimationButton.innerHTML = "Stop ⏸";
    } else {
        clearInterval(intervalId);
        intervalId = null;

        visTopologyChartTemporalAnimationButton.innerHTML = "Play ▶";
    }  
};

let checkedSuburbs = new Set();

function filterData() {
    checkedSuburbs = new Set();

    const checkboxes = document.querySelectorAll('.parallel-coord-select');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const classfication = checkbox.id.replace(/_/g, ' ');
            checkedSuburbs.add(classfication);
        }
    });

    const filteredData = housePriceVsSuburbComprehensive.filter((item) => {
        return checkedSuburbs.has(item.Classification);
    });

    embedParallelCoordChart(filteredData);
}

document.addEventListener('DOMContentLoaded', (event) => { // Ensure DOM is fully loaded
    const checkboxes = document.querySelectorAll('.parallel-coord-select');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', filterData);
    });

    filterData();
});

