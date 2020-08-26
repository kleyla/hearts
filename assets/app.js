$(function () {
  $("#c6").click(function () {
    if ($(this).hasClass("show")) {
      $(".txt").remove();
      $(this).removeClass("show");
      $(this).addClass("hide");
    } else {
      $(this).addClass("show");
      var texto = '<h1 class="txt">Hola!</h1>';
      $(this).after(texto);
    }
  });

  $("#c5").click(function () {
    if ($(this).hasClass("show")) {
      $(".txt").remove();
      $(this).removeClass("show");
      $(this).addClass("hide");
    } else {
      //   console.log("bye");
      $(this).addClass("show");
      var texto =
        '<h1 class="txt">Recordarte que <br> te quiero mucho</h1>';
      $(this).after(texto);
    }
  });

  $("#c4").click(function () {
    if ($(this).hasClass("show")) {
      $(".txt").remove();
      $(this).removeClass("show");
      $(this).addClass("hide");
    } else {
      //   console.log("bye");
      $(this).addClass("show");
      var texto = '<h1 class="txt">Mas <br>mensajes</h1>';
      $(this).after(texto);
    }
  });

  $("#c3").click(function () {
    if ($(this).hasClass("show")) {
      $(".txt").remove();
      $(this).removeClass("show");
      $(this).addClass("hide");
    } else {
      //   console.log("bye");
      $(this).addClass("show");
      var texto = '<h1 class="txt">Mas <br> gracias! </h1>';
      $(this).after(texto);
    }
  });

  $("#c2").click(function () {
    if ($(this).hasClass("show")) {
      $(".txt").remove();
      $(this).removeClass("show");
      $(this).addClass("hide");
    } else {
      //   console.log("bye");
      $(this).addClass("show");
      var texto = '<h1 class="txt">mas <br>mensajes</h1>';
      $(this).after(texto);
    }
  });

  $("#c1").click(function () {
    if ($(this).hasClass("show")) {
      $(".txt").remove();
      $(this).removeClass("show");
      $(this).addClass("hide");
    } else {
      //   console.log("bye");
      $(this).addClass("show");
      var texto = '<h1 class="txt">Bye. <br> Atte. Karen</h1>';
      $(this).after(texto);
    }
  });
});
