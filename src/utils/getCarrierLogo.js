import { URL_CARRIER } from '../middleware/api';

const getCarrierLogo = (carrier) => `${URL_CARRIER}${carrier}.png`;

export default getCarrierLogo;
