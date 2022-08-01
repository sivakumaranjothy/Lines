function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function take_snapshot(){
    save('student_name.png');
}

function draw(){
    image(video,230,150,220,200);
    fill("#3C00A6");
    stroke("#3C00A6");
    circle(50,50,80);


    fill("#89cff0");
    stroke("#89cff0");
    rect(89,38, 465, 20);

    fill("#3C00A6");
    stroke("#3C00A6");
    circle(594,50,80);

    fill("#3C00A6");
    stroke("#3C00A6");
    circle(594,440,80);

    fill("#3C00A6");
    stroke("#3C00A6");
    circle(50,440,80);

    fill("#89cff0");
    stroke("#89cff0");
    rect(89,435, 465, 20);

    fill("#89cff0");
    stroke("#89cff0");
    rect(40,90, 20, 310);

    fill("#89cff0");
    stroke("#89cff0");
    rect(585,90, 20, 310);


}