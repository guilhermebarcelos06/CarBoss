import React, { useState, useEffect, useMemo } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef, useMap } from '@vis.gl/react-google-maps';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ExternalLink, Loader2, Plus, Minus, Share2 } from 'lucide-react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const STORE_NAME = "CarBoss Pátio Brasil";
const STORE_ADDRESS = "Pátio Brasil Shopping, Subsolo G2, Brasília - DF";

const DARK_MAP_STYLES = [
  { "elementType": "geometry", "stylers": [{ "color": "#121212" }] },
  { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#121212" }] },
  { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#333333" }] },
  { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
  { "featureType": "administrative.land_parcel", "stylers": [{ "visibility": "off" }] },
  { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] },
  { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
  { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#181818" }] },
  { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
  { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#2c2c2c" }] },
  { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#8a8a8a" }] },
  { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#373737" }] },
  { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#3c3c3c" }] },
  { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#4e4e4e" }] },
  { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
  { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#3d3d3d" }] }
];

const MapControls = () => {
  const map = useMap();
  
  const handleZoom = (delta: number) => {
    if (!map) return;
    const currentZoom = map.getZoom() || 16;
    map.setZoom(currentZoom + delta);
  };

  return (
    <div className="absolute right-12 md:right-16 bottom-12 md:bottom-16 z-30 flex flex-col gap-2">
      <button 
        onClick={() => handleZoom(1)}
        className="w-10 h-10 md:w-12 md:h-12 glass flex items-center justify-center text-white hover:bg-brand transition-all border-white/10 group shadow-xl"
        title="Aumentar Zoom"
      >
        <Plus size={18} className="group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={() => handleZoom(-1)}
        className="w-10 h-10 md:w-12 md:h-12 glass flex items-center justify-center text-white hover:bg-brand transition-all border-white/10 group shadow-xl"
        title="Diminuir Zoom"
      >
        <Minus size={18} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default function MapSection() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const STORE_LOCATION = useMemo(() => ({ lat: -15.79549, lng: -47.89294 }), []);

  // Monitoring for global Google Maps errors which happen outside React lifecycle
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      if (e.message?.includes('google') || e.message?.includes('Maps')) {
        console.error('Google Maps Load Error detected');
      }
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (!hasValidKey) {
    return (
      <section id="localizacao" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <div className="p-12 glass rounded-none border-brand/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand" />
            <h2 className="text-3xl font-display text-white mb-6 uppercase tracking-[0.2em]">Ativação Pendente</h2>
            <p className="text-gray-400 mb-8 font-barlow text-sm leading-relaxed">
              Quase lá! Para o mapa aparecer, você precisa ativar um serviço específico no formulário do Google:
            </p>
            <div className="text-left bg-black/60 p-8 rounded-none border border-white/5 mb-8">
              <ol className="text-xs text-gray-300 space-y-4 font-medium uppercase tracking-widest">
                <li className="flex gap-4">
                  <span className="text-brand font-bold">01.</span>
                  <span>Vá em <b>APIs e Serviços &gt; Biblioteca</b> no Google Cloud.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold">02.</span>
                  <span>Pesquise por <b>"Maps JavaScript API"</b> e clique em <b>ATIVAR</b>.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold">03.</span>
                  <span>O erro `InvalidKeyMapError` desaparecerá em instantes após a ativação.</span>
                </li>
              </ol>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-brand text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark transition-all"
            >
              Já ativei, recarregar
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="localizacao" className="py-20 md:py-32 lg:py-48 bg-[#0a0a0a] border-t border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-brand mb-6 md:mb-8 flex items-center gap-5">
                <div className="w-12 h-px bg-brand" /> LOCALIZAÇÃO
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter leading-none text-white mb-8 md:mb-10">
                PÁTIO BRASIL <br /><span className="text-brand italic text-stroke">SHOPPING.</span>
              </h3>
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 glass shrink-0 flex items-center justify-center text-brand border-brand/30 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Endereço Premium</p>
                    <p className="text-white text-xl font-medium leading-tight max-w-[280px]">{STORE_ADDRESS}</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
                  <a 
                    href="https://maps.app.goo.gl/PA22qzmKPcYufxA97" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand hover:text-white transition-all group"
                  >
                    <span>TRAÇAR ROTA</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: STORE_NAME,
                          text: `Visite a CarBoss no ${STORE_ADDRESS}`,
                          url: 'https://maps.app.goo.gl/PA22qzmKPcYufxA97'
                        }).catch(console.error);
                      }
                    }}
                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-brand transition-all group"
                  >
                    <span>COMPARTILHAR</span>
                    <Share2 size={14} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-2/3 h-[450px] md:h-[650px] relative glass border-white/5 rounded-none overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Loading Overlay */}
            <AnimatePresence>
              {!mapLoaded && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-[#0a0a0a] flex flex-col items-center justify-center gap-6"
                >
                  <div className="w-full h-full absolute inset-0 animate-pulse bg-white/5" />
                  <Loader2 className="text-brand animate-spin relative z-10" size={32} />
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-500 relative z-10">Sincronizando Coordenadas...</span>
                </motion.div>
              )}
            </AnimatePresence>

            <APIProvider 
              apiKey={API_KEY} 
              version="weekly" 
              language="pt-BR"
            >
              <Map
                defaultCenter={STORE_LOCATION}
                defaultZoom={16}
                mapId="DEMO_MAP_ID"
                disableDefaultUI={true}
                gestureHandling={'greedy'}
                styles={DARK_MAP_STYLES}
                className="w-full h-full"
                onTilesLoaded={() => setMapLoaded(true)}
              >
                <MapControls />
                <AdvancedMarker
                  ref={markerRef}
                  position={STORE_LOCATION}
                  onClick={() => setInfoWindowShown(t => !t)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-12 h-12 bg-brand/20 animate-ping rounded-full" />
                    <Pin background="#e01c24" borderColor="#fff" glyphColor="#fff" scale={1.2} />
                  </div>
                </AdvancedMarker>

                {infoWindowShown && marker && (
                  <InfoWindow
                    anchor={marker}
                    onCloseClick={() => setInfoWindowShown(false)}
                  >
                    <div className="p-3 min-w-[220px] bg-white">
                      <h4 className="text-xs font-black uppercase tracking-widest text-brand mb-1">CarBoss Pátio Brasil</h4>
                      <p className="text-[10px] font-bold uppercase text-zinc-600 leading-tight">Subsolo G2 - Próximo ao Elevador</p>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
            
            {/* Visual Frame */}
            <div className="absolute inset-0 pointer-events-none border-[15px] md:border-[30px] border-[#0a0a0a]" />
            <div className="absolute inset-[15px] md:inset-[30px] pointer-events-none border border-white/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
