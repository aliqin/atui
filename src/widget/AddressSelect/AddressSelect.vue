<template>
  <div class="address-box">
    <div v-if="province" class="ad-select has-select">{{province}}{{city}}{{county}}{{street}}</div>
    <div v-else class="ad-select">请选择省市区</div>
    <i class="ad-drop"></i>
    <div class="ad-overlay">
      <ul class="tab-list">
        <li v-for="tab in tabList" :class="{'active': current == tab.id}" :style="{'width': (100/tabList.length)+'%'}" @click="navChoose(tab.id)">{{tab.name}}</li>
      </ul>
      <div class="tab-content">
        <div class="province-content" v-show="current == 'province'">
          <dl v-for="key in provinceList">
            <dt>{{$key}}</dt>
            <dd>
              <a v-for="prov in key" title="{{prov[1][0]}}" attr-id="{{prov[0]}}" href="javascript:;" @click="chooseProvince(prov[0], prov[1][0])" :class="{'active': provinceId == prov[0]}">{{prov[1][0]}}</a>
            </dd>
          </dl>
        </div>
        <div class="city-content" v-show="current == 'city'">
          <dl>
            <dd>
              <template v-for="county in countyList">
                <a v-if="county[2] == provinceId" title="{{county[1][0]}}" attr-id="{{county[0]}}" href="javascript:;" @click="chooseCity(county[0], county[1][0])" :class="{'active': cityId == county[0]}">{{county[1][0]}}</a>
              </template>
            </dd>
          </dl>
        </div>
        <div class="county-content" v-show="current == 'county'">
          <dl>
            <dd>
              <template v-for="county in countyList">
                <a v-if="county[2] == cityId" title="{{county[1][0]}}" attr-id="{{county[0]}}" href="javascript:;" @click="chooseCounty(county[0], county[1][0])" :class="{'active': countyId == county[0]}">{{county[1][0]}}</a>
              </template>
            </dd>
          </dl>
        </div>
        <div class="street-content" v-show="current == 'street'">
          <dl>
            <dd>
              <!-- <a title="明光路街道" attr-id="340102001" href="javascript:;" attr-parent-id="340102">明光路街道</a> -->
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import nation from './addr.js';

export default {
  data () {
    return {
      tabList: [
        {
          name: '省份',
          id: 'province'
        },
        {
          name: '城市',
          id: 'city'
        },
        {
          name: '县区',
          id: 'county'
        },
        {
          name: '街道',
          id: 'street'
        }
      ],
      current: 'province',
      province: '',
      provinceId: '',
      city: '',
      cityId: '',
      county: '',
      countyId: '',
      street: '',
      provinceList: nation.province,
      countyList: nation.county
    }
  },
  methods: {
    // jsonData () {
    //   var name = jsonpData.name;
    //   var age= jsonpData.age;
    //   alert(name+":"+age);
    // },
    // getJSONP (jsonData) {
    //   let script = document.createElement('script');
    //   script.src = '';

    // },
    navChoose (index) {
      this.current = index;
    },
    chooseProvince (provId, province) {
      this.province = province;
      this.provinceId = provId;
      this.current = this.tabList[1].id;
    },
    chooseCity (cityId, city) {
      var tabLen = this.tabList.length;
      this.city = city;
      this.cityId = cityId;
      if(tabLen > 2) {
        this.current = this.tabList[2].id;
      }
    },
    chooseCounty (countyId, county) {
      var tabLen = this.tabList.length;
      this.county = county;
      this.countyId = countyId;
      if(tabLen > 3) {
        this.current = this.tabList[3].id;
      }
    }
  }
}
</script>

<style lang="less">
.address-box {
  position: relative;
  width: 300px;
  height: 30px;
  padding: 0 26px 0 10px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  .ad-select {
    line-height: 30px;
    font-size: 12px;
    color: #ccc;

    &.has-select {
      color: #666;
    }
  }

  .ad-drop {
    display: block;
    position: absolute;
    top: 13px;
    right: 8px;
    width: 10px;
    height: 5px;
    background: url(//img.alicdn.com/tps/i4/T1J6x.FkFeXXX_ownc-30-40.png) -10px -25px no-repeat;
  }

  .ad-overlay {
    position: absolute;
    left: -1px;
    top: 28px;
    width: 300px;
    height: 255px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    z-index: 99;
  }

  .tab-list {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #f0f0f0;
    font-size: 12px;

    li {
      // width: 25%;
      height: 40px;
      line-height: 40px;
      color: #666;
      text-align: center;
      list-style: none;
      border: 1px solid #d9d9d9;
      border-left: 0 none;
      border-top: 0 none;

      &:last-child {
        border-right: 0 none;
      }

      &.active {
        background-color: #fff;
        color: #00a0ff;
      }
    }
  }

  .tab-content {
    padding: 10px 15px;
    font-size: 12px;

    dl {
      display: flex;
      flex-wrap: nowrap;
      padding: 3px 0;
      margin: 0;
    }

    dt {
      width: 35px;
      line-height: 2;
      padding-right: 10px;
      font-weight: bold;
    }

    dd {
      width: 239px;

      a {
        display: inline-block;
        line-height: 2;
        padding: 0 8px;
        color: #666;
        cursor: pointer;

        &:hover {
          background-color: #66c6ff;
          color: #fff;
          text-decoration: none;
        }

        &:active, &:focus, &.active {
          background-color: #00a0ff;
          color: #fff;
          text-decoration: none;
        }


      }
    }
  }

  .city-content, .county-content, .street-content {
    padding: 0 5px;

    dd {
      width: 100%;
    }
  }

}
</style>
