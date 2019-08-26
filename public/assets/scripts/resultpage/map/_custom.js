$("#dtdrang").ionRangeSlider({
    min: 0,
    max: 150,
    from: 5
});
$("#dtdsdrang").ionRangeSlider({
    min: 0,
    max: 150,
    from: 5
});
$(document).on('click.bs.dropdown', '.filter__content', function (e) {
    e.stopPropagation();
  });
  $("#beds .dropdown-menu a").click(function(){

      $(this).parents("#beds").find(".filter--text").text("Phòng ngủ: "+$(this).text());
  });
  $(function () {
      
      $('.filterMoreProject input').on('click', function() {

        $('.filterMoreProject .filter--text').text("Thêm: "+$(".filterMoreProject input:checked").length );
      }).triggerHandler("click"); // handle reload and initial counter
  });
  $("#fileTypeProperties .check").click(function(){
      var text="";
      $("#fileTypeProperties .check").each(function(){
          if($(this).is(":checked")){
              text+=$(this).parent().find(".name").text() + ", ";
          }
      });
       $('#fileTypeProperties .filter--text').text(text);
      console.log(text);
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })