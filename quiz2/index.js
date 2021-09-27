var quiz = [
    {
        "idd":"1",
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
        "idd":"2",
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
        "idd":"3",
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
  var question=document.querySelector('.question');
  var opt1=document.querySelector('#input-opt1');
  var opt2=document.querySelector('#input-opt2');
  var opt3=document.querySelector('#input-opt3');
  var opt4=document.querySelector('#input-opt4');
  var label1=document.querySelector('#opt1')
  var label2=document.querySelector('#opt2')
  var label3=document.querySelector('#opt3')
  var label4=document.querySelector('#opt4')
  var submitBtn=document.querySelector('#submit-btn')
  const quizForm=document.querySelector('.question-container')
  var i=0;
  function display(){
  
    question.innerHTML=quiz[i].question;
    label1.innerHTML=quiz[i].choices[0];
    label2.innerHTML=quiz[i].choices[1];
    label3.innerHTML=quiz[i].choices[2];
    label4.innerHTML=quiz[i].choices[3];

    // opt1.setAttribute("name",quiz[i].idd);
    // opt2.setAttribute("name",quiz[i].idd);
    // opt3.setAttribute("name",quiz[i].idd);
    // opt4.setAttribute("name",quiz[i].idd);
    opt1.name=`${quiz[i].idd}`
    opt2.name=`${quiz[i].idd}`
    opt3.name=`${quiz[i].idd}`
    opt4.name=`${quiz[i].idd}`
    
    opt1.value=`${quiz[i].choices[0]}`
    opt2.value=`${quiz[i].choices[1]}`
    opt3.value=`${quiz[i].choices[2]}`
    opt4.value=`${quiz[i].choices[3]}`


    i++;
  }

  function displayNextQuestions(){
      if(i<quiz.length){
    question.innerHTML=quiz[i].question;
    label1.innerHTML=quiz[i].choices[0];
    label2.innerHTML=quiz[i].choices[1];
    label3.innerHTML=quiz[i].choices[2];
    label4.innerHTML=quiz[i].choices[3];
    // opt1.setAttribute("value",`${quiz[i].idd}`);
    // opt2.setAttribute("value",`${quiz[i].idd}`);
    // opt3.setAttribute("value",`${quiz[i].idd}`);
    // opt4.setAttribute("value",`${quiz[i].idd}`);
    opt1.name=`${quiz[i].idd}`
    opt2.name=`${quiz[i].idd}`
    opt3.name=`${quiz[i].idd}`
    opt4.name=`${quiz[i].idd}`
    
    opt1.value=`${quiz[i].choices[0]}`
    opt2.value=`${quiz[i].choices[1]}`
    opt3.value=`${quiz[i].choices[2]}`
    opt4.value=`${quiz[i].choices[3]}`
    i++;
      } else{
       const FormResults=new FormData(quizForm)
       console.log(FormResults)
          for(let value of FormResults.values()){
              console.log(value)
          }
      }
  }
submitBtn.addEventListener("click",displayNextQuestions)
  display();