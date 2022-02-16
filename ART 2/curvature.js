//Ricardo Velasquez
//ART 2

//Start Class Curvature##########
class Curvature extends p5.Vector{
  constructor(){
    super(0, 0);//First Anchor#####
    this.anchor1OrbtRad = random(500);//Orbit Radius#####
    this.anchor1Angle = random(TWO_PI);//Point Angle#####
    this.anchor1AngleTheta = random(-0.1, 0.1);//Change Of Angle#####
    this.anchor2 = createVector(0, 0);//Second Anchor#####
    this.anchor2OrbtRad = random(500);//Orbit Radius#####
    this.anchor2Angle = random(TWO_PI);//Point Angle#####
    this.anchor2AngleTheta = random(-0.1, 0.1);//Change Of Angle#####
    this.control1 = createVector(0, 0);//First Control#####
    this.control1OrbtRad = random(500);//Orbit Radius#####
    this.control1Angle = random(TWO_PI);//Point Angle#####
    this.control1AngleTheta = random(-0.1, 0.1);//Change Of Angle#####
    this.control1Center = ceil(random(2));//Anchor The Control Orbits#####
    this.control2 = createVector(0, 0);//Second Control#####
    this.control2OrbtRad = random(500);//Orbit Radius#####
    this.control2Angle = random(TWO_PI);//Point Angle#####
    this.control2AngleTheta = random(-0.1, 0.1);//Change Of Angle#####
    this.control2Center = ceil(random(2));//Anchor The Control Orbits#####
    this.clr = color(random(255), random(255), random(255), random(255));
    // this.clr = color(0, 0, 255, random(255));
    // this.sz = random(2, 7);
    this.sz = random(6);
    // this.sz = 0.2;

  }

  run(){
    this.anchorRotation();
    this.controlRotation();
    this.render();

  }

  render(){
    push();
    // noFill();
    fill(random(255), random(255), random(255), 1);
    stroke(this.clr);
    strokeWeight(this.sz);
    bezier(this.x, this.y, this.control1.x, this.control1.y, this.control2.x, this.control2.y, this.anchor2.x, this.anchor2.y);
    pop();

  }

  anchorRotation(){
    this.anchor1Angle += this.anchor1AngleTheta;
    this.anchor2Angle += this.anchor2AngleTheta;

    this.x = (width / 2) + cos(this.anchor1Angle) * this.anchor1OrbtRad;
    this.y = (height / 2) + sin(this.anchor1Angle) * this.anchor1OrbtRad;

    this.anchor2.x = (width / 2) + cos(this.anchor2Angle) * this.anchor2OrbtRad;
    this.anchor2.y = (height / 2) + sin(this.anchor2Angle) * this.anchor2OrbtRad;

  }

  controlRotation(){
    this.control1Angle += this.control1AngleTheta;
    this.control2Angle += this.control2AngleTheta;

    if (this.control1Center === 1){
      this.control1.x = this.x + cos(this.control1Angle) * this.control1OrbtRad;
      this.control1.y = this.y + sin(this.control1Angle) * this.control1OrbtRad;

    } else if (this.control1Center === 2){
      this.control1.x = this.anchor2.x + cos(this.control1Angle) * this.control1OrbtRad;
      this.control1.y = this.anchor2.y + sin(this.control1Angle) * this.control1OrbtRad;

    }

    if (this.control2Center === 1){
      this.control2.x = this.x + cos(this.control1Angle) * this.control2OrbtRad;
      this.control2.y = this.y + sin(this.control1Angle) * this.control2OrbtRad;

    } else if (this.control2Center === 2){
      this.control2.x = this.anchor2.x + cos(this.control2Angle) * this.control2OrbtRad;
      this.control2.y = this.anchor2.y + sin(this.control2Angle) * this.control2OrbtRad;

    }

  }

}
//End Class Curvature##########
