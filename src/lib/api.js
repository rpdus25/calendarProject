import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get('http://local.vss.projectmanagement.co.kr:8093/selectAdminAddHolidayList')
    .then(function (response) {
      // handle success
      alert(JSON.stringify(response.data));
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      alert(JSON.stringify(error));
      console.log(error);
    });
}
