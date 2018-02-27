var steem = require("steem");
var arrNode = [
  'https://api.steemit.com'
  ,'https://steemd.dist.one'
  ,'https://rpc.dist.one'
  //,'https://steemd-int.steemit.com'
  //,'https://steemd.steemitstage.com'
  //,'https://api.steemitstage.com'
  //,'https://steemd.pevo.science'
];
var idxNode = 0;
steem.api.setOptions({url: arrNode[idxNode] });
console.log(arrNode[idxNode]);

steem.api.getDiscussionsByAuthorBeforeDate("nhj12311", null, '2100-01-01T00:00:00', 1, function(err, result) {
  console.log(err, result);
});

steem.api.getDiscussionsByComments({ start_author : "nhj12311", limit: 1}, function(err, result) {
  console.log(err, result);
});
