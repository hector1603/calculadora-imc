import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [estatura, setEstatura] = useState();
  const [peso, setPeso] = useState();
  const [result, setResult] = useState();
  const [resultMsg, setResultMsg] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titulo}>Calculadora del índice de masa corporal (IMC)</Text>
      </View>
      <View style={styles.calculator}>
        <TextInput
          style={styles.input}
          placeholder = 'Estatura en cm.'
          onChangeText={(txt) => {
            setEstatura(txt);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder = 'Peso en kg.'
          onChangeText={(txt) => {
            setPeso(txt);
          }}
        />
        <Button
          style={styles.btn}
          title='Calcular'
          onPress={() => {
            let result = parseFloat(peso) / (parseFloat(estatura) * parseFloat(estatura));
            let resultadoRedondeado = result.toFixed(1);
            setResult(resultadoRedondeado); 
            
            if(resultadoRedondeado < 18.5) {
              setResultMsg("Peso inferior al normal 😥");
            } else if(resultadoRedondeado >= 18.5 && resultadoRedondeado < 24.9) {
              setResultMsg("Normal 😃");
            } else if(resultadoRedondeado >= 25.0 && resultadoRedondeado < 29.9) {
              setResultMsg("Peso superior al normal 😟");
            } else if(resultadoRedondeado >= 30) {
              setResultMsg("Obesidad 🫢");
            }
          }}
        />
      </View>
      <View style={styles.result}>
        <Text style={styles.titulo}>Resultado: </Text>
        <TextInput
          style={styles.inputResult}
          value={result}
        />
      </View>
      <View style={styles.resultTxt}>
        <Text style={styles.titulo}>{resultMsg}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    flex: 2,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  titulo: {
    marginBottom: 20,
    fontSize: 16
  },
  calculator: {
    flex: 3,
    justifyContent:'flex-start'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  btn: {
    marginTop: 10,

  },
  result: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center'
  },
  resultTxt: {
    flex: 1
  },
  inputResult: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 230
  }

});
