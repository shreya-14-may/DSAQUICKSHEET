// https://leetcode.com/problems/find-center-of-star-graph/


/*

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

*/


var findCenter = function(edges) {
    let f0 = edges [0];
    let f1 =edges [1];

    if(f0[0] === f1[0] || f0[0] === f1[1]){
        return f0[0]
    }else{
        return f0[1]
    }
};



function findCenter(edges) {
    let frequencyMap = {};

    // Count the occurrences of each node
    for (let [u, v] of edges) {
        if (frequencyMap[u] === undefined) {
            frequencyMap[u] = 0;
        }
        if (frequencyMap[v] === undefined) {
            frequencyMap[v] = 0;
        }
        frequencyMap[u]++;
        frequencyMap[v]++;
    }

    // Find the node with the maximum count
    for (let node in frequencyMap) {
        if (frequencyMap[node] === edges.length) {
            return parseInt(node);
        }
    }

    return null; // In case the input is not a valid star graph
}