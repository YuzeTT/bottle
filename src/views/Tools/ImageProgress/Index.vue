<script setup>
import { ref } from 'vue';
import { ChevronForward } from '@vicons/ionicons5';
import Card from '../../../components/Card.vue';
import TagText from '../../../components/TagText.vue';

const customValue = ref([
  {
    key: '慌热暑假',
    value: [20,100],
  }
]);

const isShowTotal = ref(true);

const onCreate = () => {
  return {
    key: '',
    value: [null,null],
  };
}

const sum = () => {
  let total = 0;
  customValue.value.forEach((item) => {
    total += item.value[1];
  });
  return total;
}

const OkNumber = () => {
  let total = 0;
  customValue.value.forEach((item) => {
    total += item.value[0];
  });
  return total;
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
            </n-grid>
          </div>
        </template>
      </n-dynamic-input>
      <div style="margin-top: 15px;">
        <n-checkbox v-model:checked="isShowTotal">
          显示总计
        </n-checkbox>
      </div>
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
      <pre>{{ JSON.stringify(customValue, null, 2) }}</pre>
    </Card>
    <div style="margin: 15px 0px"></div>
    <Card title="进度">
      <div>
        <!-- <n-card
          title="统计"
          embedded
          :bordered="false"
          style="margin-bottom: 15px;"
        >
          
        </n-card> -->
        <n-grid x-gap="12" :cols="2" style="text-align: center;margin-bottom: 15px;">
          <n-grid-item style="margin: 0 auto;padding-top: 10px;">
            <n-statistic label="总计需要完成">
              {{ sum() }}
            </n-statistic>
            <br>
            <n-statistic label="总计已完成">
              {{ OkNumber() }}
            </n-statistic>
          </n-grid-item>
          <n-grid-item style="margin: 0 auto;">
            <n-progress type="circle" :status="(OkNumber()/sum()*100).toFixed(0)===100?'success':flase" :percentage="(OkNumber()/sum()*100).toFixed(0)" />
            <br>
            <TagText style="margin-top: 10px;font-size: 1.4rem;">已完成</TagText>
          </n-grid-item>
        </n-grid>
      </div>
      <div class="progress" v-for="(item, i) in customValue" :key="i">
        <TagText style="margin-right: 5px">{{ item.key }}</TagText>
        <n-progress type="line" :percentage="(item.value[0]/item.value[1]*100).toFixed(0)" :height="12" />
      </div>
    </Card>
  </div>
</template>

<style scoped>
.progress {
  display: flex;
  align-items: center;
}
</style>