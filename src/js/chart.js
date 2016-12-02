var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "country": "Jan",
        "year2004": 3.5,
        "year2005": 4.2
    }, {
        "country": "Feb",
        "year2004": 1.7,
        "year2005": 3.1
    }, {
        "country": "March",
        "year2004": 2.8,
        "year2005": 2.9
    }, {
        "country": "April",
        "year2004": 2.6,
        "year2005": 2.3
    }, {
        "country": "May",
        "year2004": 1.4,
        "year2005": 2.1
    }, {
        "country": "June",
        "year2004": 2.6,
        "year2005": 4.9
    }, {
        "country": "July",
        "year2004": 6.4,
        "year2005": 7.2
    }, {
        "country": "Aug",
        "year2004": 8,
        "year2005": 7.1
    }, {
        "country": "Sep",
        "year2004": 9.9,
        "year2005": 10.1
    },
     {
        "country": "Oct",
        "year2004": 9.9,
        "year2005": 10.1
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
        "title": "Coneection Usage rate",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Connection Usage in [[category]] (This year): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2004",
        "type": "column",
        "valueField": "year2004"
    }, {
        "balloonText": "Connection Usage in [[category]] (Last year): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "valueField": "year2005"
    }],
    "plotAreaFillAlphas": 0.1,
    "depth3D": 60,
    "angle": 30,
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
        "enabled": true
     }
});
jQuery('.chart-input').off().on('input change',function() {
    var property    = jQuery(this).data('property');
    var target      = chart;
    chart.startDuration = 0;

    if ( property == 'topRadius') {
        target = chart.graphs[0];
        if ( this.value == 0 ) {
          this.value = undefined;
        }
    }

    target[property] = this.value;
    chart.validateNow();
});


$('.carousel').carousel();


