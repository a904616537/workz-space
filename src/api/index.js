import request from '../util/request'

export const workspace     = (data) => request.get('/workspace/list', data);
export const submitComment = (data) => request.post('/workspace/comment', data);
export const getWorkspace  = (data) => request.get('/workspace/id', data);
