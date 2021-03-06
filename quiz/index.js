var quiz = [
  {
      "question"      :   "Q1: Who came up with the theory of relativity?",
      "image"         :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
      "choices"       :   [
                              "Sir Isaac Newton",
                              "Nicolaus Copernicus",
                              "Albert Einstein",
                              "Ralph Waldo Emmerson"
                          ],
      "correct"       :   "Albert Einstein",
      "explanation"   :   "Albert Einstein drafted the special theory of relativity in 1905.",
  },
  {
      "question"      :   "Q2: Who is on the two dollar bill?",
      "image"         :   "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
      "choices"       :   [
                              "Thomas Jefferson",
                              "Dwight D. Eisenhower",
                              "Benjamin Franklin",
                              "Abraham Lincoln"
                          ],
      "correct"       :   "Thomas Jefferson",
      "explanation"   :   "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note.",
  },
  {
      "question"      :   "Q3: What event began on April 12, 1861?",
      "image"         :   "",
      "choices"       :   [
                              "First manned flight",
                              "California became a state",
                              "American Civil War began",
                              "Declaration of Independence"
                          ],
      "correct"       :   "American Civil War began",
      "explanation"   :   "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865.",
  },

];
var submitBtn=document.querySelector("#submit-btn")
var quizForm=document.querySelector(".question-container")
const correctAns=["Albert Einstein","Thomas Jefferson"]
const op=document.querySelector(".output")
function submitAnswers(e){
   
  const formResults=new FormData(quizForm);
  let i=0;
  let score=0;
  for(let value of formResults.values()){
      if(value==correctAns[i]){
          score++;
      }
      i++;
  }
  op.innerHTML="Your score is : "+score;
}

submitBtn.addEventListener("click",submitAnswers);