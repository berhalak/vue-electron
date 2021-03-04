import Vue from 'vue'
import { ipcRenderer } from "electron"

const Registry: { parent: any, event: string, handler: any }[] = [];

const Bus = new Vue({
	methods: {
		sub(parent: any, event: string, handler: any) {
			Registry.push({
				parent,
				event,
				handler
			});
			this.$on(event, handler);
		},
		close(parent: any) {
			const entries = Registry.filter(x => x.parent == parent);
			for (const e of entries) {
				Registry.splice(Registry.indexOf(e), 1);
				Bus.$off(e.event, e.handler);
			}
		}
	}
});

ipcRenderer.on("menu", (_, arg) => {
	Bus.$emit('menu', arg);
});


export {
	Bus
}