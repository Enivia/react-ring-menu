import { createContext, useContext } from 'react';
import SectorHelper from './SectorHelper';

const RingMenuContext = createContext<{ helper: SectorHelper }>({ helper: new SectorHelper(0, 0) });
export default RingMenuContext;

export function useRingMenuContext() {
  return useContext(RingMenuContext);
}
