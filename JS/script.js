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

new Technology("C/C++", "c", "I started with probably one of the oldest coding languages C & C++. I mainly coded mathematical solutions such as the derivative of linear and non-linear functions, or mathematical operators for matrices. But also simple game programs like Hangman were involved.");
new Technology("C/C++", "c++", "I started with probably one of the oldest coding languages C & C++. I mainly coded mathematical solutions such as the derivative of linear and non-linear functions, or mathematical operators for matrices. But also simple game programs like Hangman were involved.");
new Technology("Matlab","matlab","All necessary mathematical operators are already predefined in Matlab. Here I  solved more complex math problems and created graphs. At my former employer arithmetica, statistical evaluations such as distribution fitting were one of my first tasks with Matlab. And here I also got into object oriented programming and started participating in developing a complex software for reinsurance companys.");
new Technology("R", "r", "R seems to be the most widely used technology among statisticians. I used R to create statistical diagrams and evaluations both at university and for my former employee. That's how I discovered the world of librarys for the first time.");
new Technology("LaTex", "latex", "When you want to write a long, technical document, LaTex becomes a good friend. Many symbols are predefined with simple key combinations and are easier to use than in other text editors such as Word. My bachelor thesis wasn't the only document, that I wrote with LaTex.");
new Technology("Maple", "maple", "Compared to Matlab, Maple offers a more user friendly way to code complex mathematical solutions, as it works like a calculator for mathematicians, who want to see the result of their code right after the command.");
new Technology("Wordpress/Jimdo", "wordpress", "One simple way to get into Webdesign is with Wordpress. I startet my first Wordpress project in 2020 and came to the conclusion that I want to dig deeper into this subject. Moreover, I prefer having control over what is happening in the background. That's how I jumped into Frontend.");
new Technology("Angular", "angular", "The first frontend framework I learned. The fact, that pages do not have to load, after clicking on them, makes me want to code with it more often. It seemed very complicated at the beginning, but by time I learned to make friends with it.");
new Technology("HTML/CSS", "html", "I already disovered HTML and CSS in my Wordpress project. As they both are no coding languages, I got into it very quickly. In CodeFactory I additionally learned SCSS and SASS. I have to admit, that SCSS is my favorite styling technology.");
new Technology("JavaScript/Typescript", "js", "When I first got into JavaScript, I already spoke seven different programming languages. So it was very easy for me to get started. I rather code with Javascript/Typescript dynamically, than hardcoding on HTML, unless the structure does not repeat itself.");
new Technology("JavaScript/Typescript", "ts", "When I first got into JavaScript, I already spoke seven different programming languages. So it was very easy for me to get started. I rather code with Javascript/Typescript dynamically, than hardcoding on HTML, unless the structure does not repeat itself.");
new Technology("HTML/CSS", "css", "I already disovered HTML and CSS in my Wordpress project. As they both are no coding languages, I got into it very quickly. In CodeFactory I additionally learned SCSS and SASS. I have to admit, that SCSS is my favorite styling technology.");
new Technology("VBA", "vba", "How many companies do use Excel? I stopped counting. When I got into banking after my studies, I quickly learned the VBA language as I already had experience in coding. It is a very useful technology for solving Excel problems, like formatting, designing tables, etc.");
new Technology("Wordpress/Jimdo", "jimdo", "One simple way to get into Webdesign is with Wordpress. I startet my first Wordpress project in 2020 and came to the conclusion that I want to dig deeper into this subject. Moreover, I prefer having control over what is happening in the background. That's how I jumped into Frontend.");
new Technology("SQL","sql","When it comes to databases, SQL can make life easyer. I used SQL when I was working in a bank. For the data comparison I have selected the necessary ones from a database, using classical commands like <i>join</i> or <i>distinct</i>.")
new Technology("Git","git","Yes, I know, how to commit, push and pull. If needed I can merge conflicts.")
new Technology("React","react","The second single-page framework I learned and still learn. I usually code with ES6, using e.g. map() instead of using a for loop.")


for (let val of technology_list){
  document.getElementById(val.id).addEventListener("click", function(){
   val.writeTechnologyCard()});
}

// responsive hamburger navbar
function toggleMenu() {
	$('.hamburger-shell').toggleClass('menu-open');
  $('#hamburger').toggleClass('menu-open');
}

//scroll to portfolio after clicking button
document.getElementById("portfolio-btn").addEventListener("click", function(){ scrollTo("portfolio")});

function scrollTo(hash) {
  location.hash = "#" + hash;
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

  });


 
 