import axios from 'axios';
import { expect  } from 'chai';

describe('Random', async () => {
    it('Sould get a new joke upon each request', async function () {
        const firstJoke = await axios.get('https://api.chucknorris.io/jokes/random')
        const secondJoke = await axios.get('https://api.chucknorris.io/jokes/random')
        expect(firstJoke.data.value).not.to.equal(secondJoke.data.value);
    })

})
