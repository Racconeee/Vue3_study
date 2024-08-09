const objPlugins = {
	install(app, option) {
		console.log('objPlugins');
		console.log('objPlugins app', app);
		console.log('objPlugins name', option);
	},
};
export default objPlugins;
