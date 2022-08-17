function swap()
{
    let source = document.getElementById("fromsearch").value
    let destination = document.getElementById("tosearch").value

    let temp = source
    source = destination
    destination = temp
    
    document.getElementById("fromsearch").value = source
    document.getElementById("tosearch").value = destination
}



function clearall()
{
    let checkBoxes = document.querySelectorAll("input[type='checkbox']")

    let radio = document.querySelectorAll("input[type = 'radio']")

    checkBoxes.forEach((item)=>item.checked = false)

    radio.forEach((item)=>item.checked = false)
}


function quick()
{
    let quick = document.querySelector("div[class = 'quick']")

    let checkBoxes = quick.querySelectorAll("input[type = 'checkbox']")

    checkBoxes.forEach((item)=>item.checked = false)
}


function quota()
{
    let quota = document.querySelector("div[class = 'quota']")

    let radio = quota.querySelectorAll("input[type = 'radio']")

    radio.forEach((item)=>item.checked = false)
}


function class1()
{
    let class1 = document.querySelector("div[class = 'class1']")
    
    let checkBox = class1.querySelectorAll("input[type = 'checkbox']")

    checkBox.forEach((item)=>item.checked = false)
}


function departure()
{
    let departure = document.querySelector("div[class = 'departure']")
    
    let checkBox = departure.querySelectorAll("input[type = 'checkbox']")

    checkBox.forEach((item)=>item.checked = false)
}


function arrival()
{
    let arrival = document.querySelector("div[class = 'arrival']")
    
    let checkBox = arrival.querySelectorAll("input[type = 'checkbox']")

    checkBox.forEach((item)=>item.checked = false)
}
