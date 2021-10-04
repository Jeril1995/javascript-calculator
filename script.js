let isOpClicked = false
let oldValue = 0
let isEqualClicked = false
let isDotClicked = false
let operator = '\0'

function numClick(val)
{   
    if(isOpClicked || isEqualClicked)
    {
        document.getElementById("screen").value = val
        isEqualClicked = false
    }
    else
        document.getElementById("screen").value += val
}

function clearDisplay()
{
    document.getElementById("screen").value = ""
    oldValue = 0
    isDotClicked = false
    isEqualClicked = false
    isOpClicked = false
}

function equalClick(){
    if(!isEqualClicked && isOpClicked)
    {   
        isEqualClicked = true
        isOpClicked = false
        switch(operator) {
            case '+':
                var newValue = document.getElementById("screen").value
                oldValue= parseInt(oldValue) + parseInt(newValue)
                document.getElementById("screen").value = oldValue
                break;
            case '-':
                oldValue-=document.getElementById("screen").value
                document.getElementById("screen").value = oldValue
                break;
            case '*':
                oldValue*=document.getElementById("screen").value
                document.getElementById("screen").value = oldValue
                break;
            case '/':
                var newValue = document.getElementById("screen").value
                if(!(newValue == 0))
                {
                    oldValue /= newValue
                    document.getElementById("screen").value = oldValue
                }
                else
                {
                    document.getElementById("screen").value = "Division by zero"
                }
                break;
            default:       
        }
    }
}

function dotClick()
{
    if(!isDotClicked)
    {
        isDotClicked = true
        document.getElementById("screen").value += '.'
    }
}

function opClick(op)
{
    if(!isOpClicked && document.getElementById("screen").value!='\0')
    {
        isOpClicked = true
        operator = op 
        oldValue = document.getElementById("screen").value
    }
}