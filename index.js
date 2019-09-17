/**
 * @format
 */

import { AppRegistry } from 'react-native'
import codePush from 'react-native-code-push'
import App from './App'
import { name as appName } from './app.json'

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_SUSPEND }
const PushApp = codePush(codePushOptions)(App)

AppRegistry.registerComponent(appName, () => PushApp)
