let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  name:"`Dalai Lama`",
  quoted:`"The purpose of our lives is to be happy."`,
},
{
  name:"`Dalai Lama`",
  quoted:`"The purpose of our lives is to be happy."`,
},

{
 name:`John Lennon`,
 quoted:`"Life is what happens when you're busy making other plans."`,
},

{
 name:`Stephen King`,
 quoted:`"Get busy living or get busy dying."`,
},

{
 name:`Mae West`,
 quoted:`"You only live once, but if you do it right, once is enough."`,
},

{
 name:`Thomas A. Edison`,
 quoted:`"Many of life’s failures are people who did not realize how close they were to success when they gave up."`,
},

{
 name:`Albert Einstein`,
 quoted:`"If you want to live a happy life, tie it to a goal, not to people or things."`,
},

{
 name:`Babe Ruth`,
 quoted:`"Never let the fear of striking out keep you from playing the game."`,
},

{
 name:`Will Smith`,
 quoted:`"Money and success don’t change people; they merely amplify what is already there."`,
},

{
 name:`Marilyn Monroe`,
 quoted:`"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"`,
},

{
 name:` Albert Einstein`,
 quoted:`"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"`,
},

{
 name:`Will Smith`,
 quoted:`"Money and success don’t change people; they merely amplify what is already there."`,
},

{
 name:`Frank Zappa`,
 quoted:`"“So many books, so little time.”"`,
},


];

btn.addEventListener('click',() => {
  let index = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[index].quoted;
  person.innerText = quotes[index].name;
})
