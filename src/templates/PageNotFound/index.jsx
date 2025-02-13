import { GridContent } from '../../components/GridContent';
import React from 'react';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="A página que você busca não foi encontrada. [Clique aqui para voltar](/)"
    />
  );
};