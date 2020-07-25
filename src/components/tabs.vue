<template>
  <section>
    <b-tabs size="is-small" :position="atRight ? 'is-right' : 'true'">
      <b-tab-item label="Pictures" icon="google-photos">
        <tagInput></tagInput>
      </b-tab-item>

      <b-tab-item label="Music" icon="library-music">
        What light is light, if Silvia be not seen? <br>
        What joy is joy, if Silvia be not by— <br>
        Unless it be to think that she is by <br>
        And feed upon the shadow of perfection? <br>
        Except I be by Silvia in the night, <br>
        There is no music in the nightingale.
      </b-tab-item>

      <b-tab-item label="متن" icon="video" v-model="activeTab">
            <div class="column is-12-desktop is-6-tablet">
              <div  class="box">
                <div class="columns is-gapless">
                  <div class="column">
                    <textDate></textDate>
                  </div>
                  <div class="column">
                    <titleText class="title-align"></titleText>
                  </div>
                </div>
                <template>
                  <ckeditor   :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </template>
              </div>
              <b-button type="is-info" icon-right="text-box-plus-outline" class="addtext-btn" expanded>تایید و افزودن متن </b-button>

              <p>name is: {{ editorData }}</p>
            </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
  import tagInput from "./tagInput";
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import '@ckeditor/ckeditor5-build-classic/build/translations/fa';
  import titleText from "./titleText";
  import textDate from "./textDate";
  export default {
    data() {
      return {
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
          language: 'fa',
          // The configuration of the editor.
        },
        activeTab: 0,
        expanded: false,
        atRight: true,
        size: true,
        type: null,
      }
    },
    components : {tagInput,titleText,textDate}
  }
</script>
