function testVarDecleration() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally ' + i);
}
testVarDecleration();

// let has block level scope 