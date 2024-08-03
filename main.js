
https://teachablemachine.withgoogle.com/models/VFWtXAEId/

function startClassification()
{
    navigator.medianDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VFWtXAEId/model.json', modalReady);
    
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
} else {
    console.log(results);
    randome_number_r = Math.floor(Math.random() * 255) + 1;
    randome_number_g = Math.floor(Math.random() * 255) + 1;
    randome_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label; 
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +randome_number_r+","+randome_number_g+","+randome_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +randome_number_r+","+randome_number_g+","+randome_number_r+")";
}


img = document.getElementById('cat');
img1 = document.getElementById('dog');
img2 = document.getElementById('bird');

if (results[0].label == "mewing")
    img.src = 'cat.gif';
img1.src = 'dog1.jpg';
img2.src = 'bird1.webp';
if (results[0].label == "bark")
    img.src = 'cat.gif';
img1.src = 'dog1.jpg';
img2.src = 'bird1.webp';
if (results[0].label == "chirping")
    img.src = 'cat.gif';
img1.src = 'dog1.jpg';
img2.src = 'bird1.webp';
}
