import { mapMenu } from "./map-menu";
import { mapSections } from "./map-sections";

export const mapData = (pagesData = [{}], sectionsGridImage = [{}]) => {
    return pagesData.map((data) => {
        const {
            slug = "",
            title = "",
            sections = [],
            menu = {},
        } = data;

        const footerHtml = data?.footer_text[0]?.children[0].text || "";

        return {
            footerHtml,
            slug,
            title,
            sections: mapSections(sections, sectionsGridImage),
            menu: mapMenu(menu),
        };
    });
};
