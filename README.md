# api-axios-mocha-chai
This example is a test script written in JavaScript using Mocha, Chai, and Axios. It defines a test suite that checks the behavior of the Chuck Norris jokes API. Specifically, the test ensures that each time a request is made to the API for a random joke, a different joke is returned. The test makes two consecutive API requests and then asserts that the content of the jokes retrieved from both requests are not identical. If the jokes are different, the test passes, validating the randomness of the API.

## Follow this steps:
- npm init -y
- npm i axios
- npm i chai
- nop i mocha
