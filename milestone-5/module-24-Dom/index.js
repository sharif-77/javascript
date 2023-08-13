//  difference between Html collection vs html nodeList
// nodeValue vs InnerText
// what is domTokenList ???
// what is clone node in js???
// siblings vs element siblings javascript 

/* let crh1 = document.createElement("h1");
crh1.innerText = "Dynamically created h1";
crh1.className = "crh1Class1";
let crh2 = document.createElement("h2");
crh2.innerText = "Dynamically created h2";
crh2.className = "crh2Class ghfdg";
document.body.append(crh1, crh2);
let section = document.createElement("section");
section.innerHTML = `
<div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
`;
document.body.appendChild(section)
let pre = document.body.prepend(section);
document.body.prepend(section.cloneNode(true));
document.body.prepend(section.cloneNode(true));
document.body.prepend(section.cloneNode(true));
console.log(section.previousElementSibling);

// console.log(document.body.textContent);
// console.log(document.body.innerText); */

// let htmlCollection=document.getElementsByTagName('h1')
// console.log(htmlCollection);


let nodeList=document.querySelectorAll('#fDiv')[0].nextSibling


console.log(nodeList);
const x=document.getElementById("sec").nextSibling.nextElementSibling
console.log(x);

