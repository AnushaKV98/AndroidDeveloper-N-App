import { ComponentViewModel, template, element } from "@nivinjoseph/n-app";
import "./navbar-section-view.scss"; // importing css for the template

@template(require("./navbar-section-view.html")) // path to the template
@element("navbar-section-1")

export class NavbarSectionViewModel extends ComponentViewModel
{


}