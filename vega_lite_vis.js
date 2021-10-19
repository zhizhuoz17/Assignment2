var vg_1 = "map.vg.json";
var vg_2 = "scatter_average_rate.vg.json";
var vg_3 = "splom_subdivisions.vg.json";
var vg_4 = "policebudget.vg.json"

vegaEmbed("#map", vg_1).then(function(result){
}).catch(console.error);

vegaEmbed("#scatter", vg_2).then(function(result){
}).catch(console.error);

vegaEmbed("#splom", vg_3).then(function(result){
}).catch(console.error);

vegaEmbed("#line", vg_4).then(function(result){
}).catch(console.error);