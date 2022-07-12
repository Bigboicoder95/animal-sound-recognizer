function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nZMdzjZmf/model.json", modelReady);
}
function modelReady() {
    Classifier.classify(gotResults);
    console.log("gotResults");
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear- "+
        results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");

        if(results[0].label=="Moo"){
            img1.src="f55d5a6b01d3fa856f77e268dd52aec1.jpg";
        }
        else if(results[0].label=="Meow"){
            img2.src="cat-drawing-for-kids_step-6.jpg";
        }
        else if(results[0].label=="Roar"){     
            img3.src="Lion.jpg";
        }
        else{
            img4.src="Dog.jpg";
        }
    }
}