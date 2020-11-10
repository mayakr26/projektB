<template>
<div id="home">

    <div id="top">
        <b-button variant="primary" :to="{path: 'info'}">
            <b-icon icon="card-text" aria-hidden="true" class="mr-1"></b-icon> Info
        </b-button>
        <p id="maskParagraph"></p>
    </div>

    <div id="map"></div>
    <!--<button id="asdasd" @click="exportGeo">Export</button> -->
</div>
</template>

<script>
import L from 'leaflet'
import '@/plugins/contains'
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import geolocator from 'geolocator';
import Vue from 'vue'
import VueSimpleAlert from "vue-simple-alert";

export default {

    data() {
        return {
            map: null
        }
    },

    mounted() {
        Vue.use(VueSimpleAlert);
        this.$alert("In den blau markierten Feldern musst du draußen eine Maske tagen. Für mehr Informationen klicke auf den Info-Button ");

        var point = [];

        this.map = L.map('map').setView([53.56, 10], 14);
        const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        });

        /*this.map.pm.addControls({
            position: 'topleft',
            drawCircle: false,
        });
        */
        tiles.addTo(this.map);

        // this.map.on('locationfound', this.onLocationFound);
        // this.map.on('locationerror', this.onLocationError);

        // this.map.locate({
        //     setView: true,
        //     maxZoom: 16
        // });

        let data = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    description: "täglich von 12 Uhr bis 22 Uhr"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [10.014524, 53.554581],
                            [10.013414, 53.554081],
                            [10.012813, 53.554447],
                            [10.013237, 53.554055],
                            [10.009945, 53.552642],
                            [10.009859, 53.552374],
                            [10.009516, 53.552671],
                            [10.008797, 53.552604],
                            [10.008852, 53.551977],
                            [10.013256, 53.552245],
                            [10.013213, 53.552617],
                            [10.010268, 53.552458],
                            [10.010268, 53.552621],
                            [10.013204, 53.55389],
                            [10.013537, 53.553871],
                            [10.014524, 53.554581]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "properties": {
                    description: "täglich von 15 Uhr bis 18 Uhr"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [9.994913, 53.551316],
                            [9.996421, 53.552128],
                            [9.996802, 53.551892],
                            [9.995251, 53.551086],
                            [9.994913, 53.551316]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "properties": {
                    description: "Fr-Sa sowie an Feiertagen und tags zuvor, <br> jeweils von 18 Uhr bis 4 Uhr am Folgetag"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [9.969533, 53.55083],
                            [9.97009, 53.550614],
                            [9.969854, 53.549951],
                            [9.96743, 53.549926],
                            [9.967365, 53.549687],
                            [9.962491, 53.54914],
                            [9.962424, 53.549455],
                            [9.961925, 53.549299],
                            [9.961065, 53.549312],
                            [9.9611, 53.548577],
                            [9.962604, 53.548613],
                            [9.962645, 53.548478],
                            [9.961108, 53.548443],
                            [9.960521, 53.548297],
                            [9.957917, 53.547574],
                            [9.957815, 53.547708],
                            [9.960384, 53.548383],
                            [9.960609, 53.548826],
                            [9.960828, 53.549323],
                            [9.95546, 53.549519],
                            [9.955637, 53.550203],
                            [9.95718, 53.549964],
                            [9.957729, 53.551695],
                            [9.958169, 53.551644],
                            [9.957718, 53.549905],
                            [9.959896, 53.549695],
                            [9.960014, 53.551479],
                            [9.960529, 53.55139],
                            [9.960379, 53.549733],
                            [9.961065, 53.549759],
                            [9.960969, 53.551364],
                            [9.961516, 53.5513],
                            [9.961698, 53.549619],
                            [9.967391, 53.550236],
                            [9.969533, 53.55083]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "properties": {
                    description: "Fr-Sa & Feiertagen und tags zuvor,<br>jeweils von 20-24 Uhr "
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [9.960812, 53.562731],
                            [9.961295, 53.562891],
                            [9.962502, 53.561894],
                            [9.962003, 53.561665],
                            [9.960812, 53.562731]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "properties": {
                    description: "freitags und sonnabends von<br>19 Uhr bis 3 Uhr am Folgetag"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [9.928427, 53.555192],
                            [9.928679, 53.555176],
                            [9.928706, 53.554759],
                            [9.929581, 53.554638],
                            [9.929602, 53.554498],
                            [9.928765, 53.554615],
                            [9.928997, 53.553792],
                            [9.92933, 53.553867],
                            [9.929425, 53.55375],
                            [9.928984, 53.553635],
                            [9.929438, 53.55332],
                            [9.929168, 53.55322],
                            [9.928436, 53.553806],
                            [9.928155, 53.55343],
                            [9.927855, 53.5535],
                            [9.928236, 53.553911],
                            [9.928069, 53.553991],
                            [9.927467, 53.553693],
                            [9.927245, 53.553844],
                            [9.927918, 53.554126],
                            [9.927134, 53.554571],
                            [9.927435, 53.554755],
                            [9.928207, 53.554234],
                            [9.928454, 53.554374],
                            [9.928427, 53.555192]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "properties": {
                    description: "täglich von 12 Uhr bis 1 Uhr am Folgetag"

                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [10.011394, 53.582019],
                            [10.010857, 53.581885],
                            [10.012756, 53.579479],
                            [10.013368, 53.579695],
                            [10.011394, 53.582019]
                        ]
                    ]
                }
            }, {
                "type": "Feature",
                "properties": {
                    description: "Mo-Fr: 6-18 Uhr & So-Sa: 11-18 Uhr"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [9.96654, 53.546008],
                            [9.970037, 53.545721],
                            [9.972161, 53.545212],
                            [9.973545, 53.544473],
                            [9.97317, 53.544243],
                            [9.970241, 53.545014],
                            [9.966776, 53.545174],
                            [9.963052, 53.545323],
                            [9.961142, 53.545177],
                            [9.961132, 53.545285],
                            [9.963009, 53.54547],
                            [9.963063, 53.545559],
                            [9.964436, 53.545527],
                            [9.964361, 53.545814],
                            [9.96654, 53.546008]
                        ]
                    ]
                }
            }]
        };
        this.features = L.geoJSON(data).bindTooltip(function (layer) {
            return layer.feature.properties.description || '';
        }).addTo(this.map);

        // const defaultMarker = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';

        // const defaultMarkerShadow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';

        // var defaultIcon = new L.Icon({
        //     iconUrl: defaultMarker,
        //     iconAnchor: [12, 41],
        //     shadowUrl: defaultMarkerShadow,
        // });

        // navigator.geolocation.getCurrentPosition(
        //     position => {
        //         var lat = position.coords.latitude;
        //         var lon = position.coords.longitude;
        //         console.log([lon, lat]);
        //         L.marker([lon, lat], {
        //             icon: defaultIcon
        //         }).addTo(this.map);
        //         L.circle([lat, lon], 30, {
        //             color: '#8a8a8a'
        //         }).addTo(this.map);
        //     }
        // );

        geolocator.config({
            language: "de",
            google: {
                version: "3",
                key: process.env.VUE_APP_GOOGLE_TOKEN
            }
        });

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumWait: 10000, // max wait time for desired accuracy
            maximumAge: 0, // disable cache
            desiredAccuracy: 30, // meters
            fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
            addressLookup: true, // requires Google API key if true
            timezone: true, // requires Google API key if true
            staticMap: false // get a static map image URL (boolean or options object)
        }

        geolocator.locate(options, (err, location) => {
            if (err) return console.log(err);
            console.log(location);

            const defaultMarker = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';

            const defaultMarkerShadow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';

            var defaultIcon = new L.Icon({
                iconUrl: defaultMarker,
                iconAnchor: [12, 41],
                shadowUrl: defaultMarkerShadow,
            });

            point = [location.coords.latitude, location.coords.longitude];
            console.log(point);

            let marker = L.marker(point, {
                icon: defaultIcon
            }).addTo(this.map)

            marker.bindPopup("Hier bist du").openPopup();

            var isInsidePolygon = false;

            //example position which is in one of the polygons
            //let marker1 = L.marker([53.552306, 10.010126]);

            //this.isMarkerInsidePolygon(point, num1.toGeoJSON().geometry.coordinates[0]);

            if (this.features._layers) {
                for (var f in this.features._layers) {
                    var feature = this.features._layers[f];
                    console.log(feature.contains(marker.getLatLng()));
                    if (feature.contains(marker.getLatLng())) {
                        isInsidePolygon = true;
                    }
                }
            }

            if (isInsidePolygon) {
                document.getElementById("maskParagraph").innerHTML = "Maske draußen: <strong>Ja</strong>";
            } else {
                document.getElementById("maskParagraph").innerHTML = "Maske draußen: <strong>Nein</strong>";
            }

        });

    },

    methods: {
        exportGeo() {
            var collection = {
                "type": "FeatureCollection",
                "features": []
            };

            // Iterate the layers of the map
            this.map.eachLayer(function (layer) {
                // Check if layer is a marker
                if (layer instanceof L.Marker || layer instanceof L.Polyline || layer instanceof L.Polygon) {
                    // Create GeoJSON object from marker
                    var geojson = layer.toGeoJSON();
                    // Push GeoJSON object to collection
                    collection.features.push(geojson);
                }
            });

            console.log(collection)
            console.log(JSON.stringify(collection))
        },

        onLocationFound(e) {
            var radius = e.accuracy;

            const defaultMarker = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';

            const defaultMarkerShadow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';

            var defaultIcon = new L.Icon({
                iconUrl: defaultMarker,
                iconAnchor: [12, 41],
                shadowUrl: defaultMarkerShadow,
            });

            L.marker(e.latlng, {
                icon: defaultIcon
            }).addTo(this.map).bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng, radius, {
                color: '#8a8a8a'
            }).addTo(this.map);
            console.log(e.latlng);

        },

        onLocationError(e) {
            alert(e.message);
        }
    }
}
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";

#home {
    h1 {
        text-align: center
    }

    #map {
        height: 90vh;
        width: 100%
    }

    #top {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    #asdasd {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 10000;
    }

    #menu {
        position: fixed;
        top: 0;
        left: 0;
    }
}
</style>
