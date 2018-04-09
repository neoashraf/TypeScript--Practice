import {likeFunc} from './likeFunc'
let likeStatus = new likeFunc(3,true);
likeStatus.updateCount();
console.log(`Likes = ${likeStatus.countLike} isLiked = ${likeStatus.buttonStatus}`);
