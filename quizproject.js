let currentQuestion = 0;
let score = 0;
let hints = 0; // counter for hints shown
let maxHints = 3; // max hints to show

let questions = [
   {
	"question": "In what century does the series take place?",
	"a": "24th century",
	"b": "22th century",
	"c": "26th century",
	"d": "28th century",
	"image": "quizimages/q1.jpg",
	"hint": "Hint 1",
	"answer": "a"
   },
   {
	"question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
	"a": "The Ferengi",
	"b": "The Cardassians",
	"c": "The Borg",
	"d": "The Romulans",
	"image":"quizimages/q2.jpg",
	"hint": "Hint 2",
	"answer": "c"
   },
   {
	"question": "What is the name of this character?",
	"a": "George",
	"b": "Borgy",
	"c": "Hugh",
	"d": "Q",
	"image":"quizimages/q2.jpg",
	"hint": "Hint 3",
	"answer": "c"
   }
 ];
 
 
 window.onload = function () {
	document.getElementById("hintButton").onclick = getHintF; 
 
    loadQuestion();
 };
 
 // show hint for current question if max not reached
 let getHintF = function() {
	console.log("hint button clicked"); 
	document.getElementById("hintButton").onclick = null;
	 
	// if max hints not reached
	if (hints < maxHints) {
		
		// get hint for current question
		let currentHint = questions[currentQuestion].hint;
		
		// show in page
		document.getElementById("hint").innerHTML = currentHint + "<br>You have " + (maxHints - hints-1) + " hints left."; ;
		
		// increment hints shown
		hints++;
	} else {
		// show a message that there are no hints left
	}
 };
 
 // load a new question
 function loadQuestion() {
    
	document.getElementById("hintButton").onclick = getHintF;
		
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 
    // reset the hint box
	document.getElementById("hint").innerHTML = "You have " + (maxHints - hints) + " hints left.";
 
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
	   
	   // add ability to restart quiz
	   message += "<div id='restart' onclick='restartQuiz()'>Restart Quiz</div>";
	   
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function restartQuiz() {
	 location.reload();
 } // restartQuiz
 
 
 
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 
 
 
 
 
 
 
 
 
   
