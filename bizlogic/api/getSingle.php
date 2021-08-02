<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');

    include '../config/config.php';
    include '../request/requests.php';

    $database=new DBConfig();
    $connection=$database->connect();
    $request=new Request($connection);

    $request->username=$_GET['username'];
    $request->password=$_GET['password'];

    $result=$request->getSingle();
    if(mysqli_num_rows($result)){
        $resultArray=array();
        $resultArray['data']=array();
        $row=mysqli_fetch_assoc($result);
        extract($row);
        $resultItem=array(
            'username'=>$username,
            'name'=>$name,
        );
        array_push($resultArray['data'],$resultItem);
        $jsonResult=json_encode($resultArray);
        echo $jsonResult;
    }
    else{
        $error=array('message'=>'User not found!');
        echo json_encode($error);
    }

    


?>