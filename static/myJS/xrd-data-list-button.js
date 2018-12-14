function check_all(){
    var checkList = document.getElementsByClassName('form-check-input')
    for (var i=0;i<checkList.length; i++){
        checkList[i].checked = true
        setVisibleOrNot( 'form-check-input' )
    }
}

function uncheck_all(){
    var checkList = document.getElementsByClassName('form-check-input')
    for (var i=0;i<checkList.length; i++){
        checkList[i].checked = false
        setVisibleOrNot( 'form-check-input' )
    }
}