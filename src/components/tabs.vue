<template>
  <section>
    <b-tabs type="is-boxed" size="is-small" :position="atRight ? 'is-right' : 'true'">
      <b-tab-item label="آپلود فایل" icon="google-photos">

        <div class="columns is-mobile">
          <div class="column column is-three-fifths is-offset-one-fifth"><upload></upload></div>
        </div>
      </b-tab-item>
      <b-tab-item label="وضعیت" icon="google-photos">
        <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">
          <div class="column">
            <StatusVisibility class="categories-select"></StatusVisibility>
          </div>

        </div>
        <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">
          <div class="column">
          </div>

          <div class="column">
            <datepicker></datepicker>
          </div>
        </div>
        <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">

          <div class="column waiting">
            <div class="field">
              <b-checkbox>در انتظار بررسی  </b-checkbox>
            </div>
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="تگ ها" icon="google-photos">
        <tagInput></tagInput>
      </b-tab-item>

      <b-tab-item label="دسته" icon="library-music">
        <categoriesCheckbox></categoriesCheckbox>



        <div class="columns is-gapless">
          <div class="column">

          </div>
          <div class="column">
            <label class="label lable-group"><b-icon icon="expand-all-outline"></b-icon>افزودن گروه جدید  </label>
          </div>
        </div>

        <div class="columns is-gapless">
          <div class="column">
            <categoriesSelectList class="categories-select"></categoriesSelectList>
          </div>
          <div class="column">
            <categoriesName class="categories-name"></categoriesName>
          </div>
        </div>
        <b-button type="is-success" class="categoriesBtn">تعریف گروه </b-button>
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
  import categoriesName from "./categoriesName";
  import categoriesSelectList from "./categoriesSelectList"
  import categoriesCheckbox from "./categoriesCheckbox"
  import StatusVisibility from "./StatusVisibility"
  import datepicker from "./datePicker";
  import upload from "./upload";


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
    components : {tagInput,titleText,textDate,categoriesName,categoriesSelectList,categoriesCheckbox,StatusVisibility,datepicker,upload}
  }
</script>
