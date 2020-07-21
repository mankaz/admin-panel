<template>

  <div class="is-variable is-0">

    <div class="column  is-10-desktop is-9-tablet  is-12-mobile">

      <div class="p-1">

        <div class="columns is-variable">
          <div class="column is-4-desktop is-6-tablet setting-menu">
            <article class="panel is-success panel-body-color">
              <p class="panel-heading panel-heading-align">
                تنظیمات متن
              </p>
              <collapse></collapse>
            </article>
          </div>

          <div class="column is-8-desktop is-6-tablet">
            <div  class="box">
              <titleText class="title-align"></titleText>
              <template>
                <ckeditor   :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
              </template>
            </div>
            <b-button type="is-info" icon-right="text-box-plus-outline" class="addtext-btn" expanded>تایید و افزودن متن </b-button>

            <p>name is: {{ editorData }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>


<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import '@ckeditor/ckeditor5-build-classic/build/translations/fa';

  import titleText from "../titleText";
  import collapse from "../collapse";

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

    components : {collapse,titleText},
  }
</script>
