const $addItemFormBtnIncome = document.querySelector(".addItem__btn__income");
const $addItemFormBtnExpense = document.querySelector(".addItem__btn__expense");


const INCOME_ITEM_KEY = "INCOME_ITEM";
const EXPENSE_ITEM_KEY = "EXPENSE_ITEM";

let incomeItemArray = [];
let expenseItemArray = [];

getItemFromLocalStorage();

$addItemFormBtnIncome.addEventListener("click", handleAddBtnClick);
$addItemFormBtnExpense.addEventListener("click", handleAddBtnClick);

function getItemFromLocalStorage() {
    const savedIncomeItems = localStorage.getItem(INCOME_ITEM_KEY); 
    const savedExpenseItems = localStorage.getItem(EXPENSE_ITEM_KEY); 

    if(savedIncomeItems !== null) {
        const parsedIncomeItems = JSON.parse(savedIncomeItems);
        parsedIncomeItems.forEach(el => {
            incomeItemArray.push(el);
            paintItem(el, 'INCOME');
        });
    }

    if(savedExpenseItems !== null) {
        const parsedExpenseItems = JSON.parse(savedExpenseItems);
        parsedExpenseItems.forEach(el => {
            expenseItemArray.push(el);
            paintItem(el, 'EXPENSE');
        });
    }
}

function handleAddBtnClick(event) {
    const $addItemFormInputTitle = document.querySelector(".addItem__form__input__title");
    const $addItemFormInputAmount = document.querySelector(".addItem__form__input__amount");
    
    const newItemTitle = $addItemFormInputTitle.value;
    const newItemAmount = $addItemFormInputAmount.value;

    $addItemFormInputTitle.value = '';
    $addItemFormInputAmount.value = '';

    if(checkInput(newItemTitle, newItemAmount) === false) {
        return;
    }

    const newItem = {
        id: Date.now(),
        date: getDate(),
        title: newItemTitle,
        amount: newItemAmount
    }

    const newItemType = event.path[0].innerText;

    if(newItemType === 'INCOME') {
        incomeItemArray.push(newItem);
    } else if(newItemType === "EXPENSE") {
        expenseItemArray.push(newItem);
    }
    paintItem(newItem, newItemType);
    saveItem(incomeItemArray, expenseItemArray);
} 

function paintItem(newItem, newItemType) {
    const $newListItem = document.createElement("li");
    const $newListItemDiv = document.createElement("div");
    const $newListItemDate = document.createElement("span");
    const $newListItemTitle = document.createElement("span");
    const $newListItemAmount = document.createElement("span");
    const $newListItemButton = document.createElement("button");
    const $newListItemButtonImage = document.createElement("img");

    $newListItemDate.innerText = newItem.date;
    $newListItemTitle.innerText = newItem.title;
    $newListItemAmount.innerText = newItem.amount;
    $newListItemButtonImage.src = "svg/trash-can-solid.svg";
    
    $newListItem.appendChild($newListItemDiv);
    $newListItem.appendChild($newListItemDate);
    $newListItem.appendChild($newListItemTitle);
    $newListItem.appendChild($newListItemAmount);
    $newListItem.appendChild($newListItemButton);
    $newListItemButton.appendChild($newListItemButtonImage);
    
    const $incomeList = document.querySelector(".income-list");
    const $expenseList = document.querySelector(".expense-list");

    let classNamePrefix;

    if(newItemType === 'INCOME') {
        $incomeList.appendChild($newListItem);
        classNamePrefix = "income";
    } else if(newItemType === "EXPENSE") {
        $expenseList.appendChild($newListItem);
        classNamePrefix = "expense";
    }

    $newListItem.classList.add(`${classNamePrefix}-list__item`);
    $newListItemDate.classList.add(`${classNamePrefix}-list__item__date`);
    $newListItemTitle.classList.add(`${classNamePrefix}-list__item__title`);
    $newListItemAmount.classList.add(`${classNamePrefix}-list__item__amount`);
    $newListItemButton.classList.add(`${classNamePrefix}-list__item__delete-btn`);
    $newListItemButtonImage.classList.add(`${classNamePrefix}-list__item__delete-btn__image`);

    $newListItem.id = newItem.id;
    $newListItemButtonImage.addEventListener("click", deleteItem);
}

function deleteItem(event) {
    const $listItem = event.target.parentElement.parentElement;
    const itemID = $listItem.id;

    console.log(`listItem : ${$listItem}`);
    console.log(`itemID : ${itemID}`);

    console.log(incomeItemArray);
    console.log(expenseItemArray);
    
    incomeItemArray = incomeItemArray.filter(el => el.id !== parseInt(itemID));
    expenseItemArray = expenseItemArray.filter(el => el.id !== parseInt(itemID));
    
    console.log(incomeItemArray);
    console.log(expenseItemArray);

    saveItem(incomeItemArray, expenseItemArray);
    $listItem.remove();
}

function saveItem(incomeItemArray, expenseItemArray) {
    localStorage.setItem(INCOME_ITEM_KEY, JSON.stringify(incomeItemArray));
    localStorage.setItem(EXPENSE_ITEM_KEY, JSON.stringify(expenseItemArray));
}

function checkInput(newItemTitle, newItemAmount) {
    if(newItemTitle.length === 0 && newItemAmount.length === 0) {
        alert('내용과 금액을 입력하세요.');
        return false;
    } else if(newItemTitle.length === 0) {
        alert('내용을 입력하세요.');
        return false;
    } else if(newItemAmount.length === 0) {
        alert('금액을 입력하세요.');
        return false;
    }
    return true;
}

function getDate() {
    const date = new Date();
    let thisYear = date.getFullYear();
    let thisMonth = date.getMonth()+1;
    let thisDate = date.getDate();

    thisYear = String(thisYear).slice(2, 4);

    if(thisMonth<10) {
        thisMonth = '0' + thisMonth;
    }

    if(thisDate<10) {
        thisDate = '0' + thisDate;
    }

    return `${thisYear}/${thisMonth}/${thisDate}`
}