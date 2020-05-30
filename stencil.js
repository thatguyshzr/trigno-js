function cos_tan() {
  var x= r*cos(theta);
  var y= r*tan(theta);
  noStroke();
  fill(x, y, 100);
  ellipse(x + width/2, y + height/2, q, q);
  theta+= 0.01;
  q+=1;
  if(q===15) {
    q = -q
  }
}

function tan_cos() {
  var x= r*tan(theta);
  var y= r*cos(theta);
  noStroke();
  fill(x, y, 100);
  ellipse(x + width/2, y + height/2, q, q);
  theta+= 0.01;
  q+=1;
  if(q===15) {
    q = -q
  }
}

function tan_sin() {
  var x= r*tan(theta);
  var y= r*sin(theta);
  noStroke();
  fill(x, y, 100);
  ellipse(x + width/2, y + height/2, q, q);
  theta+= 0.01;
  q+=1;
  if(q===15) {
    q = -q
  }
}

function cos_sin() {
  //makes a circle
  var x= r*cos(theta);
  var y= r*sin(theta);
  noStroke();
  fill(x, y, 100);
  ellipse(x + width/2, y + height/2, q, q);
  theta+= 0.01;
  q+=1;
  if(q===15) {
    q = -q
  }
}

function sin_cos() {
  var x= r*sin(theta);
  var y= r*cos(theta);
  noStroke();
  fill(x, y, 100);
  ellipse(x + width/2, y + height/2, q, q);
  //ellipse(mouseX, mouseY, q, q);
  theta+= 0.01;
  q+=1;
  if(q===15) {
    q = -q
  }
}

function sin_tan() {
  var x= r*sin(theta);
  var y= r*tan(theta);
  noStroke();
  fill(x, y, 100);
  ellipse(x + width/2, y + height/2, q, q);
  theta+= 0.01;
  q+=1;
  if(q===15) {
    q = -q
  }
}
