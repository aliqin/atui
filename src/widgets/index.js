import AddressSelect from './AddressSelect/'
import Editor from './Editor/'

const VueWidget = {
  AddressSelect,
  Editor
}
// require.ensure([], function(require) {
//   VueWidget.AddressSelect = require('./AddressSelect/')
//   console.log(VueWidget.AddressSelect)
// })
module.exports = VueWidget
