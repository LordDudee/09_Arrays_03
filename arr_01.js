/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];

output(getHTML());
function getHTML() {
    
    let htmlStr = "";
    // <tag> ---> open
    // </tag> ---> close

    for (let i = 0; i < tags.length; i++) {
        htmlStr += getTags(tags[i]);
    }

    return htmlStr;
}

function getTags(tag) {
    // return "<" + tag + ">";
    // return controls[0] + tag + controls [2];
    return controls[1] + tag + controls [2];
}



// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}