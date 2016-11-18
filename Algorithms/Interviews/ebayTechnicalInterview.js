Ebay Technical Interview. Senior Front End Engineer Role

15 min Intro
15 min on algorithm
20 min on Javascript concepts
  - apply()
  - bind()
  - closure
  - what are self envoked function? pros/cons
  function anon(){
    convert(arr)
  }();
  - Ajax
    HTTP Get/Post
  - difference between class / id
  - what is the Event loop
  - how to access data attribute
    <div data-type='core'>
    </div>
  - what is the DOM ?
  - how to use querySelectorAll
  - what is arguments
  - what is function expression
  - what is declaration

  - ES6 syntax
    let / var

Algorithm question:

Write a function that will take this input array below, and and will output the result array

input = [
    {
        itemId: 111111,
        title: 'Item-1',
        sellerName: 'seller-1',
        category: 'Electronics, Fitness'
    },
    {
        itemId: 222222,
        title: 'Item-2',
        sellerName: 'seller-2',
        category: 'Cars'
    },
    {
        itemId: 333333,
        title: 'Item-3',
        sellerName: 'seller-3',
        category: 'Electronics'
    },
    {
        itemId: 444444,
        title: 'Item-4',
        sellerName: 'seller-4',
        category: 'Cars , Bikes'
    }
    
]

function convert(input){

}

//output - Group the items into Categories
result =
{
    Electronics: [
        {
            itemId: 111111,
            title: 'Item-1',
            sellerName: 'seller-1' 
        },
        {
            itemId: 333333,
            title: 'Item-3',
            sellerName: 'seller-3'
        }
    ],
    Cars: [
        {
            itemId: 222222,
            title: 'Item-2',
            sellerName: 'seller-2'
        },
        {
            itemId: 444444,
            title: 'Item-4',
            sellerName: 'seller-4'
        }
    ],
    Bikes: [
        {
            itemId: 444444,
            title: 'Item-4',
            sellerName: 'seller-4'
        }
    ],

    Fitness: [
        {
            itemId: 111111,
            title: 'Item-1',
            sellerName: 'seller-1'
        }
    ]
}




