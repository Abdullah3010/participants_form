<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="icon" href="images/stp_logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=David+Libre:wght@700&family=Sansita+Swashed:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Just an image -->
  <nav class="navbar navbar-expand-lg navbar-dark" >
  <div class="navbar-brand" >
      <a href="https://www.stp-org.com/"><img src="images/stp_logo.png"  class="d-inline-block align-top" alt="" loading="lazy"></a>
      Participants Form 21
    </div>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" >Know more </a>
        </li>
        </ul>
        </div>
    
  </nav>



<form action="back_end/info.php" method="POST">
    <section class="container-fluid sec1">
            <div class="form-group col-lg-12">
              <label for="InputName">Name</label>
              <input type="text" name="fname" class="form-control" id="InputName" aria-describedby="emailHelp">
              <small id="nam"></small>  
            </div>

            <div class="form-group col-lg-12">
                <label for="InputPhone">Phone Number</label>
                <input type="tel" name="phone" class="form-control" id="InputPhone" aria-describedby="emailHelp">
                <small id="phone"> </small>
            </div>


            <div class="form-group col-lg-12">
                <label for="InputEmail1">Email</label>
                <input type="email" name="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
                <small id="mail"></small>
                
            </div>

            <div class="form-group col-lg-12">
                <label for="inputAddress">Address</label>
                <input type="text" name="add" class="form-control" id="inputAddress" placeholder="">
                <small id="address"></small>
            </div>

          
            <div class="form-row">
            <div class="form-group col-lg-12">
            <label for="first">First Pref</label>
            <select class="form-control" id="first" name="pref1">
                
                <option value="0" selected>Choose...</option>
                <option disabled style="font-weight: bolder;">Engineering Workshops:</option>
                <option value="Internet of things IOT" class="eng">Internet of things IOT</option>
                <option value="Machine learning" class="eng"> Machine learning </option>
                <option value="Introduction to computer science and web development" class="eng"> Introduction to computer science and web development </option>
                <option value="Mobile development using flutter" class="eng"> Mobile development using flutter </option>
                <option disabled style="font-weight: bolder;">Management and Freelancing Workshops:</option>
                <option value="Branding" class="management"> Branding  </option>
                <option value="Digital Marketing" class="management"> Digital Marketing </option>
                <option value="Graphic Design" class="management"> Graphic Design  </option>
                <option value="Film Making" class="management"> Film Making  </option>
            </select>
            <small id="pref1"></small>
            </div>
          </div>

            <div class="form-row">
            <div class="form-group col-lg-12">
                <label for="second">Second Pref</label>
                <select class="form-control" id="second" name="pref2">
                    
                <option value="0" selected>Choose...</option>
                <option disabled style="font-weight: bolder;">Engineering Workshops:</option>
                <option value="Internet of things IOT" class="eng">Internet of things IOT</option>
                <option value="Machine learning" class="eng"> Machine learning </option>
                <option value="Introduction to computer science and web development" class="eng"> Introduction to computer science and web development </option>
                <option value="Mobile development using flutter" class="eng"> Mobile development using flutter </option>
                <option disabled style="font-weight: bolder;">Management and Freelancing Workshops:</option>
                <option value="Branding" class="management"> Branding  </option>
                <option value="Digital Marketing" class="management"> Digital Marketing </option>
                <option value="Graphic Design" class="management"> Graphic Design  </option>
                <option value="Film Making" class="management"> Film Making  </option>
                </select>
                <small id="pref2"></small>
            </div>
          </div>

            <small id="check"></small>
            
            <button type="button" class="btn btn-secondary" id="next">Next</button>
    </section>

    <section class="container-fluid sec2">
        <div class="form-row">
        <div class="form-group" id="uniDiv">
            <label for="university">University</label>
            <select id="university" class="form-control" name="university">
                <option value="0" selected>Choose...</option>
                <option value="Cairo University"> Cairo University</option>
                <option value="Ain Shams University">Ain Shams University.</option>
                <option value="Helwan University"> Helwan University</option>
                <option value="Banha University"> Banha University</option>
                <option value="Al-Azhar University"> Al-Azhar University</option>
                <option value="Al-Matarya University">Al-Matarya University</option>
                <option value="1"> Other:  </option>
            </select>
            <small id="uniSelect"></small>
          </div>
          <div class="form-group col-lg-8 col-md-8 col-sm-12">
            
            <input type="text" class="form-control top-m" id="uni" name="universityInput" placeholder="Please specify your University" >
         </div>
    </div>


         <div class="form-row">
          <div class="form-group" id="facultyDiv">
            <label for="faculty">Faculty</label>
            <select id="faculty" class="form-control" name="faculty">
              <option value="0" selected>Choose...</option>
              
                <option value="Faculty of Engineering"> Faculty of Engineering.</option>
                <option value="Faculty of Medicine">Faculty of Medicine.</option>
                <option value="Faculty of Computers and Information System"> Faculty of Computers and Information System. </option>
                <option value="Faculty of Pharmacology"> Faculty of Pharmacology.</option>
                <option value="Faculty of Agriculture"> Faculty of Agriculture.</option>
                <option value="Faculty of Science">Faculty of Science. </option>
                <option value="Faculty of Economics and Political Science"> Faculty of Economics and Political Science.</option>
                <option value="Faculty of Mass Communication"> Faculty of Mass Communication.     </option>
                <option value="Faculty of Archaeology"> Faculty of Archaeology.    </option>
                <option value="Faculty of Arts">Faculty of Arts. </option>
                <option value="Faculty of Commerce"> Faculty of Commerce. </option>
                <option value="Faculty of Specialized Education"> Faculty of Specialized Education. </option>
                <option value="Faculty of Nursing"> Faculty of Nursing.</option>
                <option value="Faculty of Law"> Faculty of Law. </option>
                <option value="Faculty of Physiotherapy">Faculty of Physiotherapy. </option>
                <option value="Faculty of Oral and Dental Medicine">Faculty of Oral and Dental Medicine. </option>
                <option value="Faculty of Veterinary Medicine">Faculty of Veterinary Medicine. </option>
                <option value="Faculty of Dar El-Ulum">Faculty of Dar El-Ulum. </option>
                <option value="Faculty of Kindergarten"> Faculty of Kindergarten.</option>
                <option value="Faculty of Alsun">Faculty of Alsun. </option>
                <option value="1"> Other:  </option>
            </select>
            <small id="facultySelect"></small>
          </div>
          <div class="form-group col-lg-8 col-md-8 col-sm-12">
            
            <input type="text" class="form-control top-m" id="facultyInput" name="facultyInput" placeholder="Please specify your Faculty">
         </div>
          
         </div>

          <div class="form-group col-lg-12">
            <label for="department">Department</label>
            <small id="departmentHelp" class="form-text text-muted">If your faculty has no departments, write "no department", if your
              department isn't declared write "undeclared".</small>
            <input type="text" class="form-control" name="department" id="Inputdepartment" placeholder="">
            
            <small id="department"></small>
        </div>

        <div class="form-group col-lg-12 ">
            <label for="year">Graduation Year </label>
            <select id="year" name="year" class="form-control">
              <option value="0" selected>Choose...</option>
              
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
            </select>
            <small id="yearSelect"></small>
          </div>

          <div class="form-group col-lg-12 ">
            <label for="formGroupExampleInput4">Reasons of Applying</label>
            <textarea type="text" name="reason" class="form-control" id="formGroupExampleInput4" placeholder="" style="height: 100px;"></textarea>
            <small id="reason"></small>
          </div>
<div id="over">
          <div class="form-group col-lg-12 ">
            <label for="Q1">What do you expect to learn?</label>
            <textarea name="q1" type="text" class="form-control" id="Q1" placeholder="" style="height: 100px;"></textarea>
            <small id="mangQ1"></small>

          </div>

 </div>   
        <div>
           <small id="submitCheck"></small>    
        </div>
           <button type="button" class="btn btn-secondary" id="back">Back</button>  
          <button type="button" class="btn btn-secondary" name="submit" id="submit">Submit</button>




    </section>
</form>   

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> 
    <script src="js/script.js"></script>    
</body>
</html>

