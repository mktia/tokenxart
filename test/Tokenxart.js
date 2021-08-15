const Tokenxart = artifacts.require("Tokenxart");
const creatorName = 'Rocio S. Deloatch'
const title = 'My First Work'
const testURI = "https://example.com/test.json";

contract("Tokenxart", (accounts) => {
  it("should get the same URI in contract", async () => {
    const instance = await Tokenxart.deployed();
    console.log(`creator: ${accounts[0]}`);
    await instance.registerWork(accounts[0], creatorName, title, testURI);
    const tokenURI = await instance.tokenURI.call(1);
    assert.equal(tokenURI, testURI, `tokenURI should be ${testURI}`);
  });
  it("should be 1 token if minted", async () => {
    const instance = await Tokenxart.deployed();
    const balance = (await instance.balanceOf.call(accounts[0])).toNumber();
    assert.equal(balance.valueOf(), 1, "Balance of token should be 1");
  });
});
