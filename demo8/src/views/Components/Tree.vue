<template>
<div class="tree">
  <div>
      <a-switch
      un-checked-children="showLine"
      v-model="showLine"
      ></a-switch>
     <a-tree 
     checkable
     v-model="checkedKeys"
     :show-line="showLine" 
     show-icon 
     default-expand-all 
     :default-selected-keys="['0-0-0']">
         <a-tree-node key="0-0" title= "TreeSelect">
             <a-icon slot="icon" type="smile"></a-icon>
             <a-tree-node key="0-0-0" title="treeSelect">
                 <a-icon slot="icon" type="smile"></a-icon>
             </a-tree-node>
             <a-tree-node key="0-0-1" title="parent 1-1">
                 <a-icon slot="icon" type="smile"></a-icon>
             </a-tree-node>
         </a-tree-node>
         <a-tree-node key="0-1" title="parent 2">
             <a-icon slot="icon" type="smile"></a-icon>
             <a-tree-node key="0-1-0" title="parent 2-0">
                 <a-icon slot="icon" type="smile"></a-icon>
             </a-tree-node>
             <a-tree-node key="0-1-1" title="parent 2-1">
                 <a-icon slot="icon" type="smile"></a-icon>
             </a-tree-node>
         </a-tree-node>
         <a-tree-node key="0-2" title="parent 3">
             <a-icon slot="icon" type="smile"></a-icon>
             <a-tree-node key="0-2-0" title="parent 3-0">
                 <a-icon slot="icon" type="smile"></a-icon>
             </a-tree-node>
             <a-tree-node disabled key="0-2-1" title="parent 3-1">
                 <a-icon slot="icon" type="smile"></a-icon>
             </a-tree-node>
         </a-tree-node>
     </a-tree> 
  </div> 
  <div>
    <a-tree-select
    v-model="value"
    show-search
    style="width: 300px"
    :tree-data="treeData"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    tree-checkable
    placeholder="Tree Select"
    allow-clear
    tree-default-expand-all
  />
  <a-transfer
    style="margin-top:10px"
    :data-source="mockData"
    show-search
    :list-style="{
      width: '150px',
      height: '300px',
    }"
    :operations="['to right', 'to left']"
    :target-keys="targetKeys"
    :render="item => `${item.title}-${item.description}`"
    @change="handleChange"
  >
    <a-button
      slot="footer"
      size="small"
      style="float:right;margin: 5px"
      @click="getMock"
    >
      reload
    </a-button>
    <span slot="notFoundContent">
      没数据
    </span>
  </a-transfer>
  </div>  
  <div>
      <a-upload></a-upload>
  </div>
</div>
  
</template>

<script>
const treeData=[
    {
        title:'Node1',
        value:'0-0',
        key:'0-0',
        children:[
            {title:'Child Node1',
             value:'0-0-0',
             key:'0-0-0',
            },
            {
                title:'Child Node2',
                value:'0-0-1',
                key:'0-0-2,'
            },
        ]
    },
    {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
   },
]
export default {
    data(){
        return{
            mockData:[],
            targetKeys:[],
            treeData,
            value:undefined,
            showLine:true,
            checkedKeys:['0-0-0','0-2-1'],
            treeExpandedKeys:[]
        }
    },
   mounted() {
    this.getMock();
  },
  methods: {
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData;
      this.targetKeys = targetKeys;
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys;
    },
  },
}
</script>

<style>
.tree{
    display: flex;
    justify-content: space-around;
}
</style>