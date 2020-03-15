import Geocode from 'react-geocode';
import { API_KEY } from './API_KEY';
Geocode.setApiKey(API_KEY);
Geocode.setLanguage('en');
Geocode.setRegion('gr');
Geocode.enableDebug();
export default Geocode;
