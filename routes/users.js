var express = require('express');
var router = express.Router();

/* GET users listing. */
// 上面有趣的事情是，回調函數有第三個參數 'next'，
// 因此是一個中間件函數，而不是簡單的路由回調。雖然代碼當前不使用 next 參數，
//但如果要在'/'根路由路徑中，添加多個路由處理程序，將來可能會有用。
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get is to get info from server
// send is to send to the server then the server will render the info
router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
