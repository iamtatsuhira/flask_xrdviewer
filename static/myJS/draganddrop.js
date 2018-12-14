var maxFileSize = 1 * 1024 * 1024
var elDrop = document.getElementById('dropzone')
var elNote = document.getElementById('file-upload-log')
// var elFiles = document.getElementById('files');

elDrop.addEventListener('dragover', function(event){
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
    showDropping()
})

elDrop.addEventListener('dragleave', function(event){
    hideDropping()
})

elDrop.addEventListener('drop', function(event){
    event.stopPropagation()
    event.preventDefault()
    hideDropping()

    var files = event.dataTransfer.files;
    handleDrop(files)
})

function showDropping() {
    elDrop.classList.add('dropover')
}

function hideDropping(){
    elDrop.classList.remove('dropover')
}

function handleDrop(files){

    var acceptedFileList = checkFileSize(files)
    acceptedFileList = checkFileType(acceptedFileList)

    upload_to_server(acceptedFileList)
}

function checkFileSize(files){
    var acceptedFileList = []
    for (var i=0; i<files.length; i++){
        var file = files[i]
        if (file.size >= maxFileSize){
            addErrorNoteFileSize(file)
            continue;
        } else {
            acceptedFileList.push(file)
        }
    }
    return acceptedFileList
}

function checkFileType(files){
    var acceptedFileList = []
    for (var i=0; i<files.length; i++){
        var file = files[i]
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

// function upload_to_server(file){
    
//     var request = new XMLHttpRequest()
//     request.open('POST', '/adddata', false)

//     var fd = new FormData();
//     fd.append('datafile', file)
//     console.log(fd)
    
//     request.onload = function(){
//         if(request.status >=200 && request.status < 400) {
//             // Success!
//             var graphJSON = JSON.parse(JSON.parse(request.response))

//             Plotly.addTraces('scattergraph', graphJSON)
//             addLegend()
//         }
//         else {
//             // We reached our target server, but it returned an error
//             console.log('we reached our target server, but it returned an error!')
//         }
//     }
//     request.onerror = function(){
//         // There was a conection error of some sort
//         console.log('There was a conection error of some sort')
//     }

//     request.send(fd)

// }

function upload_to_server(files){
    
    var request = new XMLHttpRequest()
    request.open('POST', '/adddata')

    var fd = new FormData();
    // add files to FormData
    for (var i=0; i<files.length; i++){
        var file = files[i]
        var dataKey = 'datafile' + (i+1)
        fd.append(dataKey, file)
    }

    request.onload = function(){
        if(request.status >=200 && request.status < 400) {
            // Success!
            var graphJSON = JSON.parse(JSON.parse(request.response))

            Plotly.addTraces('scattergraph', graphJSON)
            addLegend(graphJSON.length)
        }
        else {
            // We reached our target server, but it returned an error
            console.log('we reached our target server, but it returned an error!')
        }
    }
    request.onerror = function(){
        // There was a conection error of some sort
        console.log('There was a conection error of some sort')
    }

    request.send(fd)

}

function addErrorNoteFileType(file){
    var newLi = document.createElement("li")
    var newText = 'Cannot upload! ("' + file.name + '" is not text/plain type)'
    newLi.innerHTML = newText
    var list = document.getElementById("file-upload-log")
    list.insertBefore(newLi, list.firstChild) //最初に追加
        // list.appendChild(newLi) // こうすると最後に追加
}

function addErrorNoteFileSize(file){
    var newLi = document.createElement("li")
    var newText = "Cannot upload! (Maximum file size is " + maxFileSize/(1024*1024) + " MB)" 
    newLi.innerHTML = newText
    var list = document.getElementById("file-upload-log")
    list.insertBefore(newLi, list.firstChild) //最初に追加
        // list.appendChild(newLi) // こうすると最後に追加
}