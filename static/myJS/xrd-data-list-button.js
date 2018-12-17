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