(function()
{
   "use strict"
    var SignupList=[]
    SignupList[0]={
        "Name":"Pardeep Saini",
        "Class":"B.Sc",
        "Roll No":"98712",
        "Email":"PardeepSaini54321@gmail.com",
        "Password":"12345678",
        "Mobile":"7206257545",
    }
    SignupList[1]={
        "Name":"Hardeep Saini",
        "Class":"B.Com",
        "Roll No":"9857856",
        "Email":"HardeepSaini@gmail.com",
        "Password":"2",
        "Mobile":"7206454543",
    }

// Sign Up

var SingupForm=document.querySelector("#singupform")

SingupForm.hidden=true

// Signup Button

var SignupButton=document.querySelector("#signupbutton")
SignupButton.addEventListener("click",() => {
if(SingupForm.hidden===true)
    {
        SingupForm.hidden=false
    }
    else
    {
        SingupForm.hidden=true
    }
})

//Sign Up Button Close

// New User

var SubmitSignup=document.querySelector("#signup")

SubmitSignup.addEventListener("submit",function(event){
    var UserNo=SignupList.length

    event.returnValue=false
    var Email=event.target.Email.value
    var yes=false
    SignupList.forEach(function(value,index){
        if(value.Email.toLowerCase()===Email.toLowerCase())
        {
            yes=true
         }})
         if(yes==false) {
         SignupList[UserNo]={
       "Name":event.target.Name.value,
       "Mobile Number":event.target.mobile.value,
        "Email":event.target.Email.value,
        "Password":event.target.SPassword.value,
        "Class":event.target.class.value, }
        var Root=GiveMsg("Your Account Is Created")
        Time(Root,2000)
        Reset(event)
    }
    else{
        var Root=GiveMsg("Your Account Is Already Exist")
        Time(Root,6000)
        Reset(event)
    }
})


//SignUp Close

var FormLogin=document.querySelector("#FormLogin")
FormLogin.addEventListener("submit",(event)=>{
   
     var i=0
     var UserName=event.target.UserName.value;
     var Password=event.target.Password.value;
     SignupList.forEach((value,index) => {
         //console.log(value.Email)
         if(value.Email.toLowerCase()===UserName.toLowerCase() && Password=== value.Password)
         {
             i=1
             var CDiv=PrintData("Your Log In Data")
           
    
            var Table=document.createElement("table")
            Table.setAttribute("class","table table-hover")
            CDiv.appendChild(Table)

            var Data=value
            for (const key in Data) {
                
                createTable(Table,key,Data[key])
            }
            var SignOutButton=document.createElement("button")
              SignOutButton.setAttribute("class","btn btn-primary")
              SignOutButton.textContent="Sign Out"
              CDiv.appendChild(SignOutButton)
              SignOutButton.addEventListener("click",()=>
            {
                var logindata=document.getElementById("logindata")
                logindata.removeChild(CDiv)
            })
        }
             event.returnValue=false
     });
     if(i==0)
     {
         var CDiv=PrintData("Please Enter A Correct Details")
        //  var Clear=document.createElement("button")
        //       Clear.setAttribute("class","btn btn-secondary")
        //      Clear.textContent="Clear"
        //       CDiv.appendChild(Clear)
        //       Clear.addEventListener("click",()=>
        //     {
        //         var logindata=document.getElementById("logindata")
        //         logindata.removeChild(CDiv)
        //     })
        var removemsg= setTimeout(() => {
            var logindata=document.getElementById("logindata")
            logindata.removeChild(CDiv)
        },3000);
     }
})

function createTable(Table,Key,Value)
{
            var row=Table.insertRow()
            var column1=row.insertCell()
            var column2=row.insertCell()
            column1.innerHTML=Key
            column2.innerHTML=Value
}

function PrintData(msg)
{
    var Hr=document.createElement("hr")

    var Title=document.createElement("p")
    Title.textContent=msg
    Title.style.fontSize="30px"
    Title.style.fontWeight="bold"
    Title.setAttribute("class","DesText")

    var LoginData=document.querySelector("#logindata")
    var CDiv=document.createElement("div")
    LoginData.appendChild(CDiv)

    CDiv.appendChild(Hr)
    CDiv.appendChild(Title)
   return CDiv
}

function GiveMsg(msg)
{
    var Div=document.createElement("div")
    Div.setAttribute("id","msg")
    var Hr=document.createElement("hr")
    var Text=document.createElement("p")
    Text.setAttribute("class","DesText")
    Text.textContent=msg
        var Printmsg=document.getElementById("singupform")
        Printmsg.appendChild(Div)
        Div.appendChild(Text)
        return Printmsg
}

function Time(Root,sec)
{
    var Time=setTimeout(function(){
        var msg=document.getElementById("msg")
       Root.removeChild(msg)
       SingupForm.hidden=true
    },sec)
      
}
var Reset=function (event)
{
    event.target.Name.value=""
    event.target.mobile.value=""
    event.target.Email.value=""
    event.target.SPassword.value=""
}

// Forgot Password
var ForgotButton=document.querySelector("#forgot")

ForgotButton.addEventListener("click",function(event){
    ForgotBox()
})

var ForgotBox=function ()
{
    var logindata=document.getElementById("logindata")
    var Div=document.createElement("div")
    Div.setAttribute("id","Fdiv")
    logindata.appendChild(Div)
    
    var Form=document.createElement("form")
     Form.setAttribute("id","ForgotForm")
     var Br=document.createElement("br")
    var Hr=document.createElement("hr")
    Div.appendChild(Hr)
    var Text=document.createElement("p")
    Text.textContent="Enter Your Email"
    Text.setAttribute("class","DesText")
    Div.appendChild(Text)
    Div.appendChild(Form)

    var NewPasswordEmailCancel=document.createElement("button")
    NewPasswordEmailCancel.textContent="Cancel "
    NewPasswordEmailCancel.setAttribute("type","submit")
    NewPasswordEmailCancel.setAttribute("class","btn btn-primary")
    NewPasswordEmailCancel.style.margin="10px"
    NewPasswordEmailCancel.setAttribute("id","NewPasswordEmailCancel")

    var InputEmail=document.createElement("input")
    InputEmail.setAttribute("type","email")
    InputEmail.setAttribute("class","FEmail")
    InputEmail.setAttribute("id","InputEmail")
    InputEmail.setAttribute("class","form-control")
    InputEmail.setAttribute("placeholder","Email")
    Form.appendChild(InputEmail)
    Form.appendChild(Br)
    var FButton=document.createElement("input")
    FButton.setAttribute("type","submit")
    FButton.textContent="Submit"
    FButton.setAttribute("class","btn btn-primary")
    Form.appendChild(FButton)
    Form.appendChild(NewPasswordEmailCancel)

    NewPasswordEmailCancel.addEventListener("click",function(){

        logindata.removeChild(Div)
    })

    var ForgotForm=document.getElementById("ForgotForm")
    ForgotForm.addEventListener("submit",function(event){
         var yes
         var ChangePasswordAcc=null
         event.returnValue=false
        var EmailValue=event.target.InputEmail.value
        console.log(EmailValue)

        if(EmailValue==="")
        {
            var NullMsg=document.createElement("p")
            NullMsg.textContent="Please Enter Your Email"
            NullMsg.style.fontSize="40px"
            NullMsg.setAttribute("class","DesText")
            Form.appendChild(NullMsg)
            var NullMsgDel=setTimeout(() => {
                Form.removeChild(NullMsg)
            },2000);
            return
        }
         SignupList.forEach(function(value,index){

            if(value.Email.toLowerCase()===EmailValue.toLowerCase())
            {
                yes=true
                ChangePasswordAcc=value
            }
              
         })

         if(yes===true)
         {
            NewPassword(ChangePasswordAcc,logindata,Div)
          }
         else
         {
             var msg="Your Account Is Not Found"
            ForgotGreet(logindata,msg,3000,Div)
         }
    })}

function ForgotGreet(root,msg,sec,Div)
{
    console.log(Div)
    var br=document.createElement("br")
    Div.appendChild(br)
    var text=document.createElement("p")
    text.textContent=msg
    text.setAttribute("class","DesText")
    text.style.fontSize="40px"
    text.style.fontWeight="bold"
    Div.appendChild(text)
    var Time=setTimeout(function(){
    root.removeChild(Div)
    },sec)
}

function NewPassword(ChangePasswordAcc,Root,Div)
{
    Root.removeChild(Div)
    var P=document.createElement("p")
    P.setAttribute("class","DesText")
    P.textContent="Enter New Password"
    var ChangePasswordDiv=document.createElement("div")
    ChangePasswordDiv.setAttribute("id","FForm")
    Root.appendChild(ChangePasswordDiv)
    var Hr=document.createElement("hr")
    ChangePasswordDiv.appendChild(Hr)
    ChangePasswordDiv.appendChild(P)
    console.log(Root)
    var br=document.createElement("br")
    var NewPasswordForm=document.createElement("form")
    NewPasswordForm.setAttribute("id","SetNewPassword")
  ChangePasswordDiv.appendChild(NewPasswordForm)

  var NewPasswordInput=document.createElement("input")
  NewPasswordInput.setAttribute("type","text")
  NewPasswordInput.setAttribute("id","NewPassword")
  NewPasswordInput.setAttribute("class","form-control")
NewPasswordForm.appendChild(NewPasswordInput)

NewPasswordForm.appendChild(br)

var NewPasswordCancel=document.createElement("button")
NewPasswordCancel.textContent="Cancel "
NewPasswordCancel.setAttribute("type","submit")
NewPasswordCancel.style.margin="10px"
NewPasswordCancel.setAttribute("class","btn btn-primary")
NewPasswordCancel.setAttribute("id","NewPasswordCancel")

  var NewPasswordSubmit=document.createElement("button")
  NewPasswordSubmit.textContent="Change Password"
  NewPasswordSubmit.setAttribute("type","submit")
  NewPasswordSubmit.setAttribute("class","btn btn-primary")
  NewPasswordSubmit.setAttribute("id","SubmitNewPassword")
NewPasswordForm.appendChild(NewPasswordSubmit)
NewPasswordForm.appendChild(NewPasswordCancel)

NewPasswordCancel.addEventListener("click",function(){
    Root.removeChild(ChangePasswordDiv)
})


var ForgotPasswordButton=document.getElementById("SetNewPassword")
ForgotPasswordButton.addEventListener("submit",function(event){
    event.returnValue=false
var forgotpassvalue=event.target.NewPassword.value
event.returnValue=false


if(forgotpassvalue==="")
{
    var NullMsg=document.createElement("p")
    NullMsg.textContent="Please Enter Your New PassWord"
    NullMsg.style.fontSize="40px"
    NullMsg.setAttribute("class","DesText")
    ForgotPasswordButton.appendChild(NullMsg)
    var NullMsgDel=setTimeout(() => {
        ForgotPasswordButton.removeChild(NullMsg)
    },2000);
    return
}

ChangePasswordAcc.Password=forgotpassvalue
var NullMsg=document.createElement("p")
    NullMsg.textContent="Your PassWord Is Changed" 
    NullMsg.style.fontSize="40px"
    NullMsg.setAttribute("class","DesText")
    ForgotPasswordButton.appendChild(NullMsg)
    var NullMsgDel=setTimeout(() => {
        Root.removeChild(ChangePasswordDiv)
    },2000);
})

}

})();
