import request from '../util/request'

export const workspace      = (data) => request.get('/workspace/list', data);
export const submitComment  = (data) => request.post('/workspace/comment', data);
export const getWorkspace   = (data) => request.get('/workspace/id', data);
export const submitPraise   = (data) => request.post('/workspace/praise', data);
export const submitWishlist = (data) => request.post('/workspace/wishlist', data);
export const getWishlist    = (data) => request.get('/workspace/wishlist', data);
export const deleteWishlist = (data) => request.put('/workspace/wishlist', data);

export const postWishlist    = (data) => request.post('/wishlist', data);

export const getuser      = (data) => request.get('/user/openid', data);
export const updateuser   = (data) => request.put('/user', data);
export const contactEmail = (data) => request.post('/contact', data);


export const getcode = (data) => request.get('/wechat/oauth/login', data);