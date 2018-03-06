pragma solidity ^0.4.4;

contract FuturePrice {

        //want to have quarters but not sure how because of decimals
  uint256 result;

  event Dollar(uint256 a, uint256 b, uint256 c);
  event Cent(uint256 a, uint256 b, uint256 c);


  function FuturePrice() public {
    // constructor
    result = 0;

  }

  function calculatedollar(uint256 ethusdc, uint256 bp, uint256 y) public returns (uint256) {
    result = ethusdc*(10000+bp)**y/(100*(10000)**y);
    Dollar(ethusdc,bp,y);
        return result;
  }

  function calculatecent(uint256 ethusdc, uint256 bp, uint256 y) public returns (uint256) {
    result = ethusdc*(10000+bp)**y%(100*(10000)**y);
    Cent(ethusdc,bp,y);
        return result;
  }

  function getResult() public constant returns (uint256) {
    return result;
  }
  // futures dollar and cent value 
}