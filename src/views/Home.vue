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
          
         <a class="nav-link" href="/">Iniciar Sesion</a>
        </v-btn>
  
        
  
        <v-btn text color="rgba(4, 73, 112)">
        <a class="nav-link" href="/About">Equipo</a>
        </v-btn>
  
       
  
       
      </v-toolbar-items>
  
      
    </v-toolbar>
     
    
    <hello-world></hello-world>

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
import HelloWorld from '../components/HelloWorld.vue'

export default {
    components: { HelloWorld},
   
        
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
</style>