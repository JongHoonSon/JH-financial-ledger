const $addItemFormBtnIncome = document.querySelector(".addItem__btn__income");
const $addItemFormBtnExpense = document.querySelector(".addItem__btn__expense");

$addItemFormBtnIncome.addEventListener("click", addItem);
$addItemFormBtnExpense.addEventListener("click", addItem);

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

function addItem(event) {
    const $addItemFormInputTitle = document.querySelector(".addItem__form__input__title");
    const $addItemFormInputAmount = document.querySelector(".addItem__form__input__amount");
    
    const newItemTitle = $addItemFormInputTitle.value;
    const newItemAmount = $addItemFormInputAmount.value;

    if(checkInput(newItemTitle, newItemAmount) === false) {
        return;
    }
    
    const $newListItem = document.createElement("li");
    const $newListItemDiv = document.createElement("div");
    const $newListItemDate = document.createElement("span");
    const $newListItemTitle = document.createElement("span");
    const $newListItemAmount = document.createElement("span");
    const $newListItemButton = document.createElement("button");
    const $newListItemButtonImage = document.createElement("img");

    $newListItemDate.innerText = getDate();
    $newListItemTitle.innerText = newItemTitle;
    $newListItemAmount.innerText = newItemAmount;
    $newListItemButtonImage.src = "svg/trash-can-solid.svg";
    
    $newListItem.appendChild($newListItemDiv);
    $newListItem.appendChild($newListItemDate);
    $newListItem.appendChild($newListItemTitle);
    $newListItem.appendChild($newListItemAmount);
    $newListItem.appendChild($newListItemButton);
    $newListItemButton.appendChild($newListItemButtonImage);
    
    const $incomeList = document.querySelector(".income-list");
    const $expenseList = document.querySelector(".expense-list");

    const clickedBtnName = event.path[0].innerText;
    let classNamePrefix;

    if(clickedBtnName === 'INCOME') {
        $incomeList.appendChild($newListItem);
        classNamePrefix = "income";
    } else if(clickedBtnName === "EXPENSE") {
        $expenseList.appendChild($newListItem);
        classNamePrefix = "expense";
    }

    $newListItem.classList.add(`${classNamePrefix}-list__item`);
    $newListItemDate.classList.add(`${classNamePrefix}-list__item__date`);
    $newListItemTitle.classList.add(`${classNamePrefix}-list__item__title`);
    $newListItemAmount.classList.add(`${classNamePrefix}-list__item__amount`);
    $newListItemButton.classList.add(`${classNamePrefix}-list__item__delete-btn`);
    $newListItemButtonImage.classList.add(`${classNamePrefix}-list__item__delete-btn__image`);

    $newListItemButtonImage.addEventListener("click", deleteItem);
    
    $addItemFormInputTitle.value = '';
    $addItemFormInputAmount.value = '';
}

function deleteItem(event) {
    const $listItem = event.target.parentElement.parentElement;

    $listItem.remove();
}