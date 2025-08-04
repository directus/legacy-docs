// @TODO Fix fetching of workspace packages
// import { findWorkspaceDir } from '@pnpm/find-workspace-dir';
// import { findWorkspacePackagesNoCheck, type Project } from '@pnpm/workspace.find-packages';
import { defineLoader } from 'vitepress';

export default defineLoader({
	async load() {
		// const workspaceDir = await findWorkspaceDir(process.cwd());
		// if (!workspaceDir) throw new Error(`Couldn't find workspace dir`);
		// const workspacePackages = await findWorkspacePackagesNoCheck(workspaceDir);

		// const packages = Object.fromEntries(
		// 	workspacePackages
		// 		.filter(isValidPackage)
		// 		.map(({ manifest: { name, version } }) => [name, { version: getDetailedVersion(version) }]),
		// );

		const packages = {
			'@directus/api': {
				version: { full: '29.0.0', major: '29', minor: '29.0' },
			},
			'ian-test-endpoint': {
				version: { full: '1.0.0', major: '1', minor: '1.0' },
			},
			'@directus/app': {
				version: { full: '13.12.0', major: '13', minor: '13.12' },
			},
			directus: { version: { full: '11.9.3', major: '11', minor: '11.9' } },
			docs: { version: { full: '0.0.0', major: '0', minor: '0.0' } },
			'@directus/composables': {
				version: { full: '11.2.1', major: '11', minor: '11.2' },
			},
			'@directus/constants': {
				version: { full: '13.0.1', major: '13', minor: '13.0' },
			},
			'create-directus-extension': {
				version: { full: '11.0.16', major: '11', minor: '11.0' },
			},
			'create-directus-project': {
				version: { full: '12.0.1', major: '12', minor: '12.0' },
			},
			'@directus/env': { version: { full: '5.1.1', major: '5', minor: '5.1' } },
			'@directus/errors': {
				version: { full: '2.0.2', major: '2', minor: '2.0' },
			},
			'@directus/extensions': {
				version: { full: '3.0.8', major: '3', minor: '3.0' },
			},
			'@directus/extensions-registry': {
				version: { full: '3.0.8', major: '3', minor: '3.0' },
			},
			'@directus/extensions-sdk': {
				version: { full: '15.0.0', major: '15', minor: '15.0' },
			},
			'@directus/format-title': {
				version: { full: '12.0.1', major: '12', minor: '12.0' },
			},
			'@directus/memory': {
				version: { full: '3.0.7', major: '3', minor: '3.0' },
			},
			'@directus/pressure': {
				version: { full: '3.0.7', major: '3', minor: '3.0' },
			},
			'@directus/release-notes-generator': {
				version: { full: '2.0.1', major: '2', minor: '2.0' },
			},
			'@directus/schema': {
				version: { full: '13.0.1', major: '13', minor: '13.0' },
			},
			'@directus/schema-builder': {
				version: { full: '0.0.3', major: '0', minor: '0.0' },
			},
			'@directus/specs': {
				version: { full: '11.1.0', major: '11', minor: '11.1' },
			},
			'@directus/storage': {
				version: { full: '12.0.0', major: '12', minor: '12.0' },
			},
			'@directus/storage-driver-azure': {
				version: { full: '12.0.7', major: '12', minor: '12.0' },
			},
			'@directus/storage-driver-cloudinary': {
				version: { full: '12.0.7', major: '12', minor: '12.0' },
			},
			'@directus/storage-driver-gcs': {
				version: { full: '12.0.7', major: '12', minor: '12.0' },
			},
			'@directus/storage-driver-local': {
				version: { full: '12.0.0', major: '12', minor: '12.0' },
			},
			'@directus/storage-driver-s3': {
				version: { full: '12.0.7', major: '12', minor: '12.0' },
			},
			'@directus/storage-driver-supabase': {
				version: { full: '3.0.7', major: '3', minor: '3.0' },
			},
			'@directus/stores': {
				version: { full: '1.0.2', major: '1', minor: '1.0' },
			},
			'@directus/system-data': {
				version: { full: '3.2.0', major: '3', minor: '3.2' },
			},
			'@directus/themes': {
				version: { full: '1.1.3', major: '1', minor: '1.1' },
			},
			'@directus/types': {
				version: { full: '13.2.0', major: '13', minor: '13.2' },
			},
			'@directus/update-check': {
				version: { full: '13.0.1', major: '13', minor: '13.0' },
			},
			'@directus/utils': {
				version: { full: '13.0.8', major: '13', minor: '13.0' },
			},
			'@directus/validation': {
				version: { full: '2.0.7', major: '2', minor: '2.0' },
			},
			'@directus/sdk': {
				version: { full: '20.0.1', major: '20', minor: '20.0' },
			},
			'tests-blackbox': {
				version: { full: '0.0.0', major: '0', minor: '0.0' },
			},
			'action-verify-create': {
				version: { full: '0.0.0', major: '0', minor: '0.0' },
			},
			'action-verify-schema': {
				version: { full: '0.0.0', major: '0', minor: '0.0' },
			},
		};

		return packages;
	},
});

// function isValidPackage(workspacePackage: Project): workspacePackage is Project & {
// 	manifest: Project['manifest'] & Required<Pick<Project['manifest'], 'name' | 'version'>>;
// } {
// 	const {
// 		manifest: { name, version },
// 	} = workspacePackage;

// 	return name !== undefined && version !== undefined;
// }

// function getDetailedVersion(version: string) {
// 	const splitVersion = version.split('.') as [string, string, string];

// 	return {
// 		full: version,
// 		major: splitVersion[0],
// 		minor: splitVersion.slice(0, 2).join('.'),
// 	};
// }
