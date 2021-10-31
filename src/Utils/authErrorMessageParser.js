const authErrorMessageParser = (errorCode) => {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz eposta adresi!";

        case "auth/email-already-exists":
            return "Kayıtlı e-posta!";

        case "auth/user-not-found":
            return "Kullanıcı bulunamadı!";

        case "auth/weak-password":
            return "Parola çok zayıf!";

        default:
            return errorCode;
    }
}

export default authErrorMessageParser