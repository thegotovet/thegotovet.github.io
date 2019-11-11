<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
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
.slide-enter{
    opacity: 0;
}

.slide-enter-active{
    /* animation: slide_in .5s ease-out forwards; */
    transition: opacity .5s;
    opacity: 1;
}

.slide-leave{
    
}

.slide-leave-active{
    /* animation: slide_out 1s ease-out forwards; */
    transition: opacity 1s;
    opacity: 0;
}
</style>
