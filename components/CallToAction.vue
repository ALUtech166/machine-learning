<template>
  <div class="bg-blue-800">
    <img src="~assets/img/wave-top.svg?inline" alt />
    <call-to-action-content />
  </div>
</template>

<script>
import CallToActionContent from '@/components/CallToActionContent'

export default {
  name: 'CallToAction',
  components: {
    'call-to-action-content': CallToActionContent
  }
}
</script>
