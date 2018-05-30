import axios from 'axios';

export async function getDataApi(name) {
	const res = await axios.get(`/studentData/${name}`);
	return res.data;
}

export async function getSingleDataApi(name) {
	const res = await axios.get(`/getDataByName/${name}`);
	console.log('this is data from getSingleDataApi', res);
	return res.data;
}

export async function submitDataApi(data) {
	const token = localStorage.getItem('token');
	const res = await axios.post('/postStudent', data, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	return res.data;
}

export async function submitSingleDataApi(data) {
	const token = localStorage.getItem('token');
	const res = await axios.post(
		`/postSingleStudent/${localStorage.getItem('name')}`,
		data,
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	);
	return res.data;
}

export async function loginDataApi(data) {
	const res = await axios.post('/loginStudent', data);
	console.log('this is from submitDataApi', res);
	return res.data;
}
