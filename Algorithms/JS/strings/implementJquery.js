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
            index++;
            traverse( newList, index );
        }

    }// end traverse

    return traverse( dom, 0);
};

//
  class4
    class1
     class5
      class2
        class3


.class1 .class2 .class3
