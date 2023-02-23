import { ComponentViewModel, template, element } from "@nivinjoseph/n-app";
import "./latest-news-view.scss"; // importing css for the template

@template(require("./latest-news-view.html")) // path to the template
@element("latest-news")

export class LatestNewsViewModel extends ComponentViewModel
{


}