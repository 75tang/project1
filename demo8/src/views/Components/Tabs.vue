<template>
  <div>
      <a-tabs 
      default-active-key="1" 
      @change="callback" 
      @prevClick="callback" 
      @nextClick="callback">
          <a-tab-pane key="1">
              <span slot="tab">
                  <a-icon type="smile"></a-icon>
                  Table
              </span>
              <template>
                  <a-table 
                  :columns="columns" 
                  :data-source="data"
                  bordered
                  >
                    <template slot="title">
                        Header
                    </template>
                    <template slot="footer">
                        Footer
                    </template>
                    <a slot="name" slot-scope="text">{{text}}</a>
                    <span slot="customTitle">
                        <a-icon type="smile"></a-icon>
                        Name
                    </span>
                    <span slot="action" slot-scope="text,record">
                        <a>Invite - {{record.name}}</a>
                        <a-divider type="vertical"/>
                        <a>Delete</a>
                        <a-divider type="vertical"/>
                        <a class="ant-dropdown-link">More actions<a-icon type="down"></a-icon></a>
                    </span>
                  </a-table>
              </template>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Tag" disabled></a-tab-pane>
          <a-tab-pane key="3" tab="Tooltip"></a-tab-pane>
      </a-tabs>
      <div>
        <a-radio-group v-model="mode">
            <a-radio-button keyue="top">
                top
            </a-radio-button>
            <a-radio-button keyue="bottom">
                bottom
            </a-radio-button>
            <a-radio-button keyue="left">
                left
            </a-radio-button>
            <a-radio-button keyue="right">
                right
            </a-radio-button>
        </a-radio-group>
        <a-tabs :tab-position="mode" v-model="activeKey" type="editable-card" @edit="onEdit">
            <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
                {{pane.content}}
            </a-tab-pane>
        </a-tabs> 
      </div>
      
  </div>
</template>

<script>
const columns=[
    {
        dataIndex:'name',
        key:'name',
        slots:{title:'customTitle'},
        scopedSlots:{customRender:'name'}
    },
    {
        title:'Age',
        dataIndex:'age',
        key:'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: { customRender: 'tags' },
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
];
const data =[
    {
        key:'1',
        name:'111',
        age:11,
        address:'jilin',
        tags:['nice','smile']
    },
    {
        key:'2',
        name:'222',
        age:22,
        address:'jilin',
        tags:['nice','smile']
    },
    {
        key:'3',
        name:'333',
        age:33,
        address:'jilin',
        tags:['nice','smile']
    }
]
export default {
    data(){
        const panes =[
            {title:'Tab 1',content:'Content of Tab 1',key:'a'},
            {title:'Tab 2',content:'Content of Tab 2',key:'b'},
            {title:'Tab 3',content:'Content of Tab 3',key:'c',closable:false},
        ]
        return{
            mode:top,
            panes,
            activeKey:panes[0].key,
            newTabIndex:0,
            data,
            columns,
        }
    },
    methods:{
        callback(key){
            console.log(key)
        },
        onEdit(targetKey,action){
            this[action](targetKey);
        },
        add(){
            const panes = this.panes;
            const activeKey =`newTab${this.newTabIndex++}`;
            panes.push({title:'New Tab',content:'Content of new Tab',key:activeKey});
            this.panes=panes;
            this.activeKey=activeKey;
        },
        remove(targetKey){
            let activeKey=this.activeKey;
            let lastIndex;
            this.panes.forEach((pane,i)=>{
                if(pane.key===targetKey){
                    lastIndex=i-1;
                }
            });
            const panes =this.panes.filter(pane=>pane.key !== targetKet);
            if(panes.lenght&&activeKey===targetKey){
                if(lastIndex>=0){
                    activeKey=panes[lastIndex].key;
                }else{
                    activeKey=panes[0].key;
                }
            }
            this.panes=panes;
            this.activeKey=activeKey;
        }
    }
}
</script>

<style>

</style>