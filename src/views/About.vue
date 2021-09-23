<template>

 <div style="background-color:antiquewhite;  height: 970px;">
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
          
         <a class="nav-link" href="/">Iniciar Sesion</a>
        </v-btn>
  
        
  
        <v-btn text color="rgba(4, 73, 112)">
        <a class="nav-link" href="/About">Equipo</a>
        </v-btn>
  
       
       
  
       
      </v-toolbar-items>
  
      
    </v-toolbar>
    <equipo></equipo>

    <v-footer class="footer1"
    height="60px"
    width="1000px"
    
      
    >
     
        
                 
     
  
        <v-card-text class="py-2 white--text text-center">
          <p style="color:white">&copy; TEN TRANSPORTES. All rights reserved - {{ new Date().getFullYear() }}</p>
        </v-card-text>
      
    </v-footer>
     </div>
    </template>

<script>
import Equipo from '../components/Equipo.vue'

export default {
    components: { Equipo},
   
        
}
</script>

<style scoped>
#menu-fixed {
	position:fixed;
	z-index:1000;
	top:0;
	/*max-width:1000px;*/
	left:0;
	width:800%;
  
	box-shadow:0px 4px 3px rgba(0,0,0,.5);
}

.about {
  display: flex;

justify-content: center
}

.nav-link{
  color: #F25116  ;
  padding-left: 0px;
  padding-right: 0px;
}

.nav-link:hover{
 color: rgb(4, 73, 112);
}

.footer1 {
   position: relative !important; 
   bottom: 0;
   background-color: #444343;
   width: 1400px !important;
   top:174px;
 
}


</style>