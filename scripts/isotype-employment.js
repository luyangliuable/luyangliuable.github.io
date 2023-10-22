const isotypeEmploymentYearOnChange = (e) => {
    console.log(e.target.value);

    embedIsotypeEmploymentChart(parseInt( e.target.value ));
    // UpdatevisTopologyYearDisplay(e.target.value);
    // rerenderVisTopologyChart(e.target.value);
    // currYearIdx = availableYears.indexOf(parseInt( e.target.value ));
};   

const embedIsotypeEmploymentChart = (year) => {
    const generateIsotypeValues = (dataset) => {
        const res = [];

        const employmentMales = Math.round(dataset["Employment Males"] / 100) * 100;
        const employmentFemales = Math.round(dataset["Employment Females"] / 100) * 100;

        for (var i = 0; i < employmentMales; i += 100) {
            res.push({"classification": "Gender", "Gender": "Male", "col": i/100 + 1});
        }

        for (var i = 0; i < employmentFemales; i += 100) {
            res.push({"classification": "Gender", "Gender": "Female", "col": i/100 + 1});
        }

        return res;
    };


    const isotypeEmploymentData = generateIsotypeValues( employmentRate.filter(item => item.year === year)[0] );


    var isotypeEmployment = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "width": 400,
        "background": "transparent",
        "title": {
            "text": `Comparison of Male and Female Employment in Units of 100 Employees for Year ${year}`,
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
                "calculate": "{'Male': '🧍‍♂️', 'Female': '🧍‍♀️'}[datum.Gender]",
                "as": "emoji"
            },
            {"window": [{"op": "rank", "as": "rank"}], "groupby": ["classification", "Gender"]}
        ],
        "data": { values: isotypeEmploymentData },
        "mark": {"type": "text", "baseline": "middle", "color": "white"},
        "encoding": {
            "x": {"field": "col", "type": "ordinal", "axis": {"grid": false}},
            "y": {"field": "Gender", "type": "ordinal", "axis": {"grid": false}},
            "text": {"field": "emoji", "type": "nominal"},
            "size": {"value": 50}
        }
    };

    vegaEmbed('#isotype-employment', isotypeEmployment);
}

document.addEventListener("DOMContentLoaded", function () {
    embedIsotypeEmploymentChart(2000);
});
