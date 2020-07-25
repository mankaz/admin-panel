<template>

  <div class="is-variable is-0">

    <div class="column  is-10-desktop is-9-tablet  is-12-mobile">

      <div class="p-1">

        <div class="columns is-variable">

          <div class="column is-12-desktop is-6-tablet">
            <div class="box">
              <tabs></tabs>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>


<script>
  import titleText from "../titleText";
  import collapse from "../collapse";
  import textDate from "../textDate";
  import tabs from "../tabs";

  export default {
    data(){
      return{
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
          language: 'fa',
          // The configuration of the editor.
        },
      }

    },
    components : {collapse,titleText,textDate,tabs},

  }
</script>
