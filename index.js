let spark = [
  {
    name: "Welcome to Spark bank",
    des:
      "Sparks Bank is the place where customers feel the sense of safety for their property. In the bank, where customers can send the money in easy way. Transaction of money is main part where customer takes shelter of the bank.",
    image: "images/bankk.png"
  },
  {
    name: "Welcome to Spark bank",
    des:
      "Sparks Bank is the place where customers feel the sense of safety for their property. In the bank, where customers can send the money in easy way. Transaction of money is main part where customer takes shelter of the bank.",
    image: "images/banking.png"
  },
  {
    name: "Welcome to Spark bank",
    des:
      "Sparks Bank is the place where customers feel the sense of safety for their property. In the bank, where customers can send the money in easy way. Transaction of money is main part where customer takes shelter of the bank.",
    image: "images/image3.png"
  },
  {
    name: "Welcome to Spark bank",
    des:
      "Sparks Bank is the place where customers feel the sense of safety for their property. In the bank, where customers can send the money in easy way. Transaction of money is main part where customer takes shelter of the bank.",
    image: "images/image4.png"
  },
];

const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= spark.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(spark[slideIndex].name));
    p.appendChild(document.createTextNode(spark[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = spark[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "slider-title";
    p.className = "slider-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);

  function sendMoney(){
    var enterName = document.getElementById("enterSName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var enterSName = document.getElementById("enterName").value;
  var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
       alert("Insufficient Balance.")
    }
 else {
       var findUserBankAccount = enterName + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       Rs${enterAmount} is sent to ${enterName}@gmail.com.`)
 
       // transaction history 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@gmail.com
  to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }