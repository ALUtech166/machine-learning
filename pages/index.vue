<template>
  <div>
    <hero />
    <features />
    <teasers />
    <prices />
    <call-to-action />

    <div class="mb-12 lg:mt-8 p-6 lg:p-16 bg-blue-800">
      <div class="absolute -top-12 w-full flex justify-center">
        <h2
          class="py-4 duration-500 md:px-16 px-8 md:px-12 lg:px-32 text-center rounded-lg shadow-lg bg-white font-bold text-blue-600 text-2xl lg:text-4xl mb-4">
           Our Partners</h2>
      </div>
     

      <p class="text-white text-center mb-8 text-md">
        To Achieve This, We Are Partnering With A Number Of Local Stakeholders. <br>
        Join Us To Actively Be A Part of The Fourth Industrial Revolution!</p>

     
      <div class="flex flex-nowrap overflow-auto px-6 ml-56 justify-center space-x-8">
        <div class="flex flex-col space-x-4 md:flex-row md:space-x-8 text-center">

          <div class="bg-white px-6 py-2 rounded mx-4">
            <h2 class="text-xl font-medium text-green-800 whitespace-nowrap">TassiGroup</h2>
          </div>
          <div class="bg-white px-6 py-2 rounded mx-4">
            <h2 class="text-xl font-medium text-green-800 whitespace-nowrap">Sol-Angelaire</h2>
          </div>
          <div class="bg-white px-6 py-2 rounded mx-4">
            <h2 class="text-xl font-medium text-green-800 whitespace-nowrap">Christapoutou </h2>
          </div>
          <div class="bg-white px-6 py-2 rounded mx-4">
            <h2 class="text-xl font-medium text-green-800 whitespace-nowrap">TassiGroup</h2>
          </div>
          <div class="bg-white px-6 py-2 rounded mx-4">
            <h2 class="text-xl font-medium text-green-800 whitespace-nowrap">Sol-Angelaire</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction
   
  }
}
</script>
