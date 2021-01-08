// 網頁的主程式寫在這裡
// .ad-toggle-btn click event
$(".ad-toggle-btn").click(function () {
    console.log('[.ad-toggle-btn被點擊了]');

});

// .navbar .nav-link click event
$(".navbar .nav-link").click(function () {
    console.log('[nav-link was clicked]', this);
    //Get the scrolling target for this anchor tag(this)
    var target = $(this).attr("href")
    console.log("[target]",target)
    //Get the position of the target
    var position = $(target).offset().top
    console.log("[position]",position)
    //Set animation time for scrolling
    var duration =500;
    //Run scrolling animation
    //.animate( JavaScript{} ,duration)
    $("html,body").animate({
        scrollTop:position
    },duration)

});


db
    .collection("FormList")
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
                    <img src="${product.thu}" class= "card-img-top">
                    <div class ="class-body">
                        <h4>${product.title}</h4>
                        <p>${product.sub}</p>
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

// TODO: id="createWorkForm" submit event
$("#createWorkForm").submit( function(event){
    // Prevent broswer to refresh the page
    event.preventDefault();
    // When user submit this form...
    console.log("Form Submitted")
    // Create a data structure for a product (Object)
    var product = {
        title:$("#workTitleInput").val(),
        sub:$("#workSubtitleInput").val(),
        thu:$("#workThumbnailInput").val(),
        createAt:new Date()
    }
    console.log("[product]", product)
    // Save product to database(cloud firestore)
    // Save product to "productList" collection of db
    db
        .collection("FormList")
        .add(product)
        // success
        .then( function(){
            alert("Product created!")
            window.location="/index.html"
        } )
        // failed
        .catch( function(err){
            console.log('[error:]', err)
            alert("Something wrong!")
        } )

} )















