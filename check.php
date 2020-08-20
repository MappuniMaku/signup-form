<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    foreach($_POST as $key => $value) { // $key - индекс элемента массива, $value - значение элемента массива
        echo "[{$key}] => {$value} <br/>";
    }
}
?>