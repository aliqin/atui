<template>
  <div class="address-box" :class="classObj" @click.stop="showAddrPopFun" @blur="hideAddrPopFun">
    <div v-if="province" class="ad-select has-select" v-html="selectAddr"></div>
    <div v-else class="ad-select">{{placeholder}}</div>
    <i class="ad-drop" :class="{'drop-down': showAddrPop}"></i>
    <div class="ad-overlay" v-show="showAddrPop">
      <div class="ad-overlay-container">
        <div class="tab-list">
          <ul>
            <li v-for="tab in tabList" :class="{'active': current == tab.id}" :style="{'width': (100/tabList.length)+'%'}" @click.stop.stop="navChoose(tab.id)">{{tab.name}}</li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="province-content" v-show="current == 'province'">
            <dl v-for="key in list.provinceList">
              <dt>{{$key}}</dt>
              <dd>
                <a v-for="prov in key" title="{{prov[1]}}" attr-id="{{prov[0]}}" href="javascript:;" @click="chooseProvince(prov[0], prov[1])" :class="{'active': provinceId == prov[0]}" track-by="prov[0]">
                  <input v-if="provinceId == prov[0]" value="{{prov[1]}}" type="hidden" v-model="province" />
                  {{prov[1]}}
                </a>
              </dd>
            </dl>
          </div>
          <div class="city-content" v-show="current == 'city'">
            <dl>
              <dd>
                <template v-for="item in list.countyList">
                  <a v-if="item[2] == provinceId" title="{{item[1][0]}}" attr-id="{{item[0]}}" href="javascript:;" @click.stop="chooseCity(item[0], item[1][0])" :class="{'active': cityId == item[0]}" track-by="item[0]">
                    <input v-if="cityId == item[0]" value="{{item[1][0]}}" type="hidden" v-model="city" />
                    {{item[1][0]}}
                  </a>
                </template>
              </dd>
            </dl>
          </div>
          <div class="county-content" v-if="tabList[2]" v-show="current == 'county'">
            <dl>
              <dd>
                <template v-for="item in list.countyList">
                  <a v-if="item[2] == cityId" title="{{item[1][0]}}" attr-id="{{item[0]}}" href="javascript:;" @click.stop="chooseCounty(item[0], item[1][0])" :class="{'active': countyId == item[0]}" track-by="item[0]">
                    <input v-if="countyId == item[0]" value="{{item[1][0]}}" type="hidden" v-model="county" />
                    {{item[1][0]}}
                  </a>
                </template>
              </dd>
            </dl>
          </div>
          <div class="street-content" v-if="tabList[3]" v-show="current == 'street'">
            <dl>
              <dd>
                <template v-for="item in list.streetList">
                  <a title="{{item[0]}}" attr-id="{{$key}}" parent-id="{{item[1]}}" href="javascript:;" @click.stop="chooseStreet($key, item[0])" :class="{'active': streetId == $key}" track-by="$key">
                    <input v-if="streetId == $key" value="{{item[0]}}" type="hidden" v-model="street" />
                    {{item[0]}}
                  </a>
                </template>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import nation from './addr.js';
import EventListener from 'src/components/utils/EventListener'

export default {
  props: {
    level: {
      type: String,
      default: '4'
    },
    placeholder: String,
    defaultAddr: {
      type: Object,
      default(){
        return {
          provinceId: '',
          cityId: '',
          countyId: '',
          streetId: ''
        }
      }
    },
    large: null,
    small: null
  },
  data () {
    return {
      allTab: [
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
      showAddrPop: false,
      current: 'province',
      list: {
        provinceList: nation.province,
        countyList: nation.county,
        streetList: {}
      },
      province: '',
      city: '',
      county: '',
      street: '',
      classObj: {
        'large': typeof(this.large) !== 'undefined',
        'small': typeof(this.small) !== 'undefined'
      },
      provinceId: this.defaultAddr.provinceId,
      cityId: this.defaultAddr.cityId,
      countyId: this.defaultAddr.countyId,
      streetId: this.defaultAddr.streetId
    }
  },
  watch: {
    defaultAddr (newVal, oldVal) {
      if(newVal.provinceId !== oldVal.provinceId) {
        this.province = '';
        this.city = '';
        this.county = '';
        this.street = '';
        this.provinceId = this.defaultAddr.provinceId || '';
        this.cityId     = this.defaultAddr.cityId || '';
        this.countyId   = this.defaultAddr.countyId || '';
        this.getStreet();
        this.streetId   = this.defaultAddr.streetId || '';
      }
    }
  },
  computed: {
    // provinceId () {
    //   return this.defaultAddr.provinceId;
    // },
    // cityId () {
    //   return this.defaultAddr.cityId;
    // },
    // countyId () {
    //   return this.defaultAddr.countyId;
    // },
    // streetId () {
    //   return this.defaultAddr.streetId;
    // },
    tabList () {
      let level = this.level - 0;
      level = typeof(level) == 'number' ? level : 4;


      return this.allTab.slice(0, level);
    },
    selectAddr () {
      let text = this.province;
      let space = '<span>/</span>';
      if(this.city) {
        text = text + space + this.city;
      }

      if(this.county) {
        text = text + space + this.county;
      }

      if(this.street) {
        text = text + space + this.street;
      }

      return text;
    }
  },
  ready () {
    let self = this;
    const el = this.$el;

    this._closeEvent = EventListener.listen(window, 'click', (e)=> {
      if (!el.contains(e.target)) {
        self.hideAddrPopFun();
      }
    })

    if(this.provinceId && this.cityId && this.countyId) {
      this.getStreet();
    }

    this.defaultTab();
  },
  beforeDestroy() {
    if (this._closeEvent) this._closeEvent.remove();
  },
  methods: {
    /**
     * 点击el节点，显示地址pop框
     */
    showAddrPopFun () {
      this.showAddrPop = true;
    },
    hideAddrPopFun () {
      this.showAddrPop = false;
    },
    defaultTab () {
      let level = this.level;

      if(this.streetId || this.countyId) {
        if(level > 3) {
          this.current = 'street';
        } else if(level > 2) {
          this.current = 'county';
        } else if(level > 1) {
          this.current = 'city';
        }
        return;
      }

      if(this.cityId) {
        if(level > 2) {
          this.current = 'county';
        } else if(level > 1) {
          this.current = 'city';
        }
        return;
      }

      if(this.provinceId) {
        if(level > 1) {
          this.current = 'city';
        }
        return;
      }
    },
    /**
     * 异步获取街道列表
     */
    getStreet () {
      let self = this;
      self.jsonp({
        url: '//lsp.wuliu.taobao.com/locationservice/addr/output_address_town.do',
        data: {
          l1: self.provinceId,
          l2: self.cityId,
          l3: self.countyId
        },
        time: 10000,
        callback: 'callback',
        success: function(res) {
          if(res && res.success) {
            self.list.streetList = res.result || {};
          }
        },
        fail: function(res) {
          throw new Error(res.msg);
        }
      });

    },
    /**
     * 实现jsonp调用
     */
    jsonp (options) {
        options = options || {};

        //创建 script 标签并加入到页面中
        var callbackName = ('jsonp_' + Math.random()).replace('.', '');
        var oHead = document.getElementsByTagName('head')[0];
        options.data[options.callback] = callbackName;
        var params = this.formatParams(options.data);
        var oS = document.createElement('script');
        oHead.appendChild(oS);

        //创建jsonp回调函数
        window[callbackName] = function (json) {
            oHead.removeChild(oS);
            clearTimeout(oS.timer);
            window[callbackName] = null;
            options.success && options.success(json);
        };

        //发送请求
        oS.src = options.url + '?' + params;

        //超时处理
        if (options.time) {
            oS.timer = setTimeout(function () {
                window[callbackName] = null;
                oHead.removeChild(oS);
                options.fail && options.fail({ message: '超时' });
            }, options.time);
        }
    },
    /**
     * 格式化jsonp参数
     */
    formatParams (data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    },
    /**
     * 切换省市区街道导航
     */
    navChoose (index) {
      this.current = index;
    },
    chooseProvince (provId, province) {
      this.province = province;
      this.provinceId = provId;
      this.current = this.tabList[1].id;
      this.changeProvinceId();
      this.$dispatch('select-province', {
        provinceName: this.province,
        provinceId: this.provinceId
      } ,this);
    },
    chooseCity (cityId, city) {
      var tabLen = this.tabList.length;
      this.city = city;
      this.cityId = cityId;
      if(tabLen > 2) {
        this.current = this.tabList[2].id;
      } else {
        this.hideAddrPopFun();
      }
      this.changeCityId();
      this.$dispatch('select-city', {
        cityName: this.city,
        cityId: this.cityId
      } ,this);
    },
    chooseCounty (countyId, county) {
      var tabLen = this.tabList.length;
      this.county = county;
      this.countyId = countyId;
      if(tabLen > 3) {
        this.current = this.tabList[3].id;
      } else {
        this.hideAddrPopFun();
      }
      this.changeCountyId();
      this.$dispatch('select-county', {
        countyName: this.county,
        countyId: this.countyId
      } ,this);
    },
    chooseStreet (streetId, street) {
      this.street = street;
      this.streetId = streetId;
      this.hideAddrPopFun();
      this.$dispatch('select-street', {
        streetName: this.street,
        streetId: this.streetId
      } ,this);
    },
    changeProvinceId () {
      this.cityId = '';
      this.city = '';
      this.county = '';
      this.countyId = '';
      this.street = '';
      this.streetId = '';
    },

    changeCityId () {
      this.county = '';
      this.countyId = '';
      this.street = '';
      this.streetId = '';
    },

    changeCountyId () {
      this.street = '';
      this.streetId = '';
      this.getStreet();
    }
  }
}

</script>
