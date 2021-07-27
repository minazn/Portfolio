const titles = ["Portfolio","What are Codereviews?","Technologys","About me"];
const titles_id = ["#portfolio","#codereview","#technologys", "#about"];

const technologys = [{
  title: "C/C++",
  id: "c",
  description: "1"
},{
  title: "C/C++",
  id: "c++",
  description: "2"
},{
  title: "Matlab",
  id: "matlab",
  description: "3"
},{
  title: "R",
  id: "r",
  description: "4"
},{
  title: "LaTex",
  id: "latex",
  description: "5"
},{
  title: "Maple",
  id: "maple",
  description: ""
},{
  title: "Wordpress",
  id: "wordpress",
  description: ""
},{
  title: "Angular",
  id: "angular",
  description: ""
},{
  title: "HTML",
  id: "html",
  description: ""
},{
  title: "JavaScript",
  id: "js",
  description: ""
},{
  title: "TypeScript",
  id: "ts",
  description: ""
},{
  title: "CSS3 & SCSS",
  id: "css",
  description: ""
}];

// responsive hamburger navbar
function toggleMenu() {
	$('.hamburger-shell').toggleClass('menu-open');
  $('#hamburger').toggleClass('menu-open');
}

function writeTechnologyDescription(obj){
  document.getElementById("technology-title").innerHTML = obj.title;

  document.getElementById("technology-description").innerHTML = obj.description;
}

for (let val of technologys){
  document.getElementById(val.id).addEventListener("click", function(){
    writeTechnologyDescription(val)});
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

 console.log(technologys[0].id);

 
 