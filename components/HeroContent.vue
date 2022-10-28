<template>
  <div class="pt-24">
    <div class="container px-8 py-16 items-center mb-12">
      <!--Left Col-->
      <div class="w-full justify-center text-center md:text-left">
        <p class="uppercase tracking-loose w-full text-md">What business are you?</p>
        <h1 class="my-6 text-3xl lg:text-4xl font-bold leading-tight">
          Welcome to dotSave AI
        </h1>
        <p class="lg:text-xl text-md mb-4">
          We are a technology startup intent on <br>
          employing a global approach and a local <br>
          understanding to solving industrial problems. <br>
        </p>

        
       <div class="flex-row space-x-4">

         <button
          class="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          Contact Us
        </button>

        <button
          class="mx-auto lg:mx-0 bg-blue-800 text-white font-bold hover:bg-gray-400 rounded-full my-6 py-4 px-8  shadow-lg">
          Learn More
        </button>

        

       </div>
      </div>
      <!--Right Col-->
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroContent'
  }

</script>

<style>

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  background-color: linear-gradient(90deg, #001E6C 0%, #FFFFFF 100%);
  background-image: linear-gradient(to bottom, rgba(3, 9, 41, 0.52), rgba(12, 1, 10, 0.73)),url('../assets/img/bg3.jpg');
  opacity: 0.9;
  background-size: auto;




}

</style>
