/*alert("test");*/
function addNewWEField(){
   //console.log("Adding new function");
    
    let newNode= document.createElement('textarea');
    //let childNode=
   
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');

    
    let weOB = document.getElementById("we");

    let weAddButtonOB = document.getElementById("weAddButton");
 
    weOB.insertBefore(newNode, weAddButtonOB);
}
function addnewEHField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');
    
    let ehOB = document.getElementById("eh");
    let eqAddButtonOB = document.getElementById("eqAddButton");
    ehOB.insertBefore(newNode, eqAddButtonOB);

}
//skills function
function addnewSkillsField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillsField');
    newNode.classList.add('mt-2');
    
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder','Enter Here');
    
    let skOB = document.getElementById("sk");
    let skAddButtonOB = document.getElementById("skAddButton");
    skOB.insertBefore(newNode, skAddButtonOB);


}
//project and certificates 
function addnewProjectField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pcField');
    newNode.classList.add('mt-2');
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');
    
    let pcOB = document.getElementById("pc");
    let pcAddButtonOB = document.getElementById("pcAddButton");
    pcOB.insertBefore(newNode, pcAddButtonOB);


}

//generating resume
function generateResume()
{
    //console.log("generate log")
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML= nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("gmailT").innerHTML=document.getElementById("mailField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbLink").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    
    let wes = document.getElementsByClassName("weField");
    let str="";
    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`; 
    }
    document.getElementById("weT").innerHTML=str;

    //upload Education History information into form
   let ehs = document.getElementsByClassName("eqField");
   let str1="";
   for(let eh of ehs)
   {
       str1 = str1 + `<li> ${eh.value} </li>`; 
   }
   document.getElementById("ehT").innerHTML=str1;

    //upload skill field information into form
   let sks = document.getElementsByClassName("skillsField");
   let str2="";
   for(let eh of sks)
   {
       str2 = str2 + `<li> ${eh.value} </li>`; 
   }
   document.getElementById("skT").innerHTML=str2;

    //upload project field information into form
    let cps = document.getElementsByClassName("pcField");
    let str3="";
    for(let eh of cps)
    {
        str3 = str3 + `<li> ${eh.value} </li>`; 
    }
    document.getElementById("pcT").innerHTML=str3;


   //code for upload pic

   let file=document.getElementById('imageField').files[0];
   console.log(file);

   let reader=new FileReader()

   reader.readAsDataURL(file);
   console.log(reader.result);

//set the image to template
   reader.onloadend=function(){
   document.getElementById('imgT').src=reader.result;
   };
   document.getElementById("resumeForm").style.display='none';
   document.getElementById("resumeTemplate").style.display="block";
    

}

//theme change
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = '#21618C';
        body.style.transition = '2s';
    }
});
//print resume
function printresume(){

   /* var pdf = document.getElementById('resumeTemplate');
    var opt = {
        margin: 0.5,
        filename: 'html2pdf-converted.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
     //html2pdf(element);*/
     
    window.print();
}
