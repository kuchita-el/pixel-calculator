<script setup lang="ts">
import {createCanvasLine, decideLineArrangement} from "@kuchita-el/pixel-calculator-core";

  const canvasLength = ref<string>("0")
  const indicator = ref<string>("0")
  const result = ref(createCanvasLine(0));
  const canvasLengthError = ref<boolean>(false);
  const indicatorError = ref<boolean>(false);

  const onChangeIndicator = (value: string) => {
    if (!/^[0-9\s]+$/.test(value)) {
      indicatorError.value = true;
      result.value = [];
      return;
    }
    indicatorError.value = false;
  }
  const onChangeCanvasLength = (value: string) => {
    if (!/^[0-9]+$/.test(value)) {
      canvasLengthError.value = true;
      result.value = [];
      return;
    }
    canvasLengthError.value = false;
  }
  const calculate = () => {
    if (canvasLengthError.value || indicatorError.value) {
      return;
    }
    const indicatorValue = indicator.value
        .trim()
        .split(" ")
        .map(e => Number.parseInt(e));
    const length = Number.parseInt(canvasLength.value);
    result.value = decideLineArrangement(createCanvasLine(length), [indicatorValue[0], ...indicatorValue.slice(1)])
  }

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
                  <v-text-field v-model="canvasLength" label="キャンバスの長さ" hint="数値を入力してください。" :error="canvasLengthError" @update:model-value="onChangeCanvasLength" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field v-model="indicator" label="塗りつぶすピクセルの数" hint="スペース区切りの数列を入力してください。" :error="indicatorError" @update:model-value="onChangeIndicator" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn color="primary" @click="calculate">計算する</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <canvas-pixel v-for="(state, index) of result" :key="index" :state="state" style="width: 15px"/>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>
