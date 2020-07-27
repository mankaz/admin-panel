<template>
  <div>
    <date-picker
      v-model="date"
      format="jYYYY/jMM/jDD"
      placeholder="YYYY/MM/DD"
      :editable="true"

      class="input is-medium"
    />
  </div>
</template>
<script>
  import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
  export default {
    data(){
      return {
        date: ''
      }
    },
    components: {
      datePicker: VuePersianDatetimePicker
    }
  }
</script>
