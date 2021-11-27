function view(num)
{
    document.getElementById("results").value+=num
}

function compute()
{
    let x = document.getElementById("results").value
    let y = eval(x)
    document.getElementById("results").value = y
}
function clr()
{
    document.getElementById("results").value = ""
}