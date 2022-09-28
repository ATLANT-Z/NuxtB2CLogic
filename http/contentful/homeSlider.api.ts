import AbstractApi from "@/_shared/http/abstract/abstractApi";
import {contentfulClient} from "@/http/contentful/contentful.config";
import {HomeSliderItem} from "@/_shared/models/view/homeSliderItem";
import {ContentfulEntryList} from "@/_shared/models/contentful/type";
import {CNTFTransformer} from "@/_shared/models/contentful/tools";

export class HomeSliderApi extends AbstractApi {
	getSliders(): Promise<HomeSliderItem[]> {
		return contentfulClient.getEntries({
			content_type: 'slider',
			locale: '*'
		}).then((data: ContentfulEntryList<HomeSliderItem>) => {
			return data.items
				.map(el => CNTFTransformer.transform(el.fields as any))
				.map(el => HomeSliderItem.fromJson(el));
		});
	}
}
