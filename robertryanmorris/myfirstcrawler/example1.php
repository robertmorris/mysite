<?php
include_once('simple_html_dom.php');
$target_url = $_GET['urlInput']; 
$html = new simple_html_dom();
$html->load_file($target_url);
foreach($html->find("a") as $link){
echo $link->href.'<br />';
}
?>