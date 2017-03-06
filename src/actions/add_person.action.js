import Axios from "axios";
import { CHANGE, GRAB, GRAB2, DELETE, SAMPLE_API, LOGINUSER, GETINFO } from "./constants";

Axios.interceptors.request.use(function (config) {
  console.log(config)
  return config
}, function (error) {
  console.log(error)
  return Promise.reject(error)
})

Axios.interceptors.response.use(function (response) {
  console.log(response)
  return response
}, function (error) {
  console.log(error)
  if (error.response == null) {
    error.response = {
      data: {
        message: 'Could not connect to the server.'
      },
      statusText: 'Network Error'
    }
  }
  return Promise.reject(error)
})

export function add_person(data) {
	return {
		type: CHANGE,
		payload: data
	};
}

export function grab_data(obj) {
	const request = Axios.post(SAMPLE_API, obj);
	return {
		type: GRAB,
		payload: request
	};
}

export function grab_data2(obj) {
	const request = Axios.post(SAMPLE_API+obj.userId, obj);
	return {
		type: GRAB2,
		payload: request
	};
}

export function loginUser(obj){
	const request = Axios.post(SAMPLE_API+"test", obj);
	return {
		type: LOGINUSER,
		payload: request
	};
}


export function getUserInfo(obj){
	const request = Axios.get(SAMPLE_API+obj.userId);
	return {
		type: GETINFO,
		payload: request
	};
}


export function delete_person(userID) {
	console.log(userID);
	const request = Axios.delete(SAMPLE_API+userID);
	return {
		type: DELETE,
		payload: request
	};
}
