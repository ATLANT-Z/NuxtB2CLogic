import ServerApi from "@/_shared/http/abstract/serverApi";
import {AccountApi} from "@/http/account/account.api";
import {ContentfulApi} from "@/http/contentful/contentful.api";
import {CatalogApi} from "@/http/catalog/catalog.api";
import {FinanceApi} from "@/http/finance/finance.api";
import {ShippingApi} from "@/http/shipping/shipping.api";
import {PurchaseApi} from "@/http/purchase/purchase.api";
import {AppModeHelper} from "@shared/helpers/appMode.helper";

class API extends ServerApi { //'https://e4df-45-150-67-131.ngrok.io/user' //
	protected baseUrl: string = AppModeHelper.getIsProd() ? 'https://api.b2b.logicpower.ua/user' : 'https://dev.api.b2b.logicpower.ua/user';

	Account = new AccountApi(this);
	Catalog = new CatalogApi(this);
	Finance = new FinanceApi(this);
	Delivery = new ShippingApi(this);
	Purchase = new PurchaseApi(this);

	Contentful = new ContentfulApi();
}

export default new API();
