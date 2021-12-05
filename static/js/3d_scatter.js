d3.csv('static/3d-scatter.csv', function (err, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }

    var trace1 = {
        x: unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
        name: 'Data One',
        mode: 'markers',
        marker: {
            size: 12,
            line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 0.5
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    };

    var trace2 = {
        x: unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
        name: 'Data Two',
        mode: 'markers',
        marker: {
            color: 'rgba(200, 127, 127,0.99)',
            size: 16,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    };

    var data = [trace1, trace2];
    var layout = {
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        },
        legend: {x: 0.1, y: 0.6},
        title: '3d point clustering',
        autosize: true,
        height: 480,
        width: 477,
        scene: {
            xaxis: {
                type: 'linear',
                name: 'x ekseni'
            },
            yaxis: {
                type: 'linear',
                name: 'x ekseni'
            }
        }
    };
    Plotly.newPlot('myDiv', data, layout);
});

