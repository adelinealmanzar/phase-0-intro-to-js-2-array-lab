
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
};
destructivelyAppendCat('Ralph');

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
};
destructivelyPrependCat("Bob");

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
};
appendCat("Broom");

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
};
prependCat("Arnold");

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function removeLastCat() {
    const lessCats = cats.slice(0, cats.length - 1);
    return lessCats;
};

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function removeFirstCat() {
    const anotherLessCats = cats.slice(-2);
    return anotherLessCats;
}


