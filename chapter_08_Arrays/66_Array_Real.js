let browser = [ 'chrome','firefox', 'safari', 'opera', 'Edge'];

console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

console.log('----------------------------');

let removed = browser.shift();
console.log(removed);
console.log(browser);

console.log('----------------------------');

for(let i = 0; i<browser.length; i++){
    console.log(browser[i]);
    if(browser[i] === 'opera')
    {
        console.log('Opera is removed from the selenium');
    }
}



