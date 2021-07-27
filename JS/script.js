const titles = ["Portfolio","What are Codereviews?","Technologys","About me"];
const titles_id = ["#portfolio","#codereview","#technologys", "#about"];

var technology_list = [];

class Technology {
  constructor(title, id, description) {
    this.title = title;
    this.id = id;
    this.description = description;
    technology_list.push(this);
  }

  writeTechnologyCard() {
    document.getElementById("technology-title").innerHTML = this.title;
    document.getElementById("technology-description").innerHTML = this.description;
  }
}

new Technology("C/C++", "c", "Lorem ipsum");
new Technology("C/C++", "c++", "Si ipsum");
new Technology("Matlab","matlab","Tada");
new Technology("R", "r", "yes");
new Technology("LaTex", "latex", "5");
new Technology("Maple", "maple", "no");
new Technology("Wordpress", "wordpress", "wp");
new Technology("Angular", "angular", "angular");
new Technology("HTML", "html", "html");
new Technology("JavaScript", "js", "JS");
new Technology("TypeScript", "ts", "TS");
new Technology("CSS3 & SCSS", "css", "css");
new Technology("VBA", "vba", "vba");
new Technology("Jimdo", "jimdo", "jimdo");



for (let val of technology_list){
  document.getElementById(val.id).addEventListener("click", function(){
   val.writeTechnologyCard()});
}

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

  });


 
 