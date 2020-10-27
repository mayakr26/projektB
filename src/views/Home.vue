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
        height: 80vh;
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
