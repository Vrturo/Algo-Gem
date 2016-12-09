    foo -------
   /   \       |
  bar   baz    quux
   |            |
   x            y


foo = {
    children: [bar, baz, quux]
}

x = {
    children: []
}


function createWalker(root) {

    var q = [];
    q.push(root);


    return function(){
        var node = q.shift();
        for( var i=0; i<node.children.length; i++ ){
            q.push(node.children[i]);

        }
        return node;
    }
}


var walker = createWalker(foo);
walker(); // foo
walker(); // bar
...
walker(); // y
walker(); // undefined
