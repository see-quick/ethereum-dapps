pragma solidity >=0.4.22 <0.9.0;

contract ApprovalContract {

    address public sender;
    address payable public receiver;
    address public constant approver = address(0x009c07217331b055f9923e7d032685cc1fdbf3486e);

    function deposit(address payable _receiver) external payable {

        // same as assert
        require(msg.value > 0);

        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function approve() public {
        require(msg.sender == approver);
        receiver.transfer(address(this).balance);
        return;
    }
}