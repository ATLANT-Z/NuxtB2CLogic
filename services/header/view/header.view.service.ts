import {reactive} from "vue";

class HeaderViewService {
	headerHeight: number = 0;
	stickyRowBottom: number = 0;
}

export const headerViewService = reactive(new HeaderViewService());
