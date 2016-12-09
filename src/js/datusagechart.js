var chart = AmCharts.makeChart( "chartdatausage", {
  "type": "pie",
  "theme": "light",
  "titles": [ {
    "text": "",
    "size": 16
  } ],
  "dataProvider": [ {
    "Type": "International calls",
    "calls": 7252
  }, {
    "Type": "Operator calls",
    "calls": 3882
  }, {
    "Type": "Domestic calls",
    "calls": 1809
  }],
  "valueField": "calls",
  "titleField": "Type",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );