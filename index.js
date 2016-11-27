var request = require('request-promise-native');
var config = require('./config.json');

function getArtifactsForGroupId(groupId){
	const groupPath = groupId.replace(/\./g, "/");

	const path = `${config.source.baseurl}/service/local/repositories/releases/content/${groupPath}/?isLocal`;
	console.log(`Calling: ${path}`)
	const options = {
		url : path,
		headers: {
			'Accept': 'application/json'
		},
		json: true
	};
	return request(options).then((response)=>{
		const data = response.data;
		const artifacts = [];
		data.forEach((item)=>{
			artifacts.push(item.text);
		});
		return artifacts;
	});
}

function getArtifactVersions(groupId, artifactId){

}


const groupId = "com.test";
getArtifactsForGroupId(groupId).then((artifacts)=>{
	artifacts.forEach((artifact)=>{
		getArtifactVersions(groupId, artifact)
	});
	console.log(x);
});
