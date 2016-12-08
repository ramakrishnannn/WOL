var chart = AmCharts.makeChart( "chartdatausage", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "country": "Used",
    "value": 260
  }, {
    "country": "Available",
    "value": 201
  }],
  "valueField": "value",
  "titleField": "country",
  "outlineAlpha": 0.4,
  "depth3D": 15,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]] MB</b> )</span>",
  "angle": 30,
  "export": {
    "enabled": true
  }
} );