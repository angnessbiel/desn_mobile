import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Modal, StyleSheet } from 'react-native';

const SaldoDisplay = ({ saldo }) => (
  <View style={styles.saldoContainer}>
    <Text style={styles.saldoText}>Saldo: R$ {saldo.toFixed(2)}</Text>
  </View>
);

const TransacaoModal = ({ visible, message, onClose }) => (
  <Modal
    transparent={true}
    visible={visible}
    animationType="slide"
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{message}</Text>
        <Pressable style={styles.modalButton} onPress={onClose}>
          <Text style={styles.modalButtonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);

const App = () => {
  const [saldo, setSaldo] = useState(7320.92);
  const [valor, setValor] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagemModal, setMensagemModal] = useState('');

  const handleSacar = () => {
    const valorSaque = parseFloat(valor);
    if (!isNaN(valorSaque) && valorSaque > 0) {
      const multa = 0.025 * saldo;
      const novoSaldo = saldo - valorSaque - multa;
      setSaldo(novoSaldo);
      setMensagemModal(`Saque realizado. Multa aplicada: R$ ${multa.toFixed(2)}`);
      setValor('');
      setModalVisible(true);
    } else {
      setMensagemModal('Valor de saque inválido.');
      setModalVisible(true);
    }
  };

  const handleDepositar = () => {
    const valorDeposito = parseFloat(valor);
    if (!isNaN(valorDeposito) && valorDeposito > 0) {
      const bonus = 0.01 * valorDeposito;
      const novoSaldo = saldo + valorDeposito + bonus;
      setSaldo(novoSaldo);
      setMensagemModal(`Depósito realizado. Bônus aplicado: R$ ${bonus.toFixed(2)}`);
      setValor('');
      setModalVisible(true);
    } else {
      setMensagemModal('Valor de depósito inválido.');
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <SaldoDisplay saldo={saldo} />
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Pressable style={styles.button} onPress={handleSacar}>
        <Text style={styles.buttonText}>Sacar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleDepositar}>
        <Text style={styles.buttonText}>Depositar</Text>
      </Pressable>
      <TransacaoModal
        visible={modalVisible}
        message={mensagemModal}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  saldoContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#E8F0FE',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  saldoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 12,
    marginBottom: 20,
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 25,
    margin: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#28A745',
    padding: 12,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;