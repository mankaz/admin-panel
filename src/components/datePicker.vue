<template>
  <div>
    <date-picker
      v-model="date"
      format="jYYYY/jMM/jDD"
      input-class="date-input"
      name="my_date"
      placeholder="انتخاب زمان نمایش"
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
