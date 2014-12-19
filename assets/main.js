var data = [
  {
    axes: [
      {axis: "Personality", value: 8}, 
      {axis: "Lifestyle", value: 6}, 
      {axis: "Physical", value: 3},  
      {axis: "General", value: 4},  
      {axis: "Other's Feelings", value: 3},
      {axis: "Occupation", value: 4}
    ]
  }
];

function randomDataset() {
  return data.map(function(d) {
    return {
      className: d.className,
      axes: d.axes.map(function(axis) {
        return {axis: axis.axis, value: Math.ceil(Math.random() * 10)};
      })
    };
  });
}
RadarChart.defaultConfig.color = function() {};
RadarChart.defaultConfig.radius = 3;
var chart = RadarChart.chart();
var cfg = chart.config();
cfg.w = 200;
cfg.h = 200;
cfg.circles = false;
 var svg = d3.selectAll('#profile').append('svg')
    .attr('width', cfg.w)
    .attr('height', cfg.h + cfg.h / 4);
  svg.append('g').classed('single', 1).data(
    [
      randomDataset(),
      randomDataset(),
      randomDataset(),
      randomDataset(),

    ]).call(chart);

var chart = RadarChart.chart();
var cfg = chart.config();
cfg.w = 375;
cfg.h = 375;
cfg.circles = false;
 var svg = d3.selectAll('#graph').append('svg')
    .attr('width', cfg.w)
    .attr('height', cfg.h + cfg.h / 4);
  svg.append('g').classed('single', 1).datum(data).call(chart);

var pers = [
  [12, "Charismatic"]
  , [13, "Disciplined"]
  , [15, "Kind"]
];

var life = [
  [10, "Traveler"]
  , [8, "Foodie"]
];

var phys = [
  [4, "Athletic"]
  , [2, "Balanced"]
  , [3, "Quick"]
];

var gen = [
  [6, "Street-smart"]
  , [5, "In control"]
];

var others = [
  [5, "Admired"]
  , [2, "Envied"]
];

var occupation = [
  [3, "Consultant"]
  , [2, "Mountaineer"]
];

d3.selectAll("#bar1")
  .selectAll("div")
    .data(pers)
  .enter().append("div")
    .style("width", function(d) { return d[0] * 12 + "px"; })
    .text(function(d) { return d[1]; });

d3.selectAll("#bar2")
  .selectAll("div")
    .data(life)
  .enter().append("div")
    .style("width", function(d) { return d[0] * 12 + "px"; })
    .text(function(d) { return d[1]; });

d3.selectAll("#bar3")
  .selectAll("div")
    .data(phys)
  .enter().append("div")
    .style("width", function(d) { return d[0] * 12 + "px"; })
    .text(function(d) { return d[1]; });

d3.selectAll("#bar4")
  .selectAll("div")
    .data(others)
  .enter().append("div")
    .style("width", function(d) { return d[0] * 12 + "px"; })
    .text(function(d) { return d[1]; });

d3.selectAll("#bar5")
  .selectAll("div")
    .data(others)
  .enter().append("div")
    .style("width", function(d) { return d[0] * 12 + "px"; })
    .text(function(d) { return d[1]; });

d3.selectAll("#bar6")
  .selectAll("div")
    .data(occupation)
  .enter().append("div")
    .style("width", function(d) { return d[0] * 12 + "px"; })
    .text(function(d) { return d[1]; });


$('#add').click(function() {
  $('.overlay').css('display', 'block');
  $('.create').css('display', 'block');
  $('body').addClass('noscroll');
});

$('.overlay').click(function() {
  $('.overlay').css('display', 'none');
  $('.create').css('display', 'none');
  $('body').removeClass('noscroll');
});

$('#submit').click(function() {
  $('.overlay').css('display', 'none');
  $('.create').css('display', 'none');
  $('body').removeClass('noscroll');
});

$(':button').click(function() {
  var current = $('textarea').val();
  var text = current + ' ' + '#' + $(this).html();
  $('textarea').val(text);
});

$('#post').click(function() {
  $('textarea').val('');
});

