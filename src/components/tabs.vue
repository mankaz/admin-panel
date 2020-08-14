<template>
  <section>
    <b-tabs type="is-boxed" size="is-small" :position="atRight ? 'is-right' : 'true'">
      <b-tab-item label="فایل" icon="file-upload-outline">
        <div class="column">
          <label class="label lable-group"><b-icon icon="file-upload-outline"></b-icon>بارگذاری فایل</label>
        </div>
        <div class="columns is-centered">
          <div class="column has-text-centered is-12">
            <upload></upload>
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="زمانبندی"  icon="calendar-clock">
        <div class="column">
          <label class="label lable-group"><b-icon icon="calendar-clock"></b-icon>تعیین زمان نمایش</label>
        </div>
            <div class="columns is-centered">
              <div class="column has-text-centered is-5">
                <datePicker></datePicker>
              </div>
              <div class="column has-text-centered is-5">
                <datePicker></datePicker>
              </div>
            </div>
        <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">
          <div class="column">
            <StatusVisibility class="categories-select"></StatusVisibility>
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="برچسب ها" icon="tag-outline">
        <label class="label lable-group"><b-icon icon="tag-outline"></b-icon>درج برچسب در متن(تأثیر در سئوی سایت)</label>
        <tagInput></tagInput>
      </b-tab-item>
      <b-tab-item label="دسته" icon="select-group">
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
            <div class="column is-12-desktop is-12-tablet is-10-mobile">
              <div  class="box">
                <div class="columns">
                  <div class="column">
                    <datePicker></datePicker>
                  </div>
                  <div class="column">
                    <titleText class="title-align"></titleText>
                  </div>
                </div>
<!--                <template>-->
<!--                  <ckeditor   :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>-->
<!--                </template>-->

                <template>

                  <editor
                    v-model="editorData"
                    api-key="pedln6o1mujboalv12lv7k9ompxknzeetlwqzeyy1ktvq8yu"

                    :init="{
                     height: 500,
                     menubar: false,
                     directionality : 'rtl',
                     plugins: [
                     'advlist autolink lists link image charmap print preview anchor',
                     'searchreplace visualblocks code fullscreen',
                     'insertdatetime media table paste code help wordcount',

                     ],
                     toolbar:
                       'undo redo | formatselect | bold italic backcolor  image| \
                       alignleft aligncenter alignright alignjustify | \
                       bullist numlist outdent indent | removeformat | help'
                      }"
                  />
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
  import titleText from "./titleText";
  import textDate from "./textDate";
  import categoriesName from "./categoriesName";
  import categoriesSelectList from "./categoriesSelectList"
  import categoriesCheckbox from "./categoriesCheckbox"
  import StatusVisibility from "./StatusVisibility"
  import datePicker from "./datePicker";
  import upload from "./upload";
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
        activeTab: 0,
        expanded: false,
        atRight: true,
        size: true,
        type: null,
      }
    },
    components : {Editor,tagInput,titleText,textDate,categoriesName,categoriesSelectList,categoriesCheckbox,StatusVisibility,datePicker,upload}
  }
</script>
