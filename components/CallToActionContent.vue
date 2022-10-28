<template>
  <section class="container mx-auto text-center py-6 mb-12 bg-blue-800">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
    >
      Contact Us
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto bg-blue-800 w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>

    <h3 class="my-4 text-md leading-tight">
      Main Hero Message to sell yourself!
    </h3>

    <form class="bg-white justify-center p-8 m-8 rounded-2xl">
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
   <v-textarea
          v-model="message"
          label="Message"
          value="Write a message"
          required
        ></v-textarea>
 
    <v-btn
      class="bg-blue-600 text-white"
      @click="submit"
    >
      Send Message
    </v-btn>
  </form>

  </section>
</template>


<script>
  export default {
    name: 'CallToActionContent',
   

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
