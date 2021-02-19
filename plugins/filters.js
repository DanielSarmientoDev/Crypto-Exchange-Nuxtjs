import Vue from 'vue'
Vue.filter('percentFilter', function (value) {
  if (!value) {
    return '0%'
  }

  return `${Number(value).toFixed(2)}%`
})

Vue.filter('currency', function (value) {
  return '$' + parseFloat(value).toFixed(0) + ' USD'
})

Vue.filter('numFormat', function (value) {
  if (value > 999 && value < 1000000) {
    return (value / 1000).toFixed(0) + ' K' // convert to K for valueber from > 1000 < 1 million
  } else if (value > 1000000) {
    return (value / 1000000).toFixed(0) + ' M' // convert to M for valueber from > 1 million
  } else if (value < 900) {
    return (value / 900).toFixed(5) // if value < 1000, nothing to do
  }
})
