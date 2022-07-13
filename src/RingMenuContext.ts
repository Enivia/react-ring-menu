import { createContext, useContext } from 'react';
import { ActiveMenuItem } from './interface';
import SectorHelper from './SectorHelper';

const RingMenuContext = createContext<{ helper: SectorHelper; activeItems: ActiveMenuItem[] }>({
  helper: new SectorHelper(0, 0),
  activeItems: [],
});
export default RingMenuContext;

export function useRingMenuContext() {
  return useContext(RingMenuContext);
}
