export const mapSections = (sections = [], sectionsGridImage = [{}]) => {
    return sections.map((section) => {
        if (section.__component === 'section.section-two-columns') {
            return mapSectionTwoColumns(section);
        }

        if (section.__component === 'section.section-content') {
            return mapSectionContent(section);
        }

        if (section.__component === 'section.section-grid') {
            const { text_grid = [], image_grid = [] } = section;
    
            if (text_grid.length > 0) {
                return mapTextGrid(section);
            }
    
            if (image_grid.length > 0) {
                return mapImageGrid(section, sectionsGridImage);
            }
        }
    
        return section;
    });
};
  
export const mapSectionTwoColumns = (section = {}) => {
    const {
        __component: component = '',
        title = '',
        description: text = '',
        metadata: { section_id: sectionId = '' } = false,
    } = section;
  
    const srcImg = section?.image?.url || '';
    const background = section?.metadata?.background.toString() || 'false';
  
    return {
        component,
        title,
        text,
        srcImg,
        background,
        sectionId,
    };
};
  
  export const mapSectionContent = (section = {}) => {
    const {
        __component: component = '',
        title = '',
        metadata: { section_id: sectionId = '' } = false,
    } = section;

    let contents = ''
    section.content.forEach(content => {
        if(content) contents += `${content.children[0].text? `<p>${content.children[0].text}</p>` : ""}`
    });

    const background = section?.metadata?.background.toString() || 'false';
    const html = contents || '';
  
    return {
        component,
        title,
        background,
        sectionId,
        html,
    };
  };
  
  export const mapTextGrid = (section = {}) => {
    const {
        title = '',
        description = '',
        metadata: { section_id: sectionId = '' } = false,
        text_grid: grid = [],
    } = section;

    const background = section?.metadata?.background.toString() || 'false';
  
    return {
        component: 'section.section-grid-text',
        title,
        background,
        sectionId,
        description,
        grid: grid.map((text) => {
            const { title = '', description = '' } = text;
            return {
            title,
            description,
            };
        }),
    };
  };
  
  export const mapImageGrid = (section = {}, sectionsGridImage = [{}]) => {
    const {
        title = '',
        description = '',
        metadata: { section_id: sectionId = '' } = false,
    } = section;

    const background = section?.metadata?.background.toString() || 'false';
    let [ { image_grid } ] = sectionsGridImage? sectionsGridImage.filter(sectionGrid => sectionGrid.title === title) : [];
  
    return {
        component: 'section.section-grid-image',
        title,
        background,
        sectionId,
        description,
        grid: image_grid.map((img) => {
            const srcImg = img.image[0].url
            const altText = img.image[0].alternativeText? img.image[0].alternativeText : "";

            return {
                srcImg,
                altText,
            };
        }),
    };
  };