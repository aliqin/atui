// require all test files
const testsContext = require.context('src/components/Accordion', true, /\.test.js$/)
testsContext.keys().forEach(testsContext)
