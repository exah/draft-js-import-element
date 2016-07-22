/* @flow */
import camelizeStyleName from 'fbjs/lib/camelizeStyleName';

export default function cssToObject(css: string): Object {
  return css.split(';').reduce((ruleMap, ruleString) => {
    if (ruleString.trim() === '') {
      return ruleMap;
    }

    const [prop, value] = ruleString.split(':');
    const nextProp = camelizeStyleName(prop.trim());

    ruleMap[nextProp] = value.trim();

    return ruleMap;
  }, {});
}
