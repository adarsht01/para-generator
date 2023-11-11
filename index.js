
let input=document.getElementById("numofwords");
let generateWord=()=>{
    const letters="abcdefghijklmnopqrstuvwxyz";
    let data="";
    const randomLength=(Math.random()*14).toFixed(0);
    for(let i=1;i<=randomLength;i++)
    {
        const random=(Math.random()*25).toFixed(0);
        data+=letters[random];
    }
    return data;
}
let numofwords;
const generatePara=()=>{
    let paragraph="";
    numofwords=Number(input.value);
    for(let i=0;i<numofwords;i++)
    {
        const word=generateWord();
        paragraph+=word;
        paragraph+=" ";
    }
    const p=document.createElement("p");
    let temp=paragraph.toUpperCase();
    paragraph[0]=temp[0];
    p.innerText=paragraph;
    p.setAttribute("class","para");
    document.getElementsByClassName("container")[0].append(p);
};

