import { ComponentViewModel, template, element } from "@nivinjoseph/n-app";
import "./featured-boxes-view.scss"; // importing css for the template

@template(require("./featured-boxes-view.html")) // path to the template
@element("featured-boxes")

export class FeaturedBoxesViewModel extends ComponentViewModel
{


}