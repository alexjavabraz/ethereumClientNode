pragma solidity ^0.5.0;

/**
 */
contract RealTimeGrossSettlement {
    string  public name = "Real";
    string  public symbol = "BRL";
    string  public description = "Hub Fintech v1.0";
    uint public decimals = 2;
    uint256 public totalSupply;
    uint256 public amountTransactioned;
    uint256 public totalTransactions = 0;
    address owner;
    enum EventType { MINT, BURN }

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value,
        string message
    );

    event Minted(
        address indexed _from,
        uint256 _value,
        EventType eventType,
        string message
    );

    event Burnt(
        address indexed _from,
        uint256 _value,
        EventType eventType,
        string message
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "You're not the owner.");
        _;
    }

    mapping(address => uint256) public balanceOf;

    constructor (uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply*10**decimals;
        totalSupply = _initialSupply*10**decimals;
        owner = msg.sender;
    }

    function getCountTotalTransactions() public view returns (uint256){
        return totalTransactions;
    }

    function getTotalAmountTransactioned() public view returns (uint256){
        return amountTransactioned;
    }

    function getTotalSupply() public onlyOwner view returns (uint256){
        return totalSupply;
    }

    /**
        Mint proccess
     */
    function mint(uint256 _amount) public onlyOwner returns (bool success){
        require(_amount != 0x0, "Recharge Value cannot be zero");
        balanceOf[owner] += _amount;

        emit Minted(msg.sender, _amount, EventType.MINT, "New Mint Proccess Ocurred");

        return true;
    }

    /**
        Burn proccess
    */
    function burn(uint256 _amount, address _burnedAccount) public onlyOwner returns (bool success){
        require(_amount != 0x0, "Burn Value Value cannot be zero");
        require(_amount <= balanceOf[_burnedAccount], "Burn Value Value cannot be gt balance of account");

        balanceOf[_burnedAccount] -= _amount;

        emit Burnt(_burnedAccount, _amount, EventType.BURN, "New Burn Proccess Ocurred");

        return true;
    }

    function getBalance(address _address) public view returns (uint256){
        return balanceOf[_address];
    }

    function transfer(address _to, uint256 _value, string memory _summary) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insuficcient Funds");

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        totalTransactions += 1;
        amountTransactioned += _value;

        emit Transfer(msg.sender, _to, _value, _summary);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value, string memory _summary) public onlyOwner returns (bool success) {
        require(_value <= balanceOf[_from], "Insuficcient Funds");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        totalTransactions += 1;
        amountTransactioned += _value;

        emit Transfer(_from, _to, _value, _summary);

        return true;
    }
}