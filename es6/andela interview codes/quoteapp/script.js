const input = document.querySelector('#quote');
const btn = document.querySelector('#button');
const genbtn = document.querySelector('#generate');
const para = document.querySelector('.quote-text');
const tweet = document.querySelector('#tweet');
const addform = document.querySelector('#saveForm');
const form = document.querySelector('#hiddenForm');
const images = ['https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/66874/landscape-meadow-field-mountains-66874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

let quoteBox = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')): ['In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact. - Les Brown','Right now I am trying to be in a place of calm, a place where I can chill out and then handle the chaos of life better. You don\'t just get it overnight; you have to work at it. It\'s a daily struggle. - Jackee Harry','The true secret of happiness lies in taking a genuine interest in all the details of daily life. - William Morris','The Way Get Started Is To Quit Talking And Begin Doing. – Walt Disney','The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill','Don\'t Let Yesterday Take Up Too Much Of Today. – Will Rogers','You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character. – Unknown','If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You. – Steve Jobs','People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen','Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe','We Generate Fears While We Sit. We Overcome Them By Action. – Dr. Henry Link','The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb','What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time. – Don Zimmer','Reading Is To The Mind, As Exercise Is To The Body. – Brian Tracy'];

localStorage.setItem('items', JSON.stringify(quoteBox));



function sayQuote(){
    const savedQuote = input.value;
    quoteBox.push(savedQuote);
    localStorage.setItem('items',JSON.stringify(quoteBox));
    alert(`added new quote; "${savedQuote}" to your favorites`);

    input.value = '';
    input.focus();
    
}




function generateQuote(){
    //fetch previously saved quotes from localstorage and assign to the variable data
    const data = JSON.parse(localStorage.getItem('items'));
    let randNo = Math.floor(Math.random() * data.length);

    //using the random number generated above, we randomly select quotes in the array assigned to the data variable
    /**
     * TODO: 
     * explain how we converted our quoteBox to a string just as to use localstorage and how we converted it back just so as 
     * to loop through it and select a quote
     */
    para.textContent = data[randNo];
    console.log(data[randNo]);

    //generate random images
    let imageRad = Math.floor(Math.random()* images.length);
    document.body.style.backgroundImage = 'url('+images[imageRad]+')';
    tweet.setAttribute("href", `https://twitter.com/share?text=${data[randNo]} - Johnson's Quote App`)
}

function showForm(){
   if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}



generateQuote();
genbtn.addEventListener('click',generateQuote);
btn.addEventListener('click',sayQuote);
addform.addEventListener('click',showForm);





