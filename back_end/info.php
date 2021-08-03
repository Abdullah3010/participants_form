<?php
 
  if(isset($_POST['submit'])){ 
   include ('conn.php'); 
   include ('mail.php');    
/////////////////////////////////////////////////

        $fullname = $_POST['fname']; 
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['add'];
        $pref1 = $_POST['pref1']; 
        $pref2 = $_POST['pref2']; 
        $university = $_POST['university'];
        $faculty = $_POST['faculty'];
        $department = $_POST['department'];
        $gradyear = $_POST['year'];
        $reason = $_POST['reason'];
        $q1 = $_POST['q1'] ;
        $mail->addAddress($email);

/////////////////////////////////////////////////

        if ($faculty == 1) {
            $faculty = $_POST['facultyInput'];
        }

        if ($university == 1) {
          $university = $_POST['universityInput'];
        }

       //create a prepared statment 
       $stmt_phone = $conn->prepare("SELECT phone FROM Participants WHERE phone= ? ");
       $stmt_email = $conn->prepare("SELECT email FROM Participants WHERE email= ? ");


       // check if the prepared statment work or not 
       if(! ($stmt_email && $stmt_phone))
           echo "<script> alert('There is some thing wrong,please try again.');
         window.location.href = 'https://www.stp-org.com/';</script>";
       else
           $stmt_email->bind_param("s" , $email);
           $stmt_email->execute();
           $result_email = mysqli_stmt_get_result($stmt_email);

           $stmt_phone->bind_param("s" , $phone);
           $stmt_phone->execute();
           $result_phone = mysqli_stmt_get_result($stmt_phone);

// check if phone number or email are already exist or not.
       if($result_phone ->num_rows != 0)
            echo "<script> alert('Oops! This phone already exists!');window.location.href = 'https://www.stp-org.com/'; </script>";
       elseif($result_email ->num_rows != 0)   
             echo "<script> alert('Oops! This email already exists!');window.location.href = 'https://www.stp-org.com/'; </script>";
       else if(!$mail->send()) {
        echo "<script> alert('Your email is incorrect'); window.location.href = '../index.php'; </script>";

       }
       else {

         $stmt_insert= $conn->prepare("INSERT into Participants(name,phone,email,address,pref1,pref2,university,faculty,department,gradyear,reason,q1) Values(?,?,?,?,?,?,?,?,?,?,?,?);");

         $stmt_insert->bind_param("sssssssssiss" , $fullname,$phone , $email,$address,$pref1,$pref2,$university,$faculty,$department,$gradyear,$reason,$q1);

         if (!$stmt_insert->execute())
            echo "<script> alert('Oops!, please check your info again'); window.location.href = '../index.php';";
         else 
            echo "<script> alert('Thank you $fullname,We have sent you an email with the test link.Kindly check your mail.'); /* window.location.href = 'https://www.stp-org.com/';*/</script>";   
       } 
        
        $conn->close();  
    }

 