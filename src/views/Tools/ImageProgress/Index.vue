<script setup>
import { ref, reactive } from 'vue';
import { ChevronForward, CheckmarkCircleOutline, TimeOutline, Reload, StatsChart, SettingsSharp } from '@vicons/ionicons5';
import Card from '../../../components/Card.vue';
import TagText from '../../../components/TagText.vue';

const customValue = ref([
  {
    key: '',
    value: [null,null],
  }
]);

const card = reactive({
  title: '进度统计',
  isShowTotal: true,
  isShowEdit: true,
});

const onCreate = () => {
  return {
    key: '',
    value: [null,null],
  };
}

function onGenerate() {
  card.isShowEdit = false
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
    <Card title="条目配置" v-show="card.isShowEdit">
      <template #icon>
        <n-icon style="vertical-align: -10%;">
          <SettingsSharp />
        </n-icon>
      </template>
      <div class="from">
        <TagText style="margin-right: 5px;">标题</TagText>
        <n-input v-model:value="card.title" type="text" placeholder="基本的 Input" />
      </div>
      <n-divider >
        统计条目
      </n-divider>
      <n-dynamic-input v-model:value="customValue" :on-create="onCreate" show-sort-button style="margin-top: 10px;">
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
      <n-divider/>
      <div style="margin-top: 15px;">
        <n-checkbox v-model:checked="card.isShowTotal">
          显示总计
        </n-checkbox>
      </div>
      <div style="margin-top: 15px;">
        <n-button type="primary" style="width: 100%;" icon-placement="right" @click="onGenerate()">
          生成
          <template #icon>
            <n-icon>
              <ChevronForward />
            </n-icon>
          </template>
        </n-button>
      </div>
      <div style="margin-top: 10px;color: #767c82;text-align: center;">点击统计卡片的 <b>刷新按钮</b> 即可再次打开此卡片</div>
    </Card>
    <n-divider v-show="card.isShowEdit">
      预览
    </n-divider>
    <Card :title="card.title">
      <template v-slot:icon>
        <n-icon style="vertical-align: -10%;">
          <StatsChart/>
        </n-icon>
      </template>
      <template v-slot:right>
        <n-button circle style="font-size: 24px" @click="card.isShowEdit = true">
          <n-icon>
            <Reload />
          </n-icon>
        </n-button>
      </template>
      <div v-if="card.isShowTotal" style="margin-bottom: 15px;">
        <n-grid x-gap="12" :cols="2" style="text-align: center;">
          <n-grid-item style="margin: 0 auto;padding-top: 10px;">
            <n-statistic label="已完成 / 总计">
              <span style="color: #18a058">
                {{ OkNumber() }} / {{ sum() }}
              </span>
              <template #prefix>
                <n-icon color="#18a058">
                  <CheckmarkCircleOutline />
                </n-icon>
              </template>
            </n-statistic>
            <br>
            <n-statistic label="待完成">
              <span style="color: #2080f0">
                {{ sum() - OkNumber() >= 0 ? sum() - OkNumber() : '0' }}
              </span>
              <template #prefix>
                <n-icon color="#2080f0">
                  <TimeOutline />
                </n-icon>
              </template>
            </n-statistic>
          </n-grid-item>
          <n-grid-item style="margin: 0 auto;">
            <n-progress type="circle" :status="(OkNumber()/sum()*100)>=100?'success':'default'" :percentage="parseInt((OkNumber()/sum()*100))?parseInt((OkNumber()/sum()*100)):0" />
            <br>
            <TagText style="margin-top: 10px;font-size: 1.4rem;">已完成</TagText>
          </n-grid-item>
        </n-grid>
      </div>
      <n-divider v-if="card.isShowTotal">
        详细数据
      </n-divider>
      <table style="width: 100%;border: 0;">
        <tr v-for="(item, i) in customValue" :key="i">
          <td>
            <TagText style="margin-right: 5px;vertical-align: -50%;" font-size="1rem">{{ item.key?item.key:'未填写' }}</TagText>
          </td>
          <td style="width: 100%;">
            <n-progress type="line" :percentage="parseInt((item.value[0]/item.value[1]*100))?parseInt((item.value[0]/item.value[1]*100)):0" :height="12" />
          </td>
        </tr>
      </table>
    </Card>
  </div>
</template>

<style scoped>
.from {
  display: flex;
  align-items: center;
}

.progress {
  display: flex;
  align-items: center;
}
</style>