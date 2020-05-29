let questions =[
    {
        id:1,
        question:"Aloof",
        answer:"Reserved",
        options: [
            "Above",
            "Tidy",
            "Clever",
            "Reserved",
        ]
    },
    {
        id:2,
        question:"Resolve",
        answer:"Decide",
        options: [
            "Turn",
            "Puzzle",
            "Decide",
            "Want",
        ]
    },
    {
        id:3,
        question:"Congregate",
        answer:"Gather",
        options: [
            "Worship",
            "Gather",
            "Disturb",
            "Hurry",
        ]
    },
    {
        id:4,
        question:"Utter",
        answer:"Express",
        options: [
            "Express",
            "Defer",
            "Borrow",
            "Laugh",
        ]
    },
    {
        id:5,
        question:"Fearless",
        answer:"Brave",
        options: [
            "Powerful",
            "Cowardly",
            "Brave",
            "Careful",
        ]
    },
    {
        id:6,
        question:"Negligible",
        answer:"Insignificant",
        options: [
            "Insignificant",
            "Arguable",
            "Careless",
            "Dark",
        ]
    },
    {
        id:7,
        question:"Placid",
        answer:"Calm",
        options: [
            "Calm",
            "Lazy",
            "Solemn",
            "Devious",
        ]
    },
    {
        id:8,
        question:"Rake",
        answer:"Scoundrel",
        options: [
            "Thin",
            "Scoundrel",
            "Gentleman",
            "Shove",
        ]
    },
    {
        id:9,
        question:"Dupe",
        answer:"Trick",
        options: [
            "Rancher",
            "Trick",
            "Simpleton",
            "Drug",
        ]
    },
    {
        id:10,
        question:"Stigma",
        answer:"Stain",
        options: [
            "Stain",
            "Trial",
            "Difficulty",
            "Holiness",
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
        <h6 class="scoretxt">Your Score : ${pscore} /10 </h6><br>
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
    showansbody4.classList.remove("hide");
    showansbody5.classList.remove("hide");
    showansbody6.classList.remove("hide");
    showansbody7.classList.remove("hide");
    showansbody8.classList.remove("hide");
    showansbody9.classList.remove("hide");
    showansbody10.classList.remove("hide");
    document.getElementById("welcome").innerHTML="Answers: ";
    //-------------------------------------------------------------

   

    document.getElementById("showansbody1").innerHTML=
    `<h6 class="anstext">1.${questions[0].question}</h6>
        <ul>
            1.<li class="btn btn-outline-light que1">${questions[0].options[0]}</li><br>
            2.<li class="btn btn-outline-light que1">${questions[0].options[1]}</li><br>
            3.<li class="btn btn-outline-light que1">${questions[0].options[2]}</li><br>
            4.<li class="btn btn-success que1">${questions[0].options[3]}</li><br>
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
                }
            }
        }
        
    document.getElementById("showansbody2").innerHTML=
    `<h6 class="anstext">2.${questions[1].question}</h6>
        <ul>
            1.<li class="btn btn-outline-light que2">${questions[1].options[0]}</li><br>
            2.<li class="btn btn-outline-light que2">${questions[1].options[1]}</li><br>
            3.<li class="btn btn-success que2">${questions[1].options[2]}</li><br>
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
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody3").innerHTML=
    `<h6 class="anstext">3.${questions[2].question}</h6>
    <ul>
        1.<li class="btn btn-outline-light que3">${questions[2].options[0]}</li><br>
        2.<li class="btn btn-success que3">${questions[2].options[1]}</li><br>
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
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody4").innerHTML=
    `<h6 class="anstext">4.${questions[3].question}</h6>
    <ul>
        1.<li class="btn btn-success que4">${questions[3].options[0]}</li><br>
        2.<li class="btn btn-outline-light que4">${questions[3].options[1]}</li><br>
        3.<li class="btn btn-outline-light que4">${questions[3].options[2]}</li><br>
        4.<li class="btn btn-outline-light que4">${questions[3].options[3]}</li><br>
    </ul>`;

        let wroptions3=document.querySelectorAll("li.que4");
        for(let i=0;i< wroptions3.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[3].options[i])
                {
                    console.log("inside if");     
                    wroptions3[i].classList.add("wronganswer");
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody5").innerHTML=
    `<h6 class="anstext">5.${questions[4].question}</h6>
    <ul>
        1.<li class="btn btn-outline-light que5">${questions[4].options[0]}</li><br>
        2.<li class="btn btn-outline-light que5">${questions[4].options[1]}</li><br>
        3.<li class="btn btn-success que5">${questions[4].options[2]}</li><br>
        4.<li class="btn btn-outline-light que5">${questions[4].options[3]}</li><br>
    </ul>`;

        let wroptions4=document.querySelectorAll("li.que5");
        for(let i=0;i< wroptions4.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[4].options[i])
                {
                    console.log("inside if");     
                    wroptions4[i].classList.add("wronganswer");
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody6").innerHTML=
    `<h6 class="anstext">6.${questions[5].question}</h6>
    <ul>
        1.<li class="btn btn-success que6">${questions[5].options[0]}</li><br>
        2.<li class="btn btn-outline-light que6">${questions[5].options[1]}</li><br>
        3.<li class="btn btn-outline-light que6">${questions[5].options[2]}</li><br>
        4.<li class="btn btn-outline-light que6">${questions[5].options[3]}</li><br>
    </ul>`;

        let wroptions5=document.querySelectorAll("li.que6");
        for(let i=0;i< wroptions5.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[5].options[i])
                {
                    console.log("inside if");     
                    wroptions5[i].classList.add("wronganswer");
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody7").innerHTML=
    `<h6 class="anstext">7.${questions[6].question}</h6>
    <ul>
        1.<li class="btn btn-success que7">${questions[6].options[0]}</li><br>
        2.<li class="btn btn-outline-light que7">${questions[6].options[1]}</li><br>
        3.<li class="btn btn-outline-light que7">${questions[6].options[2]}</li><br>
        4.<li class="btn btn-outline-light que7">${questions[6].options[3]}</li><br>
    </ul>`;

        let wroptions6=document.querySelectorAll("li.que7");
        for(let i=0;i< wroptions6.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[6].options[i])
                {
                    console.log("inside if");     
                    wroptions6[i].classList.add("wronganswer");
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody8").innerHTML=
    `<h6 class="anstext">8.${questions[7].question}</h6>
    <ul>
        1.<li class="btn btn-outline-light que8">${questions[7].options[0]}</li><br>
        2.<li class="btn btn-success que8">${questions[7].options[1]}</li><br>
        3.<li class="btn btn-outline-light que8">${questions[7].options[2]}</li><br>
        4.<li class="btn btn-outline-light que8">${questions[7].options[3]}</li><br>
    </ul>`;

        let wroptions7=document.querySelectorAll("li.que8");
        for(let i=0;i< wroptions7.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[7].options[i])
                {
                    console.log("inside if");     
                    wroptions7[i].classList.add("wronganswer");
                    console.log(useransarray);
                }
            }
        }
        
    document.getElementById("showansbody9").innerHTML=
    `<h6 class="anstext">9.${questions[8].question}</h6>
    <ul>
        1.<li class="btn btn-outline-light que9">${questions[8].options[0]}</li><br>
        2.<li class="btn btn-success que9">${questions[8].options[1]}</li><br>
        3.<li class="btn btn-outline-light que9">${questions[8].options[2]}</li><br>
        4.<li class="btn btn-outline-light que9">${questions[8].options[3]}</li><br>
    </ul>`;

        let wroptions8=document.querySelectorAll("li.que9");
        for(let i=0;i< wroptions8.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[8].options[i])
                {
                    console.log("inside if");     
                    wroptions8[i].classList.add("wronganswer");
                    console.log(useransarray);
                }
            }
        }

    document.getElementById("showansbody10").innerHTML=
    `<h6 class="anstext">10.${questions[9].question}</h6>
    <ul>
        1.<li class="btn btn-success que10">${questions[9].options[0]}</li><br>
        2.<li class="btn btn-outline-light que10">${questions[9].options[1]}</li><br>
        3.<li class="btn btn-outline-light que10">${questions[9].options[2]}</li><br>
        4.<li class="btn btn-outline-light que10">${questions[9].options[3]}</li><br>
    </ul>`;

        let wroptions9=document.querySelectorAll("li.que10");
        for(let i=0;i< wroptions9.length;i++)
        {
            for(let j=0;j< useransarray.length;j++)
            {
                if(useransarray[j] == questions[9].options[i])
                {
                    console.log("inside if");     
                    wroptions9[i].classList.add("wronganswer");
                    console.log(useransarray);
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
