<template>

  <div>
    <v-toolbar id="menu-fixed"
      
      
    >
      <v-img
  
  max-height="60"
  max-width="60"
  src="../assets/logo1.png"
></v-img>
  
      
  
    
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-sm-and-down">
        
      <v-btn text color="rgba(4, 73, 112)">
        <a class="nav-link" href="/Home">Cerrar Sesion</a>
        </v-btn>
  
       
  
       
      </v-toolbar-items>
  
      
    </v-toolbar>
     
     <div id="inspire">
    
      <v-container class="cont" >
        <div class="capa altura-prueba">
            <div class="row">
                
                <div class="col-12 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-4">Tipos de Usuario</h5>
                            <p>Esta página es solo para permitirle ver toda la interfaz de la página, no va a estar en el proyecto final</p>        

                            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" onclick="location.href='/Superusuario'">Super administrador</button>
                            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" onclick="location.href='/Administrador'">Administrador</button>

                            <button class="w-100 btn btn-lg btn-primary" type="submit" onclick="location.href='/Usuarioconductor'">Conductor</button>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    
</v-container>

     </div>


    <v-footer class="footer"
    height="60px"
    width="1000px"
      color="#444343"
    >
     
        
                 
     
  
        <v-card-text class="py-2 white--text text-center">
          <p style="color:white"> {{ new Date().getFullYear() }} — TEN TRANSPORTES. All rights reserved</p>
        </v-card-text>
      
    </v-footer>
    </div>
</template>

<script>

   
        

</script>

<style scoped>
#menu-fixed {
	position:fixed;
	z-index:1000;
	top:0;
	/*max-width:1000px;*/
	left:0;
	width:800%;
  
	box-shadow:0px 4px 4px rgb(4, 73, 112);
}

.nav-link{
  color: #F25116  ;
  padding-left: 0px;
  padding-right: 0px;
}

.nav-link:hover{
 color: rgb(4, 73, 112);
}

a {
  font: Arial;
  font-style:inherit;
  color:rgb(4, 73, 112)
}

.footer {
   position: relative !important; 
   bottom: 0px;
   background-color: #444343;
   width: 1400px !important;
   top:0px;

}
.altura-prueba{
    padding: 85px  !important;
}

.cont{
  padding-top: 90px;
  position: relative;
  left: 440px;
  width: 950px;
}

#inspire{
  
  background-image: linear-gradient(
      rgba(7, 7, 7, 0.5), 
      rgba(4, 73, 112, 0.60)
    ),
 url("../assets/fondo.png"); 

 
background-size: cover;
   
}



.btn-primary:hover{
    color: #075473 !important;
    background-color: #ffffff;
    border-color: #075473;
}

.tabla-rev tbody tr:hover{
    cursor: pointer;
}

.page-link{
    color: #075473;
    border-color: #075473;
}
.page-item.active .page-link{
    background-color: #075473;
    border-color: #075473;
}

.color-hint{
    color: #075473;
}

.btn-primary{
    background-color: #075473;
    border-color: #075473;
    color: #ffffff !important;
}
</style>