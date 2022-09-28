import {OrderOriginStatus} from "@models/order/history/orderHistory";
import {DictionaryWord, translateService} from "@shared/services/translate.service";

type TranslateMap = Record<OrderOriginStatus, DictionaryWord>

export class OrderOriginViewService {
	private static translateMap: TranslateMap = {
		[OrderOriginStatus.b2b]: 'b2bOrigin',
		[OrderOriginStatus.baf]: 'bafOrigin',
	}

	static getTitle(origin: OrderOriginStatus) {
		return translateService.getWord(this.translateMap[origin]);
	}
}
