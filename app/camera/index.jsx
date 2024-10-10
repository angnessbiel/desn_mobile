import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, Alert, TouchableWithoutFeedback } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library"; 
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Linking } from 'react-native';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');
    const [permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions();
    const [scanear, setScanear] = useState(false);

    if (!permissao) {
        return <View />;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você precisa permitir o aplicativo acessar sua câmera</Text>
                <Button title="Pedir permissão" onPress={pedirPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(foto);
        console.log(foto);
    };

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    const salvarFoto = async () => {
        if (permissaoSalvar.status !== 'granted') {
            await pedirPermissaoSalvar();
        }
        if (foto && foto.uri) {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            setFoto(null);
        }
    };

    const descartarFoto = () => {
        setFoto(null);
    };

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanear(false);
        const supported = await Linking.canOpenURL(data);
        if (supported) {
            await Linking.openURL(data);
        } else {
            Alert.alert("Não foi possível abrir o link.");
        }
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View style={styles.previewContainer}>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <View style={styles.sectionButton3}>
                        <TouchableWithoutFeedback onPress={salvarFoto}>
                            <Image
                               source={require('./assets/save.png')}
                               style={styles.buttonsave}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={descartarFoto}>
                            <Image
                               source={require('./assets/delet.png')}
                               style={styles.buttonSecundario}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            ) : scanear ? (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            ) : (
                <CameraView style={styles.camera} facing={ladoCamera} ref={cameraRef}>
                        <View style={styles.sectionButtons}>
                        <TouchableWithoutFeedback onPress={tirarFoto}>
                            <Image
                               source={require('./assets/foto.png')}
                                style={styles.buttonFoto}
                            />
                        </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.sectionButtons2}>

                        <TouchableWithoutFeedback onPress={() => setScanear(true)}>
                            <Image
                               source={require('./assets/qr.png')}
                                style={styles.buttonSecundario}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={inverterLadoCamera}>
                            <Image
                               source={require('./assets/invert.png')}
                                style={styles.buttonSecundario}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textopermissao: {
        textAlign: 'center',
    },
    camera: {
        flex: 1,
    },
    previewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    sectionButtons: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    sectionButtons2: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        marginBottom: 75,
    },
    sectionButton3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginBottom: 75,
    },    
    image: {
        width: '100%',
        height: '100%',
    },
    buttonFoto: {
        width: 100, 
        height: 100,
    },
    buttonSecundario: {
        width: 60, 
        height: 55,
    },
    buttonsave: {
        width: 60, 
        height: 55,
        marginLeft: 30,
    }
    
});