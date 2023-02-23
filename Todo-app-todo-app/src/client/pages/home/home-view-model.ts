import { components, PageViewModel, route, template } from "@nivinjoseph/n-app";
import { Routes } from "../routes";
import { AndroidForDevelopersViewModel } from "./components/android-for-developers/android-for-developers-view-model";
import { DownloadLaunchViewViewModel } from "./components/download-launch-view/download-launch-view-view-model";
import { ExploreMoreViewModel } from "./components/explore-more/explore-more-view-model";
import { FeaturedBoxesViewModel } from "./components/featured-boxes/featured-boxes-view-model";
import { FooterViewModel } from "./components/footer/footer-view-model";
import { LatestNewsViewModel } from "./components/latest-news/latest-news-view-model";
import { NavbarSectionViewModel } from "./components/navbar-section/navbar-section-view-model";
import { PlatformUpdatesViewModel } from "./components/platform-updates/platform-updates-view-model";
import { VisitCommunityViewModel } from "./components/visit-community/visit-community-view-model";
import "./home-view.scss";

@template(require("./home-view.html"))
@route(Routes.home)
    @components(AndroidForDevelopersViewModel, DownloadLaunchViewViewModel, ExploreMoreViewModel, FeaturedBoxesViewModel,
                FooterViewModel,LatestNewsViewModel,NavbarSectionViewModel,PlatformUpdatesViewModel,VisitCommunityViewModel
                )
    
export class HomeViewModel extends PageViewModel{}