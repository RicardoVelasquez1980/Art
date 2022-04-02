//Ricardo Velasquez
//ART 1

//Start Class Box##########
class Box extends p5.Vector{
  constructor(){
    super(random(width), random(height));//Random Pos#####
    this.vel = p5.Vector.random2D();//Random Vel#####
    this.acc = p5.Vector.random2D();//Random Acc#####
    this.angle = random(TWO_PI);//Random Angle#####
    this.angleTheta = random(TWO_PI);//Random Change Of Angle#####
    this.sz = random(16);//Random Size#####
    this.ignore = random(255);
    // this.mainClr = color(this.ignore, this.ignore, this.ignore, random(255));//Random GrayScale Shade#####
    // this.mainClr = color(0, 0, 255, random(255));
    this.mainClr = color(0, 0, 255, 50);
    this.tempClr = color(255, 255, 255, random(255));//A Splash Of Color#####
    this.usedClr = this.mainClr;//ReAssigned In this.checkBoxCollision#####

  }

  run(){
    this.render();
    this.updatePos();
    this.updateAng();
    this.checkEdges();
    this.usedClr = this.checkBoxCollision();

  }

  render(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.usedClr);
    noStroke();
    square(0, 0, this.sz);
    pop();

  }

  updatePos(){
    this.vel.limit(4);
    this.vel.add(this.acc);
    this.add(this.vel);

  }

  updateAng(){
    this.angle += this.angleTheta;

  }

  checkEdges(){
    if (this.x + this.sz > width){//If Box Reaches Right Edge#####
      this.x = this.sz + 0.001;//Tp To Opposite Side#####
    } else if (this.x - this.sz < 0){//If Box Reaches Left Edge#####
      this.x = width - this.sz - 0.001;//Tp To Opposite Side#####
    }

    if (this.y + this.sz > height){//If Box Reaches Bottom Edge#####
      this.y = this.sz + 0.001;//Tp To Opposite Side#####
    } else if (this.y - this.sz < 0){//If Box Reaches Top Edge#####
      this.y = height - this.sz - 0.001;//Tp To Opposite Side#####
    }

  }

  checkBoxCollision(){
    let distance = 0;
    for (let i = 0; i < boxes.length; i++){
      if (boxes[i] !== this){//If The Object In Boxes Isnt THIS Same Object#####
        let distance = dist(this.x, this.y, boxes[i].x, boxes[i].y);//Calc The Dist For Every Other Box#####

        if (distance < this.sz * 4){//If Dist Is Within A Certain Range#####
          return this.tempClr;
        } else {
          return this.mainClr;
        }

      }
    }

  }

}
//End Class Box##########

//Start Function loadBox##########
function loadBox(qty){
  for (let i = 0; i < qty; i++){
    boxes.push(new Box());//Pushed New Box To Boxes Array#####
  }
}
//End Function loadBox##########

//Start Function runBox##########
function runBox(){
  for (let i = 0; i < boxes.length; i++){
    boxes[i].run();//Run All Boxes In Array#####
  }
}
//End Function runBox##########
