<template>
  <div class="is-variable is-0">
    <div class="column  is-10-desktop is-9-tablet  is-12-mobile">
      <div class="p-1">

        <!--          <div class="columns is-variable is-desktop page-title">-->
        <!--            <div class="column">-->
        <!--              <h1 class="title">-->
        <!--                داشبورد-->
        <!--              </h1>-->
        <!--            </div>-->
        <!--          </div>-->

        <!--          <div class="columns  is-variable is-desktop">-->
        <!--            <div class="column">-->
        <!--              <div class="card has-background-primary has-text-white">-->
        <!--                <div class="card-header">-->
        <!--                  <div class="card-header-title has-text-white">-->
        <!--                    جمع فروش-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--                <div class="card-content">-->
        <!--                  <p class="is-size-4">56,590</p>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="column">-->
        <!--              <div class="card has-background-warning has-text-black">-->
        <!--                <div class="card-header">-->
        <!--                  <div class="card-header-title has-text-black is-uppercase">-->
        <!--                    درآمد-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--                <div class="card-content">-->
        <!--                  <p class="is-size-4">55%</p>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="column">-->
        <!--              <div class="card has-background-info has-text-white">-->
        <!--                <div class="card-header">-->
        <!--                  <div class="card-header-title has-text-white is-uppercase">-->
        <!--                    بازخورد-->
        <!--                  </div>-->
        <!--                </div>-->
        <!--                <div class="card-content">-->
        <!--                  <p class="is-size-4">78 %</p>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="column">-->
        <!--              <div class="card has-background-danger has-text-white">-->
        <!--                <div class="card-header">-->
        <!--                  <div class="card-header-title has-text-white">سفارشات</div>-->
        <!--                </div>-->
        <!--                <div class="card-content">-->
        <!--                  <p class="is-size-4">425k</p>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
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
              <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            </template>
          </div>
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
