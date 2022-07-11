<script setup>
import { ref } from 'vue';
import { ChevronForward } from '@vicons/ionicons5';
import Card from '../../../components/Card.vue';
import TagText from '../../../components/TagText.vue';

const value = ref([
  {
    key: '',
    value: '',
  }
]);

const customValue = ref([
  {
    key: '',
    value: [null,null],
  }
]);

const onCreate = () => {
  return {
    key: '',
    value: [null,null],
  };
}
</script>

<template>
  <div>
    <Card title="条目配置">
      <n-dynamic-input v-model:value="customValue" :on-create="onCreate" show-sort-button>
        <template #create-button-default>
          点击新增
        </template>
        <template #default="{ value }">
          <div style="display: flex;width: 100%;align-items: center;justify-content: center;">
            <n-grid cols="2" item-responsive responsive="screen" :x-gap="8" :y-gap="8">
              <n-grid-item span="2 m:2 l:1">
                <n-input
                  v-model:value="value.key"
                  type="text"
                  placeholder="条目名称"
                />
              </n-grid-item>
              <!-- <n-grid-item span="2 m:2 l:1">
                <n-input
                  v-model:value="value.value"
                  :placeholder="['完成', '总量']"
                  pair
                  separator="/"
                />
              </n-grid-item> -->
              <n-grid-item span="2 m:2 l:1">
                <n-input-group style="display: flex;align-items: center;">
                  <n-input-number
                    :show-button="false"
                    v-model:value="value.value[0]"
                    :placeholder="'完成'"
                    pair
                    separator="/"
                  />
                  <span style="padding: 0 5px;color: #657786;">/</span>
                  <n-input-number
                    :show-button="false"
                    v-model:value="value.value[1]"
                    :placeholder="'总量'"
                    pair
                    separator="/"
                  />
                </n-input-group>
              </n-grid-item>
              <!-- <n-grid-item span="2 m:2 l:1">
                <n-input-number
                  v-model:value="value.value2"
                />
              </n-grid-item> -->
            </n-grid>
          </div>
        </template>
      </n-dynamic-input>
      <div style="margin-top: 15px;">
        <n-button type="primary" style="width: 100%;" icon-placement="right">
          生成
          <template #icon>
            <n-icon>
              <ChevronForward />
            </n-icon>
          </template>
        </n-button>
      </div>
      <!-- <pre>{{ JSON.stringify(customValue, null, 2) }}</pre> -->
    </Card>
    <!-- <Card>
      <n-dynamic-input
        v-model:value="value"
        preset="pair"
        key-placeholder="条目名称"
        value-placeholder="条目值"
        :min="1"
      />
      <pre>{{ JSON.stringify(value, null, 2) }}</pre>
    </Card> -->
  </div>
</template>

<style scoped>

</style>