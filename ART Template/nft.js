//Ricardo Velasquez


/*
    %%%%%%%%%%%%%%%%%%%% CALL 'nftSetup();' IN SETUP %%%%%%%%%%%%%%%%%%%%
*/

let nftNameInput, idInput;

//Start Function nftSetup##########
function nftSetup(){
  nftNameInput = createInput();//Input Element Made#####
  nftNameInput.position(10, 5);
  nftNameInput.style('background-color', color(0));//Background Color Blue#####
  nftNameInput.style('color', color(100, 150, 255));//Text Color Blue#####
  nftNameInput.changed(nftNameChange);//Called Whenever ENTER Is Pressed And The Input Is Being Used#####
  //^ Doesnt Need To Be In Draw#####

  idInput = createInput();
  idInput.position(200, 5);
  idInput.style('background-color', color(50));
  idInput.style('color', color(50, 100, 205));
  idInput.changed(nftIdChange);

}
//End Function nftSetup##########

//Start Function nftNameChange##########
function nftNameChange(){
  nameCharStore[0] = nftNameInput.value();//Name Stored#####

  nftNameInput.hide();

  console.log("NFT Name: " + nameCharStore[0]);

}
//End Function nftNameChange##########

//Start Function nftIdChange##########
function nftIdChange(){
  nameCharStore[1] =  idInput.value();//ID Stored#####

  idInput.hide();

  console.log("NFT Starting ID: " + nameCharStore[1]);

}
//End Function nftIdChange##########

//Start Function savNFT##########
function savNFT(){
  if (nameCharStore.length === 2){//Precaution#####
    name = join(nameCharStore, ' #');//NFT Name Plus ID#####
    //Example: Chicken #3

    console.log(name);

    if (name[nameCharStore[0].length - 1] == nameCharStore[0][nameCharStore[0].length - 1]){//Precaution#####
      save(name + '.jpg');
    }

    nameCharStore[1] = int(nameCharStore[1]) + 1;//Increase ID#####
    nameCharStore = str(nameCharStore);//Makes ID A Number Again#####
  }

}
//End Function savNFT##########
