const graphSettings = {
    width: 400,
    height: 250,
    schema: "https://vega.github.io/schema/vega-lite/v5.json"
};

function resizeCanvasToParent() {
    const canvases = document.querySelectorAll('canvas');

    canvases.forEach((canvas) => {
        var rect = canvas.parentNode.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    });
}

