function swap()
{
    let source = document.getElementById("from").value
    let destination = document.getElementById("to").value

    let temp = source
    source = destination
    destination = temp
    
    document.getElementById("from").value = source
    document.getElementById("to").value = destination
}


function button()
{

    let source = document.getElementById("from").value;
    let destination = document.getElementById("to").value;
    
    console.log(source,destination);

    window.location.href = `http://localhost:3000/searchpage?sour=${source}&dest=${destination}`;
}
