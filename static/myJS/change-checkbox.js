function submit(idName){
    document.getElementById(idName).submit()
}

function setVisibleOrNot(checkBoxClassName){
    elements = document.getElementsByClassName(checkBoxClassName)
    visibleArray = []
    for (var i =0;i<elements.length; i++){
        visibleArray.push(elements[i].checked)
    }

    var update = {
        'visible': visibleArray
    }

    Plotly.restyle('scattergraph', update)
}