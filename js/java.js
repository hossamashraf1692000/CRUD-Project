

/*   #1        */

/*var userName = prompt ("Enter Ur Nmber") ;

window.alert (Number(num));*/



/* #2 */
/*
 var num = Number (window.prompt ("enter ur num"))
 
 if (   (num %3==0) && (num %4==0)  )
 {
     window.alert ("yes");
 }
 else {
     window.alert ("No");
 }            */


/* #3  */

/*var num1 = Number (window.prompt ("Enter ur Num1")) ;
var num2 = Number (window.prompt ("Enter ur Num2")) ;

if (num1>num2) {
    
    window.alert (num1)
    
} else {

    window.alert (num2)
    
}*/





/*  4  */

/* var num = Number (window.prompt ("enter ur num"))

if (num != 5) {

    window.alert  ( "negative" )
}

else {

    window.alert ( "positive" )
}
        */

///* #6-7 *///
/*  var num = Number ( window.prompt ("enter ur num") )

if (num %2==0 ) {

    window.alert ("even")
}
else {

    window.alert ("odd")
} */

/*8*/

/*    var num =  window.prompt ("enter ur letter") 

if (num == "a" ||"i" || "e" || "o" || "u") {

window.alert ("vowel")
}
else {

window.alert ("Consonant")
}  */


/*var users = [

    { name: "hossam", gender: "male" },
       { name: "ahmed", gender: "male" },
        { name: "nour", gender: "female" }
];

for (var i = 0; i < users.length; i++) {
    if (users[i].gender == "male")
    {
        users[i].name = "Mr" + users[i].name;

    }else
    {
        users[i].name = "Mrs" + users[i].name;

    }

}

console.log(users); */


var ProductNameInput = document.getElementById ("ProductNameInput");
var ProductPriceInput = document.getElementById("ProductPriceInput");
var ProductCategryInput = document.getElementById("ProductCategryInput");
var ProductDescInput = document.getElementById("ProductDescInput");

var productsContainer ;

if(localStorage.getItem("myProducts") == null ) //first visit time
{
    productsContainer = [];
}
else {
    
    productsContainer = JSON.parse (localStorage.getItem("myProducts") ) //ex visit before

    displayProducts(); // to display the prodacts once open the site
}
 
function welcome () {
    


var product = { 
    
    name: ProductNameInput.value,
    price : ProductPriceInput.value,
    categry : ProductCategryInput.value,
    desc : ProductDescInput.value 

};  
 productsContainer.push(product);
 localStorage.setItem("myProducts" , JSON.stringify(productsContainer)) ;
  clearForm() ;
 displayProducts(); 
console.log (productsContainer);

  
}

function clearForm() {

    ProductNameInput.value = ""; 
    ProductPriceInput.value = "";
    ProductCategryInput.value = "";
    ProductDescInput.value = "";


};


function displayProducts() {

    var cartoona = "";
    
    for (var i = 0 ; i < productsContainer.length ; i++) {

        cartoona += ` <tr>
        <th>`+ i +`</th>
        <th>`+productsContainer[i].name+`</th> 
        <th>`+productsContainer[i].price+`</th>
        <th>`+productsContainer[i].categry+`</th>
        <th>`+productsContainer[i].desc+`</th>
        <th> <button onclick = "update(`+i+`)" class="btn btn-outline-warning "> Update  </button>  </th>
        <th> <button onclick ="deleteProduct(`+i+`)"class="btn btn-outline-danger"> Delete  </button>  </th>


   </tr>`;
        
    }
    document.getElementById("tabelBody").innerHTML = cartoona;
}


function deleteProduct(productIndex)
{

    productsContainer.splice (productIndex , 1) ;
    localStorage.setItem("myProducts" , JSON.stringify(productsContainer)) ; // add the array productsContainer to localStorage 
    displayProducts(); 
}


function searchProducts(searchTerm)
{
  var cartoona =``;

    for(var i = 0 ; i< productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase() ) == true) //w hwa mashi 3lihm wahd wahd
                                        //to compare lower letter with lower letter in search
        {
            
            cartoona += 
      ` <tr>
            <th>`+ i +`</th>
            <th>`+productsContainer[i].name+`</th> 
            <th>`+productsContainer[i].price+`</th>
            <th>`+productsContainer[i].categry+`</th>
            <th>`+productsContainer[i].desc+`</th>
            <th> <button onclick =""class="btn btn-outline-warning "> Update  </button>  </th>
            <th> <button onclick ="deleteProduct(`+i+`)"class="btn btn-outline-danger"> Delete  </button>  </th>
       </tr>`;

        }
        else 
        {
            console.log("Rejct")
        }
        
    }
    document.getElementById("tabelBody").innerHTML = cartoona;
}

function update(item) 
{
    ProductNameInput.value = productsContainer[item].name 
    ProductPriceInput.value = productsContainer[item].price
    ProductCategryInput.value = productsContainer[item].categry
    ProductDescInput.value = productsContainer[item].desc
}



/*function searchProducts(searchTearm) {

    var cartonna = ""
    for (var i = 0 ; i < productsContainer.length ; i++) 
    
    if(productsContainer[i].name.includes(searchTearm) == true)

    cartoona += ` <tr>
        <th>`+ i +`</th>
        <th>`+productsContainer[i].name+`</th>
        <th>`+productsContainer[i].price+`</th>
        <th>`+productsContainer[i].categry+`</th>
        <th>`+productsContainer[i].desc+`</th>
        <th> <button class="btn btn-outline-warning "> Update  </button>  </th>
        <th> <button class="btn btn-outline-danger"> Delete  </button>  </th>


   </tr>`;
   document.getElementById("tabelBody").innerHTML = searchTearm;
}




var element = document.getElementById("demo");

document.addEventListener("click", function(info){

    element.style.left = info.clientX+"px";
    element.style.top = info.clientY+"px";

})
*/


