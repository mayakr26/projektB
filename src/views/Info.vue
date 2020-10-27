<template>
<div id="info">
    <div id="btn">
        <b-button :to="{path: '/'}">
            <b-icon icon="map" aria-hidden="true" class="mr-1"></b-icon> Map
        </b-button>
    </div>
    <h1>Info</h1>
    <div id="infotext">
        <p> Auf dem <strong>Steindamm</strong> im räumlichen Bereich von der Hausnummer 33 bis zum <strong>Steintorplatz </strong>, täglich von <em>12 Uhr bis 22 Uhr</em></p>
        <p> In der <strong>Stralsunder Straße</strong>, täglich von <em>12 Uhr bis 22 Uhr </em></p>
        <p> Auf dem <strong>Steintorplatz</strong> einschließlich der angrenzenden öffentlichen Wege, Straßen und Plätze, abgegrenzt durch die Bahnüberführung der Straße Steintordamm, dem Gebäude des Museums für Kunst und Gewerbe, dem Gebäude des Zentralen Omnibusbahnhofs, dem Gebäude mit der Hausnummer Steindamm 2, dem Gebäude mit der Hausnummer Steindamm 1, den Gebäuden mit den Hausnummern Steintorplatz 3 und Kirchenallee 57 sowie dem Gebäude des Hauptbahnhofs, täglich von <em>12 Uhr bis 22 Uhr</em> </p>
        <p> Auf dem <strong>Ballindamm</strong> im räumlichen Bereich vor dem Gebäude mit der Hausnummer 40, abgegrenzt durch die Straßen Ballindamm und Bergstraße, täglich von <em>15 Uhr bis 18 Uhr</em></p>
        <p> In der Straße <strong>Große Freiheit</strong> im räumlichen Bereich von der Hausnummer 1 bis zur Hausnummer 47, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von <em>18 Uhr bis 4 Uhr am Folgetag </em></p>
        <p> In der Straße <strong>Hamburger Berg</strong> im räumlichen Bereich der Hausnummern 1 bis 39, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von <em>18 Uhr bis 4 Uhr am Folgetag</em></p>
        <p> In der <strong>Talstraße</strong> im räumlichen Bereich der Hausnummern 1 bis 36, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von <em>18 Uhr bis 4 Uhr am Folgetag </em></p>
        <p> Auf dem <strong>Hans-Albers-Platz </strong>einschließlich der <strong>Friedrichstraße</strong> im räumlichen Bereich zwischen und einschließlich den Hausnummern 11 beziehungsweise 24 bis 21 beziehungsweise 28, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von <em>18 Uhr bis 4 Uhr am Folgetag </em></p>
        <p> Auf der Straße <strong>Reeperbahn</strong> einschließlich der Plätze <strong>Nobistor und Spielbudenplatz</strong>, abgegrenzt durch den Millerntorplatz, die Straße Zirkusweg, die Holstenstraße und den Finkenpark sowie in der Straße Spielbudenplatz im räumlichen Bereich der Hausnummern 1 bis 31, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von <em>18 Uhr bis 4 Uhr am Folgetag </em></p>
        <p> Auf der Straße <strong>Schulterblatt</strong> im räumlichen Bereich zwischen den Straßen Susannenstraße und Rosenhofstraße, freitags, sonnabends sowie an Feiertagen und tags zuvor, jeweils von <em>20 Uhr bis 24 Uhr </em></p>
        <p> Auf dem <strong>Alma-Wartenberg-Platz</strong> einschließlich der Bahrenfelder Straße im räumlichen Bereich zwischen und einschließlich den Hausnummern 135 beziehungsweise 146 und den Hausnummern 183 beziehungsweise 188, der Kleinen Rainstraße im räumlichen Bereich bis zu und einschließlich den Hausnummern 3 beziehungsweise 6, der Nöltingstraße im räumlichen Bereich bis zu und einschließlich den Hausnummern 5 beziehungsweise 12, der Friedensallee im räumlichen Bereich bis zu und einschließlich den Hausnummern 7 beziehungsweise 14 sowie der Bergiusstraße im räumlichen Bereich bis zu der Hausnummer 7, freitags und sonnabends von <em>19 Uhr bis 3 Uhr am Folgetag</em> </p>
        <p> In der Straße <strong>Hohenesch</strong> im räumlichen Bereich von und einschließlich den Hausnummern 1 beziehungsweise 6 bis zur Bahrenfelder Straße, freitags und sonnabends von <em>19 Uhr bis 3 Uhr am Folgetag </em></p>
        <p> In der Straße <strong>Mühlenkamp</strong> im räumlichen Bereich zwischen der Körnerstraße und der Preystraße, täglich von <em>12 Uhr bis 1 Uhr am Folgetag </em></p>
        <p> Auf den <strong>Sankt-Pauli-Landungsbrücken</strong> einschließlich der dort befindlichen Pontonanlage und den Brücken 1 bis 10, montags bis freitags jeweils von 6 Uhr bis 18 Uhr sowie sonnabends und sonntags jeweils von <em>11 Uhr bis 18 Uhr</em> </p>
        <p> (Stand: 10.10.2020) </p>
    </div>
</div>
</template>

<style lang="scss">
#info {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;

    h1 {
        display: block;
        text-align: center
    }

    #infotext {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        margin: 20px;
        text-align: left;
        color: #2c3e50;
    }

    #btn {
        text-align: left;
        margin: 10px
    }
}
</style>
