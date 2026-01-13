var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_F4map2D_1 = new ol.layer.Tile({
            'title': 'F4map 2D',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });
var format_ZmianawystpowaniakorytarzekiBug_2 = new ol.format.GeoJSON();
var features_ZmianawystpowaniakorytarzekiBug_2 = format_ZmianawystpowaniakorytarzekiBug_2.readFeatures(json_ZmianawystpowaniakorytarzekiBug_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZmianawystpowaniakorytarzekiBug_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZmianawystpowaniakorytarzekiBug_2.addFeatures(features_ZmianawystpowaniakorytarzekiBug_2);
var lyr_ZmianawystpowaniakorytarzekiBug_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZmianawystpowaniakorytarzekiBug_2, 
                style: style_ZmianawystpowaniakorytarzekiBug_2,
                popuplayertitle: 'Zmiana występowania koryta rzeki Bug',
                interactive: true,
    title: 'Zmiana występowania koryta rzeki Bug<br />\
    <img src="styles/legend/ZmianawystpowaniakorytarzekiBug_2_0.png" /> poniżej -40%<br />\
    <img src="styles/legend/ZmianawystpowaniakorytarzekiBug_2_1.png" /> -40% - -15%<br />\
    <img src="styles/legend/ZmianawystpowaniakorytarzekiBug_2_2.png" /> -15% - 0%<br />\
    <img src="styles/legend/ZmianawystpowaniakorytarzekiBug_2_3.png" /> 0% - 10%<br />\
    <img src="styles/legend/ZmianawystpowaniakorytarzekiBug_2_4.png" /> 10% - 50%<br />\
    <img src="styles/legend/ZmianawystpowaniakorytarzekiBug_2_5.png" /> powyżej 50%<br />' });
var format_RzekaBugw2025r_3 = new ol.format.GeoJSON();
var features_RzekaBugw2025r_3 = format_RzekaBugw2025r_3.readFeatures(json_RzekaBugw2025r_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RzekaBugw2025r_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RzekaBugw2025r_3.addFeatures(features_RzekaBugw2025r_3);
var lyr_RzekaBugw2025r_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RzekaBugw2025r_3, 
                style: style_RzekaBugw2025r_3,
                popuplayertitle: 'Rzeka Bug w 2025 r.',
                interactive: false,
                title: '<img src="styles/legend/RzekaBugw2025r_3.png" /> Rzeka Bug w 2025 r.'
            });
var format_RzekaBugw2022r_4 = new ol.format.GeoJSON();
var features_RzekaBugw2022r_4 = format_RzekaBugw2022r_4.readFeatures(json_RzekaBugw2022r_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RzekaBugw2022r_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RzekaBugw2022r_4.addFeatures(features_RzekaBugw2022r_4);
var lyr_RzekaBugw2022r_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RzekaBugw2022r_4, 
                style: style_RzekaBugw2022r_4,
                popuplayertitle: 'Rzeka Bug w 2022 r.',
                interactive: false,
                title: '<img src="styles/legend/RzekaBugw2022r_4.png" /> Rzeka Bug w 2022 r.'
            });
var format_RzekaBugw1940r_5 = new ol.format.GeoJSON();
var features_RzekaBugw1940r_5 = format_RzekaBugw1940r_5.readFeatures(json_RzekaBugw1940r_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RzekaBugw1940r_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RzekaBugw1940r_5.addFeatures(features_RzekaBugw1940r_5);
var lyr_RzekaBugw1940r_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RzekaBugw1940r_5, 
                style: style_RzekaBugw1940r_5,
                popuplayertitle: 'Rzeka Bug w 1940 r.',
                interactive: false,
                title: '<img src="styles/legend/RzekaBugw1940r_5.png" /> Rzeka Bug w 1940 r.'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_F4map2D_1.setVisible(true);lyr_ZmianawystpowaniakorytarzekiBug_2.setVisible(true);lyr_RzekaBugw2025r_3.setVisible(true);lyr_RzekaBugw2022r_4.setVisible(true);lyr_RzekaBugw1940r_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_F4map2D_1,lyr_ZmianawystpowaniakorytarzekiBug_2,lyr_RzekaBugw2025r_3,lyr_RzekaBugw2022r_4,lyr_RzekaBugw1940r_5];
lyr_ZmianawystpowaniakorytarzekiBug_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'ProcentHIS': 'ProcentHIS', 'ProcentVMA': 'ProcentVMA', 'ProcentSen': 'ProcentSen', 'vmapVShist': 'vmapVShist', 'SentinelVS': 'SentinelVS', 'Sentinel_1': 'Sentinel_1', 'Procent': 'Procent', });
lyr_RzekaBugw2025r_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Obwod': 'Obwod', 'Powierzchn': 'Powierzchn', 'WspZwartos': 'WspZwartos', });
lyr_RzekaBugw2022r_4.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Obwod': 'Obwod', 'Powierzch': 'Powierzch', 'WspZwartos': 'WspZwartos', });
lyr_RzekaBugw1940r_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Obwod': 'Obwod', 'Powierzchn': 'Powierzchn', 'WspZwartos': 'WspZwartos', });
lyr_ZmianawystpowaniakorytarzekiBug_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'ProcentHIS': 'TextEdit', 'ProcentVMA': 'TextEdit', 'ProcentSen': 'TextEdit', 'vmapVShist': 'TextEdit', 'SentinelVS': 'TextEdit', 'Sentinel_1': 'TextEdit', 'Procent': 'TextEdit', });
lyr_RzekaBugw2025r_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Obwod': 'TextEdit', 'Powierzchn': 'TextEdit', 'WspZwartos': 'TextEdit', });
lyr_RzekaBugw2022r_4.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Obwod': 'TextEdit', 'Powierzch': 'TextEdit', 'WspZwartos': 'TextEdit', });
lyr_RzekaBugw1940r_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Obwod': 'TextEdit', 'Powierzchn': 'TextEdit', 'WspZwartos': 'TextEdit', });
lyr_ZmianawystpowaniakorytarzekiBug_2.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'GRID_ID': 'hidden field', 'ProcentHIS': 'hidden field', 'ProcentVMA': 'hidden field', 'ProcentSen': 'hidden field', 'vmapVShist': 'hidden field', 'SentinelVS': 'hidden field', 'Sentinel_1': 'hidden field', 'Procent': 'header label - visible with data', });
lyr_RzekaBugw2025r_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Obwod': 'no label', 'Powierzchn': 'no label', 'WspZwartos': 'no label', });
lyr_RzekaBugw2022r_4.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Obwod': 'no label', 'Powierzch': 'no label', 'WspZwartos': 'no label', });
lyr_RzekaBugw1940r_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Obwod': 'no label', 'Powierzchn': 'no label', 'WspZwartos': 'no label', });
lyr_RzekaBugw1940r_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});