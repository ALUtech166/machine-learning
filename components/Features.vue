<template>

  <section class="border-b">
    <div class="rounded-2xl">

      <div class="">
        <h1 class="text-center text-sm text-orange-400 font-bold leading-tight">
          Our Features
        </h1>
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-blue-600">
          Why Choose Us
        </h1>
        <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
        <p class="text-center text-md text-black mb-4">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
          Sed quis accumsan nisi Ut ut felis congue nisl <br>
          hendrerit commodo.

        </p>


        <div class="flex flex-col gap-2.5 lg:flex-row container items-center justify-center mb-4">

          <div class="">
          <div class="card w-96 sm:w-full bg-base-100 shadow-xl">
            <figure><img src="../assets/img/bg7.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title font*-bold text-blue-600">Procure spare parts</h2>
              <p class="text-black">If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button
          class="mx-auto lg:mx-0 bg-blue-800 text-white font-bold hover:bg-gray-400 rounded-full py-4 px-8  shadow-lg">
          Learn More
        </button>
              </div>
            </div>
          </div>
          </div>

          <div class="">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/img/bg3.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title font-bold text-blue-600">Conduct system repairs</h2>
              <p class="text-black">If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button
          class="mx-auto lg:mx-0 bg-blue-800 text-white font-bold hover:bg-gray-400 rounded-full py-4 px-8  shadow-lg">
          Learn More
        </button>
              </div>
            </div>
          </div>

          </div>

          <div class="">

          <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/img/hero1.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title text-blue-600">Optimize production</h2>
              <p class="text-black">If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button
          class="mx-auto lg:mx-0 bg-blue-800 text-white font-bold hover:bg-gray-400 rounded-full py-4 px-8  shadow-lg">
          Learn More
        </button>
              </div>
            </div>
          </div>


          </div>

        </div>
      </div>

    </div>
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="text-center text-sm text-orange-400 font-bold leading-tight">
          New problems need Creative and unusual Solutions
        </h1>
      <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-blue-600 ">
        Apply AI to solve Business Problems
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-12"></div>
      </div>
      <feature-right headline="The Problem"
        content="The problem we solve is simple but profound. Industrial scale businesses, like Minimex,
experience immense losses when their machines and systems fail without warning or
experience unscheduled downtimes. Moreover, it is challenging to detect and assess
faults in the system quickly, especially when they occur in segments that are remote or
difficult to reach by personnel.
">
        <img class="rounded-2xl shadow-lg" src="~assets/img/bg8.jpg" alt slot="svg" />
      </feature-right>
      <feature-left headline="The Solution"
        content="We are building the dotSave AI. With this, we will predict critical failures in your plant
before they happen to prevent unscheduled downtimes. We will also proactively detect
faults in your system as soon as they occur. All these give you a head start in mitigating
otherwise heavily consequential risks. As a result, you become proactive rather than
reactive.
We are able to do this by leveraging the power of Big Data, Machine Learning and
Domain Knowledge.">
        <img src="~assets/img/connected-world.svg?inline" alt slot="svg" />
      </feature-left>
       <feature-right headline="The Ask"
        content="As mentioned prior, we are keen on employing a local approach to our intervention. We
believe that consumer insight should play a significant role in influencing a product’s
dynamic. We are currently building the Minimum Viable Product iteration of the dotSaveAI. We would love to work with you, Minimex, to prove the concept of our product. By
engaging closely with you and your technical team, we will be able to more effectively
revolutionize your industrial productivity quicker.
">
        <img class="rounded-2xl shadow-lg" src="~assets/img/bg7.jpg" alt slot="svg" />
      </feature-right>
    </div>


  </section>
</template>

<script>
  import FeatureRight from '@/components/FeatureRight'
  import FeatureLeft from '@/components/FeatureLeft'

  export default {
    name: 'Features',
    components: {
      'feature-right': FeatureRight,
      'feature-left': FeatureLeft
  },
  data: () => ({
    show: false,
    show1: false,
    show2: false,
  }),
  }

</script>
