// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
vsc

contract AdminConsole {

    address public immutable i_owner;
    address[] adminMembers;
    address feeAccount;
    uint feePercent;

    constructor(){
        i_owner = msg.sender;
    }


    function addMember(address account) external {
        require(msg.sender == i_owner, "You do not have permission to add members");
        adminMembers.push(account); //add event
    }

    function removeMember(address account) external {
        require(msg.sender == i_owner, "You do not have permission to add members");
        for(uint i = 0; i < adminMembers.length; i++){            
            if(adminMembers[i] == account){                
                adminMembers[i] = adminMembers[adminMembers.length - 1];
                adminMembers.pop();
            }
        }
    }

    function isAdmin(address account) public view returns(bool){
        for(uint i = 0; i < adminMembers.length; i++){            
            if(adminMembers[i] == account){                
                return true;
            }
        }
        return false;
    }

    function setFeeAccount(address account) public {
        require(msg.sender == i_owner, "You do not have set this value!");
        feeAccount = account;
    }

    function getFeeAccount() public view returns(address) {        
        return feeAccount;
    }

    function setFeePercent(uint _feePercent) public {
        require(msg.sender == i_owner, "You do not have set this value!");
        feePercent = _feePercent;
    }

    function getFeePercent() public view returns(uint) {        
        return feePercent;
    }
}

contract UserDefined1155 is ERC1155, Ownable, Pausable, ERC2981, ERC1155Supply {

    
    event Minted (uint indexed tokenId,address indexed owner,address indexed nftAddress, uint quantity);

  
    address operator;
    uint tokenCounter = 0;


    
    constructor(address _operator) ERC1155("monion-api/{id}.json") {
        operator = _operator;
    }

    

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address account, uint quantity, uint96 royaltyFee)
        public 
    {
        tokenCounter++;
        uint tokenId = tokenCounter;
        _mint(account, tokenId, quantity, "");
        setApprovalForAll(operator, true);                
        _setDefaultRoyalty(account, royaltyFee);
        //Should I generate a hex code using the tokenId, so that the hex code is used to create a link?
        emit Minted(tokenId, account, address(this), quantity);
    }

    function getTokenCount() public onlyOwner view returns(uint) {
        return tokenCounter;
    }

    
    

    function _beforeTokenTransfer(address theOperator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(theOperator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}


contract Listing {

    event ListedForSale(uint indexed tokenId, address indexed nftAddress, uint tokenPrice, address indexed listedBy, uint quantity);
    event RemovedNFT(uint indexed tokenId, address indexed nftAddress, address indexed removedBy);
    event DecreasedNFTUnits(uint indexed tokenId, address indexed nftAddress, address indexed removedBy, uint quantity);
    event UpdatedPrice(uint indexed tokenId, address indexed nftAddress, address indexed owner, uint newPrice);

    MyNFTStorage vault;
    Monion1155 monionMinter;
    
    mapping(address => address[]) private userToUserDefinedNFTs;

    constructor(address _storageAddress, address _monionMinter){
        vault = MyNFTStorage(_storageAddress);
        monionMinter = Monion1155(_monionMinter);
    }

    function mintMonionNFT(uint quantity, uint96 royaltyFee) external {
        monionMinter.mint(quantity, msg.sender, royaltyFee);
    }

    // function mintUserNFT(uint amount, uint96 _fee) external {
    //     UserDefined1155 userMinter = new UserDefined1155(amount, address(vault), _fee);
    //     userMinter.mint(msg.sender);
    //     console.log("The address for the minted NFT is: ", address(userMinter));
    //     // userToUserDefinedNFTs[msg.sender].push(address(userMinter));
    // }

    function addUserDefinedListingForSale(address nftAddress, uint tokenId, uint tokenPrice, uint quantity) external  {
        vault._listUserDefinedNFTForSale(nftAddress, tokenId, tokenPrice, payable(msg.sender), quantity);
        uint price = vault.getTokenPrice(nftAddress, tokenId, msg.sender);
        emit ListedForSale(tokenId, nftAddress, price, msg.sender, quantity);
    }

    function addMonionListingForSale(address nftAddress, uint tokenId, uint tokenPrice, uint quantity) external  {
        vault._listMonionNFTForSale(nftAddress, tokenId, tokenPrice, payable(msg.sender), quantity);
        uint price = vault.getTokenPrice(nftAddress, tokenId, msg.sender);
        emit ListedForSale(tokenId, nftAddress, price, msg.sender, quantity);
    }

    function updatePrice(address nftAddress, uint tokenId, uint price) external {
        vault._updateTokenPrice(nftAddress, tokenId, msg.sender, price);
        emit UpdatedPrice(tokenId, nftAddress, msg.sender, price);
    }


    
    function removeNFT(address nftAddress, uint tokenId) public {
        vault._delistNFT(nftAddress, tokenId, msg.sender);
        // uint length = userToUserDefinedNFTs[msg.sender].length;
        // for(uint i = 0; i < length; i++){
        //     if(nftAddress == userToUserDefinedNFTs[msg.sender][i]){
        //         userToUserDefinedNFTs[msg.sender][i] = userToUserDefinedNFTs[msg.sender][length - 1];
        //         userToUserDefinedNFTs[msg.sender].pop();
        //     }
        // }
        emit RemovedNFT(tokenId, nftAddress, msg.sender);
    }

    function decreaseUnits(address nftAddress, uint tokenId, uint quantity) public {
        vault._reduceNFTUnits(nftAddress, tokenId, msg.sender, quantity);
        emit DecreasedNFTUnits(tokenId, nftAddress, msg.sender, quantity);
    }

    

}

/**
- Contract uses a single URI which is the monion IPFS URI for hosting metadata
- Contract relies on the metadata to store relevant info about the token such as name, description etc.
- Contract issues tokenId to each token minted
- Contract use is cheaper than if the user deployed a fresh instance of the ERC1155
*/


contract Monion1155 is ERC1155, Ownable, Pausable, ERC2981, ERC1155Supply, ERC1155Holder {

    
    event Minted (uint indexed tokenId,address indexed owner, uint quantity);

    address operator;
    AdminConsole admin;

    constructor(address _operator, address _admin) ERC1155("monion-api/{id}.json") {
        operator = _operator;
        admin = AdminConsole(_admin);
    }

    uint tokenCounter = 0;

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(uint256 quantity, address account, uint96 royaltyFee)
        public
    {
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        tokenCounter++;
        uint tokenId = tokenCounter;
        _mint(account, tokenId, quantity, "");
        setApprovalForAll(operator, true);        
        _setDefaultRoyalty(account, royaltyFee);
        //Should I generate a hex code using the tokenId, so that the hex code is used to create a link?
        emit Minted(tokenId, account, quantity);
    }

    function getTokenCount() public onlyOwner view returns(uint) {
        return tokenCounter;
    }

    
    

    function _beforeTokenTransfer(address theOperator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(theOperator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, ERC2981, ERC1155Receiver)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}



contract MyNFTStorage is ERC1155Holder {

    UserDefined1155 minter;
    AdminConsole admin;
    Monion1155 monionMinter;

    uint feePercent; //Marketplace fee

    constructor(address _admin){
        // minter = Minter(_minterAddress);
        admin = AdminConsole(_admin);
        
    }
    
    

    

    struct Token {
        
        uint tokenId;
        uint tokenPrice;
        address owner;
        address nftAddress;
        uint quantity;
    }

    struct TokenItem {
        address nftAddress;
        uint[] tokenId;
    }

    //================LISTING MAPPINGS=========================
    mapping(address => mapping(uint => mapping(address => uint))) private tokenBalance; //nftAddress -> tokenId -> userAddress -> quantity
    mapping(address => mapping(uint => mapping(address => Token))) private tokenIdToUserToTokenInfo; //nftAddress -> userAddress -> TokenObject

    function _listUserDefinedNFTForSale(address nftAddress,uint tokenId, uint tokenPrice, address account, uint quantity) public { //please ensure that this remains internal
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        minter = UserDefined1155(nftAddress);
        uint tokensHeld = minter.balanceOf(account, tokenId);
        require(tokensHeld > 0, "This user does not have any units of this token available for listing!");
        require(quantity <= tokensHeld, "You cannot list this units of this token, try reducing the quantity!");

        tokenBalance[nftAddress][tokenId][account] += quantity;

        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][account];
        myToken.tokenId = tokenId;
        myToken.tokenPrice = tokenPrice;
        myToken.nftAddress = nftAddress;

        feePercent = admin.getFeePercent();
        myToken.tokenPrice = myToken.tokenPrice * (10000 + feePercent)/10000;        
        myToken.quantity += quantity;     
        myToken.owner = payable(account);
        
        minter.safeTransferFrom(account, address(this), tokenId, quantity, "");
    }

    function _listMonionNFTForSale(address nftAddress,uint tokenId, uint tokenPrice, address account, uint quantity) public { //please ensure that this remains internal
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        monionMinter = Monion1155(nftAddress);
        uint tokensHeld = monionMinter.balanceOf(account, tokenId);
        require(tokensHeld > 0, "NFT Storage: This user does not have any units of this token available for listing!");
        require(quantity <= tokensHeld, "You cannot list this units of this token, try reducing the quantity!");

        tokenBalance[nftAddress][tokenId][account] += quantity;

        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][account];
        myToken.tokenId = tokenId;
        myToken.tokenPrice = tokenPrice;
        myToken.nftAddress = nftAddress;
        feePercent = admin.getFeePercent();

        myToken.tokenPrice = myToken.tokenPrice * (10000 + feePercent)/10000;        
        myToken.quantity += quantity;     
        myToken.owner = payable(account);
        
        monionMinter.safeTransferFrom(account, address(this), tokenId, quantity, "");
    }


    function _claimToken(address nftAddress, uint tokenId, address owner, address account, uint quantity) public {
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        

        //reduce previous owner's tokens
        Token storage ownerToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][owner];
        ownerToken.quantity -= quantity;
        tokenBalance[nftAddress][tokenId][owner] -= quantity;
        
        
        //increase new user's tokens
        Token storage newOwner= tokenIdToUserToTokenInfo[nftAddress][tokenId][account];
        newOwner.tokenId = tokenId;
        newOwner.nftAddress = nftAddress;
        newOwner.quantity += quantity;
        newOwner.owner = account;
        newOwner.tokenPrice = ownerToken.tokenPrice;
        tokenBalance[nftAddress][tokenId][account] += quantity;
    }

    function _withdrawNFT(address nftAddress, uint tokenId, address tokenOwner, uint quantity) public {
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        //validate that he/she has the quantity
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][tokenOwner];
        require(myToken.owner == tokenOwner, "You do not own this token!");
        require(myToken.quantity > 0, "You do not have any tokens!");
        require(quantity <= myToken.quantity, "You do not have sufficient tokens, withdraw less!");

        //change state to reflect decrement
        tokenBalance[nftAddress][tokenId][tokenOwner] -= quantity;
        myToken.quantity -= quantity;
        minter = UserDefined1155(nftAddress);
        minter.safeTransferFrom(address(this), tokenOwner, tokenId, quantity, "");

    }

    function _reduceNFTUnits(address nftAddress, uint tokenId, address tokenOwner, uint quantity) public {
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        //validate that he/she has the quantity
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][tokenOwner];
        
        require(myToken.owner == tokenOwner, "You do not own this token!");
        require(myToken.quantity > 0, "You do not have any tokens!");
        require(quantity <= myToken.quantity, "You do not have sufficient tokens, withdraw less!");

        //change state to reflect decrement
        tokenBalance[nftAddress][tokenId][tokenOwner] -= quantity;
        myToken.quantity -= quantity;
        minter = UserDefined1155(nftAddress);
        minter.safeTransferFrom(address(this), tokenOwner, tokenId, quantity, "");

    }
    

    function _delistNFT(address nftAddress, uint tokenId, address account) public {
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");
        
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][account];   
        require(myToken.owner == account, "You do not own this token!");
        minter = UserDefined1155(nftAddress);
        minter.safeTransferFrom(address(this), account, tokenId, myToken.quantity, "");
        tokenBalance[nftAddress][tokenId][account] = 0;
        myToken.quantity = 0;       

    }

    function _updateTokenPrice(address nftAddress, uint tokenId, address account, uint price) public {
        require(admin.isAdmin(msg.sender) == true, "You do not have permission to access this contract!");

        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][account];   
        require(myToken.owner == account, "You do not own this token!");
        myToken.tokenPrice = price;

    }

    

    function getTokenPrice(address nftAddress, uint tokenId, address account) public view returns(uint) {
        return tokenIdToUserToTokenInfo[nftAddress][tokenId][account].tokenPrice;
    }

    function getTokenOwner(address nftAddress, uint tokenId, address account) public view returns(address) {
        return tokenIdToUserToTokenInfo[nftAddress][tokenId][account].owner;
    }

    function getAvailableQty(address nftAddress, uint tokenId, address account) public view returns(uint) {
        return tokenIdToUserToTokenInfo[nftAddress][tokenId][account].quantity;
    }    

    function getToken(address nftAddress, uint tokenId, address account) public view returns(Token memory) {
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][account];
        return myToken;
    }

    function tokenExists(address nftAddress, uint tokenId, address tokenOwner) public view returns(bool) {
        //token exists if at least 1 unit exists
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][tokenOwner];
        if(myToken.quantity >= 1){
            return true;
        } else {
            return false;
        }
    }

    function isOwner(address nftAddress, uint tokenId, address tokenOwner) public view returns(bool) {
        //token exists if at least 1 unit exists
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][tokenOwner];
        if(myToken.owner == tokenOwner){
            return true;
        } else {
            return false;
        }
    }

    function verifyQuantityIsAvailable(address nftAddress, uint tokenId, address tokenOwner, uint quantity) public view returns(bool) {
        Token storage myToken = tokenIdToUserToTokenInfo[nftAddress][tokenId][tokenOwner];
        if(quantity <= myToken.quantity){
            return true;
        } else {
            return false;
        }
    }

    
}

contract Commerce is ReentrancyGuard {


    event SendOffer(uint indexed tokenId,address nftAddress, address tokenOwner, uint indexed quantity, address sender, uint offer, uint indexed index);
    event AcceptedOffer(uint indexed tokenId,address nftAddress, address indexed seller, address buyer, uint quantity, uint indexed index);
    event WithdrewOffer(uint indexed tokenId,address nftAddress, address tokenOwner, address indexed caller, uint amount, uint index);
    event UpdatedOffer(uint indexed tokenId,address nftAddress, address tokenOwner, address indexed caller,uint prevPrice, uint amount, uint index);
    event WithdrewNFT(uint tokenId,address nftAddress, address owner, uint quantity);
    event WithdrewFunds(address indexed caller, uint indexed amount);
    event WithdrewMarketFunds(address indexed caller, uint indexed amount);


    MyNFTStorage vault;
    AdminConsole admin;
    address immutable owner;

    constructor(address _vault, address _admin) ReentrancyGuard() {
        vault = MyNFTStorage(_vault);
        admin = AdminConsole(_admin);
        owner = msg.sender;
    }

    struct Offers {
        address sender;
        address nftAddress;
        uint qty;
        uint price;
        uint totalPrice;
        
    }

    // mapping(uint => mapping(address => uint)) public deposits;
    mapping(address => uint) public deposits;
    mapping(address => mapping(uint => mapping(address => Offers[]))) public buyOffers;
    mapping(address => mapping(uint => mapping(address => bool))) public alreadyOffered;

    function sendBuyOffer(address nftAddress, uint tokenId, address tokenOwner, uint quantity) payable public {     
        
        require(vault.tokenExists(nftAddress, tokenId, tokenOwner) == true, "There are no units of this token available for sale!");
        require(tokenOwner != address(0), "You cannot order from this address!");
        require(nftAddress != address(0), "You cannot order from a zero nft address!");
        require(quantity > 0, "You cannot order negative quantity");
        require(quantity <= vault.getAvailableQty(nftAddress,tokenId, tokenOwner), "Seller does not have this units available for sale, reduce quantity!");
        
        uint price = vault.getTokenPrice(nftAddress, tokenId, tokenOwner);
        // address seller = vault.getTokenOwner(tokenId, tokenOwner);        

        uint totalPrice = price * quantity;
        require(msg.value >= totalPrice, "Insufficient amount for the chosen quantity!");
        require(alreadyOffered[nftAddress][tokenId][msg.sender] == false, "Withdraw current offer, and make new offer!");
        alreadyOffered[nftAddress][tokenId][msg.sender] = true; 

        Offers memory myOffer = Offers(msg.sender,nftAddress, quantity, price, msg.value);
        buyOffers[nftAddress][tokenId][tokenOwner].push(myOffer);
        uint length = buyOffers[nftAddress][tokenId][tokenOwner].length;
        uint id = length - 1;
        console.log("The index for this offer is: ", id);
        //add event with array id;
        emit SendOffer(tokenId, nftAddress, tokenOwner, quantity, msg.sender, msg.value, id);
    }

    function viewOffers(address nftAddress, uint tokenId, address tokenOwner) public view returns(Offers[] memory){
        require(msg.sender == tokenOwner || msg.sender == owner, "You are not authorized to to view Offers");
        uint length = buyOffers[nftAddress][tokenId][tokenOwner].length;
        Offers[] memory myOffers = new Offers[](length);

        Offers[] memory existingOffers = buyOffers[nftAddress][tokenId][tokenOwner];

        for(uint i = 0; i < myOffers.length; i++){
            myOffers[i] = existingOffers[i];
        }
        return myOffers;
    }

    function acceptOffer(address nftAddress, uint tokenId, uint index) external nonReentrant() {
        Offers memory acceptedOffer = buyOffers[nftAddress][tokenId][msg.sender][index];
        require(vault.isOwner(nftAddress, tokenId, msg.sender) == true, "You are not authorized!");
        require(vault.verifyQuantityIsAvailable(nftAddress, tokenId, msg.sender, acceptedOffer.qty) == true, "You do not have sufficient units to accept this token!");
        
        //get the creator, seller, and marketplace info
        uint dueMarketplace = acceptedOffer.price * (admin.getFeePercent()/10000);
        uint dueSeller = acceptedOffer.price - dueMarketplace;
        (address creator, uint dueCreator) = IERC2981(nftAddress).royaltyInfo(tokenId, dueSeller);
        dueSeller -= dueCreator;

        deposits[msg.sender] += dueSeller;
        deposits[admin.getFeeAccount()] += dueMarketplace;
        deposits[creator] += dueCreator;
                
        address buyer = acceptedOffer.sender;
        uint quantity = acceptedOffer.qty;

        vault._claimToken(nftAddress, tokenId, msg.sender, acceptedOffer.sender, acceptedOffer.qty);
        alreadyOffered[nftAddress][tokenId][acceptedOffer.sender] = false; 
        Offers[] storage allOffers = buyOffers[nftAddress][tokenId][msg.sender];
        allOffers[index] = allOffers[allOffers.length - 1];
        allOffers.pop();

        emit AcceptedOffer(tokenId, nftAddress, msg.sender, buyer, quantity, index);
        
    }

    function withdrawOffer(address nftAddress, uint tokenId, address tokenOwner) external nonReentrant() {
        (bool hasOffer, uint index, uint amount) = offerExists(nftAddress, tokenId, tokenOwner, msg.sender);
        require(hasOffer, "Commerce: You do not have an existing offer!");
        Offers[] storage allOffer = buyOffers[nftAddress][tokenId][tokenOwner];       
        
        alreadyOffered[nftAddress][tokenId][msg.sender] = false;

        allOffer[index] = allOffer[allOffer.length - 1];
        allOffer.pop();

        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Failed to send Ether");
        
        emit WithdrewOffer(tokenId, nftAddress, tokenOwner, msg.sender, amount, index);
        
    }

    // function updateOffer(address nftAddress, uint tokenId, address tokenOwner, uint newQuantity) external payable {
    //     (bool hasOffer, uint index, uint old_totalPrice) = offerExists(nftAddress, tokenId, tokenOwner, msg.sender);
    //     require(hasOffer, "Commerce: You do not have an existing offer!");

    //     Offers memory myOffer = buyOffers[nftAddress][tokenId][tokenOwner][index];
    //     uint prevPrice = myOffer.totalPrice;



    //     myOffer.totalPrice += msg.value;

    //     emit UpdatedOffer(tokenId,nftAddress, tokenOwner, msg.sender,prevPrice, myOffer.totalPrice, index);
    // }

    function withdrawNFTs(address nftAddress, uint tokenId, uint quantity) external {
        vault._withdrawNFT(nftAddress, tokenId, msg.sender, quantity);

        emit WithdrewNFT(tokenId, nftAddress, msg.sender, quantity);
    }

    function withdrawFunds() payable public nonReentrant() {
        uint amount = deposits[msg.sender];
        deposits[msg.sender] = 0;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Failed to send Ether");

        

        emit WithdrewFunds(msg.sender, amount);
    }

    function withdrawMarketfunds() payable external {
        address feeAccount = admin.getFeeAccount();
        require(msg.sender == feeAccount, "You are not authorized!");
        uint amount = deposits[feeAccount];
        deposits[feeAccount] = 0;
        (bool success, ) = payable(feeAccount).call{value: (amount*99)/100}("");
        require(success, "Failed to send Ether");

        

        emit WithdrewMarketFunds(feeAccount, amount);
    }

    function getDeposit() public view returns(uint){
        return deposits[msg.sender];
    }

    function offerExists(address nftAddress, uint tokenId, address tokenOwner, address account) internal view returns(bool answer, uint index, uint totalPrice) {
        Offers[] storage allOffers = buyOffers[nftAddress][tokenId][tokenOwner];
        uint length = allOffers.length;
        
        for(uint i = 0; i < length; i++){
            if(allOffers[i].sender == account){
                answer = true;
                index = i;
                totalPrice = allOffers[i].totalPrice;
            }
        }
        
    }

     

}