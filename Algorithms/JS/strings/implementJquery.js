
var $ = function(selector) {
    var classes = selector.split("."), //class1, class2, class3
        dom = document.children,
        results = [dom];

    function filter( nodes ){
        var matches;
        for( var i = 0; i<nodes.length; i++ ){
            matches.push( traverse(nodes) );
        }
    }

    function traverse( currentNode ){
        var child = currentNode.children;

        if( !currentNode ){
            return;
        }
        else{

        }
    }// end traverse

    for( var i=0; i<classes.length; i++ ){
        var currentSelector = class[i];
        results = filter( results );
    }
    return results
};










// jQuery selector
// $(selector) => list[elements]
// selector:
// .class
// .class1 .class2 .class3.class4
// .class1.class2

// parent class1

// dom: <elem class1 ><... > <elem class2>  <elem class3>     < >  <... ></elem>

// var selector = $('.class1.class2.class3')

var $ = function(selector) {
    var classes = selector.split(" "), //class1, class2, class3
        dom = document.children;
    //return var list
    // recursivly
    // dom.class.split(" ") // [.class1,.class5]

    function traverse( list, index ){ //<elem class1 ><elem class2><elem class3>     < >  <... ></elem>
        var children = list.children,
            newList = [];
        if( index >= classes.length ){
            return newList;
        }
        else{
            for( var i = 0; i < children.length; i++ ){
                if( children[i].class === classes[index] ){
                    // newList.push( children[i] )
                    traverse( [children[i]], index + 1);
                }
            }
            traverse( newList, index+1 );
        }
    }// end traverse

    return traverse( dom, 0);
};

//
//   class4
//     class1
//      class5
//       class2
//         class3




// .class1 .class2 .class3
