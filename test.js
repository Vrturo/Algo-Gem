Assume you have a CommonJS module with the following interface that you can use
to retrieve items from a webservice. n is the number of items to retrieve. The callback
function has 1 parameter which is the array of items returned from the web service.

var itmServ = require('item-service');
itmServ.getItems(n, callback);

The array consists of items with the following structure:
[
    {
        seller: 'seller1',
        image: 'http://url/to/image',
        title: 'Really great item',
        price: '$3.00',
        itemId: 12345,
        detailURL: 'http://url/to/view/item/details'
    },
    ...
]

Using the above item-service module, write the necessary javascript/css/html to layout the items on a
page meeting the following requirements.

1. The items should be arranged on the page as 4 rows and 4 columns.
2. No 2 adjacent items in a row should have the same seller.
3. Each item should be formatted as follows:
   A div 200x200 pixels with the image as a background.
   The title should appear centered at the top.
   The price should appear centered at the bottom.
4. Clicking anywhere in the div should take you to the detailURL page.

// on page load grab runs

<button onclick="grab"> </button>
<div id="container">

</div>


function grab( data, pageCount=0 ){
    var last,
        q = [],
        i;

    for( var j=0; i<data.length || pageCount === 16; i++ ){
        var current = data[i];

        while( q.length ){
            var obj = q[j].splice(1, 0); // object
            if(last.seller === q[j].seller ){ // check seller name
                j++;
            }
            obj.seller = true;
        }
        if( last.seller === current.seller ){
            q.push( current );
        } else {
            display( data[i].image, data[i].title, data[i].price, data[i].detailUrl);
            pageCount++;
        }
        last = current;

    }
    if( i<data.length ) itmServ.getItems(16, grab(pageCount) );
}

function display(image, title, price, url){
    var item = document.createElement('div');
    item.class = 'item';
    document.getElementByID('container').append(item);
}

// css


