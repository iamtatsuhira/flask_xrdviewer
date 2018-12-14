function setLegend(){
    var graphDiv = document.getElementById('scattergraph')
    var data = graphDiv.data
    for (var i=0; i<data.length; i++){
        var lineId = "legend-line-" + (i+1)
        var labelId = "legend-label-" + (i+1)
        var legendLine = document.getElementById(lineId)
        var legendLabel = document.getElementById(labelId)
        legendLine.style.width = '20px'
        legendLine.style.height = '3px'
        legendLine.style.backgroundColor = data[i].line.color
        legendLine.style.display = 'inline-block'
        legendLine.style.margin = '0px 4px 3px 3px'
        legendLabel.innerHTML = data[i].name
    }
}

function addLegend(elNum) {
    var graphDiv = document.getElementById('scattergraph')
    var data = graphDiv.data
    var startIndex = data.length - elNum

    var parentElment = document.getElementById('formName')
    
    for (var index=startIndex; index<data.length; index++){
        var newDiv = document.createElement('div')
        newDiv.classList.add('form-check')
        var newCheckBox = document.createElement('input')
        newCheckBox.classList.add('form-check-input')
        newCheckBox.setAttribute('type', 'checkbox')
        newCheckBox.setAttribute('name', 'xrdlistcheck')
        newCheckBox.setAttribute('value', index+1)
        newCheckBox.setAttribute('id', 'chkbox-'+(index+1))
        newCheckBox.setAttribute('checked', 'checked')
        newCheckBox.setAttribute('onChenge', "{setVisibleOrNot( 'form-check-input' )}")
        var newLegendLine = document.createElement('div')
        newLegendLine.setAttribute('id', 'legend-line-' + (index+1))
        var newLegendLabel = document.createElement('label')
        newLegendLabel.classList.add('form-check-label')
        newLegendLabel.setAttribute('for', 'chkbox-'+(index+1))
        newLegendLabel.setAttribute('id', 'legend-label-'+(index+1))

        parentElment.appendChild(newDiv)
        newDiv.appendChild(newCheckBox)
        newDiv.appendChild(newLegendLine)
        newDiv.appendChild(newLegendLabel)

        newLegendLine.style.width = '20px'
        newLegendLine.style.height = '3px'
        newLegendLine.style.backgroundColor = data[index].line.color
        newLegendLine.style.display = 'inline-block'
        newLegendLine.style.margin = '0px 4px 3px 3px'
        newLegendLabel.innerHTML = data[index].name
    }
}
