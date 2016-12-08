var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "country": "Jan",
        "year2005": 420
    }, {
        "country": "Feb",

        "year2005": 301
    }, {
        "country": "March",
    
        "year2005": 290
    }, {
        "country": "April",
  
        "year2005": 230
    }, {
        "country": "May",

        "year2005": 210
    }, {
        "country": "June",

        "year2005": 409
    }, {
        "country": "July",
 
        "year2005": 720
    }, {
        "country": "Aug",
  
        "year2005": 710
    }, {
        "country": "Sep",
      
        "year2005": 101
    },
     {
        "country": "Oct",
       
        "year2005": 101
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "$",
        "position": "right",
        "title": "Bill Amount",
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "Bill Amount in [[category]] (This year): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2004",
        "type": "column",
        "valueField": "year2004"
    }, {
        "balloonText": "Bill Amount in [[category]] : <b>[[value]]</b>",
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


$(function() {
  $('form.require-validation').bind('submit', function(e) {
    var $form         = $(e.target).closest('form'),
        inputSelector = ['input[type=email]', 'input[type=password]',
                         'input[type=text]', 'input[type=file]',
                         'textarea'].join(', '),
        $inputs       = $form.find('.required').find(inputSelector),
        $errorMessage = $form.find('div.error'),
        valid         = true;

    $errorMessage.addClass('hide');
    $('.has-error').removeClass('has-error');
    $inputs.each(function(i, el) {
      var $input = $(el);
      if ($input.val() === '') {
        $input.parent().addClass('has-error');
        $errorMessage.removeClass('hide');
        e.preventDefault(); // cancel on first error
      }
    });
  });
});

$(function() {
  var $form = $("#payment-form");

  $form.on('submit', function(e) {
    if (!$form.data('cc-on-file')) {
      e.preventDefault();
      Stripe.setPublishableKey($form.data('stripe-publishable-key'));
      Stripe.createToken({
        number: $('.card-number').val(),
        cvc: $('.card-cvc').val(),
        exp_month: $('.card-expiry-month').val(),
        exp_year: $('.card-expiry-year').val()
      }, stripeResponseHandler);
    }
  });

  function stripeResponseHandler(status, response) {
    if (response.error) {
      $('.error')
        .removeClass('hide')
        .find('.alert')
        .text(response.error.message);
    } else {
      // token contains id, last4, and card type
      var token = response['id'];
      // insert the token into the form so it gets submitted to the server
      $form.find('input[type=text]').empty();
      $form.append("<input type='hidden' name='reservation[stripe_token]' value='" + token + "'/>");
      $form.get(0).submit();
    }
  }
})