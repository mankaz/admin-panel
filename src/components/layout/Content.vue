<template>
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

          <div class="column is-12-desktop is-12-tablet">
            <div class="box">
              <tabs></tabs>

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
      editorConfig: {

      },
    }

  },
    components : {collapse,titleText,textDate,tabs},

  }
</script>
