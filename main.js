Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

<script src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js "></script>

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0M-JY1pMc/model.json',modelLoaded);

function modelLoaded() {
    console.log('model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}