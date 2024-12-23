import { StyleSheet, Text, View, Image, TextInput, 
    ImageBackground, TouchableOpacity, Alert } from "react-native";
import React, {useEffect} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute} from "@react-navigation/native";



const LoginScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => { 
        if (route.params?.resetSuccess) 
        {
             Alert.alert('Success', 'Password reset successfully, kindly proceed with Login.'); 
        } else if (route.params?.signupSuccess) { 
            Alert.alert('Welcome!', 'Your account has been created successfully. Please log in.');
         } else if (route.params?.loggedOut) {
             Alert.alert('Logged Out', 'You have been logged out successfully.'); 
            } }, [route.params]);

    const handleRegister = () => {
        navigation.navigate("Signup");
    }
    const handleLogin = () => {
        navigation.navigate("HomeScreen");
    }

    const handleForgetPassword = () => {
        navigation.navigate("ForgetPassword")
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.topImageContainer}>
            <Image source = {require("../assets/topVector.png")} 
            style = {styles.topImage} 
            resizeMode="contain"
            />
        </View>
        <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Login </Text>
      </View>
      <View>
        <Text style={styles.signInText}>Login in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome 
        name={"user"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput style= {styles.textInput} placeholder = "Username"/>
      </View>
      <View style={styles.inputContainer}>
        <Fontiso 
        name={"locked"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput 
        style= {styles.textInput} 
        placeholder = "Password"
        secureTextEntry
        />
      </View>
    <View style = {styles.signInButtonContainer}>
      <TouchableOpacity onPress={handleLogin}> 
        <View style={styles.signInWrapper}>
             <Text style={styles.signIn}>Log In</Text> 
             <AntDesign name="arrowright" size={24} color="black" style={styles.arrowContainer} /> 
             </View> 
             </TouchableOpacity>
             </View>
    <TouchableOpacity onPress={handleForgetPassword}>
    <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleRegister}>
    <Text style= {styles.footerText}> Don't have an account ? Create </Text>
    </TouchableOpacity>
    {/* <View style = {styles.leftVectorContainer}>
        <ImageBackground 
        source = {require("../assets/leftVector.png")} 
        style = {styles.leftVectorImage}>
        </ImageBackground>
    </View> */}
    </View>
    );
};


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center', // Centers the content horizontally 
        justifyContent: 'center', // Centers the content horizontally justifyContent: 'center',
    },
    topImageContainer: { 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    topImage: {
        flex: 1,
        position: 'absolute',
        top: -50,
        width: "100%",
        height: 150,
    },
    helloContainer: {
        marginTop: 140,
        // borderWidth: 1, // Adjust this if needed
    },
    helloText: {
      textAlign: "center",
      fontSize: 70,
      marginLeft: 30,
      fontWeight: "700",
      color: "#262626",
    },
    signInText: {
      textAlign: "center",
      fontSize: 18,
      color:"#262626",
      marginBottom: 30,
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 25,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: "center",
        height: 50,
        zIndex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        marginRight: 5,
    },
    textInput: {
        flex: 1,
    },
    forgotPasswordText: {
        color: "#BEBEBE",
        textAlign: "right",
        width: "45%",
        fontSize: 15,
        marginTop: 30,
        alignSelf: 'flex-end', // Move text to the right
        marginRight: -170,

    },
    signInButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        //backgroundColor: "purple"
    },
    signIn: {
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor : "#D8BFD8",
    },
    arrowContainer : {
    },
    signInWrapper: { 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "#D8BFD8", 
        height: 50,
        paddingHorizontal: 15, 
        borderRadius: 50, 
    },
    footerText: {
        color: "#262626",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 15,
        marginTop: 120,
       // backgroundColor: "green",
    },
    leftVectorContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    leftVectorImage: {
        height: 350,
        width: 250,
    },
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    }
});