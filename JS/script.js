const titles = ["Portfolio","Technologys","About me"];
const titles_id = ["#portfolio","#technologys", "#about"];

// responsive hamburger navbar
function toggleMenu() {
	$('.hamburger-shell').toggleClass('menu-open');
  $('#hamburger').toggleClass('menu-open');
}

$(function() {

  $('.hamburger-shell').click(toggleMenu);

  for (let i=0; i<titles.length; i++){
    //for the sectiontitle animation, I need to split the strings in letters
    let split_title = titles[i].split("");
    //creating lists of letters
    for (let j=0; j<split_title.length;j++){
      if (split_title[j] == " "){ //otherwise it will return "Aboutme" instead of "About me"
        $(titles_id[i]).append(`<li class="ghost">` + " &nbsp " + `</li>`);;
      }else{
      $(titles_id[i]).append(`<li class="ghost">` + split_title[j] + `</li>`);
      }
    }

  }
    //scroll animation
    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + 750;
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

 
 