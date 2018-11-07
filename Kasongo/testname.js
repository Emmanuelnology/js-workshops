function test(name, trueorfalse, fullname) {
    if (name == 'Craig' && trueorfalse == true && fullname == 'name is Craig') {
        console.log('Test name is Craig: Pass ');
        return 'Craig';
    } else {
        console.log('Test failed');
    }
}

function pettest(x, a) {
    n = 0
    if (x == 8) {
        n = n + 1;
        console.log('Test "Number of pets is 8": Pass');
    } if (x == 5) {
        n = n + 1;
    } if (x == '5') {
        n = n + 1;
    } if (x === 5) {
        n = n + 1;
    } if (x === '5') {
        n = n + 1;
    } if (x != 8) {
        n = n + 1;
    } if (x != 'fish') {
        n = n + 1;
    } if (x !== 5) {
        n = n + 1;
    } if (x !== '5') {
        n = n + 1;
    } if (x !== 8) {
        n = n + 1;
    } if (x > 4) {
        n = n + 1;
    } if (x > '4') {
        n = n + 1;
    } if (x > 5) {
        n = n + 1;
    } if (x > 6) {
        n = n + 1;
    } if (x < 4) {
        n = n + 1;
    } if (x < 5) {
        n = n + 1;
    } if (x < '5') {
        n = n + 1;
    } if (x < '6') {
        n = n + 1;
    } if (x >= 4) {
        n = n + 1;
    } if (x >= 5) {
        n = n + 1;
    } if (x >= 6) {
        n = n + 1;
    } if (x <= 4) {
        n = n + 1;
    } if (x <= 5) {
        n = n + 1;
    } if (x <= 5) {
        n = n + 1;
    } if (x <= 6) {
        n = n + 1;
    } if (a.length == 5) {
        n = n + 1;
    } if (a != 'Craig' || a != 'Steve') {
        n = n + 1;
    } if (a != 'Aaran' || a != 'Steve') {
        n = n + 1;
    } if (a == 'Craig' ||  x == 5) {
        n = n + 1;
    } if (a.length >= 4 && a.length <= 6) {
        n = n + 1;
    } if (!(a.length >= 4 && a.length <= 6)) {
        n = n + 1;
    } if (a == 'Craig' && x % 2 == 0) {
        n = n + 1;
    }
    return n;
}

function showResults(testing) {
    console.log('31');
    console.log('Successfully '+'ran '+testing+ ' tests');
}

showResults(pettest (6, test('Craig', true, 'name is Craig')));


