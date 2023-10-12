import './polyfills';
import { KlApp } from './app/kl-app';
import { KL } from './klecks/kl';
import { IKlProject } from './klecks/kl.types';
import { ProjectStore } from './klecks/storage/project-store';
import { SaveReminder } from './klecks/ui/components/save-reminder';
import { klHistory } from './klecks/history/kl-history';
import { klPsdToKlProject, readPsd } from './klecks/storage/psd';
import { LANG } from './language/language';

export interface IEmbedParams {
	project?: IKlProject;
	psdBlob?: Blob;
	showReminder?: boolean;
	changeTitle?: boolean;
	container?: HTMLElement;
	bottomBar?: HTMLElement;
	aboutEl?: HTMLElement;
	isShare?: boolean;
	hideFile?: boolean;
	helpPath?: string;
	logoImg?: any; // app logo
	onLogo?: () => void;
	customSave: (blob: Blob, filename: string, onSuccess: () => void, onError: () => void) => void;
	embed?: {
		url: string;
		onSubmit: (onSuccess: () => void, onError: () => void) => void;
	};
}

export interface IReadPSD {
	blob: Blob;
	callback: (k: IKlProject) => void;
}

export function Embed(p: IEmbedParams) {

	let isInitialized: boolean = false;
	let klApp;
	const psdQueue: IReadPSD[] = []; // queue of psds waiting while ag-psd is loading
	let agPsd: any | 'error';

	let loadingScreenEl = document.getElementById("loading-screen");
	let loadingScreenTextEl = document.getElementById("loading-screen-text");
	if (loadingScreenTextEl) {
		loadingScreenTextEl.textContent = LANG('embed-init-waiting');
	}

	function onProjectReady(project: IKlProject | null, projectStore: ProjectStore | null) {
		try {
			if (isInitialized) {
				throw new Error('Already called openProject');
			}
			isInitialized = true;

			const saveReminder = new SaveReminder(
				klHistory,
				p.embed ? false : (p.changeTitle || false),
				p.embed ? false : (p.showReminder || false),
				() => klApp ? klApp.saveAsPsd() : null,
				() => klApp ? klApp.isDrawing() : false,
				p.embed ? null : projectStore,
				p.embed ? null : () => project,
				() => klApp ? klApp.getEl() : (p.container || document.body),
				() => klApp ? klApp.getBBox() : {},
			);
			klApp = new KlApp(
				project,
				{
					saveReminder,
					projectStore: p.embed ? null : projectStore,
					embed: p.embed ? p.embed : undefined,
					logoImg: p.logoImg,
					onLogo: p.onLogo,
					customSave: p.customSave,
					hideFile: p.hideFile,
					isShare: p.isShare,
					helpPath: p.helpPath,
					bottomBar: p.bottomBar,
					aboutEl: p.aboutEl,
				},
				p.container || document.body
			);
			saveReminder.init();

			if (loadingScreenEl && loadingScreenEl.parentNode) {
				loadingScreenEl.parentNode.removeChild(loadingScreenEl);
			}
			loadingScreenEl = null;
			loadingScreenTextEl = null;

			(p.container || document.body).appendChild(klApp.getEl());
		} catch (e) {
			if (loadingScreenTextEl) {
				loadingScreenTextEl.textContent = '❌ ' + e;
			}
			if (loadingScreenEl) {
				loadingScreenEl.className += 'loading-screen-error';
			}
			console.error(e);
		}
	}
	let projectStore = !p.embed ? new KL.ProjectStore() : null;
	if (p.project) {
		onProjectReady(p.project, projectStore);
	}
	this.openProject = (project) => {
		if (!project.layers && projectStore) {// Read Browser Storage
			try {
				projectStore.read().then((readResult) => {
					let p: IKlProject | null = null;
					if (readResult && readResult.project) {
						setTimeout(() => {
							klApp.out(LANG('file-storage-restored'));
						}, 100);
						p = readResult.project;
					}
					onProjectReady(p, projectStore);
				}).catch((e) => {
					setTimeout(function () {
						klApp && klApp.out(e);
					}, 100);
					onProjectReady(null, projectStore);
				})
			} catch (e) {
				let message;
				if (e.message.indexOf('db-error') === 0) {
					message = 'Failed to access Browser Storage';
				} else if (e.message.indexOf('format-error') === 0) {
					message = 'Failed to restore from Browser Storage';
				} else {
					message = 'Failed to restore from Browser Storage';
				}
				setTimeout(function () {
					klApp && klApp.out(message);
				}, 100);
				onProjectReady(null, projectStore);
			}
		} else {
			onProjectReady(project, projectStore);
		}
	};
	this.initError = (error: string) => {
		if (loadingScreenTextEl) {
			loadingScreenTextEl.textContent = '❌ ' + error;
		}
		if (loadingScreenEl) {
			loadingScreenEl.className += 'loading-screen-error';
		}
	};
	this.getPNG = (): Blob => {
		if (!klApp) {
			throw new Error('App not initialized');
		}
		return klApp.getPNG();
	};
	this.getPSD = async (): Promise<Blob> => {
		if (!klApp) {
			throw new Error('App not initialized');
		}
		return await klApp.getPSD();
	};
	this.readPSDs = (psds: IReadPSD[]) => {
		if (psds.length === 0) {
			return;
		}

		const readItem = (item: IReadPSD) => {
			try {
				const psd = agPsd.readPsd(item.blob);
				const project = klPsdToKlProject(readPsd(psd));
				item.callback(project);
			} catch (e) {
				console.error('failed to read psd', e);
				item.callback(null);
			}
		};

		if (!agPsd) {
			if (psdQueue.length === 0) {
				// load ag-psd
				(async () => {
					try {
						agPsd = await import('ag-psd');
					} catch (e) {
						agPsd = 'error';
					}
					while (psdQueue.length) {
						readItem(psdQueue.shift());
					}
				})();
			}
			psds.forEach(item => {
				psdQueue.push(item);
			});
		} else {
			psds.forEach(readItem);
		}
	};
	this.importImage = (a) => {
		if (!klApp) {
			throw new Error('App not initialized');
		}
		klApp.importImage(a);
	}
}