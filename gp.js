const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");


let newsDataArr = [];

// APIs 
const API_KEY = "1ee0e0f3e6c44217aa1ea45c7a7563f0";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=346dda9171dd4d21be33ab3c9d8c2abd";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=346dda9171dd4d21be33ab3c9d8c2abd";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=346dda9171dd4d21be33ab3c9d8c2abd";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=346dda9171dd4d21be33ab3c9d8c2abd";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=346dda9171dd4d21be33ab3c9d8c2abd";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=346dda9171dd4d21be33ab3c9d8c2abd";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};

generalBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>General News</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click", function() {
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
      
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
   
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
     
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};

const fetchQueryNews = async () => {
    if (newsQuery.value == null) return;

    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        displayNews();
    } else {
        // Error handling
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>";
    }
};


function displayNews() {
    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {
        let date = new Date(news.publishedAt);
        let formattedDate = date.toDateString();

        let col = document.createElement('div');
        col.className = "col-sm-12 col-md-6 col-lg-3 mb-4";

        let card = document.createElement('div');
        card.className = "card shadow"; 
        card.style.height = "100%"; 

        let imageContainer = document.createElement('div');
        imageContainer.className = "image-container"; 
        imageContainer.style.height = "200px"; 

        let image = document.createElement('img');
        image.className = "card-img-top";
        image.style.height = "100%";
        image.src = news.urlToImage;

        let cardBody = document.createElement('div');
        cardBody.className = "card-body mt-0"; 

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title small"; 
        newsHeading.innerHTML = news.title;

         // ...
let dateHeading = document.createElement('h6');
dateHeading.className = "card-subtitle mb-2 text-muted small"; 
dateHeading.style.color = "blue"; 
dateHeading.innerHTML = formattedDate;
// ...


        let description = document.createElement('p');
        description.className = "card-text small"; 
        description.innerHTML = news.description;

        let link = document.createElement('a');
        link.className = "btn btn-dark btn-sm read-more"; 
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        imageContainer.appendChild(image); 
        card.appendChild(imageContainer); 
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}
