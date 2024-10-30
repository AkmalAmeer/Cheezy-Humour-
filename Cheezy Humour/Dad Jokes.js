const jokeCard = document.getElementById('jokeCard');
const jokeText = document.getElementById('jokeText');
const punchlineButton = document.getElementById('punchlineButton');
const favoritesList = document.getElementById('favoritesList');
const favorites = document.getElementById('favorites');
let currentJoke;
let favoriteJokes = [];

const jokes = [{
        setup: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        setup: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        setup: "Who won the neck decorating contest?",
        punchline: "It was a tie."
    },
    {
        setup: "Why did the tomato turn red?",
        punchline: "It saw the salad dressing!"
    },
    {
        setup: "Why did the tomato cross the road?",
        punchline: "Because it wanted to ketchup with its friends!"
    },
    {
        setup: "What did the dosa say to the uttapam?",
        punchline: "You’re so flat…but I still love you!"
    },
    {
        setup: "Why don’t eggs tell each other secrets?",
        punchline: "Because they always crack up!"
    },
    {
        setup: "Why did the mango feel left out at the fruit party?",
        punchline: "Because everyone kept calling it aam, but it thought it was special!"
    },
    {
        setup: "Computer ko doctor ke paas kyun jaana pada?",
        punchline: "Kyunki usse ‘virus’ ho gaya tha!"
    },
    {
        setup: "Why was the math book sad?",
        punchline: "Because it had too many problems!"
    },
    {
        setup: "Where do math teachers go on vacation?",
        punchline: "Times Square."
    },
    {
        setup: "Where do young trees go to learn?",
        punchline: "Elementree school."
    },
    {
        setup: "I could tell a joke about pizza",
        punchline: "but it's a little cheesy."
    },
    {
        setup: "What’s an astronaut’s favorite part of a computer?",
        punchline: "The space bar."
    },
    {
        setup: "Why do bees have sticky hair?",
        punchline: "Because they use a honeycomb."
    },
    {
        setup: "What did the grape say when it got stepped on?",
        punchline: "Nothing, just a little"
    },
    {
        setup: "Why did the potato stay home from the party?",
        punchline: "It didn’t want to get mashed."
    },
    {
        setup: "Why did the pickle (achar) feel so special?",
        punchline: "Because it had a preserved personality!"
    },
    {
        setup: "What has four wheels and flies?",
        punchline: "A garbage truck."
    },
    {
        setup: "Why do only some couples go to the gym?",
        punchline: "Because some relationships don't work out."
    },
    {
        setup: "How do you make 7 even?",
        punchline: "Take away the S."
    },
    {
        setup: "What do you call a broken clock?",
        punchline: "A waste of time."
    },
    {
        setup: "Why don't fish play basketball?",
        punchline: "Because they're scared of the net."
    },
    {
        setup: "What do you call a factory that makes okay products?",
        punchline: "A satisfactory."
    },
    {
        setup: "What did the ocean say to the beach?",
        punchline: "Nothing, it just waved."
    },
    {
        setup: "I only know 25 letters of the alphabet.",
        punchline: "I don't know y."
    },
    {
        setup: "Did you hear about the guy who invented the knock-knock joke?",
        punchline: "He won the 'no-bell' prize."
    },
];


function getJoke() {
    currentJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeText.textContent = currentJoke.setup;
    punchlineButton.style.display = 'inline';
}

function revealPunchline() {
    jokeText.textContent += ` ${currentJoke.punchline}`;
    punchlineButton.style.display = 'none';
}

function addFavorite() {
    if (currentJoke && !favoriteJokes.includes(currentJoke)) {
        favoriteJokes.push(currentJoke);
        updateFavoritesList();
        alert("Joke added to favorites!");
    }
}

function toggleFavorites() {
    if (favoritesList.style.display === "none") {
        favoritesList.style.display = "block";
    } else {
        favoritesList.style.display = "none";
    }
}

function updateFavoritesList() {
    favorites.innerHTML = '';
    favoriteJokes.forEach((joke) => {
        const li = document.createElement('li');
        li.textContent = `${joke.setup} ${joke.punchline}`;
        favorites.appendChild(li);
    });
}