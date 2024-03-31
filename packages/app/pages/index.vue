<script setup lang="ts">
  import {compressedArrangement} from "core/dist";

  const model = ref<string>("")
  const result = ref<string>("");
  const error = ref<boolean>(false);

  const onChange = (value: string) => {
    if (!/^[0-9\s]+$/.test(value)) {
      error.value = true;
      result.value = "";
      return;
    }
    error.value = false;
    const list = value
        .trim()
        .split(" ")
        .filter(e => e.length > 0)
        .map(e => Number.parseInt(e));

    result.value = compressedArrangement([list[0], ...list.slice(1)]).length + "";
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
                  <v-text-field v-model="model" label="塗りつぶすピクセルの数" hint="スペース区切りの数列を入力してください。" :error="error" @update:model-value="onChange" ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>ピクセル数:{{result}}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>
