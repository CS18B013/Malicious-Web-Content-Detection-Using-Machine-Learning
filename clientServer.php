// Purpose - This file acts as a mediator between the client side popup.js and the server side test.py.
// It gets the HTML contents which acts as input to the suite of python files.

<?php
header("Access-Control-Allow-Origin: *");
$site=$_POST['url'];
$html = file_get_contents($site);
//echo $html;
$bytes=file_put_contents('markup.txt', $html);

// Can use this if your default interpreter is Python 2.x.
// Has some problem executing 'which python2'. So, absolute path is just simpler.
//$python_path=exec("which python 2>&1 ");
//$decision=exec("$python_path test.py $site 2>&1 ");

// Replace the path with the path of your python2.x installation.
<<<<<<< HEAD
$decision=exec("C:Python27 test.py $site 2>&1 ");
echo $decision;
?>



//  /Library/Frameworks/Python.framework/Versions/2.7/bin/python2
=======
$decision=exec("C:\Users\'\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.9 test.py $site 2>&1 ");
echo $decision;
?>

>>>>>>> 7cd38b040437511e18406ebf2009ab9a49212693
