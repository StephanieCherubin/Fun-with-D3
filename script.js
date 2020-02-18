function makeRandomData(n) {
    const arr = []
    for (let i = 0; i < n; i += 1) {
        arr.push({ 
            a: Math.random(), 
            b: Math.random(), 
            c: Math.random() 
        })
    }
    return arr
}
const data = makeRandomData(599)
function differentColor() {
    return `rgb(
        ${Math.floor(256 * Math.random())},
        ${Math.floor(256 * Math.random())},
        ${Math.floor(256 * Math.random())})`;
    }
    
d3.select('#svg')
    .style('border', '3px solid #fff')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 700 / data.length)
    .attr('y', (d, i) => d.a * 700)
    .attr('width', (d) => d.c * 100)
    .attr('height', (d) => d.c * 100)
    .attr('fill', (d) => differentColor())
    .attr('opacity', () => 0.5)
        
// d3.select('body')
//     .selectAll('div')
//     .data([5,6,2,8,4,9,1,3])
//     .enter()
//     .append('div')
//     .text((d) => d)
//     // When the second parameter is a primitive value, the value is returned.
//     // Look at: padding, background-color, and margin.
//     .style('padding', '1em')
//     .style('background-color', 'blue')
//     .style('margin', '1px')
//     // When the second parameter is a function, the function receives
//     // a data value and returns a value.
//     // See the width. Here the value is normalized and returned as a %.
//     .style('width', (d) => `${d / 10 * 100}%`)
    
d3.json('./titanic-passengers.json')
    .then((data) => {
        const fields = data.map((obj) => obj.fields)
        console.log(fields)
        // handleData(fields)
    })
