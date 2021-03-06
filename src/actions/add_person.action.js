import Axios from "axios";
import { CHANGE, GRAB, GRAB2, DELETE, SAMPLE_API, LOGINUSER, GETINFO, GETPETINFO, OWNERGETPETINFO, ALLPETS, GETPETS, ADDMATCH, ADDIMAGE, UPUDATA} from "./constants";

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

export function loginUser(obj){
	const request = Axios.post(SAMPLE_API+"login/", obj);
	return {
		type: LOGINUSER,
		payload: request
	};
}


export function getUserInfo(obj){
	const request = Axios.get(SAMPLE_API+"user/"+obj);
	return {
		type: GETINFO,
		payload: request
	};
}


export function getPetInfo(obj){
	const request = Axios.get(SAMPLE_API+"pet/"+obj);
	return {
		type: GETPETINFO,
		payload: request
	};
}

export function getPetOwnerInfo(obj){
	const request = Axios.get(SAMPLE_API+"petowner/"+obj);
	return {
		type: OWNERGETPETINFO,
		payload: request
	};
}

export function getAllPets(){
	const request = Axios.get(SAMPLE_API+"pets/");
	return {
		type: GETPETS,
		payload: request
	};
}

export function getPets(id){
	const request = Axios.get(SAMPLE_API + "petPref/" + id);
	return {
		type: ALLPETS,
		payload: request
	};
}

export function addMatch(obj){
	const request = Axios.post(SAMPLE_API + "match/", obj);
	return {
		type: ADDMATCH,
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

export function add_image(img) {
	console.log(img.fileLoc);
	const request = Axios.post(SAMPLE_API+"addimage/", img);
	return {
		type: ADDIMAGE,
		payload: request
	};
}

export function update_data(obj) {
	const request = Axios.post(SAMPLE_API+"update/", obj);
	return {
		type: UPUDATA,
		payload: request
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


