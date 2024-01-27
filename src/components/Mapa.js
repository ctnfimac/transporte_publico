import { MapContainer, TileLayer } from 'react-leaflet';
import React from 'react';

const Mapa = () => (
  <>
    <MapContainer className="mapa" center={[-34.62, -58.44]} zoom={13} maxZoom={18} minZoom={11} scrollWheelZoom={true}>
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/fotografias_aereas_2017_caba_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
        /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png"
        />

      </MapContainer>


   </>
)

export default Mapa;