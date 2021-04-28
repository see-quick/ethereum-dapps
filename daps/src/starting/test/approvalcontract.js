const ApprovalContract = artifacts.require("../../contracts/ApprovalContract.sol");

    contract('ApprovalContract', function(accounts) {

        it('initiates contract', async function() {
               const contract = await ApprovalContract.deployed();
               const approver = await contract.approver.call();

              assert.equal(approver, 0x009c07217331b055f9923e7d032685cc1fdbf3486e, "approvers don't match");
        });

        it('takes a deposit', async function() {
           const contract = await ApprovalContract.deployed();
           await contract.deposit(accounts[0], {value: 1e+18, from:accounts[1]});

           assert.equal(web3.eth.getBalance(contract.address), 1e+18, web3.eth.getBalance(contract.address) + "amount did not match");
        });
    });