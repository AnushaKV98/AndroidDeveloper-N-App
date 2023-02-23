import { ComponentViewModel, template, element } from "@nivinjoseph/n-app";
import "./footer-view.scss"; // importing css for the template

@template(require("./footer-view.html")) // path to the template
@element("footer-section")

export class FooterViewModel extends ComponentViewModel
{


}