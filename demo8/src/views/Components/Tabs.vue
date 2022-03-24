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
          <a-tab-pane key="2" tab="Tag">
              <div class="tag">
                  <span class="label">tag:</span>
                  <template v-for="(tag,index) in tags">
                    <a-tooltip v-if="tag.length>3" :key="tag" :title="tag">
                        <a-tag :key="tag" :closable="index !== 0" @close="()=>handleClose(tag)">
                            {{`${tag.slice(0,3)}`}}
                        </a-tag>
                    </a-tooltip>
                    <a-tag v-else :key="tag" :closable="index !==0" @close="()=>handleClose(tag)">
                        {{tag}}
                    </a-tag>                       
                  </template>
                  <a-input
                   v-if="inputVisible"
                   ref="input"
                   type="text"
                   size="small"
                   :style="{width:'78px'}"
                   :value="inputValue"
                   @change="handleInputChange"
                   @blur="handleInputConfirm"
                   @keyup.enter="handleInputConfirm"
                   />
                   <a-tag v-else style="backgroup:#fff;borderStyle:dashed;" @click="showInput">
                       <a-icon type="plus"></a-icon>
                       New Tag
                   </a-tag>
              </div>
              <div class="tag" style="margin:8px 0;">
                  <span class="label">checkableTag:</span>
                  <a-checkable-tag
                  v-model="checked1"
                  @change="handleChange"
                  >
                  Tag 1
                  </a-checkable-tag>
                  <a-checkable-tag
                  v-model="checked2"
                  @change="handleChange"
                  >
                  Tag 2
                  </a-checkable-tag>
                  <a-checkable-tag
                  v-model="checked3"
                  @change="handleChange"
                  >
                  Tag 3
                  </a-checkable-tag>
              </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="Tooltip">
            <div id="components-a-tooltip-demo-placement">
                <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
                    <a-tooltip placement="topLeft">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-button>TL</a-button>
                    </a-tooltip>
                    <a-tooltip placement="top">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-button>Top</a-button>
                    </a-tooltip>
                    <a-tooltip placement="topRight">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-button>TR</a-button>
                    </a-tooltip>
                </div>
                <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
                    <a-tooltip placement="leftTop">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-button>LT</a-button>
                    </a-tooltip>
                    <a-tooltip placement="left">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-button>Left</a-button>
                    </a-tooltip>
                    <a-tooltip placement="leftBottom">
                        <template slot="title">
                        <span>prompt text</span>
                        </template>
                        <a-button>LB</a-button>
                    </a-tooltip>
            </div>
            <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
            <a-tooltip placement="rightTop">
                <template slot="title">
                <span>prompt text</span>
                </template>
                <a-button>RT</a-button>
            </a-tooltip>
            <a-tooltip placement="right">
                <template slot="title">
                <span>prompt text</span>
                </template>
                <a-button>Right</a-button>
            </a-tooltip>
            <a-tooltip placement="rightBottom">
                <template slot="title">
                <span>prompt text</span>
                </template>
                <a-button>RB</a-button>
            </a-tooltip>
            </div>
            <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
            <a-tooltip placement="bottomLeft">
                <template slot="title">
                <span>prompt text</span>
                </template>
                <a-button>BL</a-button>
            </a-tooltip>
            <a-tooltip placement="bottom">
                <template slot="title">
                <span>prompt text</span>
                </template>
                <a-button>Bottom</a-button>
            </a-tooltip>
            <a-tooltip arrow-point-at-center placement="bottomRight">
                <template slot="title">
                <span>prompt text</span>
                </template>
                <a-button>BR</a-button>
            </a-tooltip>
            </div>
          </div>  
          </a-tab-pane>
          <a-tab-pane key="4" tab="tab" disabled></a-tab-pane>
      </a-tabs>
      <div style="margin-top:100px">
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
            tags:['111111','222','3333'],
            inputVisible:false,
            inputValue:'',
            checked1:true,
            checked2:false,
            checked3:false,
            buttonWidth:70,
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
        },
        handleClose(removedTag){
            const tags =this.tags.filter(tag=>tag!==removedTag);
            console.log(tags);
            this.tags=tags;
        },
        showInput(){
            this.inputVisible=true;
            this.$nextTick(function(){
                this.$refs.input.focus();
            })
        },
        handleInputChange(e){
            this.inputValue=e.target.value;
        },
        handleInputConfirm(){
            const inputValue =this.inputValue
            let tags =this.tags;
            if(inputValue&& tags.indexOf(inputValue)=== -1){
                tags=[...tags,inputValue];
            }
            console.log(tags);
            Object.assign(this,{
                tags,
                inputVisible:false,
                inputValue:''
            })
        },
        handleChange(checked){
            consloe.log(checked);
        }
    }
}
</script>

<style scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>