// var productNameInput = document.getElementById(`productName`);
// var productPriceInput = document.getElementById(`productPrice`);
// var siteUrl = document.getElementById(`SiteURL`);
// var productCategoryInput = document.getElementById(`productCategory`);
// var myButton = document.querySelector(`button`);
// var updateBtn = document.getElementById(`updateBtn`);
// var searchBtn = document.getElementById(`elsearch`);
// // this is an array for every  product  that will be entered by the user
// var productsContainer = [];



// // when i click button in html everything run 
// myButton.addEventListener(`click` , function () {
     
//  if (validateUrl()) { if (updateBtn.innerHTML = "add Product") {
//     var product = {
//         // product is an object that has properties which are name/price/etc 
//         // here get me the valuse that will be entered by the user that will be appeared in the var productNameInput/price/category
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         siteLink: siteUrl.value,
//         category: productCategoryInput.value,
//     }

//     // any new product will be pushed in the array productcontainer
//     productsContainer.push(product);
//     // console.log(productsContainer);
// displayProduct(productsContainer);
// clearForm();

//  } else{

//  }


// } 


//  else
// {
//     alert('Invalid URL. Please enter a valid URL.');
// }

// }) 







// function clearForm(){

//     productNameInput.value ='';
//     productPriceInput.value ='';
//     siteUrl.value ='';
//     productCategoryInput.value ='';
// }



// // this fun will display every product pushed in the array
// function displayProduct(productList){
// //  this var is for creating sofoof so if the for loope is 100 this box will be 100 saf 
// var box =``;  

// for (var i = 0; i < productsContainer.length; i++) {

//     box+= `<tr>
//     <td>${i}</td>
//     <td>${productList[i].name}</td>  
//     <td>${productList[i].price}</td>
//     <td>${productList[i].category}</td>
//     <td><button onclick="visitURL('${productList[i].siteLink}')" class="btn btn-primary">Visit</button></td>
//     <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
//     <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>

// </tr>`
// }
// // this line is to add a nex box products into html
// document.getElementById(`tablecontent`).innerHTML = box;  
// }
// displayProduct(productsContainer);


// // every delete crud waiting for a parameter which is here productIndex
// function deleteProduct(productIndex){
//     // splice means start to delete from the first parameter and the second para is the anount of elements tht you wanna delete
//    productsContainer.splice(productIndex , 1);
// //    i called the displayfun again only to display the crud after deleting any element
//    displayProduct(productsContainer);
//     }
    
// function updateProduct(idex) {
//     productNameInput.value = productsContainer[idex].name;
//      productPriceInput.value = productsContainer[idex].price;
//     siteUrl.value = productsContainer[idex].siteLink;
//      productCategoryInput.value = productsContainer[idex].category;
// updateBtn.innerHTML ="Update Product"
// }



//     function visitURL(url) {
//         window.open(url, '_blank');
//     }
    

//     function validateUrl() {
//         var regex = /^(http|https):\/\/[^ "]+$/;
//         return regex.test(siteUrl.value);
//     }

    
//  searchBtn.addEventListener("keyup", function () {
// var searchTerm = searchBtn.value.toLowerCase();

//     var searchProduct =[];
//         for (var i = 0; i < productsContainer.length; i++) {
//             if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
//                 searchProduct.push(productsContainer[i]);
//             }
//         }
// displayProduct(searchProduct);

//     });





var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCountInput = document.getElementById('productCount');
var siteUrl = document.getElementById('SiteURL');
var productCategoryInput = document.getElementById('productCategory');
var myButton = document.querySelector('button');
var updateBtn = document.getElementById('updateBtn');
var searchBtn = document.getElementById('searchInput');
var productsContainer = [];  //Arrays means list => we made it to store every object the user is going to enter (product)
var indexToUpdate = -1; // assuming -1 means no update mode



//-----------------------------------------------------------//

// var productsContainer;
//if(localStorage.getItem("products") == null)
//{ productsContainer = [];
//}else{ productsContainer= JSON.parse(localStorge.getItem("products"));}  // JSON.parse will convert the productscontainer into an array of objects after being converted into a string buy  JSON.stringify.
// displayProduct();


//----------------------------------------------------------//


myButton.addEventListener('click', function () {
    if (validateUrl()) {
        if (updateBtn.innerHTML === 'add Product') {
         // product is an object that has properties which are name/price/etc .
         // here get me the valuse that will be entered by the user.

            var product = {
                name: productNameInput.value, //=> Toshiba
                price: productPriceInput.value, //=> 20000
                count:  productCountInput.value,
                siteLink: siteUrl.value,
                category: productCategoryInput.value, //=> Electronics
            };

            productsContainer.push(product);//here we puch the product that user entered into the productscontainer.
           //localStorage.setItem("products", JSON.stringify(productsContainer));  //Json.stringify will covert the productscontainer into a string cause (setItem only takes strings and the productscontainer is an Array of objects)  
            displayProduct(productsContainer); // here we display the productscontainer after puching a new product into it.
            clearForm();
        } else {
            updateProduct();
        }
    } else {
        alert('Invalid URL. Please enter a valid URL.');
    }
});

function clearForm() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productCountInput.value = ''; 
    siteUrl.value = '';
    productCategoryInput.value = '';
}

function displayProduct(productList) {
    var box = '';
    for (var i = 0; i < productList.length; i++) {
        box += `<tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>  
            <td>${productList[i].price}</td>
            <td>${productList[i].count}</td>
            <td>${productList[i].category}</td>
            <td><button onclick="countProduct(${i} , ${1})" class="btn btn-danger"><i class="fa-solid fa-plus-circle"></i></button></td>
            <td><button onclick="countProduct(${i} , ${-1})" class="btn btn-success"><i class="fa-solid fa-minus-circle"></i></button></td>
            <td><button onclick="visitURL('${productList[i].siteLink}')" class="btn btn-primary">Visit</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
            <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
        </tr>`;
    }
    document.getElementById('tablecontent').innerHTML = box;
}

function deleteProduct(productIndex) {
    productsContainer.splice(productIndex, 1);
    //localStorage.setItem("products", JSON.stringify(productsContainer));
      //Json.stringify will covert the productscontainer into a string cause (setItem only takes strings and the productscontainer is an Array of objects)  
      //ليه حطيت السطر دا هنا ؟ لانه انا عيزاه بعد ما يمسح من الارااي يحذف كمان من الذاكرة
   displayProduct(productsContainer);
}

function updateProduct(index) {
    if (indexToUpdate !== -1) {
        // If in update mode, update the existing product in the array
        productsContainer[indexToUpdate] = {
            name: productNameInput.value,
            price: productPriceInput.value,
            siteLink: siteUrl.value,
            category: productCategoryInput.value,
        };

        // Reset the update mode
        indexToUpdate = -1;
   

    // Refresh the display with the updated data
    displayProduct(productsContainer);

    // Reset the form and button to add mode
    clearForm();
    updateBtn.innerHTML = 'add Product';
} else{

    indexToUpdate = index;

    // Populate the form with existing values for the selected product
    productNameInput.value = productsContainer[index].name;
    productPriceInput.value = productsContainer[index].price;
    siteUrl.value = productsContainer[index].siteLink;
    productCategoryInput.value = productsContainer[index].category;

    // Change the button text to indicate update mode
    updateBtn.innerHTML = 'Update Product';
}

}

function countProduct(index , x){

    if (productsContainer[index].count == 0 && x == -1) {
        productsContainer[index].count = 0
    } else
    {
        productsContainer[index].count = Number(productsContainer[index].count)+ Number(x);
        displayProduct(productsContainer);
    }
}


function visitURL(url) {
    window.open(url, '_blank');
}

function validateUrl() {
    var regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(siteUrl.value);
}

searchBtn.addEventListener('keyup', function () {
    var searchTerm = searchBtn.value.toLowerCase();
    var searchProduct = [];

    for (var i = 0; i < productsContainer.length; i++) {
        if (
            productsContainer[i].name.toLowerCase().includes(searchTerm) ||
            productsContainer[i].category.toLowerCase().includes(searchTerm)
        ) {
            searchProduct.push(productsContainer[i]);
        }
    }

    displayProduct(searchProduct);
});

// Initial display of products
displayProduct(productsContainer);
