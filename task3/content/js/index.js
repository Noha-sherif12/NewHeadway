const closeBtnInput = document.getElementById('closeBtn');
const submitBtnInput = document.getElementById('submitBtn');
const editContainerInput = document.querySelector('.edit-container');

let tableData = [
    `<tr>
        <td class="pe-3"><input type="checkbox" class="custom-checkbox" id="checkbox1">
        <label for="checkbox1"></label></td>
        <td class="tableName w-132">Bessie Cooper</td>
        <td class="tableCompany">IBM</td>
        <td class="imgPath pe-5"><img src="./content/images/image-1.svg" alt="profile picture"></td>
        <td class="tableCart">453 €</td>
        <td class="editIcon"><i class="fa-solid fa-pen"></i></td>
    </tr>`,
    `<tr class="bg-gray">
        <td class="pe-3"><input type="checkbox" class="custom-checkbox" id="checkbox2">
        <label for="checkbox2"></label></td>
        <td class="tableName w-132">Wade Warren</td>
        <td class="tableCompany">L'Oréal</td>
        <td class="imgPath pe-5"><img src="./content/images/image-2.svg" alt="profile picture"></td>
        <td class="tableCart">994 €</td>
        <td class="editIcon"><i class="fa-solid fa-pen"></i></td>
    </tr>`,
    `<tr>
        <td class="pe-3"><input type="checkbox" class="custom-checkbox" id="checkbox3">
        <label for="checkbox3"></label></td>
        <td class="tableName w-132">Arlene McCoy</td>
        <td class="tableCompany">Gillette</td>
        <td class="imgPath pe-5"><img src="./content/images/image-3.svg" alt="profile picture"></td>
        <td class="tableCart">429 €</td>
        <td class="editIcon"><i class="fa-solid fa-pen"></i></td>
    </tr>`,
    `<tr class="bg-gray">
        <td class="pe-3"><input type="checkbox" class="custom-checkbox" id="checkbox4">
        <label for="checkbox4"></label></td>
        <td class="tableName w-132">Jenny Wilson</td>
        <td class="tableCompany">MasterCard</td>
        <td class="imgPath pe-5"><img src="./content/images/image-4.svg" alt="profile picture"></td>
        <td class="tableCart">826 €</td>
        <td class="editIcon"><i class="fa-solid fa-pen"></i></td>
    </tr>`,
    `<tr>
        <td class="pe-3"><input type="checkbox" class="custom-checkbox" id="checkbox5">
        <label for="checkbox5"></label></td>
        <td class="tableName w-132">Kristin Watson</td>
        <td class="tableCompany">Gillette</td>
        <td class="imgPath pe-5"><img src="./content/images/image-5.svg" alt="profile picture"></td>
        <td class="tableCart">561 €</td>
        <td class="editIcon"><i class="fa-solid fa-pen"></i></td>
    </tr>`,
    `<tr class="bg-gray">
        <td class="pe-3"><input type="checkbox" class="custom-checkbox" id="checkbox6">
        <label for="checkbox6"></label></td>
        <td class="tableName w-132">Cameron Williamson</td>
        <td class="tableCompany">Louis Vuitton</td>
        <td class="imgPath pe-5"><img src="./content/images/image-6.svg" alt="profile picture"></td>
        <td class="tableCart">540 €</td>
        <td class="editIcon"><i class="fa-solid fa-pen"></i></td>
    </tr>`
];


function formTable() {
    const tableBody = document.getElementById('myTable');
    tableBody.innerHTML = ''; 
    tableData.forEach(rowHTML => {
        tableBody.innerHTML += rowHTML;
    });
    attachEditEventListeners(); 
}

document.addEventListener('DOMContentLoaded', function() {
    formTable();
});

function attachEditEventListeners() {
    const editIcons = document.querySelectorAll('.editIcon');
    editIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            openUpdate(index);
        });
    });
}

function openUpdate(index) {
    const row = document.querySelectorAll('#myTable tr')[index];
    document.getElementById('inputName').value = row.querySelector('.tableName').textContent;
    document.getElementById('inputCompany').value = row.querySelector('.tableCompany').textContent;
    document.getElementById('inputImg').value = row.querySelector('.imgPath img').getAttribute('src');
    document.getElementById('inputCart').value = row.querySelector('.tableCart').textContent;
    
    editContainerInput.dataset.index = index;
    editContainerInput.classList.remove('d-none');
}

closeBtnInput.addEventListener('click', function() {
    editContainerInput.classList.add('d-none');
});

submitBtnInput.addEventListener('click', function() {
    const index = editContainerInput.dataset.index; 
    setUpdate(index); 
});

function setUpdate(index) {
    const row = document.querySelectorAll('#myTable tr')[index];

    const name = document.getElementById('inputName').value;
    const company = document.getElementById('inputCompany').value;
    const imagePath = document.getElementById('inputImg').value;
    const cart = document.getElementById('inputCart').value;


    row.querySelector('.tableName').textContent = name;
    row.querySelector('.tableCompany').textContent = company;
    row.querySelector('.imgPath img').setAttribute('src', imagePath);
    row.querySelector('.tableCart').textContent = cart;


    editContainerInput.classList.add('d-none'); 
    console.log('Row updated successfully');
}