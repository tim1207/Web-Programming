// Start you JavaScript code here.

// TODO: Use data from DataBase(db) to Render Product List
// Get the data from productList collection
db
    .collection("productList")
    .orderBy("createdAt","desc")
    .get()
    // Success
    .then( function(collection){
        // console.log("Get data!", collection)
        // Loop the docs
        collection.forEach( function(doc){
            // console.log('[doc]', doc)
            // console.log('[product]', doc.data())
            var product = doc.data();
            console.log('[product]', product);
            var col = `
            <div class = "col-md-4">
                <div class ="card mb-3">
                    <img src="${product.image}" class= "card-img-top">
                    <div class ="class-body">
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                    </div>
                </div>
            </div>`;
            $("#productRow").append(col)
        })
    } )
    // Failed
    .catch( function(err){
        console.log('error', err)
        alert("Try again")
    } )

// TODO: id="createProductForm" submit event
$("#createProductForm").submit( function(event){
    // Prevent broswer to refresh the page
    event.preventDefault();
    // When user submit this form...
    console.log("Form Submitted")
    // Create a data structure for a product (Object)
    var product = {
        name: $("#createProductName").val(),
        price: $("#createProductPrice").val(),
        category: $("#createProductCategory").val(),
        image: $("#createProductImage").val(),
        createdAt: new Date()
    }
    console.log("[product]", product)
    // Save product to database(cloud firestore)
    // Save product to "productList" collection of db
    db
        .collection("productList")
        .add(product)
        // success
        .then( function(){
            alert("Product created!")
        } )
        // failed
        .catch( function(err){
            console.log('[error:]', err)
            alert("Something wrong!")
        } )

} )


// TODO: id="loginForm" submit event
$("#loginForm").submit(function(event){
    // Prevent broswer to refresh the page
    event.preventDefault();
    //get user email and password
    var email =$("#loginEmail").val();
    var password =$("#loginPassword").val();
    console.log(email,password);
    // user Firebase Auth Login API
    firebase.auth().signInWithEmailAndPassword(email,password)
    // .then( function(res){
    //     alert("")
    // } )
    .then(res=>{
        console.log("Response from Firebase Server",res)
        alert("Login Sucessful") 
    })
    // failed
    .catch(err=>{
        console.log("Error object from Firebase Server",err)
        alert(err.message) 
    });

})

// TODO: id="signUpForm" submit event
