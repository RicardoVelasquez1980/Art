//Ricardo Velasquez
//ART 1
//Use https://ezgif.com/jpg-to-gif For The Gif Maker#####

let boxes = [], pies = [], tris = [];

let cnv;

let pause = false;

let name, nameCharStore = [];

function setup() {
  cnv = createCanvas(windowWidth - 20, windowHeight - 60);
  cnv.position((windowWidth - width) / 2, 30);

  background(255);

  loadBox(ceil(random(40, 120)));//Make Boxes#####
  loadPie(ceil(random(40, 120)));//Make Pies#####
  loadTri(ceil(random(40, 120)));//Make Pies#####

  nftSetup( );//Comment Out If Not Using#####

  // frameRate(5);

}

function draw() {
  if (!pause){
    // background(0);

    runBox();//Run All Boxes#####
    runPie();//Run All Pies#####
    runTri();//Run All Pies#####

  }

}

function keyPressed(){
  if (keyCode === 80 && pause === false){//If P Pressed And !pause#####
    pause = true;
  } else if (keyCode ===  80 && pause === true){//If P Pressed and pause#####
    pause = false;
  }

  if (keyCode === 83){//If S Pressed#####
    if (!nftUse){//False#####
      savCnv(ceil(random(2, 10)), 'SINGLE');

    } else if (nftUse){//True#####
      savNFT();

    }
  }

  if (keyCode === 71){//If G Pressed#####
    savCnv(ceil(random(2, 10)), 'MULT');

  }

}

function savCnv(lgth, typ){
  let gif = [];
  name = "Unknown";//Name Of The File#####
  nameCharStore = [];//Temporary Name Character Storer#####
  let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";//Character List#####

  for (let i = 0; i < lgth; i++){//For The Random Length Given#####
    let decider = ceil(random(2));//Decides Whether The Character Will Be A Letter Or Number#####
    if (decider === 1){//String#####
      nameCharStore[i] = letters[floor(random(letters.length))];//nameCharStore[INDEX] Will Be A Letter#####
    } else if (decider === 2){//Number#####
      nameCharStore[i] = floor(random(10));//nameCharStore[INDEX] Will Be A Number#####
    }
  }

  nameCharStore = str(nameCharStore);//Converts Everything In The Array Into A String#####

  name = join(nameCharStore, '');//Combination Of The nameCharStore Strings Into The Final Name#####

  console.log("File Name: " + name);

  if (name !== "Unknown"){//Precaution To Make Sure This Only Happens When The Name Changes#####
    if (typ === "SINGLE"){
      save(name + '.jpg');//Saves Single Frame#####
      //Quick

    } else if (typ === "MULT"){
      saveFrames(name, 'jpg', 5, 30);//Saves A Mean of 30 Frames In 5 Seconds#####
      //Slow

    }
  }

}
