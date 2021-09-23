<template>
    
<div class="container1">
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="../assets/logo1.png" alt=""/>
                        
                        
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="true">Ten Transportes</a>
                            </li>
                           
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Registrar Administrador</h3>
                    <div class="row register-form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nombres: *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Apellidos: *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Contraseña: *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control"  placeholder="Confirmar Contraseña: *" value="" />
                            </div>
                            <div class="form-group">
                                
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email: *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Celular: *" value="" />
                            </div>
                            <div class="form-group">
                                <select class="form-control">
                                    <option class="hidden"  selected disabled>Selecciona una pregunta de seguridad</option>
                                    <option>Cual es tu cumpleaños?</option>
                                    <option>Cual es tu color favorito?</option>
                                    <option>Cual es tu apodo?</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Ingresa tu respuesta *" value="" />
                            </div>
                            <input type="submit" class="btnRegister"  value="Registrar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>	
</div>	
</div>		                            

</template>
            
    
<style scoped>
.container1 {
    top:170px;
    position: relative;
}
.register{
    background: -webkit-linear-gradient(left, #d1d1d1, rgb(170, 171, 172));
    margin-top: 5%;
    padding: 3%;
     margin-bottom: 0%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 50%;
    margin-bottom: 5%;
    width: 60%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: rgba(4,73,112);
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
   
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 200px;
    color: rgba(237,105,17);
    border: 2px solid rgba(4,73,112);
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: rgba(4,73,112);
}
</style>
