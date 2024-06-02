/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFT=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyeColour,shirtType,bling) {
   let Nft={
      "name":name,
      "Eye_Colour":eyeColour,
      "shirt_type":shirtType,
      "bling":bling
   };
   NFT.push(Nft);
   console.log("minted here about" + name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   let i=0;
while(i<NFT.length){
   console.log("name "+ NFT[i].name );
   console.log("Eye Colour "+ NFT[i].Eye_Colour );
   console.log("Shirt Type "+ NFT[i].shirt_type );
   console.log("Bling "+ NFT[i].bling );
   i++;
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(NFT.length);
}

// call your functions below this line
mintNFT("charlie","black","formal","silverchain");
mintNFT("hitler","brown","tshirt","bracelet");
listNFTs();
getTotalSupply();
