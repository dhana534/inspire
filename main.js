function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
        callback(xhr.responseText);
      }
    }
    xhr.send(null);
  }
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  // console.log(data
fun_carrer(data.career);
 fun_education(data.educations);
 fun_achivements(data.achivements);
 fun_skills(data.skills);
  });
  var div2=document.getElementById("child2");
  function fun_carrer(carr){
    var heading1=document.createElement("h2");
    heading1.textContent="carrer objective";

    var hr=document.createElement("hr");
  heading1.appendChild(hr);

    div2.appendChild(heading1);
    var p=document.createElement("p");
    p.textContent=carr.info;
    div2.appendChild(p);
    // var horz=document.createElement("hr");
    // heading1.appendChild(horz);
  }

function fun_education(edu){
  var h1=document.createElement("h2")
  h1.textContent="Educational Qualifications";
  div2.appendChild(h1);

var hr=document.createElement("hr");
div2.appendChild(hr);
var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0;i<edu.length;i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    listItem.style.fontWeight="550";
    listItem.style.color="#ff6d1f";
    list.appendChild(listItem);
    var listItem=document.createElement("p");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);
    var listItem=document.createElement("p");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
  }
}
function fun_achivements(achive)
{
var h1=document.createElement("h2")
h1.textContent="Achivements";
div2.appendChild(h1);

var hr=document.createElement("hr");
div2.appendChild(hr);

var ul=document.createElement("ul");
  div2.appendChild(ul);


    for(var i=0;i<achive.length;i++){
      var listItem3=document.createElement("li");
      listItem3.innerHTML=achive[i].name;
      ul.appendChild(listItem3);
}
}
function fun_skills(tech){
  var heading3=document.createElement("h2");
  heading3.textContent="Technical Skills";
  div2.appendChild(heading3);
    var hr=document.createElement("hr");
  heading3.appendChild(hr);
var tr="";
var table=document.createElement("table");
div2.appendChild(table);
for(i=0;i<tech.length;i++){
  tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
  }
    table.innerHTML=tr;
    table.border="1";
}
