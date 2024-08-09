export default {
	install(app, option) {
		const person = {
			name: 'LEE',
			say() {
				alert(this.name + '이 인사합니다. ');
			},
			...option,
		};
		app.config.globalProperties.$person = person;
		app.provide('person', person);
	},
};
