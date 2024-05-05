<script setup lang="ts">
import {createCanvasLine, decideLineArrangement} from "@kuchita-el/pixel-calculator-core";

  const result = ref(createCanvasLine(0));

  const { defineField, handleSubmit } = useCalculatorForm();

  const [canvasLengthValue, canvasLengthAttrs] = defineField("canvasLength", {props: state => ({ errorMessages: state.errors })})
  const [indicatorValue, indicatorAttrs] = defineField("indicator", {props: state => ({ errorMessages: state.errors })})

  const calculate = handleSubmit(values => {
    result.value = decideLineArrangement(createCanvasLine(values.canvasLength), [values.indicator[0], ...values.indicator.slice(1)]);
  })

</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-card title="ピクセル計算機">
            <v-card-text>
              <v-row>
                <v-col>
                  <p>
                    イラストロジックのピクセル数を計算します。
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field v-model="canvasLengthValue" label="キャンバスの長さ" hint="数値を入力してください。" v-bind="canvasLengthAttrs" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field v-model="indicatorValue" label="塗りつぶすピクセルの数" hint="スペース区切りの数列を入力してください。" v-bind="indicatorAttrs" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn color="primary" @click="calculate">計算する</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex">
                  <canvas-pixel v-for="(state, index) of result" :key="index" :state="state" style="width: 15px"/>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>
