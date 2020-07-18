// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function displayCategories() {
  var menu = document.getElementById("categories");
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    menu.classList.add("hide-menu");
  }
  else {
    menu.classList.remove("hide-menu");
    menu.classList.add("show-menu");
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown')) {
    var menu = document.getElementById("categories");
    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      menu.classList.add("hide-menu");
    }
  }
}

/* Expand search bar when user clicks onto search icon */
$("#search-btn").click(function () {
  $(".search-box").toggleClass("search-box-active").focus;
});

// Remove item From Cart
$('.remove-btn.remove').click(function () {
  // event.preventDefault();
  $(this).parent().parent().parent().hide(400);
})

// Product page active image change
const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-item");
function changeImage(e) {
  activeImage.src = e.target.src;
  // get elements from class to remove border from
  var elements = document.getElementsByClassName("image-item");

  // remove border from all images
  for (var i = 0; i < elements.length; i++) {
    child = elements[i].children[0];
    child.classList.remove("image-list-img-border");
  }
  // add border to selected preview image
  e.target.classList.add("image-list-img-border");
}
productImages.forEach(image => image.addEventListener("click", changeImage));

function updateQty(id) {
  var qtyValue = document.getElementById("qty-value").value;
  if (!isNaN(qtyValue)) {
    Math.round(qtyValue);
    if (id === "decrease-qty") {
      if (qtyValue > 1) {
        qtyValue--;
        document.getElementById("qty-value").value = qtyValue;
      }
    } else {
      qtyValue++;
      document.getElementById("qty-value").value = qtyValue;
    }
  }
}

function checkAddToCart(e) {
  // format the value before submitting
  var qtyValue = document.getElementById("qty-value").value;
  var name = document.getElementById("addToCart").value.split(",")[0];

  if (isNaN(qtyValue) || qtyValue < 1) {
    e.preventDefault();
    return false;
  }

  var string = name + "," + Math.round(qtyValue);
  document.getElementById("addToCart").value = string;
  return true;
}

function checkSetQuantity(e) {

  var id = event.target.id;
  var value = event.target.value;
  var itemID = id.replace("qty-", "");
  var removeItemID = "remove-item-" + itemID;
  var formID = "submitQtyChange-" + itemID;

  // debug
  // console.log('id: ' + id);
  // console.log('value: ' + value);
  // console.log('itemID: ' + itemID);
  // console.log('removeItemID: ' + removeItemID);
  // console.log('formID: ' + formID);
  // e.preventDefault();
  // return false;

  // set value before submitting form
  document.getElementById(id).value = document.getElementById(removeItemID).value + "," + value;

  // submit form
  document.getElementById(formID).submit();
  return true;
}
