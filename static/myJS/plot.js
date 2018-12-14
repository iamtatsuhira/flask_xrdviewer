function plotGraph(data) {
    var graphs = data;
    var icon = {
        'width': 300,
        'path': 'M244.5,55.5V0h-15v55.5h-72V0h-15v55.5h-72V0h-15v55.5H0v15h55.5v72H0v15h55.5v72H0v15h55.5V300h15v-55.5h72V300h15v-55.5\
        h72V300h15v-55.5H300v-15h-55.5v-72H300v-15h-55.5v-72H300v-15H244.5z M142.5,142.5h-72v-72h72V142.5z M142.5,157.5v72h-72v-72\
        H142.5z M157.5,157.5h72v72h-72V157.5z M157.5,142.5v-72h72v72H157.5z',
        'ascent': 300,
        'descent': 0
    }
    var linearLogXIcon = {
        'width': 300,
        'path': 'M90.6,169.76v21.11H27.71V294H2.42V169.76H90.6z M108.8,189.88 c3.93-7.26,9.67-12.77,17.22-16.53c7.55-3.76,15.48-5.64,23.8-5.64c13.45,0,24.6,4.51,33.46,13.54 c8.86,9.03,13.29,20.41,13.29,34.14c0,13.61-4.39,24.88-13.16,33.79c-8.77,8.92-20.02,13.37-33.75,13.37 c-8.89,0-16.93-1.97-24.14-5.9c-7.21-3.93-12.77-9.63-16.71-17.09c-3.93-7.46-5.9-15.18-5.9-23.16 C102.9,205.99,104.87,197.14,108.8,189.88z M133.92,235.81c4.27,4.79,9.54,7.18,15.81,7.18c6.27,0,11.52-2.39,15.77-7.18 c4.24-4.79,6.37-11.62,6.37-20.51c0-9.12-2.12-16.06-6.37-20.85c-4.25-4.79-9.5-7.18-15.77-7.18c-6.27,0-11.54,2.39-15.81,7.18 s-6.41,11.68-6.41,20.68S129.65,231.02,133.92,235.81z M213.05,160.87c0-8.09,3.22-14.77,9.66-20.04c6.44-5.27,17.35-7.9,32.73-7.9 c8.15,0,14.88,0.85,20.21,2.56c5.33,1.71,9.58,4.07,12.77,7.09c3.19,3.02,5.67,7.18,7.43,12.48c1.76,5.3,2.65,13.3,2.65,24.01v81.43 h-22.47v-12.73c-7.29,9.85-16.55,14.78-27.77,14.78c-10.88,0-19.98-4.02-27.3-12.05c-7.32-8.03-10.98-19.65-10.98-34.86 c0-12.13,2.79-22.27,8.37-30.42c7.12-10.31,16.78-15.47,28.97-15.47c10.94,0,19.99,4.9,27.17,14.7v-13.24 c0-5.35-0.37-9.03-1.11-11.02c-1.08-2.79-2.68-4.81-4.79-6.07c-3.13-1.88-7.83-2.82-14.1-2.82c-4.9,0-8.49,0.85-10.77,2.56 c-1.65,1.2-2.71,3.39-3.16,6.58l-27.43,3.33C213.08,162.64,213.05,161.67,213.05,160.87z M240.18,237.48 c3.73,4.47,8.47,6.71,14.23,6.71c5.92,0,10.82-2.28,14.7-6.84c3.87-4.56,5.81-11.54,5.81-20.93c0-9-2.02-15.79-6.07-20.38 c-4.05-4.59-9-6.88-14.87-6.88c-5.47,0-10.07,2.24-13.8,6.71c-3.73,4.47-5.6,11.52-5.6,21.15 C234.58,226.18,236.45,233,240.18,237.48z M131.53,29.24c9.23,10.54,14.95,17.49,17.17,20.85c1.59-4.33,4.84-11.48,9.74-21.45 l9.4-18.88h29.05l-30.85,59.3l57.34,65.97H191l-19.74-22.3c-4.73-5.41-10.57-12.36-17.52-20.85c-0.4,0.97-0.77,1.74-1.11,2.31 c-5.18,10.71-7.98,16.49-8.38,17.35l-12.22,23.5h-26.92l31.1-61.87L80.94,9.76h33.33L131.53,29.24z',
        'ascent': 300,
        'descent': 0
    }
    var linearLogYIcon = {
        'width': 300,
        'path': 'M90.6,169.76v21.1H27.71V294H2.42V169.76H90.6z M108.8,189.9c3.93-7.26,9.67-12.77,17.22-16.53 c7.55-3.76,15.48-5.64,23.8-5.64c13.44,0,24.59,4.51,33.45,13.54s13.29,20.41,13.29,34.14c0,13.61-4.39,24.87-13.16,33.79 c-8.77,8.91-20.02,13.37-33.75,13.37c-8.89,0-16.93-1.97-24.14-5.9c-7.21-3.93-12.78-9.63-16.71-17.09 c-3.93-7.47-5.9-15.19-5.9-23.16C102.9,205.99,104.87,197.15,108.8,189.9z M133.92,235.81c4.27,4.79,9.54,7.18,15.81,7.18 s11.52-2.39,15.77-7.18c4.25-4.79,6.37-11.62,6.37-20.51c0-9.12-2.13-16.06-6.37-20.85c-4.25-4.79-9.5-7.18-15.77-7.18 s-11.54,2.39-15.81,7.18c-4.27,4.79-6.41,11.68-6.41,20.68S129.65,231.03,133.92,235.81z M213.05,160.88 c0-8.09,3.22-14.77,9.66-20.04c6.44-5.27,17.35-7.9,32.73-7.9c8.15,0,14.88,0.85,20.21,2.56c5.32,1.71,9.58,4.07,12.77,7.09 c3.18,3.02,5.66,7.18,7.43,12.48s2.65,13.3,2.65,24.01v81.43h-22.47v-12.73c-7.29,9.85-16.55,14.78-27.77,14.78 c-10.88,0-19.98-4.02-27.3-12.05c-7.32-8.03-10.98-19.65-10.98-34.86c0-12.13,2.79-22.27,8.37-30.42 c7.12-10.32,16.78-15.47,28.97-15.47c10.94,0,19.99,4.9,27.17,14.7v-13.24c0-5.35-0.37-9.03-1.11-11.02 c-1.09-2.79-2.68-4.82-4.79-6.07c-3.14-1.88-7.83-2.82-14.1-2.82c-4.9,0-8.49,0.85-10.77,2.56c-1.65,1.2-2.7,3.39-3.16,6.58 l-27.43,3.33C213.08,162.64,213.05,161.67,213.05,160.88z M240.18,237.48c3.73,4.47,8.48,6.71,14.23,6.71 c5.93,0,10.82-2.28,14.7-6.84c3.87-4.56,5.81-11.54,5.81-20.94c0-9-2.03-15.8-6.07-20.38c-4.05-4.59-9-6.88-14.87-6.88 c-5.47,0-10.07,2.24-13.8,6.71c-3.73,4.47-5.6,11.52-5.6,21.15C234.58,226.18,236.45,233.01,240.18,237.48z M162.98,56.16 l57.42,78.87h-29.91l-17.69-25.38l-11.88-16.58c-2.79-4.16-5.24-8.09-7.35-11.79c-1.25,3.76-3.73,9.88-7.43,18.37l-15.55,35.38 h-27.43l34.52-76.48L127.51,9.76h25.72L162.98,56.16z',
        'ascent': 300,
        'descent': 0
    }
    var normalizationIcon = {
        'width': 300,
        'path': 'M303,25.9c-23.4,0.7-88.6,3.8-108,9.2c-5,1.4-13.3,3.7-21.3,24c-2,5-4.7,11.8-12.6,11.8c-7.2,0-10.9-5.6-15.6-12.7 c-2.7-4-5.7-8.6-8.8-11.7c-6.1-6.1-25.3-16.5-32.8-10.1C89.3,48.9,79.6,105.5,73.5,147c-3.8,25.8-5.8,51-7.6,73.2 c-1.4,17.8-2.7,33.2-4.5,44.3c-1.4,8.4-4.2,25.8-18.1,25.8c-6.4,0-14.8-3.4-18.9-19.4c-1.9-7.6-2.8-17.1-3.6-26.2 c-0.4-4.5-0.8-8.8-1.3-12.7c-0.3-2.1-0.6-4.9-1.1-8.5c-4-32.8-16.2-132.6-34.5-171l19-9C20.7,80.7,32.2,162.6,39.3,221 c0.4,3.5,0.8,6.3,1,8.3c0.5,4.2,1,8.9,1.4,13.4c0.2,1.7,0.3,3.7,0.5,5.8c1-9.4,1.9-20.2,2.7-30c1.8-22.6,3.9-48.1,7.7-74.6 c11-75.1,21.6-109.8,37.6-123.4c20.6-17.7,52.1,2,61.3,11.2c2.8,2.8,5.3,6,7.5,9.1c5.1-9.6,14.1-21.2,30.3-25.7 c25.9-7.3,109.5-9.9,113.1-10L303,25.9z M165.1,129.3h31.6v113.5l-37.8-18.2v19.5l37.6,17.9l20.3,0V129.3H248v-17h-82.9V129.3z',
        'ascent': 300,
        'descent': 0
    }
    var offsetIcon = {
        'width': 300,
        'path': 'M88.1,221.2c-3.1,3.6-5.6,9.5-7.6,16.9c1-8.2,1.9-18.1,2.8-28.4c2.4-27.5,6.1-69.1,13.9-78.2c6.2-7.1,15.7-12,28.4-14.4 c11.7-2.2,21.9-1.5,23.8-1.3c3.5,0.3,8,9,10.9,14.7l0.6,1.2c4.6,8.9,6.5,20.3,7.9,28.6c0.7,4,1.2,7.5,2,10.2 c2.2,7.5,6.5,9.1,9.8,9.1c4.6,0,8.1-3.1,10.2-9.4c1.1-3,1.9-6.8,3-11.2c1.7-7.4,3.9-16.6,7.1-22c8.2-13.7,18.9-22.1,24.2-22.1H300 v-15h-74.9c-6.7,0-13.9,3.4-21.4,10.1c-5.8,5.2-11.4,12.1-15.8,19.4c-2.9,4.8-4.9,10.9-6.5,16.9c-1.5-7-3.7-14.6-7.2-21.5l-0.6-1.1 c-5-9.7-11.2-21.7-23-22.7c-4.5-0.4-44.2-3.1-64.8,20.9c0,0-0.1,0.1-0.1,0.1c0.2-2,0.4-4,0.5-6c2.2-25.5,6-68.1,13.2-76.5 c14.8-17.2,47.2-14.9,49.6-14.7c2.4,1,6.6,9.2,8.6,13.1l0.6,1.2c4.4,8.5,6.2,19.1,7.6,27.7c0.7,4.1,1.3,7.7,2.1,10.6 c2.9,10.2,9.8,11.3,12.6,11.3c4.1,0,9.8-2,13-11.4c1.1-3.2,2-7,3.1-11.5c1.7-7.2,3.8-16.2,6.8-21.2c7.6-12.8,17.8-20.7,21.7-20.7 H300v-21h-74.9c-15.7,0-31.2,16.7-39.7,30.9c-1.4,2.3-2.6,5-3.7,7.7c-1.3-4.1-2.9-8.2-4.9-12.1l-0.6-1.1 c-5.3-10.3-12-23.2-25.4-24.4C143.4,3,104.7,1,83.5,25.6C72.9,38,69.4,67.8,65.5,112c-0.5-3.8-1-7.5-1.5-10.9 c-7-52.7-10.7-74.9-19.7-82.4c-1.8-1.5-3.3-2.9-4.6-4.1C29,4.9,24.5,3.6,0,3.6v21c9.6,0,16.2,0.2,19.5,1.1c1.7,0.5,2.5,1.1,6.2,4.4 c1.3,1.2,2.8,2.6,4.7,4.2c4.6,7.2,9.7,46.2,12.8,69.5c0.7,4.9,1.3,9.7,1.9,14.4c-0.8-1.3-1.7-2.3-2.7-3.1c-1.9-1.6-3.4-2.9-4.7-4.1 c-9.7-8.7-13-10.1-37.7-10.1v15c20.7,0,21.1,0.4,27.7,6.3c1.4,1.3,3,2.7,5,4.4c4.9,6,10.3,46.8,13.5,71.2 c2.2,16.3,4.2,31.6,6.4,43.2c2.7,14.2,5.4,25,14.2,25c4.9,0,7.8-3.3,9.6-7.7c-2.2,14.5-3.7,31.4-5.1,48c-1.3,14.5-2.8,31.7-4.6,40.6 c-2.9-10.9-6.1-34.7-8.6-53.1c-2.3-17-4.6-34.6-7.2-48.7c-4.1-22.2-7.5-27.6-10.4-29.9c-1.9-1.6-3.4-3-4.8-4.2 c-9.2-8.3-11.8-9.4-35.7-9.4v9c21.9,0,22.6,0.7,29.7,7c1.4,1.3,3,2.7,5,4.4c0.5,0.5,3.4,3.8,7.3,24.7c2.6,13.9,4.9,31.4,7.1,48.3 c7.1,53.2,9.5,65.7,17.6,65.7c8.3,0,9.9-12.8,13.4-53.5c2.6-29.6,6.2-70,14.6-79.9c16.7-19.4,50.9-17.1,54.7-16.7 c5.2,0.4,9.5,8.9,13.3,16.3l0.6,1.2c4.8,9.3,6.8,21,8.2,29.5c1.7,10.1,2.8,16.8,8.8,16.8c6,0,7.7-7.3,10.3-18.3 c1.8-7.6,4-17.1,7.5-22.9c8-13.5,19.6-23.6,26.8-23.6H300v-9h-74.9c-12.3,0-26.2,14.1-34.5,28c-4.2,7-6.6,17.2-8.5,25.4 c-0.3,1.4-0.7,2.9-1,4.4c-0.1-0.8-0.3-1.6-0.4-2.4c-1.5-9.1-3.6-21.5-9.1-32.1l-0.6-1.1c-4.9-9.5-10.5-20.3-20.6-21.1 C146.1,201,107.7,198.4,88.1,221.2z M71.7,173.8c-1.2,10.4-2.3,22-3.4,34.6c-0.6,7.2-1.4,15.4-2.2,22.9c-1.8-11.1-3.6-24.4-5.1-35.7 c-1.2-9.3-2.4-17.6-3.4-25.1c2.3,2.6,5.2,4.2,9.2,4.2C68.7,174.7,70.3,174.4,71.7,173.8z',
        'ascent': 300,
        'descent': 0
    }

    var customButtons = [
        {
            name: 'show/hide grid',
            icon: icon,
            click: function(gd) {
                boolShowGrid = !gd.layout.xaxis.showgrid
                update = {
                    'xaxis.showgrid': boolShowGrid,
                    'yaxis.showgrid': boolShowGrid
                }
                Plotly.relayout(gd, update)
            }
        },
        {
            name: 'linear/log scale x axis',
            icon: linearLogXIcon,
            click: function(gd) {
                if (gd.layout.xaxis.type === 'log'){
                    newType = 'linear'
                } else {
                    newType = 'log'
                }
                update = {
                    'xaxis.type': newType
                }
                Plotly.relayout(gd, update)
            }
        },
        {
            name: 'linear/log scale y axis',
            icon: linearLogYIcon,
            click: function(gd) {
                if (gd.layout.yaxis.type === 'log'){
                    newType = 'linear'
                } else {
                    newType = 'log'
                }
                update = {
                    'yaxis.type': newType
                }
                Plotly.relayout(gd, update)
            }
        },
        // {
        //     name: 'normalization/reset normalization',
        //     icon: normalizationIcon,
        //     click: function(gd) {
        //         if (!gd.layout.c_normalized){
        //             // normalization
        //             update_y_list = []
        //             for (var i=0;i<gd.data.length; i++){
        //                 var max_y = gd.data[i].customdata[0].max_y
        //                 var normed_y_list = []
        //                 for ( var j=0;j<gd.data[i].y.length; j++){
        //                     normed_y = gd.data[i].y[j] / max_y
        //                     normed_y_list.push(normed_y)
        //                 }
        //                 update_y_list.push(normed_y_list)
        //             }
        //             update_data = {
        //                 'y': update_y_list
        //             }
        //             update_layout = {
        //                 'c_normalized': !gd.layout.c_normalized
        //             }
        //             Plotly.update(gd, update_data, update_layout)
        //         } else {
        //             // reset normalization
        //             update_y_list = []
        //             for (var i=0;i<gd.data.length; i++){
        //                 var max_y = gd.data[i].customdata[0].max_y
        //                 var normed_y_list = []
        //                 for ( var j=0;j<gd.data[i].y.length; j++){
        //                     normed_y = gd.data[i].y[j] * max_y
        //                     normed_y_list.push(normed_y)
        //                 }
        //                 update_y_list.push(normed_y_list)
        //             }
        //             update_data = {
        //                 'y': update_y_list
        //             }
        //             update_layout = {
        //                 'c_normalized': !gd.layout.c_normalized
        //             }
        //             Plotly.update(gd, update_data, update_layout)
        //         }      
        //     }
        // },
        {
            name: 'normalization/reset normalization',
            icon: normalizationIcon,
            click: function(gd) {
                if (!gd.layout.c_normalized){
                    // normalization
                    if (gd.layout.c_offset){
                        // remove offset
                        var update_data = offsetRemovedData(gd)
                        var update_layout = offsetRemovedLayout()
                        Plotly.update(gd, update_data, update_layout)
                    }
                    var update_data = normalizeData(gd)
                    var update_layout = normalizeLayout()
                    Plotly.update(gd, update_data, update_layout)
                } else {
                    // reset normalization
                    if (gd.layout.c_offset){
                        // remove offset
                        var update_data = offsetRemovedData(gd)
                        var update_layout = offsetRemovedLayout()
                        Plotly.update(gd, update_data, update_layout)
                    }
                    var update_data = resetNormalizeData(gd)
                    var update_layout = resetNormalizeLayout()
                    Plotly.update(gd, update_data, update_layout)
                }      
            }
        },
        {
            name: 'set/reset offset',
            icon: offsetIcon,
            click: function(gd) {
                if (!gd.layout.c_offset){
                    // set offset
                    var offset = prompt('set offset value', '10000')
                    var update_data = offsetAppliedData(gd, offset)
                    var update_layout = offsetAppliedLayout(offset)
                    Plotly.update(gd, update_data, update_layout)
                } else {
                    // reset offset
                    var update_data = offsetRemovedData(gd)
                    var update_layout = offsetRemovedLayout()
                    Plotly.update(gd, update_data, update_layout)
                }
            }
        },
    ]
    var layout = {
        font: {
            family: 'Helvetica Neue',
            size: 16
        },
        paper_bgcolor: 'rgba(255,255,255,0)',
        plot_bgcolor: 'rgba(255,255,255,0)',
        showlegend: false,
        xaxis: {
            title: '2 theta',
            showgrid: true,
            zeroline: false,
            showline: true,
            mirror: 'ticks',
            ticks: 'inside',
            linecolor: '#323232',
            linewidth: 1,
            rangemode: 'nonnegative',
            exponentformat: "power"
        },
        yaxis: {
            title: 'Intensity',
            showgrid: true,
            zeroline: false,
            showline: true,
            mirror: 'ticks',
            ticks: 'inside',
            linecolor: '#323232',
            linewidth: 1,
            rangemode: 'nonnegative',
            exponentformat: "power"
        },
        margin: {
            l: 85,
            r: 5,
            b: 60,
            t: 30,
            pad: 0
        },
        modebar: {
            bgcolor: 'rgba(255,255,255,0)',
            color: '#2d2d2d',
            activecolor: '#2052e4'
        },
        hovermode: false,
        c_normalized: false,
        c_offset: false
    };

    let modebarbuttons = [customButtons,["zoom2d", "pan2d", "autoScale2d", "resetScale2d", "toImage"]]
    Plotly.react('scattergraph', graphs, layout, {responsive: true, scrollZoom: true, displayModeBar: true, displaylogo: false, modeBarButtons: modebarbuttons});
};


function normalizeData(gd) {
    update_y_list = []
    for (var i=0;i<gd.data.length; i++){
        var max_y = gd.data[i].customdata[0].max_y
        var normed_y_list = []
        for ( var j=0;j<gd.data[i].y.length; j++){
            normed_y = gd.data[i].y[j] / max_y
            normed_y_list.push(normed_y)
        }
        update_y_list.push(normed_y_list)
    }
    update_data = {
        'y': update_y_list
    }

    return update_data
}

function normalizeLayout(){
    update_layout = {
        'c_normalized': true
    }
    return update_layout
}

function resetNormalizeData(gd) {
    update_y_list = []
    for (var i=0;i<gd.data.length; i++){
        var max_y = gd.data[i].customdata[0].max_y
        var normed_y_list = []
        for ( var j=0;j<gd.data[i].y.length; j++){
            normed_y = gd.data[i].y[j] * max_y
            normed_y_list.push(normed_y)
        }
        update_y_list.push(normed_y_list)
    }
    update_data = {
        'y': update_y_list
    }

    return update_data
}

function resetNormalizeLayout(){
    update_layout = {
        'c_normalized': false
    }
    return update_layout
}

function offsetAppliedData(gd, offset){
    update_y_list = []
    for (var i=0;i<gd.data.length; i++){
        var offset_y_list = []
        for ( var j=0;j<gd.data[i].y.length; j++){
            offset_y = gd.data[i].y[j] + offset * i
            offset_y_list.push(offset_y)
        }
        update_y_list.push(offset_y_list)
    }
    update_data = {
        'y': update_y_list
    }

    return update_data
}

function offsetAppliedLayout(offset) {
    update_layout = {
        'c_offset': offset
    }

    return update_layout
}

function offsetRemovedData(gd) {
    if (gd.layout.c_offset){
        var offset = gd.layout.c_offset
    } else {
        var offset = 0.0
    }    
    update_y_list = []
    for (var i=0;i<gd.data.length; i++){
        var offset_y_list = []                  
        for ( var j=0;j<gd.data[i].y.length; j++){
            
            offset_y = gd.data[i].y[j] - offset * i
            offset_y_list.push(offset_y)
        }
        update_y_list.push(offset_y_list)
    }
    update_data = {
        'y': update_y_list
    }

    return update_data
}

function offsetRemovedLayout() {
    update_layout = {
        'c_offset': false
    }
    return update_layout
}