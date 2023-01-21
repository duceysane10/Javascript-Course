<?php 
  
// From URL to get webpage contents. 

for($i=1; $i <= 114; $i++){


    
$url = "https://quranenc.com/en/api/translation/sura/somali_abduh/".$i; 
  
// Initialize a CURL session. 
$ch = curl_init();  
  
// Return Page contents. 
// curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
// curl_setopt($ch, CURLOPT_HEADER, true);
  
//grab URL and pass it to the variable. 
curl_setopt($ch, CURLOPT_URL, $url); 
  
$result = curl_exec($ch); 
  
$myfile = fopen($i.".json", "w") or die("Unable to open file!");

fwrite($myfile, $result);
// $txt = "Jane Doe\n";
// fwrite($myfile, $txt);
fclose($myfile);;



}


  
?> 