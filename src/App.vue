<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html{
  scroll-behavior: smooth;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
  border:  10px solid white;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #FF4800; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FF4800; 
}
</style>
