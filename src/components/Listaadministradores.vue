<template>
   <div> 

<div class="container2">
           
            <div class="row mt-10">
              <div class="col-8 col-sm-5 col-md-4 col-lg-3">
                <div class="our-team">
                  <div class="picture">
                    <img class="img-fluid" src="../assets/perfil.png">
                  </div>
                  <div class="team-content">
                    <h3 class="name">Nombre</h3>
                    <h4 class="title">Cargo</h4>
                  </div>
                  
                
              </div>
            </div>
            </div>
        
           
            
        </div>
      
    

<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                          <h2>Lista Administradores</h2>
                    </div>
                    
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>						
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Celular</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td></td>
                        <td>
                           
                           
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td></td>
                        <td>
                          
                           
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td></td>
                        <td>
                           
                           
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td></td>
                        <td>
                           
                           
                        </td>
                        <tr>
                          <td>5</td>
                          <td> </td>
                          <td></td>                        
                          <td></td>
                          <td></td>
                          <td>
                             
                             
                          </td>
                    </tr>
                  
                    
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item "><a href="#" class="page-link">3</a></li>
                    
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</div> 

  
     
       

</div>
 
</template>

<script>


export default {
data: () => ({
    show: true,
  })
}






</script>

<style>

body {
   
  
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
}
.table-responsive {
    margin:0px 0;
}
.table-wrapper {
    margin: 5px;
    min-width: 1000px;
    background: rgb(226, 223, 223);
    padding: 20px 25px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
   
    left: 280px;
  position: absolute;
    top: 100px;
}
.table-title {
    padding-bottom: 15px;
    background: #044970;
    color: #fff;
    padding: 16px 30px;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}
.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}
.table-title .btn {
    color: #566787;
    float: right;
    font-size: 13px;
    background: #fff;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn:hover, .table-title .btn:focus {
    color: #566787;
    background: #f2f2f2;
}
.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}
.table-title .btn span {
    float: left;
    margin-top: 2px;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}
table.table tr th:first-child {
    width: 60px;
}
table.table tr th:last-child {
    width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}	
table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
table.table td a:hover {
    color: #044970;
}
table.table td a.settings {
    color: #044970;
}
table.table td a.delete {
    color: #F44336;
}
table.table td i {
    font-size: 19px;
}
table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
}
.status {
    font-size: 30px;
    margin: 2px 2px 0 0;
    display: inline-block;
    vertical-align: middle;
    line-height: 10px;
}
.text-success {
    color: #10c469;
}
.text-info {
    color: #62c9e8;
}
.text-warning {
    color: #FFC107;
}
.text-danger {
    color: #ff5b5b;
}
.pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}
.pagination li a:hover {
    color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
    background: #044970;
}
.pagination li.active a:hover {        
    background: #044970;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}


    
    
   
  



.container2{
    left: 15px;
      position: relative;
      top: 110px;
      width: 1050px;
    
    
    }
    .our-team {
      padding: 30px 0 40px;
      
      background-color: #f7f5ec;
      text-align: center;
      overflow: hidden;
      position: relative;
    }
    
    .our-team .picture {
      display: inline-block;
      height: 130px;
      width: 130px;
      margin-bottom: 50px;
      z-index: 1;
      position: relative;
    }
    
    .our-team .picture::before {
      content: "";
      width: 100%;
      height: 0;
      border-radius: 50%;
      background-color: #044970;
      position: absolute;
      bottom: 135%;
      right: 0;
      left: 0;
      opacity: 0.9;
      transform: scale(3);
      transition: all 0.3s linear 0s;
    }
    
    .our-team:hover .picture::before {
      height: 100%;
    }
    
    .our-team .picture::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #ED6911;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    
    .our-team .picture img {
      width: 100%;
      height: auto;
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.9s ease 0s;
    }
    
    .our-team:hover .picture img {
      box-shadow: 0 0 0 14px #f7f5ec;
      transform: scale(0.7);
    }
    
    .our-team .title {
      display: block;
      font-size: 15px;
      color: #044970;
      text-transform: capitalize;
    }
    
    .name  {
    color: #044970;
    }
    

</style>