import {Count} from './samples/Count';
import {Each} from './samples/Each';
import {Hide} from './samples/Hide';
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
      return <p>Not implemented</p>;
    case 'Map':
      return <p>Not implemented</p>;
    case 'Wrap':
      return <p>Not implemented</p>;
    case 'Inject':
      return <p>Not implemented</p>;
  }
};
