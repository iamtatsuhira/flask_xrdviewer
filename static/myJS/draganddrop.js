const maxFileSize = 1 * 1024 * 1024
const elDrop = document.getElementById('dropzone')
const elNote = document.getElementById('file-upload-log')

elDrop.addEventListener('dragover', (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
    showDropping()
})

elDrop.addEventListener('dragleave', () => {
    hideDropping()
})

elDrop.addEventListener('drop', (event) => {
    event.stopPropagation()
    event.preventDefault()
    hideDropping()

    const files = event.dataTransfer.files;
    handleDrop(files)
})

const showDropping = () => {
    elDrop.classList.add('dropover')
}

const hideDropping = () => {
    elDrop.classList.remove('dropover')
}

const handleDrop = (files) => {

    let acceptedFileList = checkFileSize(files)
    acceptedFileList = checkFileType(acceptedFileList)

    upload_to_server(acceptedFileList)
}

const checkFileSize = (files) => {
    const acceptedFileList = []
    for (const file of files){
        if (file.size >= maxFileSize){
            addErrorNoteFileSize()
            continue;
        } else {
            acceptedFileList.push(file)
        }
    }
    return acceptedFileList
}

const checkFileType = (files) => {
    const acceptedFileList = []
    for (const file of files){
        var type = file.type
        if (type !== 'text/plain' && type !== ''){ // .dat has no type ('')
            addErrorNoteFileType(file)
            continue;
        } else {
            acceptedFileList.push(file)
        }
    }
    return acceptedFileList
}


const upload_to_server = (files) => {
    
    const request = new XMLHttpRequest()
    request.open('POST', '/adddata')

    var fd = new FormData();
    // add files to FormData
    let i = 0
    for (const file of files){
        let dataKey = 'datafile' + (i+1)
        fd.append(dataKey, file)
        i += 1
    }

    request.onload = () => {
        if(request.status >=200 && request.status < 400) {
            // Success!
            const graphJSON = JSON.parse(JSON.parse(request.response))

            Plotly.addTraces('scattergraph', graphJSON)
            addLegend(graphJSON.length)
        }
        else {
            // We reached our target server, but it returned an error
            console.error('we reached our target server, but it returned an error!')
        }
    }
    request.onerror = () => {
        // There was a conection error of some sort
        console.error('There was a conection error of some sort')
    }

    request.send(fd)

}

const addErrorNoteFileType = (file) => {
    const newLi = document.createElement("li")
    const newText = 'Cannot upload! ("' + file.name + '" is not text/plain type)'
    newLi.innerHTML = newText
    const list = document.getElementById("file-upload-log")
    list.insertBefore(newLi, list.firstChild) //最初に追加
        // list.appendChild(newLi) // こうすると最後に追加
}

const addErrorNoteFileSize = () => {
    const newLi = document.createElement("li")
    const newText = "Cannot upload! (Maximum file size is " + maxFileSize/(1024*1024) + " MB)" 
    newLi.innerHTML = newText
    const list = document.getElementById("file-upload-log")
    list.insertBefore(newLi, list.firstChild) //最初に追加
        // list.appendChild(newLi) // こうすると最後に追加
}