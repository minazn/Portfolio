$(function() {

  const titles = ["Portfolio","Technologys","About me"];
  const titles_id = ["#portfolio","#technologys", "#about"];

  for (let i=0; i<titles.length; i++){
    let split_title = titles[i].split("");
    $(titles_id[i]).html(`<li>[</li>`);
    for (let j=0; j<split_title.length;j++){
      if (split_title[j] == " "){
        $(titles_id[i]).append(`<li class="ghost">` + " &nbsp " + `</li>`);;
      }else{
      $(titles_id[i]).append(`<li class="ghost">` + split_title[j] + `</li>`);
      }
    }
    $(titles_id[i]).append(`<li>]</li>`);

  }

    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + 400;
      for (let val of titles_id){
        if (scroll >= $(val).position().top){
          $(val).removeClass("hidden");
        }else{
          $(val).addClass("hidden");
        }
      }
    });

    // $("#technology-tags").tagcloud({
    //     size: {
    //       start:12,
    //       end: 55,
    //       unit: "pt"
    //     },
    //     color: {
    //       start: "#aaa",
    //       end: "#000"
    //     }
    // })
  });

 
 