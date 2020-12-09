<template>
  <div id="home">
    <div id="top">
      <b-button variant="primary" :to="{ path: 'info' }">
        <b-icon icon="card-text" aria-hidden="true" class="mr-1"></b-icon> Info
      </b-button>
      <p id="maskParagraph"></p>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import "@/plugins/contains";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import data from "@/data/polygons";

export default {
  data() {
    return {
      map: null,
    };
  },

  mounted() {
    this.$alert(
      "In den blau markierten Feldern musst du draußen eine Maske tragen. Für mehr Informationen klicke auf den Info-Button "
    );

    var point = [];

    this.map = L.map("map").setView([53.56, 10], 14);
    this.tiles = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        api_key: process.env.VUE_APP_STADIA_TOKEN,
        accessToken: process.env.VUE_APP_STADIA_TOKEN,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ).addTo(this.map);

    this.features = L.geoJSON(data)
      .bindTooltip(function (layer) {
        return layer.feature.properties.description || "";
      })
      .addTo(this.map);

    const doLocation = (location) => {
      const defaultMarker =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=";

      const defaultMarkerShadow =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";

      var defaultIcon = new L.Icon({
        iconUrl: defaultMarker,
        iconAnchor: [12, 41],
        shadowUrl: defaultMarkerShadow,
      });

      point = [location.coords.latitude, location.coords.longitude];

      let marker = L.marker(point, {
        icon: defaultIcon,
      }).addTo(this.map);

      marker.bindPopup("Hier bist du").openPopup();

      //example position which is in one of the polygons
      //let marker1 = L.marker([53.580370, 10.012441]);

      var isInsidePolygon = false;
      if (this.features._layers) {
        for (var f in this.features._layers) {
          var sameWeekday = false;
          var rightWeekday = false;
          var feature = this.features._layers[f];

          var rightTime =
            this.getNow().time >= feature.feature.properties.hours[0].hour_from ||
            this.getNow().time <= feature.feature.properties.hours[0].hour_to;
          for (var i = 0; i < feature.feature.properties.hours[0].weekday.length; i++) {
            rightWeekday =
              feature.feature.properties.hours[0].weekday[i] == this.getNow().weekday;
            if (rightWeekday) {
              sameWeekday = true;
            }
          }

          if (feature.contains(marker.getLatLng()) && sameWeekday && rightTime) {
            isInsidePolygon = true;
          }
        }
      }
      if (isInsidePolygon) {
        document.getElementById("maskParagraph").innerHTML =
          "Maske draußen: <strong>Ja</strong>";
      } else {
        document.getElementById("maskParagraph").innerHTML =
          "Maske draußen: <strong>Nein</strong>";
      }
    };

    navigator.geolocation.getCurrentPosition(doLocation);
  },

  methods: {
    getNow() {
      const today = new Date();
      const weekday = today.getDay();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return {
        weekday,
        time,
      };
    },
  },
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";

#home {
  h1 {
    text-align: center;
  }

  #map {
    height: 90vh;
    width: 100%;
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
