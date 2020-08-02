<template>

    <editor
      v-model="editorData"
      api-key="pedln6o1mujboalv12lv7k9ompxknzeetlwqzeyy1ktvq8yu"
      :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
    />
</template>
<script>
  import Editor from '@tinymce/tinymce-vue'

  export default {
    data() {
      return {
        // editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        // editorConfig: {
        //   language: 'fa',
        //   // The configuration of the editor.
        // },
      }
    },
    components: {
      'editor': Editor
    }
  }
</script>
