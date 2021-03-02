// import analytics from '@react-native-firebase/analytics';
//
//
// class Analytics {
//     static logEvent = async (eventName: string, propertyObject = {}) => {
//         await analytics().logEvent(eventName, {
//             ...propertyObject,
//             userName: currentUser().userName !== null ?  currentUser().userName : 'Користувач не авторизований',
//             userPhone: currentUser().userPhone !== null ?  currentUser().userPhone : 'Користувач не авторизований',
//         });
//     };
//     static logScreen = async (screenName:string) => {
//         await analytics().logScreenView({
//             screen_name: screenName,
//             screen_class: screenName,
//         });
//     }
// }
//
// export default Analytics;
