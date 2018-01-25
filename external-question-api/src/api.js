var Router = require('koa-router');
var router = new Router();

const post = async ctx => {
  console.log(ctx.request.fields);
  ctx.response.body = 'success';
};

router.post('/answers', post);

module.exports = router.routes();