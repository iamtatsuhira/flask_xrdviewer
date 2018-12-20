import Plotly from 'plotly.js-dist'

export const setVisibleOrNot = (checkBoxClassName) =>{
    const elements = document.getElementsByClassName(checkBoxClassName)
    const visibleArray = []
    for (let el of elements){
        visibleArray.push(el.checked)
    }

    const update = {
        'visible': visibleArray
    }

    Plotly.restyle('scattergraph', update)
}