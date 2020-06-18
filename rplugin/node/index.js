const fs = require('fs')
module.exports = nvim => {
    fs.writeFileSync('/tmp/nvim', 'plugin is running')

}
