const btnAddInput = document.getElementById('btnAdd');
const btnDisplay = document.getElementById('btnDisplay');
const elementsInput = document.querySelector('.elements');

var elementList = [];

if(localStorage.getItem("information") !== null){
    elementList = JSON.parse(localStorage.getItem("information"));
    displayElements();
}

btnAddInput.addEventListener('click' , function(){
    addElement();
})

btnDisplay.addEventListener('click' , function(){
    displayElements();
})


function addElement(){

    var elements = {
        Input: elementsInput.value, 
    };

    elementList.push(elements);
    clearInfo();

localStorage.setItem("information" , JSON.stringify(elementList));


}

function clearInfo(){
    elementsInput.value = null;
}

function displayElements(){
var x = '';
for (var i = 0; i < elementList.length ; i++){
    x += `<tr>
<td>Element ${i} = ${elementList[i].Input}</td>
</tr>
    `;
}
document.getElementById("tableInfo").innerHTML = x;
}