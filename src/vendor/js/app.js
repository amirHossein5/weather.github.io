import Alpine from 'alpinejs';

import alerts from '@vendor/js/alerts/alerts';
import getCities from '@vendor/js/api/cities-api';
import { hasRequiredData, setLocalStorageData } from '@vendor/js/helpers';
import showWeather from '@vendor/js/show-weather';

Alpine.start();
window.alerts = alerts;
window.setLocalStorageData = setLocalStorageData;

if (hasRequiredData()) {
    showWeather();
} else {
    window.getCities = getCities;
    showCityForm();
}

function showCityForm() {
    let locationForm = document.querySelector('#locationForm');

    locationForm.closest('.hidden').classList.remove('hidden');
    locationForm.querySelector('#cityInput').focus();
}
