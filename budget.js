function register()
{
    user=
    {
        name1:name1.value,
        phn:phn.value,
        pswd:pswd.value,
        balance:0
    }
    console.log(user);
    if(user.name1=='' || user.phn=='' || user.pswd=='')
    {
        alert("fields cannot be empty!!")
    }
    else if(user.phn in localStorage)
    {
        alert("already exist!!please login")
        window.location='login.html'
    }
    else
    {
      localStorage.setItem(user.phn,JSON.stringify(user))
      alert("Registration successfull!!")
      window.location='./login.html'
    }
    return false;
}
function login()
{
    phn1=phn.value;
    pswd1=pswd.value;
    if(phn1=='' || pswd1=='')
    {
        alert("fields cannot be empty!!")
    }
    else if(phn1 in localStorage)
    {
        userdetails=JSON.parse(localStorage.getItem(phn1));
        if(pswd1==userdetails.pswd)
        {
            alert("login successfull")
            localStorage.setItem("welcome",userdetails.name1)
            userdetails.balance=0;
            localStorage.setItem("balance",userdetails.balance)
            window.location.href='./budgetcalc.html'
            b1=localStorage.getItem("balance")
            balnce.innerHTML=`Your balance is ${b1}`
            uname=localStorage.getItem("name1")
            h1.innerHTML=`Hello ${uname}` 
        }
        else
        {
            alert("incorrect password")
        }
    }
    else
    {
        alert("invalid phone no.")
    }
    return false;
}
var bal=localStorage.getItem("balance")
balnce.innerHTML=`<h5 style="color:red;padding-top:50px">Your balance is : Rs.${bal}</h5>`
pname=localStorage.getItem("welcome")
h1.innerHTML=`<h3 style="color:green;padding-top:20px">Welcome ${pname} &#128512;</h3>`
function add()
{
    total=parseFloat(totamount.value);
    if(total==' ')
    {
        alert("Field can't be empty!!")
    }
    else
    {
        Balance=localStorage.getItem("balance");
        console.log(`bal 1 : ${Balance}`);
        Balance=parseFloat(Balance)+total;
        localStorage.setItem('balance',Balance)
        console.log(Balance);
    }
    result1.innerHTML+=
    `<tr>
    <td class="border border-3 border-success" style="background-color: rgb(3, 142, 10);color: rgb(255, 255, 240);font-size: medium;">${total}</td>
    <td class="border border-3 border-success" style="background-color: rgb(3, 142, 10);color: rgb(255, 255, 240);font-size: medium;">${Balance}</td>
    </tr>`
    balnce.innerHTML=`<h5 style="color:red;padding-top:20px">Your Balance is : Rs.${Balance}</h5>`
}
function submit()
{
    expname=expensename.value
    expamount=parseFloat(eamount.value)
    if(expname=='' || expamount=='')
    {
        alert("Fields can't be empty!!")
    }
    else
    {
       Balance=localStorage.getItem("balance")
       console.log(`Balance : ${Balance}`);
       console.log(`expense:${expname}`);
       Balance=parseFloat(Balance)-expamount
       localStorage.setItem('balance',Balance)
       console.log(Balance);
       console.log(`expense:${expname}`);
    }
    result2.innerHTML+=`<tr>
    <td class="border border-3 border-warning" style="background-color: rgb(3, 142, 10);color: rgb(255, 255, 240);font-size: medium;">${expname}</td>
    <td class="border border-3 border-warning" style="background-color: rgb(3, 142, 10);color: rgb(255, 255, 240);font-size: medium;">${expamount}</td>
    <td class="border border-3 border-warning" style="background-color: rgb(3, 142, 10);color: rgb(255, 255, 240);font-size: medium;">${Balance}</td>
    </tr>`
    balnce.innerHTML=`<h5 style="color:red;padding-top:20px">Your Balance is : Rs.${Balance}</h5>`
    if(Balance<=2000)
    {
        h2.innerHTML=`<h4 style="color:red;padding-top:20px">Your Balance is : Rs.${Balance} Control your expenses  &#128577;!!!</h4>`
    }

}
function logout()
{
    window.localStorage.clear()
    window.location.href="./login.html"
}