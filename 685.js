/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    var list = []
    let nodes = []
    edges.forEach(function(edge) {
        if(!list[edge[0]]) list[edge[0]] = []
        list[edge[0]].push(edge[1])
        if(nodes[edge[1]] >= 0) nodes[edge[1]] ++;
        else nodes[edge[1]] = 0;
    })
    let nodeNumber = nodes.length;
    for(i=nodeNumber-1;i >= 0; i--) {
        if(nodes[i] === 1) {
            if(isCircle(list, nodes[i], nodes[i])) {
                return [i, list[i].pop()]
            }
            continue;
        }
        if(nodes[i] > 1) {
            let x = find(list, i)
            return [x, list[x].pop()]
        }
    }
    
};

function find(map, x) {
    let mapLen = map.length
    for(let i = 0; i<mapLen; i++) {
        let next = map[i]
        if(!next || next.length <=0) continue;
        let nextLen = next.length;
        for(let j=nextLen-1;j<nextLen;i++) {
            if(next[j] === x) return i;
        }
    }
    return -1
}
function isCircle(map, node, origin) {
    let next = map[node]
    if(!next) return false;
    let flag = false
    let nextLen = next.length;
    for(let i=0; i<nextLen; i++ ) {
        if(next[i] === origin) {flag = true; break;}
        flag = isCircle(map, next[i], origin)
        if(flag) break;
    }
    return flag;
}