import http from './instance'
import userRolesData from './user_roles.json'

export function getUserRoles () {

  return userRolesData;
  /* const params = { searchText };
  return http.get('/iu/courses/available', { params }).then(response => {
    return response.data;
  }).catch((e) => {
    return handleHttpError(e);
  }); */
}