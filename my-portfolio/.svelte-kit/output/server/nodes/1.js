

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BWJ8gE1X.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.fi1e1Nz5.js","_app/immutable/chunks/entry.Cbv6ezjd.js"];
export const stylesheets = [];
export const fonts = [];
