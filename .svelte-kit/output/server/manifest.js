export const manifest = {
	appDir: "site",
	appPath: "gda/site",
	assets: new Set(["assets/ant-01.png","assets/home-01.png","assets/sig-01.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"site/immutable/start-27008588.js","imports":["site/immutable/start-27008588.js","site/immutable/chunks/index-f220cb6f.js","site/immutable/chunks/singletons-89f70de1.js","site/immutable/chunks/index-98cafc6e.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
