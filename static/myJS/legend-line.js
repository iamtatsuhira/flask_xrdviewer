const setLegend = () => {
    const graphDiv = document.getElementById('scattergraph')
    const data = graphDiv.data
    let i = 0
    for (let index in data){
        let lineId = "legend-line-" + (i+1)
        let labelId = "legend-label-" + (i+1)
        let legendLine = document.getElementById(lineId)
        let legendLabel = document.getElementById(labelId)
        legendLine.style.width = '20px'
        legendLine.style.height = '3px'
        legendLine.style.backgroundColor = data[index].line.color
        legendLine.style.display = 'inline-block'
        legendLine.style.margin = '0px 4px 3px 3px'
        legendLabel.innerHTML = data[index].name
        i += 1
    }
}

const addLegend = (elNum) => {
    const graphDiv = document.getElementById('scattergraph')
    const data = graphDiv.data
    const startIndex = data.length - elNum

    const parentElment = document.getElementById('formName')
    
    for (let index=startIndex; index<data.length; index++){
        let newDiv = document.createElement('div')
        newDiv.classList.add('form-check')
        let newCheckBox = document.createElement('input')
        newCheckBox.classList.add('form-check-input')
        newCheckBox.setAttribute('type', 'checkbox')
        newCheckBox.setAttribute('name', 'xrdlistcheck')
        newCheckBox.setAttribute('value', index+1)
        newCheckBox.setAttribute('id', 'chkbox-'+(index+1))
        newCheckBox.setAttribute('checked', 'checked')
        newCheckBox.setAttribute('onChenge', "{setVisibleOrNot( 'form-check-input' )}")
        let newLegendLine = document.createElement('div')
        newLegendLine.setAttribute('id', 'legend-line-' + (index+1))
        let newLegendLabel = document.createElement('label')
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
