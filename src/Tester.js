class Tester {
    constructor(){
        this.testResults = [];
    }

    /**
     * Evaluates outputs for function test
     * 
     * @param {*} output output given by function
     * @param {*} expected expected output for the function
     * @param {String} funcName name of the function
     */
    test(output, expected, funcName){
        const res = (output === expected) ? 'PASSED' : 'FAILED';
        this.testResults.push({
            res: res,
            funcName: funcName,
            output: output,
            expected: expected
        });
    }

    printResults(){
        let passedTests = 0;
        let numTests = 0;
        this.testResults.forEach(test => {
            numTests++;
            if(test.res === 'PASSED'){
                passedTests++;
                console.log('Test ' + numTests + ' (' + test.funcName + ')', '\x1b[32m', 'PASSED', '\x1b[0m\n');
            }else{
                console.log('Test ' + numTests + ' (' + test.funcName + ')', '\x1b[31m', 'FAILED', '\x1b[0m');
                console.log('expected: ' + test.expected + '\noutput: ' + test.output + '\n');
            }
        });
        const color = (passedTests === numTests) ? '\x1b[32m' : '\x1b[31m';
        console.log('\n'+color + passedTests + '/' + numTests + ' tests passed' + '\x1b[0m');
    }
}

module.exports = Tester;