# xhr

const btn = document.querySelector('.btn'); 1
const content = document.querySelector('.content'); 2
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => { 3
getData(URL);
});

function getData(url) { 4
const xhr = new XMLHttpRequest(); 5
xhr.open('GET', url); 6
xhr.send(); 7
xhr.onreadystatechange = function () { 8
if (xhr.readyState !== 4) return; 9
if (xhr.status === 200) { 10
const { value: fact } = JSON.parse(xhr.responseText); 10
content.textContent = fact; 11
} else {
console.log({ 12
status: xhr.status, 12
text: xhr.statusText, 12
});
}
};
}

# promise

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
getData(URL)
.then((response) => displayData(response))
.catch((err) => console.log(err));
});

function getData(url) {
return new Promise((resolve, reject) => { 1
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function () {
if (xhr.readyState !== 4) return;
if (xhr.status === 200) {
resolve(xhr.responseText);
} else {
reject({
status: xhr.status,
text: xhr.statusText,
});
}
};
});
}

function displayData(data) {
const { value: joke } = JSON.parse(data);
content.textContent = joke;
}

# fetch

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
fetch(URL)
.then((data) => data.json())
.then((response) => displayData(response))
.catch((err) => console.log(err));
});

function displayData({ value: joke }) {
img.classList.add('shake-img');
// const { value: joke } = data;
content.textContent = joke;
const random = Math.random() \* 1000;
setTimeout(() => {
img.classList.remove('shake-img');
}, random);
}
