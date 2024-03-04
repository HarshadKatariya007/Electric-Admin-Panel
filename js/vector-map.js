$(function(){
    var colorGroups = [0, 0.5, 0.8, 1, 2, 3, 50, 100];
    var vmap = $("#vector-map").dxVectorMap({
        bounds: [-180, 85, 180, -60],
        layers: {
            name: "areas",
            dataSource: DevExpress.viz.map.sources.world,
            palette: "Violet",
            colorGroups: colorGroups,
            colorGroupingField: "population",
            customize: function (elements) {
                $.each(elements, function (_, element) {
                    element.attribute("population", populations[element.attribute("name")]);
                });
            }
        },
        legends: [{
            source: { layer: "areas", grouping: "color" },
            customizeText: function (arg) {
								var text;
								text = DevExpress.localization.formatNumber(arg.start, "#,##0") + " - " + DevExpress.localization.formatNumber(arg.end, "#,##0");
								return text;
							}
        }],
        tooltip: {
            enabled: true,
            customizeTooltip: function(arg) {
                if (arg.attribute("population")) {
                    return { text: arg.attribute("name") + ": " + arg.attribute("population") + "% of world population" };
                }
            }
        }
    }).dxVectorMap("instance");
  $("#btn").dxButton({
        stylingMode: "outlined",
        text: "change",
        type: "normal",
        width: 120,
        onClick: function() {
            populations["China"] = 50;
            let elements = vmap.getLayers()[0].getElements();

            for(let element of elements) {
                element.attribute("population", populations[element.attribute("name")]);
            }

            vmap.option("layers[0].colorGroups", [0, 0.5, 0.8, 1, 2, 3, 150]);
        }
    });
});




var populations = {
    "China": 19,
    "India": 17.4,
    "United States": 4.44,
    "Indonesia": 3.45,
    "Brazil": 2.83,
    "Pakistan": 2.62,
    "Nigeria": 2.42,
    "Bangladesh": 2.18,
    "Russia": 2.04,
    "Japan": 1.77,
    "Mexico": 1.67,
    "Philippines": 1.39,
    "Vietnam": 1.25,
    "Ethiopia": 1.23,
    "Egypt": 1.21,
    "Germany": 1.13,
    "Iran": 1.08,
    "Turkey": 1.07,
    "Congo (Kinshasa)": 0.94,
    "France": 0.92,
    "Thailand": 0.9,
    "United Kingdom": 0.89,
    "Italy": 0.85,
    "Burma": 0.84,
    "South Africa": 0.74,
    "S. Korea": 0.7,
    "Colombia": 0.66,
    "Spain": 0.65,
    "Tanzania": 0.63,
    "Kenya": 0.62,
    "Ukraine": 0.6,
    "Argentina": 0.59,
    "Algeria": 0.54,
    "Poland": 0.54,
    "Sudan": 0.52,
    "Canada": 0.49,
    "Uganda": 0.49,
    "Iraq": 0.47,
    "Morocco": 0.46,
    "Uzbekistan": 0.43
};
