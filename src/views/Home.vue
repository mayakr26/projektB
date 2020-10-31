<template>
<div id="home">
    <div id="btn">
        <b-button :to="{path: 'info'}">
            <b-icon icon="card-text" aria-hidden="true" class="mr-1"></b-icon> Info
        </b-button>
    </div>
    <br>
    <h1>Wo muss ich eine Maske draußen tragen</h1>
    <div id="map"></div>
    <button id="asdasd" @click="exportGeo">Export</button>
</div>
</template>

<script>
import L from 'leaflet'
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

export default {

    data() {
        return {
            map: null
        }
    },

    mounted() {
        this.map = L.map('map').setView([53.56, 10], 14);
        const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        });

        this.map.pm.addControls({
            position: 'topleft',
            drawCircle: false,
        });

        tiles.addTo(this.map);

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
                    description: "Fr-Sa & Feiertagen und tags zuvor, jeweils von 18-4 Uhr"
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
                    description: "Fr-Sa & Feiertagen und tags zuvor,jeweils von 20-24 Uhr "
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
                    description: "freitags und sonnabends von 19 Uhr bis 3 Uhr am Folgetag"
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
        L.geoJSON(data).bindTooltip(function (layer) {
            return layer.feature.properties.description || '';
        }).addTo(this.map);
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
        height: 100vh;
        width: 100%
    }

    #btn {
        text-align: left;
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
