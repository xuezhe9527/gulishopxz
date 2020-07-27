export const mixin = {
  methods: {
    giveMoney(money){
      this.money-= money
      this.$parent.money += money
    }
  },
}