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
      streetId: '',
      provinceList: nation.province,
      countyList: nation.county,
      streetList: {}
    }
  },
  watch: {
    provinceId () {
      this.cityId = '';
      this.city = '';
      this.county = '';
      this.countyId = '';
      this.street = '';
      this.streetId = '';
    },

    cityId () {
      this.county = '';
      this.countyId = '';
      this.street = '';
      this.streetId = '';
    },

    countyId () {
      this.street = '';
      this.streetId = '';
      this.getStreet();
    }
  },
  methods: {
    //https://lsp.wuliu.taobao.com/locationservice/addr/output_address_town.do?l1=330000&l2=330200&l3=330281&_ksTS=1459308346095_54&callback=jsonp55
    //https://lsp.wuliu.taobao.com/locationservice/addr/output_address_town.do?l1=140000&l2=140600&l3=140624&jsonpcallback=jsonp_016244470332174377
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
            self.streetList = res.result || {};
          }
          console.log('=========');
          console.log(res);
          console.log('=========');
        },
        fail: function(res) {
          console.log(res.msg);
        }
      });

    },
    jsonp (options) {
        options = options || {};
        if (!options.url) {
            throw new Error("参数不合法");
        }

        //创建 script 标签并加入到页面中
        var callbackName = ('jsonp_' + Math.random()).replace(".", "");
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
                options.fail && options.fail({ message: "超时" });
            }, options.time);
        }
    },
    formatParams (data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    },
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
