// Start you JavaScript code here.

// TODO: Use data from DataBase(db) to Render Product List
// Get the data from productList collection
db
    .collection("productList")
    .get()
    //success
    .then(function(collection){
        //console.log("Get data!",collection)
        // Loop the docs
        collection.forEach(function(doc)  {
            // console.log("[doc]",doc)
            // console.log("[product]",doc.data())

            var product=doc.data()
            console.log("[product]",product)
            var title = '<div><h1>' + product.name + '</h1><h2>$' + product.price+'</h2></div>'
            $("#productRow").append(title)
        });
    })
    //failed
    .catch(function(err){
        console.log("error",err)
    })

// TODO: id="createProductForm" submit event
$("#createProductForm").submit(function(event){
    // Prevent broswer to refresh the pages
    event.preventDefault();
    // when user submit from .....
    console.log("From Submitted")
    // create a data structure for the product
    var product ={
        name: $("#createProductName").val(),
        price: $("#createProductPrice").val(),
        category: $("#createProductCategory").val(),
        image: $("#createProductImage").val(),
        createAt:new Date()
    }
    console.log("[product]",product)
    // Save product to database (cloud firestore)
    // Save product to "priductList" collectton of db
    db
        .collection("productList")
        .add(product)
        //success
        .then(function(){
            alert("Product created")
        })
        //failed
        .catch(function(err){
            console.log("[error:]",err)
            alert("Something wrong")
        })


} )

// TODO: id="loginForm" submit event


// TODO: id="signUpForm" submit event
