<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <div class="container">
      <div class="filter-nav">
        <span class="sortby">Sort by:</span>
        <a href="javascript:void(0)" class="default cur">Default</a>
        <a
          href="javascript:void(0)"
          class="price"
          v-bind:class="{'sort-up':sortFlag}"
          @click="sortGoods()"
        >
          Price
          <svg class="icon icon-arrow-short">
            <use xlink:href="#icon-arrow-short" />
          </svg>
        </a>
        <!-- <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a> -->
      </div>
      <div class="accessory-result">
        <!-- filter -->
        <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
          <dl class="filter-price">
            <dt>Price:</dt>
            <dd>
              <a
                href="javascript:void(0)"
                @click="setPriceFilter('all')"
                v-bind:class="{'cur':priceChecked=='all'}"
              >All</a>
            </dd>
            <dd v-for="(item,index) in priceFilter">
              <a
                href="javascript:void(0)"
                @click="setPriceFilter(index)"
                v-bind:class="{'cur':priceChecked==index}"
              >{{item.startPrice}} - {{item.endPrice}}</a>
            </dd>
          </dl>
        </div>
        <!-- search result accessories list -->
        <div class="accessory-list-wrap"></div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
import NavBread from "./../components/NavBread";
export default {
  data() {
    return {
      page: 1,
      sortFlag: true,
      priceFilter: [
        {
          startPrice: "0.00",
          endPrice: "100.00"
        },
        {
          startPrice: "100.00",
          endPrice: "500.00"
        },
        {
          startPrice: "500.00",
          endPrice: "1000.00"
        },
        {
          startPrice: "1000.00",
          endPrice: "5000.00"
        }
      ],
      priceChecked: "all",
      filterBy: false,
      overLayFlag: false
    };
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  methods: {
    sortGoods() {
      this.sortFlag = !this.sortFlag;
      this.page = 1;
    },
    setPriceFilter(index) {
      this.priceChecked = index;
      this.page = 1;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  min-height: 300px;
  margin: 0 auto;
  padding: 0 10px;
}
.filter-nav {
  height: 55px;
  line-height: 55px;
  margin: 60px 0 30px 0;
  padding: 0 20px;
  background: #fff;
  text-align: right;
  overflow: hidden;
}
.filter-nav a.cur,
.filter-nav a:hover {
  color: #ee7a23;
}
.filter-nav a {
  text-decoration: none;
  margin: 0 10px;
}

.filter-nav .sort-up .icon-arrow-short {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.icon-arrow-short {
  width: 11px;
  height: 11px;
}
.accessory-result .filter {
  margin-right: 25px;
}
.filter {
  box-sizing: border-box;
  width: 230px;
  padding: 0 20px 0 20px;
  color: #605f5f;
  -webkit-transition: right 0.5s ease-out;
  transition: right 0.5s ease-out;
}
.filter dl {
  min-height: 180px;
  margin-bottom: 50px;
  text-align: left;
}
.filter dt {
  margin-bottom: 30px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: bold;
}
.filter dd {
  line-height: 1.2em;
  margin: 20px 0;
}
.filter .filter-price dd .cur {
  font-weight: bold;
}

.filter .filter-price dd a:hover,
.filter .filter-price dd .cur {
  -webkit-transition: padding-left 0.3s ease-out;
  transition: padding-left 0.3s ease-out;
  border-left: 2px solid #ee7a23;
  padding-left: 15px;
}
.filter dd a:hover,
.filter dd .cur {
  color: #ee7a23;
}
.filter dd a {
  color: #605f5f;
  display: block;
  padding: 5px 0;
  -webkit-transition: padding-left 0.3s ease-out;
  transition: padding-left 0.3s ease-out;
  text-decoration: none;
}
</style>
