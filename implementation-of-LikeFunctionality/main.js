"use strict";
exports.__esModule = true;
var likeFunc_1 = require("./likeFunc");
var likeStatus = new likeFunc_1.likeFunc(3, true);
likeStatus.updateCount();
console.log("Likes = " + likeStatus.countLike + " isLiked = " + likeStatus.buttonStatus);
