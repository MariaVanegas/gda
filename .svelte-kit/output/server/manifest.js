export const manifest = {
	appDir: "app",
	appPath: "gda/app",
	assets: new Set([".DS_Store","assets/ant-01.png","assets/home-01.png","assets/sig-01.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"app/immutable/start-38a9d848.js","imports":["app/immutable/start-38a9d848.js","app/immutable/chunks/index-c3874c10.js","app/immutable/chunks/singletons-29dd66b7.js","app/immutable/chunks/index-2d3e5008.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/acerca",
				pattern: /^\/acerca\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/proyectos",
				pattern: /^\/proyectos\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/proyecto",
				pattern: /^\/proyecto\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
