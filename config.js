
'use strict'


// Export

module.exports = {

	app: {
		name: 'Demo',
	},

	addContent: {
		scss: '.[name] {}',
	},

	use: {
		templates: '.html',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		imagemin: [ 'png', 'jpg' ],
        sourcemaps: [ 'js', 'css' ],
        globalStyles: 'app/blocks/globalSASS/global.scss',
	},

	autoCreate: {
		onlyOnWatch: true,
		folders: ['assets'],
		files: [ '.scss' ],
		levels: [ 'develop' ],
		ignoreNodes: [ /__[\w]/i ],
		ignoreStyle: [ /[a-z\d](_|--)[a-z\d]/i ], // игнорируем модификаторы при создании стилей
		ignoreScript: [ /[a-z\d](_|--)[a-z\d]/i  ], // игнорируем модификаторы при создании скриптов
		ignoreTemplate: [], // по аналогии можно указать и для шаблонов
	},

	dist: {
		styles: 'styles',
		fonts: 'styles/fonts',
		img: 'styles/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},

	HTMLBeautify: {
		preserve_newlines: true,
	},

}

