import React, { useEffect, useRef, useState } from 'react';

import { mapData } from '../../api/map-data';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound'
import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';

import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      //const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      //const slug = pathName ? pathName : 'landing-page';

      try {
        const data = await fetch(`http://localhost:1337/api/pages?populate[sections][populate]=*&populate[menu][populate][0]=menu_links`);
        const sectionsGridImage = await fetch(`http://localhost:1337/api/pages?populate[sections][on][section.section-grid][populate][image_grid][populate][1]=image`);

        const json = await data.json();
        const jsonSectionsGridImage = await sectionsGridImage.json();
        const pageData = mapData([json.data[0]], jsonSectionsGridImage.data[0].sections);
        setData(() => pageData[0]);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }

        return "";
      })}
    </Base>
  );
}

export default Home;
