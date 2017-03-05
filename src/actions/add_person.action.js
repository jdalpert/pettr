import Axios from "axios";
import { CHANGE, GRAB, DELETE, SAMPLE_API } from "./constants";

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

export function grab_data2() {
	const request = Axios.get(SAMPLE_API);
	return {

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
