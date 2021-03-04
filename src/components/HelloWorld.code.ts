import { Bus } from "@/Bus";
import * as fs from "fs";
import path from "path"
import Vue from "vue";

export default Vue.extend({
	data() {
		const files: string[] = [];
		return {
			files
		}
	},
	created() {
		this.files = fs.readdirSync(".");;
		Bus.sub(this, 'menu', (item: string) => {
			alert(item);
		});
	},
});