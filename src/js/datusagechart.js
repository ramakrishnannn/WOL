 var chart1 = AmCharts.makeChart( "chartdatausage", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "Balance Data",
    "value": 4852
  }, {
    "title": "Total Consumed",
    "value": 9899
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );


 $(document).ready(function() {
    $('#example').DataTable();
    $('#example1').DataTable();
} );