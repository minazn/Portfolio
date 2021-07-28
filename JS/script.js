const titles = ["Portfolio","What are Codereviews?","Technologys","About me"];
const titles_id = ["#portfolio","#codereview","#technologys", "#about"];
const nav_class = [".focus-hero",".focus-portfolio", ".focus-technology", ".focus-about"]

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

new Technology("C/C++", "c", "I started with probably one of the most popular coding languages C & C++. I mainly coded mathematical solutions such as the derivative of linear and non-linear functions, or mathematical operators for matrices. But also simple game programs like Hangman were involved.");
new Technology("C/C++", "c++", "I started with probably one of the most popular coding languages C & C++. I mainly coded mathematical solutions such as the derivative of linear and non-linear functions, or mathematical operators for matrices. But also simple game programs like Hangman were involved.");
new Technology("Matlab","matlab","All necessary mathematical operators are already predefined in Matlab. Here I  solved more complex math problems and created graphs. At my former employer arithmetica, statistical evaluations such as distribution fitting were my main tasks with Matlab. And it was my first time coding object oriented.");
new Technology("R", "r", "R is probably the most widely used technology among statisticians. I used R to create statistical diagrams and evaluations both at university and for my former employee. That's how I discovered the world of librarys for the first time.");
new Technology("LaTex", "latex", "When you want to write a long, technical document, LaTex becomes a good friend. Many symbols are predefined with simple key combinations and are easier to use than in other text editors such as Word. My bachelor thesis wasn't the only document, that I wrote with LaTex.");
new Technology("Maple", "maple", "Compared to Matlab, Maple offers a more user friendly way to code complex mathematical solutions, as it works like a calculator for mathematicians, who want to see the result of their code right after the command.");
new Technology("Wordpress/Jimdo", "wordpress", "Probably the most simplest way to get into Webdesign is Wordpress and Jimdo. I startet my first Wordpress project in 2020 and came to the conclusion that I want to dig deeper into this subject. Moreover, I prefer having control over what is happening in the background. That's how I jumped into Frontend.");
new Technology("Angular", "angular", "Let me say only this: I got the idea of Angular :)");
new Technology("HTML/CSS", "html", "I already disovered HTML and CSS in my Wordpress project. As they both are no coding languages, I got into it very quickly. In CodeFactory I additionally learned SCSS and SASS. I have to admit, that SCSS is my favorite styling technology.");
new Technology("JavaScript/Typescript", "js", "When I first got into JavaScript, I already spoke seven different programming languages. So it was very easy for me to get started. Since it has a lot of libraries and methods, I am still a junior JavaScript developer.");
new Technology("JavaScript/Typescript", "ts", "When I first got into JavaScript, I already spoke seven different programming languages. So it was very easy for me to get started. Since it has a lot of libraries and methods, I am still a junior JavaScript developer.");
new Technology("HTML/CSS", "css", "I already disovered HTML and CSS in my Wordpress project. As they both are no coding languages, I got into it very quickly. In CodeFactory I additionally learned SCSS and SASS. I have to admit, that SCSS is my favorite styling technology.");
new Technology("VBA", "vba", "How many companies do use Excel? I stopped counting. When I got into banking after my studies, I quickly learned the VBA language as I already had experience in coding. It is a very useful technology for solving Excel problems, like formatting, designing tables, etc.");
new Technology("Wordpress/Jimdo", "jimdo", "Probably the most simplest way to get into Webdesign is Wordpress and Jimdo. I startet my first Wordpress project in 2020 and came to the conclusion that I want to dig deeper into this subject. Moreover, I prefer having control over what is happening in the background. That's how I jumped into Frontend.");



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
      var scroll = $(window).scrollTop() +750;


      $(nav_class[0]).addClass("focus");
      for (let i=1; i<nav_class.length;i++){
        let pos = 0;
        if (titles_id[i] == "#codereview"){
          pos = $(titles_id[i-1]).position().top;
        }else{
          pos = $(titles_id[i]).position().top;
        }

        if (scroll <= pos){
          $(nav_class[i]).removeClass("focus");
        }else{    
          $(nav_class[i]).addClass("focus");
          $(nav_class[i-1]).removeClass("focus");
        }
      }
    });

    console.log($(titles_id[0]).position().top);
    console.log($(titles_id[1]).position().top);
    console.log($(titles_id[2]).position().top);
    console.log($(titles_id[3]).position().top);

  });


 
 