import React from 'react';
import ComponentText from '@docs/components/component-example-text';
import useComponentExample from '@docs/hooks/use-component-example';
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types';
import MuiTextarea from '@data-driven-forms/mui-component-mapper/dist/cjs/textarea';

const mappers = {
  mui: {
    [componentTypes.TEXTAREA]: MuiTextarea
  }
};

export default () => {
  const [component, baseStructure, activeMapper] = useComponentExample();
  return <ComponentText component={component} baseStructure={baseStructure} activeMapper={activeMapper} componentMapper={mappers.mui} />;
};
