function calculateNumbers(var1, var2)
{
    return var1 + var2;
}

function getUserInput()
{
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    return calculateNumbers(input1, input2);
}