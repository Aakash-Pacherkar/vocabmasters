let questions =[
    {
        id:1,
        question:"Modest",
        answer:"humble",
        options: [
            "hustle",
            "hurry",
            "humble",
            "solemn",
        ]
    },
    {
        id:2,
        question:"Custom",
        answer:"habbit",
        options: [
            "serious",
            "imply",
            "habbit",
            "wander",
        ]
    },
    {
        id:3,
        question:"Prolong",
        answer:"extend",
        options: [
            "beneficial",
            "extend",
            "flare",
            "blaze",
        ]
    },
];




var nextbtn=document.querySelector("#nextbtn");//next button
var question=document.querySelector("#que");//questions
var startbtn=document.querySelector("#startbtn");//startbtn
var txtbx=document.querySelector("#username");//textbox
var iphead=document.querySelector("#ipheading");//name text
var res=document.querySelector("#result");//result
var showans=document.querySelector("#showans");//showansbtn

var unhideansbody1=document.querySelector("#showansbody1");//showansbody
var unhideansbody2=document.querySelector("#showansbody2");//showansbody
var unhideansbody3=document.querySelector("#showansbody3");//showansbody

var tryagainbtn=document.querySelector("#tryagainbtn");//tryagain btn
var instr=document.querySelector("#instr");//instrs

function startmcq()
{
    show(0);

    var username=document.getElementById("username").value;//users name

    console.log("start clicked "+username);

    document.getElementById("welcome").innerHTML='Welcome! '+username;
    
    //store players name and set score to zero using session
    sessionStorage.setItem("playername",username); 
    sessionStorage.setItem("score",0);

    //------------------show stuff---------------------------
    nextbtn.classList.remove("hide");//show next btn
    question.classList.remove("hide");//show first question
    //-------------------------------------------------------

    //-----------Hide Stuff------------------------
    startbtn.classList.add("hide");//hide start btn
    txtbx.classList.add("hide");//hide textbox
    iphead.classList.add("hide");//hide name head
    instr.classList.add("hide");//hide instrs
    //---------------------------------------------
}

let question_count=0;
let score=0;
let useransarray = new Array(); 
function next()
{   
    //checking correct answer
    var useranswer=document.querySelector("li.q1.active").innerHTML;//if i dont use innerHTML i ill get the op with entire HTML tags like li and all
    if(useranswer == questions[question_count].answer)
    {
        score += 1;
        sessionStorage.setItem("score",score);
        console.log("Correct!");
    }
    else
    {
        useransarray.push(useranswer);
        console.log("wrong answer!");
    }
    

    //-------------Showing result---------------
    let pname = sessionStorage.getItem("playername");
    let pscore = sessionStorage.getItem("score");


    if(question_count == questions.length - 1)
    {
        //---------------------show stuff-----------------
        document.getElementById("welcome").innerHTML="Well done! "+pname;
        document.getElementById("result").innerHTML=
        `<i class="fas fa-award"></i><br> 
        <h6 class="scoretxt">Your Score : ${pscore} /3 </h6><br>
        <hr class="light-100">`;
        
        res.classList.remove("hide");
        showans.classList.remove("hide");
        //------------------------------------------------

        //--------------------hide stuff------------------
        question.classList.add("hide");
        nextbtn.classList.add("hide");
        //------------------------------------------------
        return;
    }
    
    question_count++;
    show(question_count);
}

function showanswers()
{
    //--------------hide stuff---------------
    res.classList.add("hide");
    showans.classList.add("hide");
    //---------------------------------------

    //--------------show stuff--------------
    showansbody1.classList.remove("hide");
    showansbody2.classList.remove("hide");
    showansbody3.classList.remove("hide");
    document.getElementById("welcome").innerHTML="Answers: ";
    //-------------------------------------------------------------

   

    document.getElementById("showansbody1").innerHTML=
    `<h6 class="anstext">${questions[0].question}</h6>
        <ul>
            1.<li class="btn btn-success que1">${questions[0].options[0]}</li><br>
            2.<li class="btn btn-outline-light que1">${questions[0].options[1]}</li><br>
            3.<li class="btn btn-outline-light que1">${questions[0].options[2]}</li><br>
            4.<li class="btn btn-outline-light que1">${questions[0].options[3]}</li><br>
        </ul>`;

        let wroptions=document.querySelectorAll("li.que1");
        for(let i=0;i< wroptions.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)//all wrong ans 
            {
                if(useransarray[j] == questions[0].options[i])
                {
                    console.log("inside if");     
                    wroptions[i].classList.add("wronganswer");
                    console.log(useransarray);
                    console.log(wroptions);
                }
            }
        }
        
    document.getElementById("showansbody2").innerHTML=
    `<h6 class="anstext">${questions[1].question}</h6>
        <ul>
            1.<li class="btn btn-outline-light que2">${questions[1].options[0]}</li><br>
            2.<li class="btn btn-success que2">${questions[1].options[1]}</li><br>
            3.<li class="btn btn-outline-light que2">${questions[1].options[2]}</li><br>
            4.<li class="btn btn-outline-light que2">${questions[1].options[3]}</li><br>
        </ul>`;
        
        let wroptions1=document.querySelectorAll("li.que2");
        for(let i=0;i< wroptions1.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)//all wrong ans's
            {
                if(useransarray[j] == questions[1].options[i])
                {
                    console.log("inside if");     
                    wroptions1[i].classList.add("wronganswer");
                    console.log(wroptions);
                }
            }
        }

    document.getElementById("showansbody3").innerHTML=
    `<h6 class="anstext">${questions[2].question}</h6>
    <ul>
        1.<li class="btn btn-success que3">${questions[2].options[0]}</li><br>
        2.<li class="btn btn-outline-light que3">${questions[2].options[1]}</li><br>
        3.<li class="btn btn-outline-light que3">${questions[2].options[2]}</li><br>
        4.<li class="btn btn-outline-light que3">${questions[2].options[3]}</li><br>
    </ul>`;

        let wroptions2=document.querySelectorAll("li.que3");
        for(let i=0;i< wroptions2.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[2].options[i])
                {
                    console.log("inside if");     
                    wroptions2[i].classList.add("wronganswer");
                    console.log(wroptions);
                }
            }
        }
    
    tryagainbtn.classList.remove("hide");
}

//to show next question and options from the array of objects
function show(count)
{
    let ques=document.getElementById("que");

    //ques.innerHTML= "<h4>"+ questions[count].question +"</h4>";
    ques.innerHTML=`<h5 class="q1"> ${questions[count].question} </h5>
    <ul>
        1.<li class="btn btn-outline-light q1">${questions[count].options[0]}</li><br>
        2.<li class="btn btn-outline-light q1">${questions[count].options[1]}</li><br>
        3.<li class="btn btn-outline-light q1">${questions[count].options[2]}</li><br>
        4.<li class="btn btn-outline-light q1">${questions[count].options[3]}</li><br>
    </ul>
    `;
    toggleactive();
}

//to add active class to the option
function toggleactive()
{
    let option = document.querySelectorAll("li.q1");

    for(let i=0;i< option.length;i++)
    {
        option[i].onclick=function(){
            for(let j=0;j< option.length;j++)//check all four options whether active is added on any one of them and remove it
            {
                if(option[j].classList.contains("active"))
                {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}