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
        else nodes[edge[1]] = 1;
    })
    let nodeNumber = nodes.length;
    console.log(nodes)
    console.log(list)
    for(i=nodeNumber-1;i >= 0; i--) {
        if(nodes[i] === 1) {
            console.log(isCircle(list, nodes[i], nodes[i]))
            if(isCircle(list, nodes[i], nodes[i])) {
                return [i, list[i].pop()]
            }
            continue;
        }
        if(nodes[i] > 1) {
            console.log(i)
            let x = find(list, i)
            console.log(x)
            return [x, list[x].pop()]
        }
    }
    
};

function find(map, x) {
    let mapLen = map.length
    for(let i = 0; i<mapLen; i++) {
        let next = map[i]
        console.log(i)
        console.log(next)
        if(!next || next.length <=0) continue;
        let nextLen = next.length;
        for(let j=nextLen-1;j>=0; j--) {
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

let result = findRedundantDirectedConnection([[1,2], [1,3], [2,3]])

console.log(result)