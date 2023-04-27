import { useState } from "react";
import {  StyleSheet, Text, View, Modal, TouchableOpacity, TextInput  } from "react-native";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    senha: yup.string().min(6).required(),
  });

const MostrarSenha = () => {

    const [senha, setSenha] = useState('');
    const [modal, setModal] = useState(false);

  const ValidarSenha = () => {
    try {
      validationSchema.validateSync({ senha });
      setModal(true);
    } catch (error) {
      setModal(true);
      console.log(error.message);
    }
  }


    return(
        <View style = {styleslogin.container}>
            <TextInput placeholder="Digite a senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} value={senha}/>
            <TouchableOpacity onPress={ValidarSenha} style={styleslogin.botaosenha}><Text style={{ color:'white', fontSize: 16, fontWeight:'bold'}}>MostrarSenha</Text></TouchableOpacity>
            <Modal visible={modal} animationType="slide">
                <View style={styleslogin.container}>
                <View style={styleslogin.cartao}>
                    <Text style={{marginBottom:30, marginTop:30}}>{senha.length >= 6 ? 'Senha válida!' : 'Senha muito pequena!'}</Text>
                    <TouchableOpacity style={styleslogin.botaosair} onPress={() => setModal(false)}><Text style={{color:'white', fontSize: 16, fontWeight:'bold'}}>Fechar</Text></TouchableOpacity>
                </View>
                </View>
                
            </Modal>
        </View>
    )
}
    const styleslogin = StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        botaosenha:{
            padding:10,
            backgroundColor:'lightpurple',
            marginTop:10,
            borderRadius:30
        },
        botaosair:{
            padding:10,
            backgroundColor:'blue',
    
            borderRadius:30
        },
        cartao:{
        width: 200,
        height: 160,
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        marginTop: 100,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 50,
        elevation:3,
        }
    })

export default MostrarSenha;
