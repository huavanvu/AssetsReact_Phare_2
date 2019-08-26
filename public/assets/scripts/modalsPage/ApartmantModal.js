$("#chart").highcharts({
    chart: {
        type: 'pie',
        style: {
            fontFamily: 'Arial'
        }
    },
    title: {
        text: null,
    },
    yAxis: {
        title: {
            text: null,
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer'
            }
        },
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Browsers',
        colorByPoint: true,
        data: [{
            name: "Trả gốc",
            y: 10
        }, {
            name: "Trả lãi",
            y: 90
        }],
        colors: ["#3b63a1", "#e8bb20"],
        innerSize: '80%',
        showInLegend: false,
        dataLabels: {
            enabled: false,
            format: ' {point.percentage:.1f} %',
            style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
        }
    }]
});
$("#chart-ls").highcharts({

    title: {
        text: null
    },

    subtitle: {
        text: null
    },

    yAxis: {
        opposite: true,
        title: {
            text:null
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2003,
            marker: {
                enabled: false
            }
        }
    },

    series: [{
        name: 'Installation',
        showInLegend: false,
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175,119931, 135133, 114275],
        dashStyle: 'dash',
         color: '#1a73e8',
    }],


});
jQuery(document).ready(function($) {
    $('.list-realestate').slick({
        dots: false,
        arrows:false,
        infinite: true,
        swipeToSlide: false,
        focusOnSelect: false,
        speed: 300,
        slidesToShow: 3,
        draggable: true,
        variableWidth: true,
    });
    $('#navapartment .btn-prev').click(function(){
      $('.list-realestate').slick('slickPrev');
    })

    $('#navapartment .btn-next').click(function(){
      $('.list-realestate').slick('slickNext');
    })
    $('#myModal').on('shown.bs.modal', function (e) {
        $('.list-realestate').slick("refresh");
    })
});
$(".tabs a").click(function(){
    $('.list-realestate').slick("refresh");
});
$(".btn-expand").click(function(){
    $(".box-info-bottom").css({"display":"none"});
    $("#content").css({"display":"block"});
    $('.list-realestate').slick("refresh");

});
$(".btn-collapse").click(function(){
    $(".box-info-bottom").css({"display":"block"});
    $("#content").css({"display":"none"});
});
$(".box-tt-chung .head-top").click(function(){
    $(this).parent().toggleClass("open");
});
$(".section .icon-collapse").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".section").find(".section-content").toggleClass("collapse");
});
$(".table-lichsugia .btn-down").click(function () {
    $(".table-lichsugia tr.detail").removeClass("opened");
    if ($(this).hasClass("active")) {

        $(this).parents("tr").find("+ .detail").removeClass("opened");
        $(this).removeClass("active");
    } else {
        $(this).parents("tr").find("+ .detail").addClass("opened");
        $(this).addClass("active");
    }

});