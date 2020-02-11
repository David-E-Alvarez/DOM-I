const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

var getH1 = document.querySelector('h1');
getH1.textContent = "DOM is Awesome";

var getButton = document.querySelector('button');
getButton.textContent = "Get Started";


//nav bar
var getAtagNames = document.querySelectorAll('a');
getAtagNames[0].textContent = siteContent["nav"]["nav-item-1"];
getAtagNames[1].textContent = siteContent["nav"]["nav-item-2"];
getAtagNames[2].textContent = siteContent["nav"]["nav-item-3"];
getAtagNames[3].textContent = siteContent["nav"]["nav-item-4"];
getAtagNames[4].textContent = siteContent["nav"]["nav-item-5"];
getAtagNames[5].textContent = siteContent["nav"]["nav-item-6"];

//main-content/top-content
const topContentH4Children = document.querySelectorAll('.top-content .text-content h4');
console.log("topContentChildren: " + topContentH4Children);
console.log("topContentChildren[0]: " + topContentH4Children[0]);
console.log("topContentChildren[1]: " + topContentH4Children[1]);
console.log(topContentH4Children.length);
var featuresH4 = siteContent["main-content"]["features-h4"];
topContentH4Children[0].textContent = featuresH4;
var featuresContent = siteContent["main-content"]["about-h4"];
topContentH4Children[1].textContent =  featuresContent;
//main-content/top-content/p elements
const topContentPChildren = document.querySelectorAll('.top-content .text-content p');
var featuresP = siteContent["main-content"]["features-content"];
topContentPChildren[0].textContent = featuresP;

var pContent = siteContent["main-content"]["about-content"];
topContentPChildren[1].textContent = pContent;











// const topContentChildren = document.querySelector('.top-content .text-content').children;
// console.log("topContentChildren[0]: " + topContentChildren[0]);
// console.log("topContentChildren[1]: " + topContentChildren[1]);
// console.log("topContentChildren.length: " + topContentChildren.length);





//contact sandbox
const whatIsContact = document.querySelector('.contact');
//console.log("whatIsContact: " + whatIsContact);
var contactChildren = document.querySelector('.contact').children;
contactChildren[0].textContent = siteContent["contact"]["contact-h4"];
contactChildren[1].textContent = siteContent["contact"]["address"];
contactChildren[2].textContent = siteContent["contact"]["phone"];
contactChildren[3].textContent = siteContent["contact"]["email"];

//footer
var footerVar = document.querySelector('footer p');
//console.log("footerVar: " + footerVar);
footerVar.textContent = siteContent["footer"]["copyright"];








