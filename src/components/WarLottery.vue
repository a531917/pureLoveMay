<template>
  <div id="lotterypage">
    <h1>国战参赛名单抽选</h1>
    <div class="listInput">
      <div class="pioneerInput">
        <h2>先锋名单</h2>
        <textarea v-model="pioneer" @input="updateNumberList('pioneerList')" placeholder="请输入先锋名单(每行一个)" ></textarea>
        <li v-for="pio in pioneerList" :key="pio">{{ pio }}</li>
        <button @click="drawNumberListFinal('pioneerListFinal', pioneerNum)" class="draw-btn">抽取先锋</button>
        <li v-for="pio in pioneerListFinal" :key="pio">{{ pio }}</li>
      </div>
      <div class="mainForceInput">
        <h2>中坚名单</h2>
        <textarea v-model="mainForce" @input="updateNumberList('mainForceList')" placeholder="请输入中坚名单(每行一个)" ></textarea>
        <li v-for="main in mainForceList" :key="main">{{ main }}</li>
        <button @click="drawNumberListFinal('mainForceListFinal', mainForceNum)" class="draw-btn">抽取中坚</button>
        <li v-for="main in mainForceListFinal" :key="main">{{ main }}</li>
      </div>
      <div class="commanderInput">
        <h2>大将名单</h2>
        <textarea v-model="commander" @input="updateNumberList('commanderList')" placeholder="请输入大将名单(每行一个)" ></textarea>
        <li v-for="com in commanderList" :key="com">{{ com }}</li>
        <button @click="drawNumberListFinal('commanderListFinal', commanderNum)" class="draw-btn">抽取大将</button>
        <li v-for="com in commanderListFinal" :key="com">{{ com }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      pioneer: '',
      mainForce: '',
      commander: '',
      // 参赛名单
      pioneerList: [],
      mainForceList: [],
      commanderList: [],
      // 出战名单
      pioneerListFinal: [],
      mainForceListFinal: [],
      commanderListFinal: [],
      // 抽选人数
      pioneerNum: 2,
      mainForceNum: 3,
      commanderNum: 1,
    };
  },
  mounted() {
    this.setPageTitle(); // 设置标题
  },
  methods: {
    // 设置标题
    setPageTitle() {
      document.title = '国战名单抽奖器'
    },
    // 三个名单均以换行来分隔
    updateNumberList(numberList) {
      this[numberList] = this[numberList.replace('List', '')].split("\n").filter(name => name.trim() !== '');
    },
    // 抽取出战名单
    drawNumberListFinal(numberListFinal, numWinners) {
      // 创建原始列表的副本
      const numberListCopy = [...this[numberListFinal.replace('Final', '')]];
      this[numberListFinal] = [];
      for (let index = 0; index < numWinners; index++) {
        const winnerIndex = Math.floor(Math.random() * numberListCopy.length);
        this[numberListFinal].push(numberListCopy[winnerIndex]);
        // 从参与者列表中移除已选中的
        numberListCopy.splice(winnerIndex, 1);
      }
    },
  },
};
</script>

<style>
#lotterypage{
  text-align: center;
  padding: 30px 100px;
}
textarea {
  resize: none;
  width: 300px;
  height: 300px;
}
.listInput{
  display: flex;
  justify-content: space-between;
}
.listInput>div{
  display: flex;
  flex-direction: column;
}
</style>