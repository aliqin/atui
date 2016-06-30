/**
 * Created by jiangyi on 16/6/29.
 */

//import hello from '../test/hello.js';

describe('unit test coverage summary', () => {
  //let result = hello.sayHi('');
  let result = 'hello alibaba';

  it('should execute right', () => {
    expect(result).to.be.equal('hello alibaba');
  })
});
