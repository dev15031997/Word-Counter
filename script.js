let text=document.getElementById("area")
text.addEventListener("input",function()
{
    var type=this.value 
    let len=type.length;   

    let word=document.getElementById('chr').innerHTML=len       //assigning the length directly to the len

    //FOR COUNTING WORDS
    type=type.trim()        
    let wrdText=type.split(" ")
    let cleanList=wrdText.filter(function(e)
{
        return e !=  ""
})
    // document.getElementById("wrd").innerHTML=wrdText.length     //issue with this is counts white space also,to avoid that we have to use trim function
          document.getElementById("wrd").innerHTML=cleanList.length


})
