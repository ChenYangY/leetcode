/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    var list = []
    let nodes = []
    edges.forEach(function(edge) {
        list[edge[0]] = (list[edge[0]] || []).push(edge[1])
        nodes[edge[1]] = (nodes[edge[1]] || 0) ++
    })
    let nodeNumber = nodes.length;
    for(i=nodeNumber-1;i >= 0; i--) {
        if(nodes[i] === 1) {
            if(isCircle(list, nodes[i])) {
                
            }
            continue;
        }
        if()
    }

};


function isCircle(map, node) {
    let origin = node
    while(map[node] !== origin) {
        if(!map[node] || map[node].length <= 0) return false;
        map[node].forEach((item) => {
            let flag = isCircle(map, item)
            // if(flag) 
        })
    } 
}