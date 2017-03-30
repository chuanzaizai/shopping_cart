// 商品列表json
var goodsTable = new Vue({
  el: '#goods-table',
  data: {
    // 用于保存每件商品的对象
    goodItem: {},
  	// 用于保存用户添加到购车的商品数组
  	buyLists: [],
  	// 默认的商品列表
    goods: [
      {id:1,name:'iphone 7 plus 手机',color:'银色',default_nums:1,add_nums:0},
	    {id:2,name:'华硕笔记本电脑',color:'黑色',default_nums:1,add_nums:0},
	    {id:3,name:'九阳电热水瓶5L',color:'白色',default_nums:1,add_nums:0}
    ]
  },
  methods: {
  	reduce(good) {
  		if (good.default_nums <= 1) return;
  		good.default_nums --;
  	},
  	addToCar(good) {
  		if(good.add_nums == good.default_nums) return;
  		good.add_nums = good.default_nums;
      // 创建用户当前添加的商品对象
      this.goodItem = {id: good.id, nums: good.add_nums};
  		// 开始向数组中提添加当前物品，这里存在3种情况
      // 1、用户未添加过该商品，则直接向数组中push
      // 2、用于已经添加了该商品、并且未做购买数量修改，则不向数组中添加
      // 3、用于已经添加了该商品、但是修改了购买数量，直接替换数组中的该商品对象
      var index = this.buyLists.findIndex((value, index, arr) => {
         return value.id === this.goodItem.id;
      });
      index === -1 ? this.buyLists.push(this.goodItem) : Object.assign(this.buyLists[index], this.goodItem);
  	},
    balance() {
      //打印用户购买的商品列表
      console.log(this.buyLists);
    }
  }
})

