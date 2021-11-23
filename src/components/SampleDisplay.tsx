import {Count} from './samples/Count';
import {Each} from './samples/Each';
import {Filter} from './samples/Filter';
import {Hide} from './samples/Hide';
import {Map} from './samples/Map';
import {Sample} from 'types';

export type SampleDisplayPros = {
  sample: Sample;
}
export const SampleDisplay = ({sample}: SampleDisplayPros): JSX.Element => {
  switch (sample) {
    case 'Hide':
      return <Hide><p>This is the child</p></Hide>;
    case 'Each':
      return <Each/>;
    case 'Count':
      return <Count/>;
    case 'Filter':
      return <Filter/>;
    case 'Map':
      return <Map/>;
    case 'Inject':
      return <p>Not implemented</p>;
  }
};
