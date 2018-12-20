import {setVisibleOrNot} from './change-checkbox'

const elCheckAll = document.getElementById('btn-chk-all')
const elUncheckAll = document.getElementById('btn-unchk-all')
const elFormCheckInputList = document.getElementsByClassName('form-check-input')

const checkAll = () => {
    const checkList = document.getElementsByClassName('form-check-input')
    for (const elCheck of checkList){
        elCheck.checked = true
        setVisibleOrNot( 'form-check-input' )
    }
}

const uncheckAll = () => {
    const checkList = document.getElementsByClassName('form-check-input')
    for (const elCheck of checkList){
        elCheck.checked = false
        setVisibleOrNot( 'form-check-input' )
    }
}

elCheckAll.addEventListener('click', () => {checkAll()})
elUncheckAll.addEventListener('click', () => {uncheckAll()})
for (const elFormCheckInput of elFormCheckInputList){
    elFormCheckInput.addEventListener('change', () => {setVisibleOrNot('form-check-input')})
}
